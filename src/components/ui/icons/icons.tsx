"use client";

import * as React from "react";

export function Spinner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={`animate-spin ${props.className || ""}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={`w-6 h-6 ${props.className || ""}`}
      {...props}
    >
      <circle cx="11" cy="12.5" r="11" fill="black" />
      <path
        fill="white"
        d="M9 16.2l-3.5-3.5-1.4 1.4 5 5 10-10-1.4-1.4L9 16.2z"
      />
    </svg>
  );
}