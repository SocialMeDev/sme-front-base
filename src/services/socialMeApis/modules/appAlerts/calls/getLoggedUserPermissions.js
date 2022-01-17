import API from 'services/SocialMeApis/modules/appAlerts'

export default async function getInstitutionPermission(institutionSlug) {
  const params = {
    operation: ['Institution', 'Permission', 'Get'],
    urlParams: {
      institutionSlug,
    },
    data: {
      pagination: {
        limit: 0,
      },
    },
  }

  const response = await API(params)

  return response
}
