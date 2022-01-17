import API from 'services/SocialMeApis/modules/appAlerts'

async function updateGroup(institutionSlug, groupSlug, data) {
  const params = {
    operation: ['Institution', 'Group', 'Update'],
    urlParams: {
      institutionSlug,
      groupSlug,
    },
    data,
  }

  const response = await API(params)

  return response
}

export default updateGroup
