import API from 'services/SocialMeApis/modules/appAlerts'

async function getAlertTypes(institutionSlug, filters) {
  const params = {
    operation: ['AlertTypes', 'Get'],
    urlParams: {
      institutionSlug,
    },
    data: filters,
  }

  const response = await API(params)

  return response
}

export default getAlertTypes
