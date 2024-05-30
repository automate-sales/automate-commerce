'use client'

type Props = {
  name: string;
  value: string[] | [];
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  onChange: (e: { target: { name: string; value: string[] } }) => void;
};

const List = ({
  name,
  value,
  placeholder = '',
  label = '',
  required = false,
  disabled = false,
  onChange,
}: Props) => {
  return (
    <div className="w-full md:w-1/2 p-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value.join(', ')}
        onChange={(e) => onChange({ target: { name, value: e.target.value.split(', ') } })}
        required={required}
        disabled={disabled}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default List;

