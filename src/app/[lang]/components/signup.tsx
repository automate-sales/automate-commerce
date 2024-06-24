'use client'
// components/CustomForm.tsx

import { useState, ChangeEvent, use } from 'react';
import { ListInput, TextInput } from './forms';
import { getLead } from '@/utils/leads/client';
import { updateLead } from '@/app/actions';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { UserObj } from '@/utils/auth';

interface FormData {
  name: string;
  email: string;
  phone_numbers: string[];
  address: string;
  birth_date: string;
}

export default function CustomForm({user}:{user?: UserObj}) {
    const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: user?.email || '',
    phone_numbers: [],
    address: '',
    birth_date: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneNumbersChange = (phoneNumbers: string[]) => {
    setFormData({
      ...formData,
      phone_numbers: phoneNumbers,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const leadId = await getLead()
    console.log('Form submitted:', leadId, formData);
    leadId && await updateLead(leadId, formData, user?.id );
    toast.success('You have signed up succesfully!');
    router.push('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">User Form</h2>
        <TextInput
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          inputType="email"
          required
        />
        <ListInput
            label="Phone Numbers"
            name="phone_numbers"
          value={formData.phone_numbers}
          onChange={handlePhoneNumbersChange}
        />
        <TextInput
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <TextInput
          label="Birth Date"
          name="birth_date"
          value={formData.birth_date}
          onChange={handleChange}
          inputType="date"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
