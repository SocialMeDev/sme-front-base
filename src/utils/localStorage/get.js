export default async function Get(key) {
  if (!key) return false

  const value = localStorage.getItem(key)

  return value
}
