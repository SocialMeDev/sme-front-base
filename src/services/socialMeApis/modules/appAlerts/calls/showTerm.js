import API from 'services/SocialMeApis/modules/appAlerts'

export default async function showTerm(institutionSlug, termId) {
  const params = {
    operation: ['Institution', 'Terms', 'Show'],
    urlParams: {
      institutionSlug,
      termId,
    },
  }

  const response = await API(params)

  return response
}
