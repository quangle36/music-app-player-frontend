const useLocalStorage = {
  getItem: (key: string) => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setItem: (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
export default useLocalStorage
