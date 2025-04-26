import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Thank you for your submission!</h1>
      <p className="text-lg text-gray-700 mb-8">
        We appreciate your contribution to the project.
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
          Return to Homepage
        </button>
      </Link>
    </div>
  );
}