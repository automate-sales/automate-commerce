'use client'

type CheckBoxProps = {
  name: string;
  label?: string;
  value: boolean;
  required?: boolean;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox = ({
  name,
  value,
  label = name,
  required = false,
  disabled = false,
  onChange,
}: CheckBoxProps) => {
  return (
    <div className="w-full md:w-1/2 p-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="checkbox"
        name={name}
        checked={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="mt-1 block"
      />
    </div>
  );
};

export default CheckBox;
