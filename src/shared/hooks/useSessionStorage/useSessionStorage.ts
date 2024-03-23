export function useSessionStarage() {
  const setItem = <T>(key: string, o: T) => {
    sessionStorage.setItem(key, JSON.stringify(o));
  };

  const getItem = <T>(key: string) => {
    const result = sessionStorage.getItem(key);
    if (result) {
      return JSON.parse(result) as T;
    }
    return null;
  };

  return {
    setItem,
    getItem,
  };
}
