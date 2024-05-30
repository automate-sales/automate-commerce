'use client'

type Props = {
  name: string;
  value: string | number;
  inputType?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  minLength?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Text = ({
  name,
  value,
  inputType = 'text',
  placeholder = '',
  label = '',
  required = false,
  disabled = false,
  onChange,
}: Props) => {
  return (
    <div className="w-full md:w-1/2 p-2">
      <label className="block text-sm font-medium text-gray-700">{label || name}</label>
      <input
        type={inputType}
        name={name}
        placeholder={placeholder || name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default Text;
