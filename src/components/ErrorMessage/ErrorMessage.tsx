import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
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
