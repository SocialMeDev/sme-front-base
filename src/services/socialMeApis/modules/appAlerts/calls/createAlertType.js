import API from 'services/SocialMeApis/modules/appAlerts'

async function createAlertType(institutionSlug, data) {
  const params = {
    operation: ['AlertTypes', 'Create'],
    urlParams: {
      institutionSlug,
    },
    data,
  }

  const response = await API(params)

  return response
}

export default createAlertType
