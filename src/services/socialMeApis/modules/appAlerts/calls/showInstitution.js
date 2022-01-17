import API from 'services/SocialMeApis/modules/appAlerts'

export default async function showInstitution(institutionSlug) {
  const params = {
    operation: ['Institution', 'Show'],
    urlParams: {
      institutionSlug,
    },
  }

  const response = await API(params)

  return response
}
