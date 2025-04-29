import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge class names
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
