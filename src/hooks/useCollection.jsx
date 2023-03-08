import { useEffect, useState } from "react";
import { onSnapshot, collection, db } from "../firebase/config";

export const useCollection = (collect) => {
  const [list, setList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    onSnapshot(collection(db, collect), (data) => {
      const results = [];
      data.docs.forEach((doc) => {
        console.log(doc);
        results.unshift({ ...doc.data(), id: doc.id });
      });
      setError(null);
      setList(results.reverse());
    });
  }, []);

  return { list };
};
