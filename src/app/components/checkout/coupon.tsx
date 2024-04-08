
import { getCoupon } from '@/app/actions';
import { useState } from 'react';
import { TextInput } from '../forms';

type Props = {
  setCoupon: (item: string) => void;
  coupon: string;
};

export default function Coupon({ setCoupon, coupon }: Props) {
  const [item, setItem] = useState<string>(coupon);
  
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setItem(ev.target.value);
  };

  const submitForm = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const res = await getCoupon(item);
    console.log('COUPON RESPONSE ', res);
    if (res) setCoupon(item);
  };

  return (
    <div className="border border-gray-200 p-3 mt-5">
      {!coupon ? (
        <form onSubmit={submitForm} className="space-y-3">
          <TextInput 
            name="coupon"
            label="Cupón"
            value={item}
            onChange={handleChange}
        />
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-3 bg-gray-200 text-gray-700hover:bg-gray-300 focus:outline-none"
            >
              Agregar cupón
            </button>
          </div>
        </form>
      ) : (
        <div className="text-sm text-gray-700">
          <label className="font-bold">Cupón aplicado:</label>
          <p>{coupon}</p>
        </div>
      )}
    </div>
  );
}
