'use client'

import { useState, FC, KeyboardEvent } from 'react';

type ParentObjectProps = {
  modelName: string; //trpc model name
  name: string;
  label?: string;
  value: any;
  required?: boolean;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inline?: boolean;
  labelField?: string;
};

const ParentObjectInput: FC<ParentObjectProps> = ({
  name,
  label,
  value,
  labelField = 'id',
  required,
  disabled,
  onChange,
  inline = false,
}) => {
  const [query, setQuery] = useState(value);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const doSearch = async (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    setLoading(true);
    // Add your search logic here
    setLoading(false);
  };

  const dynamicProps = {
    container: inline,
    item: !inline,
    ...(inline
      ? {}
      : {
          xs: 12,
          md: 6,
        }),
  };

  return (
    <div {...dynamicProps}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        name={name}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(ev) => ev.key === 'Enter' && doSearch(ev)}
        disabled={disabled}
        required={required}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      {/* Display options based on search results */}
      {loading && <div>Loading...</div>}
      {options.map((option, index) => (
        <div key={index} onClick={() => onChange({ target: { name, value: option } })}>
          {option[labelField]}
        </div>
      ))}
    </div>
  );
};

export default ParentObjectInput;
