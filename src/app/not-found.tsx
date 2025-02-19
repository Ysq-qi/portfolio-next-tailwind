import NotFoundClient from "@/components/error/NotFoundClient";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="text-xl font-semibold mt-2">頁面不存在</p>
      <NotFoundClient />
    </div>
  );
}
