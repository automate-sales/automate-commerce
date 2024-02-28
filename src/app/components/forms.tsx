import type { ReactNode} from "react";
import { useState } from "react"
import { getCardType, normalizeString } from "@/utils/calc";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
//import Select, { components } from "react-select";
//import CreatableSelect from 'react-select/creatable';
import { formatExp } from "@/utils/calc";
import Image from "next/image";
import { InputType, SelectOptions } from "@/types";

type InputProps = {
  name: string,
  value: string,
  inputType?: string,
  label?: string,
  placeholder?: string,
  required?: boolean,
  minLength?: number,
  onChange: any,
  disabled?: boolean
}

export const Provinces = [
  'panama_ciudad',
  'panama_otro',
  'colon',
  'darien',
  'cocle',
  'veraguas',
  'los_santos',
  'herrera',
  'chiriqui',
  'bocas_del_toro',
  'san_blas'
]

export function TextInput({
  name, 
  value, 
  label,   
  onChange,
  minLength=0,
  required=false,
  inputType='text', 
  placeholder=label,
  disabled=false
}:InputProps){
  return(
    <div>
      {label && <label className="block text-main text-sm">{label}</label>}
      <input
        type={inputType}
        name={name}
        minLength={minLength}
        className="appearance-none border w-full py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500"
        placeholder={placeholder}
        value={value || ''}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
    </div>
  )
}



export function CcNumInput({
  name, 
  value, 
  label,   
  onChange,
  required=false,
  disabled=false
}:InputProps){
  const [ccType, setCcType] = useState('unknown')
  return(
    <div>
      {label && <label className="block text-main text-sm">{label}</label>}
      <input
        type="text"
        name={name}
        className="appearance-none border w-full py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500"
        placeholder="XXXXXXXXXXXXX"
        value={value}
        minLength={13}
        onChange={(e)=> {
          onChange(e)
          setCcType(getCardType(e.target.value))
        }}
        required={required}
        disabled={disabled}
        autoComplete="cc-number"
      />
      <span className="flex felx-col justify-end -mt-8 pb-4 pr-3">
        {
          ccType == 'visa' ? <Image id="visa-logo" alt="credit card logo" height="20" width="30" className="card-logo" src='/icons/visa.jpg'/>
          : ccType == 'mastercard' ? <Image id="mastercard-logo" alt="credit card logo" height="20" width="30" className="card-logo" src='/icons/mastercard.svg'/>
          : <div style={{height:'20px', width:'30px'}}></div>
        }
      </span>
    </div>
  )
}

export function CcExpInput({
  name, 
  value, 
  label,   
  onChange,
  required=false,
  disabled=false
}:InputProps){
  return(
    <div>
      {label && <label className="block text-main text-sm">{label}</label>}
      <input
        type="text"
        name={name}
        className="appearance-none border w-full py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500"
        placeholder="MM/YY"
        value={value}
        maxLength={5}
        onChange={(e)=> {
          onChange({target: {name: name, value: formatExp(e.target.value, value)} } )
        }}
        required={required}
        disabled={disabled}
        autoComplete="cc-exp"
      />
    </div>
  )
}

type SelectProps = {
  name: string,
  label?: string,
  value?: string,
  required?: boolean,
  options?: SelectOptions,
  onChange: any,
  labelField?: string, 
  valueField?: string,
  placeholder?: string
}

export function SelectInput({
  name, 
  label,
  value,  
  options, 
  onChange,
  required=false,
  placeholder=label, 
}: SelectProps){
    const setHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange({target: {name: name, value: e.target.value} } )
    };
  return(
    <div>
      {label && <label className="block text-main text-sm">{label}</label>}
        <select id={name} name={name} value={value} onChange={setHandle} required={required} className="appearance-none border w-full py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500">
            <option value="">{placeholder}</option>
            {options && Object.keys(options).map((o, index) => <option key={index} value={o}>{options[o]}</option>)}
        </select>
    </div>
  )
}

export type FormField = {
    name: string,
    inputType: InputType,
    label: string,
    options?: SelectOptions,
    required?: boolean
}

export const FormGroup =({
    title,
    step,
    item,
    setItem,
    steps,
    setSteps,
    fields,
    subset,
    options={},
    children=null,
    optional={}
}:{
    title:string,
    step:number,
    item: any,
    setItem: any,
    steps: any,
    setSteps:any,
    fields: Array<FormField>,
    subset?:string[], 
    options?: { [key: string]: { [key: string]: any }[] },
    children?: ReactNode,
    optional?: { [key: string]: boolean }
}) => {
    const handleChange =(ev: { target: { name: any; value: any } }, newItem: {[key:string]: any}|null=null )=> {
        newItem = newItem? newItem : {...item, [ev.target.name]: ev.target.value}
        setItem(newItem)
        if(newItem) Object.entries(newItem).every(e => e[1] || optional[e[0]] ) && setSteps({
            ...steps,
            [step]:{
                ...steps[step],
                done:true
            }, 
            [step+1]:{
                ...steps[step+1],
                hidden: false
            }
        })
    }
    const toggleHidden =()=> {
        console.log(step, !steps[step].hidden)
        setSteps({
            ...steps,
            [step]:{...steps[step], hidden: !steps[step].hidden}
        })
        console.log(steps, 'STEPS')
    }

    return(
        <div className="border-b border-gray-200 p-3">
            <div className="flex justify-between">
                <div className="flex text-l font-bold md:text-xl">
                    <div className="text-xl pr-2">
                    {steps[step].done?
                        <CheckCircleIcon className="text-green-700 h-8"/>:
                        `${step}.`
                    }
                    </div>
                    <span>{title}</span>
                </div>
                <button id={`${normalizeString(title)}-btn`} onClick={toggleHidden} className="p-2 border border-grey-300 bg-white disabled:bg-gray-200 md:w-1/3">Editar</button>
            </div>
            <div id={normalizeString(title)} hidden={steps[step].hidden}>
                <fieldset className="pt-3">
                    <div className="grid grid-cols-2 gap-4 pb-3">
                        {
                            fields.map((field, index) => <FormItem 
                                key={index}
                                name={field.name}
                                inputType={field.inputType}
                                value={item[field.name]}
                                onChange={handleChange}
                                label={field.label}
                                options={field.options}
                                required={field.required} 
                            />
                        )}
                    </div>
                    {children}
                </fieldset>
            </div>
        </div>
    )
}

const FormItem =({
    name,
    inputType,
    value,
    onChange,
    label,
    options,
    required=false
}:{
    name: string,
    inputType: InputType,
    value: string,
    onChange: any,
    label?: string,
    options?: SelectOptions,
    required?: boolean
}) => {
    switch(inputType){
        case 'select':
            return(
                <SelectInput
                    name={name}
                    value={value}
                    label={label}
                    options={options}
                    onChange={onChange}
                    required={required}
                />
            )
        case 'ccNum':
            return(
                <CcNumInput
                    name={name} 
                    value={value} 
                    label={label}
                    required
                    onChange={onChange}
                />
            )
        case 'ccExp':
            return(
                <CcExpInput
                    name={name} 
                    value={value} 
                    label={label}
                    required
                    onChange={onChange}
                />
            )
        default:
            return(
                <TextInput
                    name={name} 
                    value={value} 
                    label={label}
                    onChange={onChange}
                    required={required}
                    inputType={inputType}
                />
            )
    }
}