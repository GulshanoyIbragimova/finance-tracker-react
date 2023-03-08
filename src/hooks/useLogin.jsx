import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";

export function useLogin() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsPending(true);
    setError(null);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: "SIGNIN", payload: res.user });

      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, login };
}
