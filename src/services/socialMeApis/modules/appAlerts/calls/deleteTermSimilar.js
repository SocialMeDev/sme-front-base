import API from 'services/SocialMeApis/modules/appAlerts'

export default async function deleteTermSimilar(
  institutionSlug,
  termId,
  similarTermId
) {
  const params = {
    operation: ['Institution', 'Terms', 'Similar', 'Delete'],
    urlParams: {
      institutionSlug,
      termId,
      similarTermId,
    },
  }

  const response = await API(params)

  return response
}
