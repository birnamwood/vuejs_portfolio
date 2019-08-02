<template>
  <div class="workbox">
    <div class="content-box">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Workbox',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scope>
.workbox {
  width: 100%;
  padding-bottom: 50px;
}
.content-box {
  width: 90%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px gray;
}
</style>