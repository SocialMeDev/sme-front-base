import API from 'services/SocialMeApis/modules/appAlerts'

export default async function unbindGroupFromUser(
  institutionSlug,
  groupSlug,
  personId
) {
  const params = {
    operation: ['Institution', 'Group', 'User', 'Unbind'],
    urlParams: {
      institutionSlug,
      groupSlug,
      personId,
    },
  }

  const response = await API(params)

  return response
}
