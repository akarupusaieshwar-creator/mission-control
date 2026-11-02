import { useEffect, useState } from "react";

type LocalStorageChange<T> = { key: string; value: T };

export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      if (typeof window === "undefined") return initial;
      const stored = window.localStorage.getItem(key);
      return stored === null ? initial : (JSON.parse(stored) as T);
    } catch (error) {
      console.error("LocalStorage error:", error);
      return initial;
    }
  });

  useEffect(() => {
    const syncValue = (event: Event) => {
      const change = event as CustomEvent<LocalStorageChange<T>>;
      if (change.detail?.key === key) setValue(change.detail.value);
    };
    const syncAcrossTabs = (event: StorageEvent) => {
      if (event.key !== key) return;
      try {
        setValue(event.newValue === null ? initial : (JSON.parse(event.newValue) as T));
      } catch (error) {
        console.error("LocalStorage sync error:", error);
      }
    };

    window.addEventListener("mission-control-storage", syncValue);
    window.addEventListener("storage", syncAcrossTabs);
    return () => {
      window.removeEventListener("mission-control-storage", syncValue);
      window.removeEventListener("storage", syncAcrossTabs);
    };
  }, [key, initial]);

  const setStoredValue = (nextValue: T) => {
    try {
      setValue(nextValue);
      window.localStorage.setItem(key, JSON.stringify(nextValue));
      window.dispatchEvent(
        new CustomEvent<LocalStorageChange<T>>("mission-control-storage", {
          detail: { key, value: nextValue },
        }),
      );
    } catch (error) {
      console.error("LocalStorage set error:", error);
    }
  };

  return [value, setStoredValue] as const;
}
