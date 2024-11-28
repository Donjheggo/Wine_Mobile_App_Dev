import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

export const formatAmount = (amount: number): string => {
  const billion = 1000000000;
  const million = 1000000;
  const thousand = 1000;
 
  if (Math.abs(amount) >= billion) {
    const value = amount / billion;
    return `${value % 1 === 0 ? value.toFixed(0) : value.toFixed(1)}b`;
  }
 
  if (Math.abs(amount) >= million) {
    const value = amount / million;
    return `${value % 1 === 0 ? value.toFixed(0) : value.toFixed(1)}m`;
  }
 
  if (Math.abs(amount) >= thousand) {
    const value = amount / thousand;
    return `${value % 1 === 0 ? value.toFixed(0) : value.toFixed(1)}k`;
  }
 
  return amount.toString();
 };