import { useEffect, useMemo, useCallback } from "react";

function useIntersectionObserver(handleIntersection) {
  const observer = useMemo(
    () =>
      new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: "0px",
        threshold: 0.7,
      }),
    [handleIntersection]
  );

  const observe = useCallback(
    (ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    },
    [observer]
  );

  const disconnect = useCallback(() => {
    observer.disconnect();
  }, [observer]);

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [disconnect]);

  return { observe, disconnect };
}

export default useIntersectionObserver;
