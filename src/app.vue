<template lang="html">
  <div>
    <div>
      <router-link to="/about">about</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="css">
.message {
  color: pink;
  font-size: 1.4em;
}
</style>
