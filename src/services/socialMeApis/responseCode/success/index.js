import created from './created'
import deleted from './deleted'
import edited from './updated'
import read from './read'
import validated from './validated'

const successCode = {
  ...created,
  ...deleted,
  ...read,
  ...edited,
  ...validated,
}

export default successCode
