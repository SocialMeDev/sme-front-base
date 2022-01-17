import API from 'services/SocialMeApis/modules/appAlerts'

export default async function updateUserPermission({
  institutionSlug,
  personId,
  permission,
}) {
  const params = {
    operation: ['Institution', 'Permission', 'Update'],
    urlParams: {
      personId,
      institutionSlug,
    },
    data: {
      permission,
    },
  }

  const response = await API(params)

  return response
}
