import API from 'services/SocialMeApis/modules/appAlerts'

export default async function createTermSimilar(
  institutionSlug,
  termId,
  similar
) {
  const params = {
    operation: ['Institution', 'Terms', 'Similar', 'Create'],
    urlParams: {
      institutionSlug,
      termId,
    },
    data: similar,
  }

  const response = await API(params)

  return response
}
