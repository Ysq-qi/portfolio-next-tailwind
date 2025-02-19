import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "後台",
    template: "%s | Admin後台"
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "後台",
  },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}
