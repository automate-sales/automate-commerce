'use client'

type Props = {
  name: string;
  label?: string;
  value: string;
  required?: boolean;
  disabled?: boolean;
  options: Array<{ key: string; val: string }>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({
  name,
  label,
  value,
  required = false,
  disabled = false,
  options,
  onChange,
}: Props) => {
  return (
    <div className="w-full md:w-1/2 p-2">
      <label className="block text-sm font-medium text-gray-700">{label || name}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {options.map((x, index) => (
          <option value={x.val} key={index + 1}>
            {x.key}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
