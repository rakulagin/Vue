<template>
  <div class="paymentList">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="paymentItem"
    >
      <span> {{ item }}</span>
      <span
        class="cursor"
        @click="onContextMenuClick($event,item)"
      >...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () =>[]
    }
  },
  methods: {
    onContextMenuClick(event,item) {
      const items = [
        {
          text: "Edit", action: () => {this.editItem(item)}
        },
        {
          text: "Delete", action: () => {this.deleteItem(item.id)}
        }
      ]
      this.$contextMenu.show({event, items})
    },
    editItem(item) {
      this.$modal.show('addform', {title: "Add New Payment", component: "AddPaymentForm", props: {
        item
        }})
      console.log('edit', item)
      this.$contextMenu.hide()
    },
    deleteItem(item) {
      this.$store.commit('removeItem', item)
      this.$contextMenu.hide()
    }

  }
}
</script>

<style lang="scss" scoped>
.cursor {
  cursor: pointer;
}

</style>