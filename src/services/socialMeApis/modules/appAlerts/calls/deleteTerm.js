import API from 'services/SocialMeApis/modules/appAlerts'

export default async function deleteTerm(institutionSlug, termId, terms) {
  const params = {
    operation: ['Institution', 'Terms', 'Delete'],
    urlParams: {
      institutionSlug,
      termId,
    },
    data: terms,
  }

  const response = await API(params)

  return response
}
