import API from 'services/SocialMeApis/modules/appAlerts'

async function bindGroupToUser(institutionSlug, groupSlug, personId) {
  const params = {
    operation: ['Institution', 'Group', 'User', 'Bind'],
    urlParams: {
      institutionSlug,
      groupSlug,
      personId,
    },
  }

  const response = await API(params)

  return response
}

export default bindGroupToUser
