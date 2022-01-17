import { getCookie, setCookie, deleteCookie } from 'utils/cookie'
import {
  setLocalStorage,
  deleteLocalStorage,
  getLocalStorage,
} from 'utils/localStorage'

async function getStorage(key) {
  const cookie = await getCookie(key)
  const localStorage = await getLocalStorage(key)

  if (cookie) {
    if (!localStorage || cookie !== localStorage) {
      setLocalStorage({ key, value: cookie })
    }

    return cookie
  }

  if (localStorage) {
    if (!cookie || cookie !== localStorage) {
      setCookie({ key, value: localStorage })
    }

    return localStorage
  }
}

async function setStorage(key, value) {
  await setCookie({ key: key, value: value })

  await setLocalStorage({ key: key, value: value })
}

async function deleteStorage(key) {
  await deleteCookie(key)

  await deleteLocalStorage(key)
}

export { setStorage, getStorage, deleteStorage }
