<template>
    <div class="about">
        <div class="test-sass">測試sass</div>
    </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
          page: 'about'
      }
    }
  }
</script>

<style type="text/css">
    .about {
        color: #f00
    }
</style>

<style lang="sass">
    $color: #0ff;
    .test-sass {
        color: $color;
    }
</style>
