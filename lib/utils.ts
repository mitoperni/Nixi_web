import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cookies, headers } from "next/headers";

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format date to locale string
 */
export function formatDate(date: Date | string, locale: string = 'es-ES'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Truncate text to a specific length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Get locale from request
 */
export async function getLocaleFromRequest() {
  // First, check if user has a saved locale preference in cookies
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE');

  if (localeCookie?.value && ['es', 'en'].includes(localeCookie.value)) {
    return localeCookie.value;
  }

  // Fallback to Spanish
  return 'es';
}
