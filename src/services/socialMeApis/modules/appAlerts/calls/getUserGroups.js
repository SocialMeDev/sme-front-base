import API from 'services/SocialMeApis/modules/appAlerts'

export default async function getUserGroups(institutionSlug, personId) {
  const params = {
    operation: ['Institution', 'User', 'Group', 'Get'],
    urlParams: {
      institutionSlug,
      personId,
    },
  }

  const response = await API(params)

  return response
}
