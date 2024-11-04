
import prisma from '@/db';
import { extractEnums, extractModels } from '@/utils/prisma';
import { Product } from '@prisma/client';


type FormFieldTypes = 
'text' |
'trasnlatedText' |
'select' |
'checkbox' |
'list' |
'json' |
'translatedJson' |
'parent' |
'children'
'money'

type HtmlInputTypes = 
  | "text"
  | "password"
  | "email"
  | "tel"
  | "url"
  | "search"
  | "number"
  | "date"
  | "datetime-local"
  | "month"
  | "week"
  | "time"
  | "checkbox"
  | "radio"
  | "range"
  | "file"
  | "color"
  | "hidden"
  | "submit"
  | "reset"
  | "button"
  | "image";

type PrismaFieldTypes = 
    | 'String'
    | 'Int'
    | 'Float'
    | 'Boolean'
    | 'Json'
    | 'String[]'
    | 'Json[]'
    | 'DateTime'

const settings = {
    defaultFields: {
       id:  {
            field: 'text',
            type: 'text',            
       },
        createdAt: {
            field: 'text',
            type: 'date',
        },
        updatedAt: {
            field: 'text',
            type: 'date',
        },
        createdBy: {
            field: 'select',
            options: [],
        },
        updatedBy: {
            field: 'select',
            options: [],
        },
        // non defaults
        title: {
            field: 'translatedText'
        },
        description: {
            field: 'translatedText'
        },
        images: {
            field: 'images'
        },
        price: {
            field: 'money',
        },
        stock: {
            field: 'text',
            type: 'number',
        },
        qty: {
            field: 'text',
            type: 'number',
        },
    },
    defaultTypes: {
        'String': {
            field: 'text',
            type: 'text',
        },
        'Int': {
            field: 'text',
            type: 'number',
        },
        'Float': {
            field: 'text',
            type: 'number',
        },
        'Boolean': {
            field: 'checkbox'
        },
        'Json': {
            field: 'json'
        },
        'String[]': {
            field: 'list'
        },
        'Json[]': null,
        'DateTime': {
            field: 'text',
            type: 'datetime-local'
        },


    }
}

export default async function Page({
    params
  }: {
    params: { id: number, lang: 'en' | 'es' }
  }) {

    const models = extractModels('prisma/schema.prisma')
    const enums = extractEnums('prisma/schema.prisma')
    const model = models.Product
    console.log('MODEL: ', model)

    // a function that will read a product and will return a json that has all of the keys and the designated form input for each
    // it will use the settings as a guide to slect fields by name of the field or if not by type of field.
    // if the type according to the model is not included in PrismaFieldTypes, it can either be an enum or a relation
    // an enum should be a select and should receive a rset of options
    // a relation can either be a child or parent

    const getFormFields = (model: Record<string, string>, settings: Record<string, any>) => {
        const fields = Object.keys(model)
        const formFields = fields.map(field => {
            const typeField = model[field].split('?')
            const required = typeField.length > 1 ? false : true
            const fielded = typeField[0].split('[]')
            const fieldType = fielded[0]
            const isList = fielded.length > 1 ? true : false
            
            // by name
            if (settings.defaultFields[field]) {
                return {
                    name: field,
                    required,
                    ...settings.defaultFields[field]
                }
            // by fieldType
            } else if (settings.defaultTypes[fieldType as PrismaFieldTypes]) {
                return {
                    name: field,
                    required,
                    ...settings.defaultTypes[fieldType as PrismaFieldTypes]
                }
            // enums
            } else if (enums[fieldType]) {
                return {
                    name: field,
                    required,
                    field: 'select',
                    options: enums[fieldType]
                }
            // relations
            } else if (models[fieldType]) {
                return isList ? {
                    name: field,
                    required,
                    field: 'children',
                    model: models[fieldType]
                }: {
                    name: field,
                    required,
                    field: 'parent',
                    model: models[fieldType]
                }
            } 
            // default
            else {
                return {
                    name: field,
                    required,
                    field: 'text',
                    type: 'text'
                }
            }
        })
        return formFields
    }

    const formfields = getFormFields(model, settings)
    console.log('FORMFIELDS: ', formfields)

    const productData = await prisma.product.findUnique({
      where: {
        id: Number(params.id)
      }
    }) as Product
    const lang = params.lang
    return(
        <div className="py-8 px-16">
            <h1 className="text-center text-2xl pb-5">Product {productData.sku}</h1>

        </div>
    )
}
