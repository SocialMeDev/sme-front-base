import API from 'services/SocialMeApis/modules/appAlerts'

export default async function getAvailablePermissionsForGroup(institutionSlug) {
  const params = {
    operation: ['Institution', 'Permission', 'Available', 'Group', 'Get'],
    urlParams: {
      institutionSlug,
    },
  }

  const response = await API(params)

  return response
}
