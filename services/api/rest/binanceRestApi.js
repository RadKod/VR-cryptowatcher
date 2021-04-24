export const binanceRestApi = appAxios => ({
  fetchAggTrades({ symbol }) {
    return appAxios({
      method: 'get',
      path: `aggTrades?symbol=${symbol}`
    })
  }
})
