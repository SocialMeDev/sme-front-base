import API from 'services/SocialMeApis/modules/appAlerts'

async function updateGroupPermission(institutionSlug, groupSlug, permission) {
  const params = {
    operation: ['Institution', 'Group', 'Permission', 'Update'],
    urlParams: {
      institutionSlug,
      groupSlug,
    },
    data: {
      permission,
    },
  }

  const response = await API(params)

  return response
}

export default updateGroupPermission
