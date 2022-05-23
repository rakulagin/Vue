<template>
  <div class="about">
    <h1>This is an about page</h1>
    <CalcComponent />
  </div>
</template>

<script>

import CalcComponent from "@/components/CalcComponent";
export default {
  name: "AboutView",
  components: {
    CalcComponent
  }
}
</script>