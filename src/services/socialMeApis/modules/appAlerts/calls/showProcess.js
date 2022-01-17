import API from 'services/SocialMeApis/modules/appAlerts'

export default async function showProcess(institutionSlug, processId) {
  const params = {
    operation: ['Institution', 'Process', 'Show'],
    urlParams: {
      institutionSlug,
      processId,
    },
  }

  const response = await API(params)

  return response
}
