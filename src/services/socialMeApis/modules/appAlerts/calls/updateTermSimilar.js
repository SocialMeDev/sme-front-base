import API from 'services/SocialMeApis/modules/appAlerts'

export default async function updateTermSimilar(
  institutionSlug,
  termId,
  similarTermId,
  similar
) {
  const params = {
    operation: ['Institution', 'Terms', 'Similar', 'Update'],
    urlParams: {
      institutionSlug,
      termId,
      similarTermId,
    },
    data: similar,
  }

  const response = await API(params)

  return response
}
