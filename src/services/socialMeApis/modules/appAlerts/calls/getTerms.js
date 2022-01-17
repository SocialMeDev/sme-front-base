import API from 'services/SocialMeApis/modules/appAlerts'

export default async function getUsers(institutionSlug, filters) {
  const params = {
    operation: ['Institution', 'Terms', 'Get'],
    urlParams: {
      institutionSlug,
    },
    data: filters,
  }

  const response = await API(params)

  return response
}
