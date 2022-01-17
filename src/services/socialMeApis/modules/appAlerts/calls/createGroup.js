import API from 'services/SocialMeApis/modules/appAlerts'

async function createGroup(institutionSlug, data) {
  const params = {
    operation: ['Institution', 'Group', 'Create'],
    urlParams: {
      institutionSlug,
    },
    data,
  }

  const response = await API(params)

  return response
}

export default createGroup
