import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ErrorMessage({ message }) {
  useEffect(() => {
    if (message) {
      toast.error(message);
    }
  }, [message]);

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
