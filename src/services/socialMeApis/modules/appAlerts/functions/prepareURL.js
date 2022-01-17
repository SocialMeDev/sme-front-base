export default async function prepareTheURL(url, urlParams) {
  let newURL = url

  for (const props in urlParams) {
    newURL = newURL.replace(props, urlParams[props])
  }

  return newURL
}
