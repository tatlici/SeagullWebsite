import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA]">
      <div className="text-center p-8">
        <h2 className="text-4xl font-bold text-[#0A2342] mb-4">404 - Page Not Found</h2>
        <p className="text-gray-700 mb-6">The page you are looking for does not exist.</p>
        <Link href="/" className="bg-[#205B97] text-white px-6 py-2 rounded-full hover:bg-[#4CA0E8] transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}
