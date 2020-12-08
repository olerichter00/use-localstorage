import { Dispatch } from 'react';
export default function useLocalStorage<T>(key: string, initialValue: T | Function): [T | undefined, Dispatch<T>];
