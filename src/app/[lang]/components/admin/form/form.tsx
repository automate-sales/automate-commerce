'use client'

import { useState, FC, FormEvent, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import ParentObjectInput from './inputs/parent';
import ChildrenObjectsInput from './inputs/children';
import { FormField, PrismaModelName } from '@/types';
import Select from './inputs/select';
import CheckBox from './inputs/checkbox';
import { ListInput, SelectInput, TextInput } from '../../forms';

const capitalizeFieldName = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const AdminForm = ({
  model,
  modelItem,
  formFields,
}:{
  model: PrismaModelName;
  modelItem: any;
  formFields: FormField[];
}) => {
  const router = useRouter();
  const [item, setItem] = useState(modelItem);
  //const [itemChanges, setItemChanges] = useState({});
  //const [newImages, setNewImages] = useState([]);
  //const [imagesToDelete, setImagesToDelete] = useState([]);

  const handleChange = (ev: { target: { name: string; value: any } }) => {
    setItem({ ...item, [ev.target.name]: ev.target.value });
    //setItemChanges({ ...itemChanges, [ev.target.name]: ev.target.value });
  };

  /* const uploadNewImages = async () => {
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
  }; */

  /* const deleteImages = async () => {
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
  }; */

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    //setDisabled(true);
    try {
      //toast.success(`Successfully ${action}d ${action === 'create' ? 'a new ' : ''}${model}${action === 'update' ? ' with id: ' + item[idKey] : ''}`);
      //setDisabled(true);
      /* if (router.asPath.endsWith('/new')) {
        router.push({ pathname: router.asPath.replace('/new', `/${result[idKey]}`) });
      } */
     console.log('SUbmiting ... ', ev, item)
    } catch (error) {
      //toast.error(`Error ${action.slice(0, -1)}ing ${model} with id: ${item[idKey]}`);
      console.error(error);
    }
  };

  const generateFormFields = (fields: Array<FormField>) => {
    return fields.map((field, index) => {
      //const fieldDisabled = readonlyFields.includes(field.name) ? true : disabled;
      switch(field.field) {
        case 'text':
          return (
            <TextInput
              key={index}
              name={field.name}
              value={item[field.name] || ''}
              label={capitalizeFieldName(field.name)}
              disabled={false}
              required={field.required}
              onChange={handleChange}
            />
          );
        case 'select':
          return (
            <SelectInput
              key={index}
              name={field.name}
              value={item[field.name] || ''}
              label={capitalizeFieldName(field.name)}
              onChange={handleChange}
              options={Object.fromEntries(field.options? field.options.map(item => [item, item]) : [])}
            />
          );
          case 'checkbox':
            return (
              <CheckBox
                key={index}
                name={field.name}
                value={item[field.name] || ''}
                label={capitalizeFieldName(field.name)}
                required={field.required}
                onChange={handleChange}
              />
            );
          /* case 'list':
            return (
              <ListInput
                key={index}
                name={field.name}
                value={item[field.name] || []}
                label={capitalizeFieldName(field.name)}
                required={field.required}
                onChange={()=>({})}
              />
            ); */
          case 'json':
            return (
              <TextInput
                key={index}
                inputType="text"
                name={field.name}
                value={item[field.name] || ''}
                disabled={false}
                required={field.required}
                onChange={handleChange}
              />
            );
          case 'parent':
            return (
              <ParentObjectInput
                key={index}
                modelName={field.name}
                name={field.name}
                label={capitalizeFieldName(field.name)}
                value={item[field.name] || { id: '', name: '' }}
                required={field.required}
                disabled={false}
                onChange={handleChange}
              />
            );
          /* case 'children':
            return (
              <ChildrenObjectsInput
                key={index}
                modelName={field.name}
                values={item[field.name]}
              />
            ); */
          default:
            return null;
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-3'>
      {generateFormFields(formFields)}
      <button type="submit">Submit</button>
    </form>
  )

  
};

export default AdminForm;
