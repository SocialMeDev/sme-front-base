import API from 'services/SocialMeApis/modules/appAlerts'

export default async function getAvailabelPermissions(institutionSlug) {
  const params = {
    operation: ['Institution', 'Permission', 'Available', 'Get'],
    urlParams: {
      institutionSlug,
    },
  }

  console.log(`Permission params`, params)

  const response = await API(params)

  console.log(`Permission response`, response)

  return response
}
