import API from 'services/SocialMeApis/modules/appAlerts'

export default async function getTermSimilar(institutionSlug, termId, filters) {
  const params = {
    operation: ['Institution', 'Terms', 'Similar', 'Get'],
    urlParams: {
      institutionSlug,
      termId,
    },
    data: filters,
  }

  const response = await API(params)

  return response
}
