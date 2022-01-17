import API from 'services/SocialMeApis/modules/auth'

export default async function registerLegalPerson(person, institution) {
  person.cnpj_number = person.cnpj_number.replace(/\D/g, '')

  const params = {
    operation: ['Auth', 'Register', 'PJ'],
    data: {
      ...person,
      white_label_id: institution.id,
    },
  }

  const response = await API(params)

  return response
}
