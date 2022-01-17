export default async function Delete(key) {
  localStorage.removeItem(key)

  return true
}
