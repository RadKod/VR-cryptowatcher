<template lang="pug">
a-scene.main-scene(loading-screen="dotsColor: #eee; backgroundColor: #012353")
  // Assets
  a-assets(timeout="150000")
    a-asset-item#room(src="3d/room/scene.gltf")
    a-asset-item#tv(src="3d/tv/scene.gltf")
    img#radkod-logo(src="3d/radkod-logo.svg")
    img#sky(src="3d/sky.jpg")
    img#terrain(src="3d/terrain.jpg")
  // Room
  a-entity(gltf-model="#room" modify-materials position="0 0 1.8" scale="1.5 1.5 1.5" rotation="0 140 0")
  a-plane(src="#terrain" color="#666" position="-5 -1 5" rotation="-90 0 0" width="150" height="150")
  // TV
  a-entity(gltf-model="#tv" modify-materials position="-2.6 1.3 1.6" scale="0.1 0.1 0.1" rotation="0 110 0")
  a-plane(color="#111" position="-2.59 1.75 1.44" rotation="0 110 0" width="1" height="0.7")
  a-plane(color="#111" position="-2.45 1.75 1.80" rotation="0 110 0" width="0.8" height="0.65")

  // Crypto Texts

  // Row 1
  // BTC
  a-entity(
    position="-2.5 2 1.65"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: #eee; align: left; value: BTC - USDT; width: 1;`"
  )
  a-entity(
    position="-2.5 1.94 1.65"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: ${getStatusColor(coin.BTCUSDT)}; align: left; value: $${coin.BTCUSDT.p}; width: 1;`"
  )
  // DOGE
  a-entity(
    position="-2.65 2.001 1.25"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: #eee; align: left; value: DOGE - USDT; width: 1;`"
  )
  a-entity(
    position="-2.65 1.943 1.25"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: ${getStatusColor(coin.DOGEUSDT)}; align: left; value: $${coin.DOGEUSDT.p}; width: 1;`"
  )
  // BTT
  a-entity(
    position="-2.80 2.001 0.85"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: #eee; align: left; value: BTT - USDT; width: 1;`"
  )
  a-entity(
    position="-2.80 1.943 0.85"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: ${getStatusColor(coin.BTTUSDT)}; align: left; value: $${coin.BTTUSDT.p}; width: 1;`"
  )

  // Row 2
  // HOT
  a-entity(
    position="-2.5 1.8 1.65"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: #eee; align: left; value: HOT - USDT; width: 1;`"
  )
  a-entity(
    position="-2.5 1.735 1.65"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: ${getStatusColor(coin.HOTUSDT)}; align: left; value: $${coin.HOTUSDT.p}; width: 1;`"
  )
  // WINK
  a-entity(
    position="-2.65 1.80 1.25"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: #eee; align: left; value: WIN - USDT; width: 1;`"
  )
  a-entity(
    position="-2.65 1.738 1.25"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: ${getStatusColor(coin.WINUSDT)}; align: left; value: $${coin.WINUSDT.p}; width: 1;`"
  )
  // NEO
  a-entity(
    position="-2.80 1.8 0.85"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: #eee; align: left; value: NEO - USDT; width: 1;`"
  )
  a-entity(
    position="-2.80 1.74 0.85"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: ${getStatusColor(coin.NEOUSDT)}; align: left; value: $${coin.NEOUSDT.p}; width: 1;`"
  )

  // Row 3
  // XRP
  a-entity(
    position="-2.5 1.6 1.65"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: #eee; align: left; value: XRP - USDT; width: 1;`"
  )
  a-entity(
    position="-2.5 1.53 1.65"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: ${getStatusColor(coin.XRPUSDT)}; align: left; value: $${coin.XRPUSDT.p}; width: 1;`"
  )
  // TRX
  a-entity(
    position="-2.65 1.6 1.25"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: #eee; align: left; value: TRX - USDT; width: 1;`"
  )
  a-entity(
    position="-2.65 1.53 1.25"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: ${getStatusColor(coin.TRXUSDT)}; align: left; value: $${coin.TRXUSDT.p}; width: 1;`"
  )
  // CHZ
  a-entity(
    position="-2.80 1.6 0.85"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: #eee; align: left; value: CHZ - USDT; width: 1;`"
  )
  a-entity(
    position="-2.80 1.53 0.85"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: ${getStatusColor(coin.CHZUSDT)}; align: left; value: $${coin.CHZUSDT.p}; width: 1;`"
  )

  // Via Binance
  a-entity(
    position="-2.76 1.46 0.96"
    rotation="0 110 0"
    material="color: #eee"
    :text="`color: #f3ba2f; align: left; value: BINANCE; width: 0.4;`"
  )

  // RadKod Poster
  a-plane(color="#fbfbfb" position="-3.44 2.4 0.20" rotation="0 50 0" width="0.8" height="0.85")
  a-image(src="#radkod-logo" position="-3.43 2.4 0.20" rotation="0 50 0" width="0.5" height="0.5")
  a-entity(
    position="-3.43 1.9 0.20"
    rotation="0 50 0"
    material="color: #f2f2f2"
    :text="`color: #454545; align: center; value: RadKod; width: 2;`"
  )

  a-sky(src="#sky")
</template>

<script>
export default {
  data() {
    return {
      symbols: ['BTCUSDT', 'DOGEUSDT', 'BTTUSDT', 'HOTUSDT', 'WINUSDT', 'NEOUSDT', 'XRPUSDT', 'TRXUSDT', 'CHZUSDT'],
      coin: {
        BTCUSDT: {},
        DOGEUSDT: {},
        BTTUSDT: {},
        HOTUSDT: {},
        WINUSDT: {},
        NEOUSDT: {},
        XRPUSDT: {},
        TRXUSDT: {},
        CHZUSDT: {}
      },
      fetchInterval: null
    }
  },
  fetch() {
    this.symbols.map(async symbol => {
      const coin = await this.$axios.apis.binanceRest.fetchAggTrades({
        symbol: symbol
      })

      this.coin[symbol] = coin[0]
    })
  },
  async mounted() {
    await this.connect()
    setTimeout(() => {
      this.$fetch()
    }, 1000)
  },
  methods: {
    connect() {
      this.symbols.forEach(symbol => {
        const binanceSocket = new WebSocket(`wss://stream.binance.com:9443/ws/${this.$lowerCase(symbol).replace('-', '')}@trade`)

        if (binanceSocket) {
          if (binanceSocket.readyState !== 1) {
            this.fetchInterval = setInterval(() => {
              this.$fetch()
            }, 3000)
          }
          binanceSocket.onopen = () => {
            binanceSocket.onmessage = event => {
              const coin = JSON.parse(event.data)

              this.coin[symbol] = coin

              clearInterval(this.fetchInterval)
            }
          }

          binanceSocket.onerror = () => {
            this.coin[coin].p = 'Failed to connect..'
          }
        } else {
          this.fetchInterval = setInterval(() => {
            this.$fetch()
          }, 3000)
        }
      })
    },
    getStatusColor(coin) {
      let color = null

      if (coin.m) {
        color = '#f00'
      } else if (!coin.m) {
        color = '#0f0'
      } else {
        color = '#888'
      }

      return color
    }
  }
}
</script>
