export default async function Set({ key, value }) {
  if (!key || !value) return false

  localStorage.setItem(key, value)

  return true
}
