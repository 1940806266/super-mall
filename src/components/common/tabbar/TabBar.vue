<!--  -->
<template>
  <div id="tabbar">
     <slot></slot>
  </div>
</template>

<script>
export default {
  name:"TabBar",
  data () {
    return {
    };
  },

  components: {},

  computed: {},

}

</script>
<style>
#tabbar{
  display: flex;
  position: fixed;
  right: 0px;
  left: 0px;
  bottom: 0px;
  background-color: #f6f6f6;

}

</style>
