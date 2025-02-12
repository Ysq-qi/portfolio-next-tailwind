import { useState } from "react";
import ErrorMessage from "@/components/ui/product-error-message";

export default function TestPage4() {
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("請輸入正確的帳號和密碼");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="帳號" className="border p-2 w-full" />
      <input type="password" placeholder="密碼" className="border p-2 w-full" />
      <ErrorMessage message={error} />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">
        登入
      </button>
    </form>
  );
}
