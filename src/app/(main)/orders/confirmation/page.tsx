import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function OrderConfirmation({
    searchParams
  }: {
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
  return (
        <div className='text-center h-full pt-20 pb-40'>
            <div className='flex justify-center pb-4'>
                <CheckCircleIcon color="green" className='w-10'/>
            </div>
            <h1 className='text-3xl py-5 font-bold'>¡Gracias por tu compra!</h1>
            <p>Te hemos enviado un correo con la confrimación.</p>
            <p>Tu número de orden es: {searchParams?.id}</p>
        </div>
  )
}