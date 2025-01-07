import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-5xl font-bold text-[#9538E2] mb-4">Oops!</h1>
        <p className="text-xl text-gray-600 mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="text-lg text-gray-500 mb-6">
          <i>{error.statusText || error.message}</i>
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 text-white bg-gradient-to-r from-[#e23838] to-[#9538E2] rounded-md hover:bg-[#9538E2] focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
}
