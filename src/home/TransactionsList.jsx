import React from "react";

const TransactionsList = ({ list }) => {
  return (
    <div>
      {list &&
        list.map((item) => {
          return (
            <div
              key={item.name}
              className="border-l-emerald-500 border-l-4 px-2 py-3 text-2xl flex justify-between mb-3 bg-zinc-100"
              style={{ width: "400px" }}
            >
              <h1>{item.name}</h1>
              <h2>${item.amount}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default TransactionsList;
