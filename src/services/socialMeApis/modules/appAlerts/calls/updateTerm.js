import API from 'services/SocialMeApis/modules/appAlerts'

export default async function updateTerm(institutionSlug, termId, terms) {
  const params = {
    operation: ['Institution', 'Terms', 'Update'],
    urlParams: {
      institutionSlug,
      termId,
    },
    data: terms,
  }

  const response = await API(params)

  return response
}
