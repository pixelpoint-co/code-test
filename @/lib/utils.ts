import { type ClassValue, clsx } from 'clsx'
import { twMerge } from '~/utils/twMerge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
