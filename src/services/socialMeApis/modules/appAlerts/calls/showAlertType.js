import API from 'services/SocialMeApis/modules/appAlerts'

async function showAlertType(institutionSlug, alertTypeSlug) {
  const params = {
    operation: ['AlertTypes', 'Show'],
    urlParams: {
      institutionSlug,
      alertTypeSlug,
    },
  }

  const response = await API(params)

  return response
}

export default showAlertType
