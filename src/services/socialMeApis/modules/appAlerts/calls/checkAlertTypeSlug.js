import API from 'services/SocialMeApis/modules/appAlerts'

async function checkAlertTypeSlug(institutionSlug, alertTypeSlug) {
  const params = {
    operation: ['AlertTypes', 'CheckSlug'],
    urlParams: {
      institutionSlug,
      alertTypeSlug,
    },
  }

  const response = await API(params)

  return response
}

export default checkAlertTypeSlug
