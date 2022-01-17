import API from 'services/SocialMeApis/modules/appAlerts'

async function deleteGroup(institutionSlug, groupSlug) {
  const params = {
    operation: ['Institution', 'Group', 'Delete'],
    urlParams: {
      institutionSlug,
      groupSlug,
    },
  }

  console.log('Delete', params)

  const response = await API(params)

  console.log('Delete', response)

  return response
}

export default deleteGroup
