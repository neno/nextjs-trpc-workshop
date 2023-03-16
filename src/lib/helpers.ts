import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function clsxm(...classes: ClassValue[]): string {
  return twMerge(clsx(...classes));
}