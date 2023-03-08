import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import TransactionsForm from "./TransactionsForm";
import TransactionsList from "./TransactionsList";

const Home = () => {
  const { user } = useAuthContext();
  const { list } = useCollection("transactions");
  console.log(list && list);
  return (
    <div className="flex justify-between">
      <div className="mr-auto">{list && <TransactionsList list={list} />}</div>
      <div className="grow-1">
        <TransactionsForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
