import { Toaster } from "@/components/ui/feedback/toaster";
import ScrollToTopButton from "@/components/ui/navigation/scroll-to-top-button";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
      <ScrollToTopButton />
    </>
  );
}
