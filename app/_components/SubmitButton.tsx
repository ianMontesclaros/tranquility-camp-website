"use client";

import { useFormStatus } from "react-dom";

interface Props {
  children: React.ReactNode;
  pendingLabel: React.ReactNode;
}

export default function SubmitButton({ children, pendingLabel }: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-green-500 px-8 py-4 text-primary-800 font-semibold hover:bg-green-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}