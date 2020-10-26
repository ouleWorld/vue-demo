<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

ul,
li {
  list-style: none;
}

body {
  margin: 20px;
  color: #333;
  font-family: 'PingFang SC', 'Microsoft Yahei', sans-serif;
}

button {
  margin: 0 4px;
  padding: 0 14px;
  line-height: 32px;
  color: #232323;
  background: #EBF3FF;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
}

button:hover {
  background: #F5F9FF;
  cursor: pointer;
}

input {
  height: 32px;
  padding: 0 12px;
  margin: 0 5px;
  border: 1px solid #eee;
  outline: none;
  border-radius: 3px;
  box-sizing: border-box;
}

input:focus {
  border: 1px solid #61dafb;
}

a {
  color: #333;
  text-decoration: none;
}

a:hover {
  color: #175199;
}

</style>
