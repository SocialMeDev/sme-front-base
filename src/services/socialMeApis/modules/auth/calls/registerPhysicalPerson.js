import API from 'services/SocialMeApis/modules/auth'

import { americanDateParser } from 'utils/parsers/date'

function parsePerson(person) {
  const newPerson = Object.assign({}, person)

  if (person !== null) {
    newPerson.birth_date = americanDateParser(newPerson.birth_date)

    newPerson.cpf_number = newPerson.cpf_number.replace(/\D/g, '')
  }

  return newPerson
}

export default async function registerPhysicalPerson(person, institution) {
  const params = {
    operation: ['Auth', 'Register', 'PF'],
    data: {
      ...parsePerson(person),
      white_label_id: institution.white_label_id,
    },
  }

  const response = await API(params)

  return response
}
