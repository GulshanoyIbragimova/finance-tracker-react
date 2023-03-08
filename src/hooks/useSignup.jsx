import { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";

export function useSignup() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (name, email, password) => {
    setIsPending(true);
    setError(null);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Could Not Complete Signup");
      }

      await updateProfile(auth.currentUser, { displayName: name });
      dispatch({ type: "SIGNIN", payload: res.user });
      console.log(res);

      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
}
