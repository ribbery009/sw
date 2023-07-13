import { axiosInstance } from "../utils/axiosInstance"

export enum ApiMethods {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

const ApiCall = async ({
  method,
  url,
  data,
  params,
  headers,
  onInit,
  onSuccess,
  onError,
  onFinal,
}: {
  method: ApiMethods
  url: string
  token?: string
  onSuccess?: (data: any) => void
  onError?: (error: string) => void
  onInit?: () => void
  data?: any
  params?: any
  headers?: any
  onFinal?: () => void
  onLoading?: (isLoading: boolean) => void
}) => {
  onInit?.()
  try {
    const response = await axiosInstance.request({
      method,
      url,
      data,
      params
    })

    if (response.status !== 200) {
      throw new Error('Something went wrong')
    }

    onSuccess?.(response.data)
  } catch (error: any) {
    console.error(error?.response ?? error)


    if (error?.response?.data?.responseMessage) {
      onError?.(error.response.data.responseMessage)
      return
    }

    onError?.('Hiba történt a kérés során. Kérjük próbálja újra később.')
  } finally {
    onFinal?.()
  }
}

export default ApiCall
