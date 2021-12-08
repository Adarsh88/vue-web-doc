<template>
  <div id="app">
    <div id="nav">
      <router-link to="/view">Home</router-link> |
      <router-link to="/seedoc">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
fetch(
  'https://remote-365-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json?orderBy="$key"&startAt="-MnkWrPxVctDv-M4Dzno"&endAt="-MnkWw8fdAdlOr8kLZAp"'
).then((response) => {
  response.json().then((responseJson) => {
    const sfdt = JSON.parse(Object.values(responseJson)[0].content);
    this.$refs.doceditcontainer.ej2Instances.documentEditor.open(sfdt);
  });
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
