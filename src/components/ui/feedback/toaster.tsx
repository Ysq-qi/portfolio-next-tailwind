"use client";

import { useToast } from "@/hooks/usetoast";
import {
  Toast,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  ToastClose,
} from "@/components/ui/feedback/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          {action}
          <div className="mr-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          <ToastClose className="text-white hover:text-gray-500" />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
}
