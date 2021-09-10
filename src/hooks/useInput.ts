import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";

type ReturnTypes<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  Dispatch<SetStateAction<T>>
];

const useInput = <T>(initioalData: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initioalData);
  const handler = useCallback((e) => {
    setValue(e.target.value as unknown as T);
  }, []);
  return [value, handler, setValue];
};

export default useInput;
