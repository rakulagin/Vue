<template>
  <div id="app">
    <nav>

      <router-link :to="{name: 'Dashboard', params: {page: '1'} }">Dashboard</router-link> /
      <router-link to="/about">About</router-link> /
      <router-link to="/notfound">notfound</router-link>
    </nav>
    <router-view />
    <router-link :to="{
      name: 'AddPaymentForm',
      params: {
        section: 'payment',
        category: 'Food'
      },
      query: {value: 200}
    }">Food 200</router-link> /

    <router-link :to="{
      name: 'AddPaymentForm',
      params: {
        section: 'payment',
        category: 'Transport'
      },
      query: {value: 500}
    }">Transport 500</router-link> /

    <router-link :to="{
      name: 'AddPaymentForm',
      params: {
        section: 'payment',
        category: 'Entertainment'
      },
      query: {value: 2000}
    }">Entertainment 2000</router-link>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
