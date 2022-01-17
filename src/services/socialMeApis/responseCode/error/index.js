import invalid from './invalid'
import missing from './missing'
import other from './other'
import taken from './taken'

const errorsCode = {
  ...invalid,
  ...missing,
  ...other,
  ...taken,
}

export default errorsCode
