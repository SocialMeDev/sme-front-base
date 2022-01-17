import API from 'services/SocialMeApis/modules/appAlerts'

async function updateAlertType(institutionSlug, alertTypeSlug, data) {
  const params = {
    operation: ['AlertTypes', 'Update'],
    urlParams: {
      institutionSlug,
      alertTypeSlug,
    },
    data,
  }

  const response = await API(params)

  return response
}

export default updateAlertType
