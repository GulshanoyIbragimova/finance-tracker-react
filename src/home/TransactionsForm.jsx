import { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";

const TransactionsForm = ({ uid }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions");
  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ name, amount, uid });
  };

  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
    }
  }, [response]);
  return (
    <div className="max-w-sm bg-emerald-400 text-white py-5 px-4 rounded ">
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="block mb-1 text-sm font-medium text-white-900 dark:text-gray">
            Name
          </span>
          <input
            type="text"
            className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </label>
        <label className="block mb-4">
          <span className="block mb-1 text-sm font-medium text-white-900 dark:text-gray">
            Amount
          </span>
          <input
            type="number"
            className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            value={amount}
          />
        </label>
        <button
          className="
          border-2
          px-3
          py-1
          rounded
          border-white
          hover:bg-white
          hover:text-emerald-400"
          type="submit"
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default TransactionsForm;
