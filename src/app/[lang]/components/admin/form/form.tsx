import { useState, FC, FormEvent, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { capitalizeFieldName, pluralize } from '../../utils/shared';
import { TextInput, CheckBoxInput, ChildrenObjectsInput, ParentObjectInput, SelectInput, StringListInput } from './formFields';
import * as enums from '../../data/formfields/enums';
import * as models from '../../data/formfields/models';
import ImagePicker from './imageUpload';
import { trpc } from '../../utils/trpc';

type FormProps = {
  model: string;
  formFields: FormField[];
  modelItem: any;
  idValue: string | number;
  idKey: string;
  children?: ReactNode;
};

const readonlyFields = [
  'id',
  'createdAt',
  'updatedAt',
  'createdBy',
  'updatedBy',
];

const labelFields = {
  Lead: 'name',
  Category: 'title',
  Subcategory: 'title',
  Product: 'sku',
  Order: 'id',
  Coupon: 'code',
  Cart: 'id',
  CartItem: 'id',
};

const Form: FC<FormProps> = ({ model, formFields, modelItem, idValue, idKey, children = null }) => {
  const router = useRouter();
  const getTrpcModelName = (modelName: string) => modelName.charAt(0).toLowerCase() + modelName.slice(1);
  const trpcModelName = getTrpcModelName(model);
  const upsertItem = trpc[trpcModelName].upsertOne.useMutation();
  const [item, setItem] = useState(modelItem);
  const [itemChanges, setItemChanges] = useState({});
  const [disabled, setDisabled] = useState(router.asPath.endsWith('/new') ? false : true);
  const [newImages, setNewImages] = useState([]);
  const [imagesToDelete, setImagesToDelete] = useState([]);

  const handleChange = (ev: { target: { name: string; value: any } }) => {
    setItem({ ...item, [ev.target.name]: ev.target.value });
    setItemChanges({ ...itemChanges, [ev.target.name]: ev.target.value });
  };

  const relationIds = formFields.filter((field) => field.relationFromFields && !field.isList).map((field) => field.relationFromFields).flat();
  const parentFields = formFields.filter((field) => field.relationFromFields && !field.isList).map((field) => field.name);
  const childrenFields = formFields.filter((field) => field.kind === 'object' && field.isList).map((field) => field.name);

  const uploadNewImages = async () => {
    const path = `${pluralize(model).toLowerCase()}/${item.slug || item.sku || item.id}/`;
    try {
      const formData = new FormData();
      newImages.forEach((image, index) => {
        formData.append(`file-${index}`, image);
      });
      formData.append('path', path);

      const response = await fetch('/api/s3/upload', {
        method: 'POST',
        body: formData,
      });

      const objectKeys = await response.json();
      console.log(objectKeys);

      setNewImages([]);
      return true;
    } catch (error) {
      throw new Error('Error uploading new images to s3: ' + error);
    }
  };

  const deleteImages = async () => {
    console.log('IMAGES TO DELETE ', imagesToDelete);
    try {
      await fetch('/api/s3/delete', {
        method: 'DELETE',
        body: JSON.stringify({ keys: imagesToDelete, path: `${pluralize(model).toLowerCase()}` }),
        headers: { 'Content-Type': 'application/json' },
      });
      setImagesToDelete([]);
      return true;
    } catch (error) {
      throw new Error('Error deleting images in s3: ' + error);
    }
  };

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setDisabled(true);
    const action = item[idKey] == '' || item[idKey] == -1 ? 'create' : 'update';
    try {
      const connections = parentFields.reduce((o, key) => ({ ...o, [key]: itemChanges[key] ? { connect: { id: itemChanges[key].id } } : { connect: { id: item[key].id } } }), {});
      const newConnections = parentFields.filter((r) => itemChanges[r]).reduce((o, key) => ({ ...o, [key]: { connect: { id: itemChanges[key].id } } }), {});
      const newObject = Object.fromEntries(Object.entries(item).filter(([key]) => !relationIds.includes(key) && key !== idKey && !childrenFields.includes(key)));
      if (!newObject['createdAt']) newObject['createdAt'] = new Date();

      const result = await upsertItem.mutateAsync({
        where: { [idKey]: item[idKey] },
        create: { ...newObject, ...connections },
        update: { ...itemChanges, ...newConnections, [idKey]: item[idKey] },
      });

      if (imagesToDelete.length > 0) await deleteImages();
      if (newImages.length > 0) await uploadNewImages();

      toast.success(`Successfully ${action}d ${action === 'create' ? 'a new ' : ''}${model}${action === 'update' ? ' with id: ' + item[idKey] : ''}`);
      setDisabled(true);

      if (router.asPath.endsWith('/new')) {
        router.push({ pathname: router.asPath.replace('/new', `/${result[idKey]}`) });
      }
    } catch (error) {
      toast.error(`Error ${action.slice(0, -1)}ing ${model} with id: ${item[idKey]}`);
      console.error(error);
    }
  };

  const generateFormFields = (fields: Array<FormField>) => {
    return fields.map((field, index) => {
      const fieldDisabled = readonlyFields.includes(field.name) ? true : disabled;
      if (field.fieldKind && field.fieldKind === 'images') {
        return (
          <ImagePicker
            key={index}
            name={field.name}
            value={item[field.name] || []}
            model={pluralize(model).toLowerCase()}
            item={item}
            onChange={handleChange}
            label={field.name}
            imagesCount={item[field.name]?.length || 0}
            disabled={fieldDisabled}
            newImages={newImages}
            setNewImages={setNewImages}
            imagesToDelete={imagesToDelete}
            setImagesToDelete={setImagesToDelete}
          />
        );
      } else if (field.type === 'DateTime') {
        return (
          <TextInput
            key={index}
            inputType="datetime-local"
            name={field.name}
            value={item[field.name] ? new Date(item[field.name]).toISOString().split('.')[0] : ''}
            disabled={fieldDisabled}
            required={field.isRequired}
            onChange={(ev) => handleChange({ target: { name: field.name, value: new Date(ev.target.value) } })}
          />
        );
      } else if (field.kind === 'enum') {
        return (
          <SelectInput
            key={index}
            name={field.name}
            value={item[field.name] || ''}
            label={capitalizeFieldName(field.name)}
            disabled={fieldDisabled}
            onChange={handleChange}
            options={enums[field.type].map((field) => ({ key: field.name, val: field.name }))}
          />
        );
      } else if (field.type === 'Boolean') {
        return (
          <CheckBoxInput
            key={index}
            name={field.name}
            value={item[field.name] || ''}
            label={capitalizeFieldName(field.name)}
            disabled={fieldDisabled}
            required={field.isRequired}
            onChange={handleChange}
          />
        );
      } else if (field.type === 'Json' && !field.isList) {
        // JsonInput
      } else if (field.type === 'String' && field.isList) {
        return (
          <StringListInput
            key={index}
            name={field.name}
            value={item[field.name] || []}
            label={capitalizeFieldName(field.name)}
            disabled={fieldDisabled}
            required={field.hasDefaultValue && Array.isArray(field.default) && field.default.length === 0 ? false : field.isRequired}
            onChange={handleChange}
          />
        );
      } else if (field.type === 'String' && !relationIds.includes(field.name)) {
        return (
          <TextInput
            key={index}
            name={field.name}
            value={item[field.name] || ''}
            label={capitalizeFieldName(field.name)}
            disabled={fieldDisabled}
            required={field.isRequired}
            onChange={handleChange}
          />
        );
      } else if (field.type === 'Json' && field.isList) {
        // JsonListInput
      } else if (field.kind === 'object' && !field.isList) {
        return (
          <ParentObjectInput
            key={index}
            modelName={getTrpcModelName(field.type)}
            name={field.name}
            label={capitalizeFieldName(field.name)}
            value={item[field.name] || { id: '', name: '' }}
            labelField={labelFields[field.type]}
            required={field.isRequired}
            disabled={fieldDisabled}
            onChange={handleChange}
          />
        );
      } else if (field.kind === 'object' && field.isList) {
        return (
          <ChildrenObjectsInput
            key={index}
            name={field.name}
            modelName={field.type}
            parentModel={model}
            parentId={item[idKey]}
            modelFields={models[field.type]}
            disabled={fieldDisabled}
            values={item[field.name]}
          />
        );
      }
    });
  };

  return (
    <>
      <div className="flex justify-between p-4">
        <h2 className="text-lg font-medium text-blue-600">{model}</h2>
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => setDisabled(!disabled)}
        >
          {disabled ? 'Edit' : 'Disable'}
        </button>
      </div>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {generateFormFields(formFields)}
          {children}
        </div>
        <button
          type="submit"
          className="p-2 bg-green-500 text-white rounded"
          disabled={disabled}
        >
          Save
        </button>
      </form>
    </>
  );
};

export default Form;
