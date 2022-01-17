import API from 'services/SocialMeApis/modules/appAlerts'

export default async function getAvailableGroups(institutionSlug, filters) {
  const params = {
    operation: ['Institution', 'Group', 'Available', 'Get'],
    urlParams: {
      institutionSlug,
    },
    data: filters,
  }

  const response = await API(params)

  return response
}
