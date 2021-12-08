<template>
  <div id="app">
<<<<<<< HEAD
    <div id="nav">
      <router-link to="/view">Home</router-link> |
      <router-link to="/seedoc">About</router-link>
    </div>
    <router-view />
=======
    <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link to="/save">Go to SaveDoc</router-link>
      <router-link to="/view">Go to SeeDoc</router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
>>>>>>> 8152b853ac2b7e7e2b31a0721e458ffe0da2a145
  </div>
</template>

<script>
fetch(
<<<<<<< HEAD
  'https://remote-365-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json?orderBy="$key"&startAt="-MnkWrPxVctDv-M4Dzno"&endAt="-MnkWw8fdAdlOr8kLZAp"'
).then((response) => {
  response.json().then((responseJson) => {
=======
  'https://remote-365-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json?orderBy="$key"&startAt="-MnkWrPxVctDv-M4Dzno"'
).then(response => {
  response.json().then(responseJson => {
>>>>>>> 8152b853ac2b7e7e2b31a0721e458ffe0da2a145
    const sfdt = JSON.parse(Object.values(responseJson)[0].content);
    this.$refs.doceditcontainer.ej2Instances.documentEditor.open(sfdt);
  });
});
</script>

<style>
<<<<<<< HEAD
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
=======
#documenteditor_titlebar {
  height: 60px;
  line-height: 26px;
  font-size: 12px;
  padding-left: 15px;
  padding-right: 10px;
  font-family: inherit;
>>>>>>> 8152b853ac2b7e7e2b31a0721e458ffe0da2a145
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.save {
  height: 40px;
  width: 100%;
  background-color: #ff4500;
  color: white;
  cursor: pointer;
}
</style>
