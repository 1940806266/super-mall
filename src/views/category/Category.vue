<!--  -->
<template>
 <div class="wrapper" ref="aaaa">
   <ul class="content">
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
     <li>11</li>
   </ul>
 </div>
</template>

<script>
import BScroll from "@better-scroll/core"
// import ScrollVue from "../../components/common/scroll/Scroll.vue"
export default {
  data () {
    return {
      scroll:null
    };
  },

  components: {
    // ScrollVue
  },

  computed: {},
  mounted(){
    this.scroll = new BScroll(this.$refs.aaaa,{
     click:true
    })
  }

}


</script>
<style scoped>
.wrapper{
  height: 150px;
  background-color: red;
  overflow: hidden;
}
</style>
