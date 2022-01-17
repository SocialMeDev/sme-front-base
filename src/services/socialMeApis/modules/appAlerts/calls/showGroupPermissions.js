import API from 'services/SocialMeApis/modules/appAlerts'

async function showGroupPermissions(institutionSlug, groupSlug) {
  const params = {
    operation: ['Institution', 'Group', 'Show'],
    urlParams: {
      institutionSlug,
      groupSlug,
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

export default showGroupPermissions
