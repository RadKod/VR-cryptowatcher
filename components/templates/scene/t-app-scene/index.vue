<template lang="pug">
.t-rk-app-scene
  a-scene
    a-entity(
      position="0 0.4 0"
      geometry="primitive: plane; width: auto; height: auto"
      material="color: #eee"
      :text="`color: blue; align: center; value: ${text}; width: 2;`"
    )
    a-assets
      a-asset-item#room(src="3d/room/scene.gltf")
    a-entity(gltf-model="#room" modify-materials position="0 0 1.8" scale="1.5 1.5 1.5" rotation="0 140 0")

    a-sky(color="#000")
</template>

<script>
export default {
  data() {
    return {
      text: 'Hello World'
    }
  },
  mounted() {
    setTimeout(() => {
      this.text = 'Changed'
    }, 2000)
  }
}
</script>
