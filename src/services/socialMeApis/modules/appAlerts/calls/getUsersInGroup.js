import API from 'services/SocialMeApis/modules/appAlerts'

export default async function getUsersInGroup(
  institutionSlug,
  groupSlug,
  filters
) {
  const params = {
    operation: ['Institution', 'Group', 'User', 'Get'],
    urlParams: {
      institutionSlug,
      groupSlug,
    },
    data: filters,
  }

  console.log(`Group User params`, params)

  const response = await API(params)

  console.log(`Group User response`, response)

  return response
}
