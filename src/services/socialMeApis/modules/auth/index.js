import axios from 'axios'
import prepareParameters from './functions/prepareParameters'
import getCodeInformation from './functions/getCodeInformation'

async function authAPI(paramsReceived) {
  const treatedParams = await prepareParameters(paramsReceived)

  const response = await axios(treatedParams)
    .then(async (res) => {
      const { code } = res.data.header

      const codeInformation = await getCodeInformation(code)

      if (codeInformation) {
        res.data.success = codeInformation.success
        res.data.message = codeInformation.message
      }

      return res.data
    })
    .catch(async (error) => {
      if (error.response) {
        const { code } = error.response.data.header

        const codeInformation = await getCodeInformation(code)

        if (codeInformation) {
          error.response.data.success = codeInformation.success
          error.response.data.message = codeInformation.message
        }

        error.response.data.status = error.response.status

        return error.response.data
      }

      const errorResponse = {
        error: error,
        success: false,
        message: 'Timeout',
      }

      return errorResponse
    })

  return response
}

export default authAPI
