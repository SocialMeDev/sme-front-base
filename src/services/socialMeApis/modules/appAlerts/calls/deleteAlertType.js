import API from 'services/SocialMeApis/modules/appAlerts'

async function deleteAlertType(institutionSlug, alertTypeSlug) {
  const params = {
    operation: ['AlertTypes', 'Delete'],
    urlParams: {
      institutionSlug,
      alertTypeSlug,
    },
  }

  const response = await API(params)

  return response
}

export default deleteAlertType
