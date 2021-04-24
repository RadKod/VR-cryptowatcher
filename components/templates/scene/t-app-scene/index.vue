<template lang="pug">
.t-rk-app-scene
  a-scene
    a-assets
      a-asset-item#room(src="3d/room/scene.gltf")
      a-asset-item#tv(src="3d/tv/scene.gltf")
    // Room
    a-entity(gltf-model="#room" modify-materials position="0 0 1.8" scale="1.5 1.5 1.5" rotation="0 140 0")
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
      :text="`color: #0f0; align: left; value: $146.0045; width: 1;`"
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
      :text="`color: #0f0; align: left; value: $2.0025; width: 1;`"
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
      :text="`color: #0f0; align: left; value: $2.0025; width: 1;`"
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
      :text="`color: #0f0; align: left; value: $146.0045; width: 1;`"
    )
    // WINK
    a-entity(
      position="-2.65 1.80 1.25"
      rotation="0 110 0"
      material="color: #eee"
      :text="`color: #eee; align: left; value: WINK - USDT; width: 1;`"
    )
    a-entity(
      position="-2.65 1.738 1.25"
      rotation="0 110 0"
      material="color: #eee"
      :text="`color: #0f0; align: left; value: $2.0025; width: 1;`"
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
      :text="`color: #0f0; align: left; value: $2.0025; width: 1;`"
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
      :text="`color: #0f0; align: left; value: $146.0045; width: 1;`"
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
      :text="`color: #0f0; align: left; value: $2.0025; width: 1;`"
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
      :text="`color: #0f0; align: left; value: $2.0025; width: 1;`"
    )

    a-sky(color="#000")
</template>

<script>
export default {
  data() {
    return {
      text: 'BTC - TRY'
    }
  }
}
</script>
