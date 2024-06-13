'use client' // Error components must be Client Components
 
import Image from 'next/image'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="bg-white p-8 rounded shadow-md">
        <Image src="/icons/logo/logo.png" width={200} height={200} alt="Company Logo" className="w-32 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Error</h1>
        <p className="text-gray-600 mb-8">
          Oops! Something went wrong.
        </p>
        <button
        className="text-indigo-600 hover:text-indigo-800 font-medium"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      </div>
    </div>
  )
}