import axios from 'axios'
import prepareParameters from './functions/prepareParameters'
import GetCodeInformation from './functions/getCodeInformation'

export default async function AlertsAppAPI(paramsReceived) {
  const treatedParams = await prepareParameters(paramsReceived)

  console.log(`treatedParams`, treatedParams)

  const response = await axios(treatedParams)
    .then(async (res) => {
      const { code } = res.data.header
      const codeInformation = await GetCodeInformation(code)

      if (codeInformation) {
        res.data.success = codeInformation.success
        res.data.message = codeInformation.message
      }

      return res.data
    })
    .catch(async (error) => {
      if (error.response) {
        const { code } = error.response.data.header
        const codeInformation = await GetCodeInformation(code)
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
