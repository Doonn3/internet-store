export function storageSession<T>(key: string) {
  const setItem = (ob: T) => {
    sessionStorage.setItem(key, JSON.stringify(ob));
  };

  const getItem = () => {
    const result = sessionStorage.getItem(key);
    if (!result) return null;

    return JSON.parse(result) as T;
  };

  return {
    setItem,
    getItem,
  };
}
