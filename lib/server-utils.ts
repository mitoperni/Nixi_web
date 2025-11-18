import { cookies } from "next/headers";

/**
 * Get locale from request (Server Component only)
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
