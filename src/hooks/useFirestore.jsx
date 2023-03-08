import { useReducer } from "react";
import { Timestamp, collection, addDoc, db } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  success: false,
  error: null,
};
const useInitialState = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { ...state, isPending: action.payload };
    case "ADD_DOCUMENT":
      return {
        document: action.payload,
        isPending: false,
        success: true,
        error: null,
      };
    case "ERROR":
      return {
        document: null,
        isPending: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (collect) => {
  console.log(collect);
  const [response, dispacth] = useReducer(useInitialState, initialState);

  const addDocument = async (doc) => {
    dispacth({ type: "IS_PENDING", payload: true });
    const createdAt = Timestamp.fromDate(new Date());
    console.log("createdAt;", createdAt);
    const docRef = await addDoc(collection(db, collect), { ...doc, createdAt });
    dispacth({ type: "ADD_DOCUMENT", payload: docRef });
    console.log(docRef);
  };
  const deleteDocument = (id) => {};
  return { addDocument, deleteDocument, response };
};
