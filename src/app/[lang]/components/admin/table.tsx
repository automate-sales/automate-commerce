import prisma from "@/db";
import Link from "next/link";

type Field = {
    name: string;
    type: string;
}

type Fields = {
    [key: string]: Field;
}

export type PrismaModels = 'category' | 'subcategory' | 'product';

type TableProps = {
  model: PrismaModels;
  fields: Fields;
  lang?: string;
};

const labelFields: Record<string, string> = {
  Lead: 'name',
  Category: 'title',
  Subcategory: 'title',
  Product: 'sku',
  Order: 'id',
  Coupon: 'code',
  Cart: 'id',
  CartItem: 'id',
};

export default async function Table({ 
    model, 
    fields,
    lang = 'en'
}: TableProps) {
  
    const renderCell = (field: Field, value: any) => {
        switch (field.type) {
          case 'id':
            return <Link href={`${model}s/${value}`}>{value}</Link>;
        case 'text':
            return <span>{value}</span>;
        case 'translated-text':
            return <span>{value[lang]}</span>;
        case 'number':
            return <span>{value}</span>;
        case 'currency':
            return <span>${value.toFixed(2)}</span>;
        case 'json':
            return <span>{JSON.stringify(value)}</span>;
        case 'parent':
            return <span>{value}</span>;
        case 'array':
            return (
            <ul>
                {value.map((item: any, index: number) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
            );
        case 'images':
            return (
            <div className="flex">
                {value?.map((src: string, index: number) => (
                <img key={index} src={`${process.env.NEXT_PUBLIC_IMAGE_HOST}/${model}s/${src}`} alt={`image-${index}`} className="w-16 h-16 object-cover mr-2" />
                ))}
            </div>
            );
        case 'boolean':
            return <span>{value ? 'True' : 'False'}</span>;
        case 'date':
            return <span>{new Date(value).toLocaleDateString()}</span>;
        case 'dateTime':
            return <span>{new Date(value).toLocaleString()}</span>;
        default:
            return <span></span>;
        }
    };

    const data = await prisma[model].findMany()

  return (
    <div className="w-full">
      <div className="flex justify-between p-4">
        <form className="flex">
          <input type="text" className="p-2 border border-gray-300 rounded" placeholder={`Search ${model}s`} />
          <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
            Search
          </button>
        </form>
        <button className="p-2 bg-green-500 text-white rounded">
          New {model}
        </button>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            {Object.entries(fields).map(([key, val]) => (
              <th key={key} className="py-2 px-4 border-b border-gray-200">
                {val.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: { [x: string]: any; }, index: Key | null | undefined) => (
            <tr key={index}>
              {Object.entries(fields).map(([key, val]) => (
                <td key={`${key}-${index}`} className="py-2 px-4 border-b border-gray-200">
                  {renderCell(val, item[key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
