import API from 'services/SocialMeApis/modules/appAlerts'

export default async function getUserPermissions(institutionSlug, personId) {
  const params = {
    operation: ['Institution', 'User', 'Permission'],
    urlParams: {
      institutionSlug,
      personId,
    },
    data: {
      pagination: {
        limit: 0,
      },
    },
  }

  const response = await API(params)

  return response
}
