import { AxiosRequestConfig } from './types'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  console.log(123)
  xhr(config)
}

export default axios
