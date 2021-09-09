<!--  -->
<template>
  <div class="goods">
    <goods-listitem v-for="(item,index) in goodlist" :key="index" :item="item"></goods-listitem>
  </div>
</template>

<script>
import GoodsListitem from "./GoodsListItem.vue"
export default {
  data () {
    return {
    };
  },
  props:{
     goodlist:{
       type:Array,
       default(){
         return []
       }
     }
  },
  components: {
    GoodsListitem
  },

  computed: {},

}

</script>
<style>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px;
  }
</style>
