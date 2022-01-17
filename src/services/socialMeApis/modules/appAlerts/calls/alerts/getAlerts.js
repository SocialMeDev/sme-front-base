import API from 'services/SocialMeApis/modules/appAlerts'

async function getAlerts(institutionSlug, data) {
  const params = {
    operation: ['Alerts', 'Get'],
    urlParams: {
      institutionSlug,
    },
    data,
  }

  const response = await API(params)

  return response
}

export default getAlerts
