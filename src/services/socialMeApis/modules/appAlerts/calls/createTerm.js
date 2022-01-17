import API from 'services/SocialMeApis/modules/appAlerts'

export default async function createTerms(institutionSlug, terms) {
  const params = {
    operation: ['Institution', 'Terms', 'Create'],
    urlParams: {
      institutionSlug,
    },
    data: terms,
  }

  const response = await API(params)

  return response
}
