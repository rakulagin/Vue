<template>
  <div
    v-if="shown"
    class="context"
    :style="styles"
  >
    <div
      v-for="item in items"
      :key="item.text"
      class="context__item"
      @click="onClick(item)"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MyContextMenu",
  data () {
    return {
      shown: false,
      items: [],
      xPos: 0,
      yPos: 0
    }
  },

  computed: {
    styles() {
      return {
        top: `${this.yPos + 30}px`,
        left: `${this.xPos - 30}px`
      }
    }
  },

  mounted() {
    this.$contextMenu.EventBus.$on('show', this.onShow)
    this.$contextMenu.EventBus.$on('hide', this.onHide)
  },
  beforeUnmount() {
    this.$contextMenu.EventBus.$off('show', this.onShow)
    this.$contextMenu.EventBus.$off('hide', this.onHide)
  },

  methods: {
    onClick(item) {
      item.action()
    },
    onShow({items, caller}) {
      this.items = items
      this.shown = true
      this.setPosition(caller)
    },
    onHide() {
      this.shown = false
      this.items = []
    },
    setPosition(caller) {
      const pos = caller.getBoundingClientRect()
      this.xPos = pos.left
      this.yPos = pos.top
    }
  }
}
</script>

<style lang="scss" scoped>
.context {
  position: absolute;
  background: #eee;
  cursor: pointer;
}

</style>