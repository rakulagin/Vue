<template>
  <v-container>
    <v-row class="font-weight-bold">
      <v-col :cols="1">#</v-col>
      <v-col :cols="3">Date</v-col>
      <v-col :cols="4">Category</v-col>
      <v-col :cols="2">Value</v-col>
      <v-col :cols="2"></v-col>
    </v-row>
    <v-row v-for="(item, index) in items" :key="index">
      <v-col :cols="1">{{item.id}}</v-col>
      <v-col :cols="3">{{item.date}}</v-col>
      <v-col :cols="4">{{item.category}}</v-col>
      <v-col :cols="2">{{item.value}}</v-col>
      <v-col>
        <v-menu bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on" @click="onContextMenuClick($event,item)">mdi-dots-vertical</v-icon>
<!--            <v-btn class="ma-2" v-bind="attrs" v-on="on">A Menu</v-btn>-->
          </template>
          <v-list width="150">
            <v-list-item @click="editItem(item)">
              Edit
            </v-list-item>
            <v-list-item @click="deleteItem(item.id)">
              Delete
              <MyContextMenu />
            </v-list-item>

<!--            <v-list-item v-for="(item, i) in items" :key="i" @click="() => {}">-->
<!--              <v-list-item-title>{{ item.text }}</v-list-item-title>-->
<!--            </v-list-item>-->
          </v-list>
        </v-menu>
      </v-col>


<!--      <v-col>-->
<!--        <v-dialog v-model="dialog" width="500">-->
<!--          <template v-slot:activator="{ on }">-->
<!--            <v-icon v-on="on" @click="onContextMenuClick($event,item)">mdi-dots-vertical</v-icon>-->
<!--          </template>-->
<!--          <v-card>-->
<!--            <MyContextMenu />-->
<!--          </v-card>-->
<!--        </v-dialog>-->
<!--      </v-col>-->
<!--      <v-col :cols="2"><v-icon @click="onContextMenuClick($event,item)">mdi-dots-vertical</v-icon></v-col>-->
    </v-row>


<!--    <div class="paymentList">-->
<!--      <div-->
<!--          v-for="(item, index) in items"-->
<!--          :key="index"-->
<!--          class="paymentItem"-->
<!--      >-->
<!--        <span> {{ item }}</span>-->
<!--        <span-->
<!--            class="cursor"-->
<!--            @click="onContextMenuClick($event,item)"-->
<!--        >...</span>-->
<!--      </div>-->
<!--    </div>-->
  </v-container>
</template>



<script>
import MyContextMenu from "@/components/MyContextMenu";
export default {
  name: "PaymentsDisplay",
  components: {MyContextMenu},
  data() {
    return {
      dialog: false
    }
  },
  props: {
    items: {
      type: Array,
      default: () =>[]
    },
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
      // this.$contextMenu.hide()
    }

  }
}
</script>

<style lang="scss" scoped>
.cursor {
  cursor: pointer;
}

</style>

<!--<v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>-->
<!--<v-icon small @click="deleteItem(item)">mdi-delete</v-icon>-->