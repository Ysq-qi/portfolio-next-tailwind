"use client";

import { Provider } from "react-redux";
import store from "@/lib/store";
import { Toaster } from "@/components/ui/feedback/toaster";
import ScrollToTopButton from "@/components/ui/navigation/scroll-to-top-button";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
      <Toaster />
      <ScrollToTopButton />
    </Provider>
  );
}
