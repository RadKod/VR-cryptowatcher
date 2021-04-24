const appAxios = async ({ $axios, app }, params) => {
  const { method = 'get', url, path, query, data } = params

  try {
    const promise = await $axios({
      method: method,
      url: url || `${process.env.BINANCE_API}/${path}`,
      params: query,
      data: data
    })
    const result = promise.data

    return result
  } catch (error) {
    return { success: false, message: error.response.data.message }
  }
}

export default ({ $axios, app }, inject) => {
  inject('appAxios', params => appAxios({ $axios, app }, params))
}
