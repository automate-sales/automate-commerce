import Link from 'next/link';
import Image from 'next/image';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="bg-white p-8 rounded shadow-md">
        <Image src="/icons/logo/logo.png" width={200} height={200} alt="Company Logo" className="w-32 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
            Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
