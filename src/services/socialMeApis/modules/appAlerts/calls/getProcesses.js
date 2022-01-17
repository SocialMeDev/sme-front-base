import API from 'services/SocialMeApis/modules/appAlerts'

export default async function getUsers(institutionSlug, filters) {
  const params = {
    operation: ['Institution', 'Process', 'Get'],
    urlParams: {
      institutionSlug,
    },
    data: filters,
  }

  console.log(`Get params`, params)

  const response = await API(params)

  console.log(`Get response`, response)

  return response
}
