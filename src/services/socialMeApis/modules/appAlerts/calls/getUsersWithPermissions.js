import API from 'services/SocialMeApis/modules/appAlerts'

export default async function getUsersWithPermissions(
  institutionSlug,
  filters
) {
  const params = {
    operation: ['Institution', 'User', 'LinkedUsers'],
    urlParams: {
      institutionSlug,
    },
    data: filters,
  }

  const response = await API(params)

  return response
}
