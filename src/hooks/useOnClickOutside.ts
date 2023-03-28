import { RefObject, useEffect } from "react";

interface UseOnClickOutsideProps {
  ref: RefObject<HTMLDivElement>;
  handler: (e: Event) => void;
}

const useOnClickOutside = (options: UseOnClickOutsideProps) => {
  const { handler, ref } = options;

  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      if (ref) {
        if (!el || el.contains(event.target as Node)) {
          return;
        }
        handler(event);
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
