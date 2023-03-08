import { useState } from "react";
import { auth, signOut } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";

export function useLogout() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setIsPending(true);
    setError(null);
    try {
      await signOut(auth);
      dispatch({ type: "LOGOUT" });

      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, logout };
}
