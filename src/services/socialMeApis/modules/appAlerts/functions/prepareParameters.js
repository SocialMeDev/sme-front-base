import Request from '../requests'
import prepareHeader from 'services/SocialMeApis/modules/appAlerts/functions/prepareHeader'
import prepareURL from 'services/SocialMeApis/modules/appAlerts/functions/prepareURL'

export default async function prepareTheParameters(paramsReceived) {
  const { urlParams, data, operation, headers } = paramsReceived

  const { baseURL, method, url, timeout } = operation.reduce((object, path) => {
    return object[path]
  }, Request)

  const options = {
    headers: undefined,
    url: '',
    data,
    baseURL,
    method,
    timeout,
  }

  if (headers) {
    options.headers = headers
  } else {
    options.headers = await prepareHeader()
  }

  if (urlParams) {
    options.url = await prepareURL(url, urlParams)
  } else {
    options.url = url
  }

  return options
}
