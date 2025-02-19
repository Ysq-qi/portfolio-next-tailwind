"use client";

import ErrorClient from "@/components/error/ErrorClient";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return <ErrorClient error={error} reset={reset} />;
}
