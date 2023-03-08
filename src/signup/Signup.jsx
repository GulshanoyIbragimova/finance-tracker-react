import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, isPending, signup } = useSignup("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email, password);
  };
  return (
    <div className="max-w-md mx-auto my-7">
      <h1 className="mb-10 text-3xl font-bold">SignUp</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto ">
        <label className="block mb-4">
          <span className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            display name
          </span>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="display name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label className="block mb-4">
          <span className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            email name
          </span>
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label className="block mb-4">
          <span className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            password
          </span>
          <input
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        {!isPending && (
          <button
            className="border-2 px-3 py-1 rounded border-green-400 hover:bg-green-400 hover:text-white"
            type="submit"
          >
            Signup
          </button>
        )}
        {isPending && (
          <button
            className="border-2 px-3 py-1 rounded border-green-400 hover:bg-green-400 hover:text-white"
            type="submit"
            disabled
          >
            Loading...
          </button>
        )}
        {error && <div>{error}</div>}
      </form>
    </div>
  );
}

export default Signup;
