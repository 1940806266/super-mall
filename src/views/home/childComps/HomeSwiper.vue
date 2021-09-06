<!--  -->
<template>
  <swiper>
     <swiper-item v-for="item in banner" :key="item.index">
       <a :href="item.link">
         <img :src="item.image" alt="">
       </a>
     </swiper-item>
  </swiper>
</template>

<script>
import{Swiper,SwiperItem} from "../../../components/common/swiper/index.js"

export default {
  data () {
    return {

    };
  },
props:{
  banner:{
    type:Array,
    default(){
      return []
    }
  }
},
  components: {
    Swiper,
    SwiperItem
  },
created(){
  console.log(this.banners);
},
  computed: {},

}

</script>
<style>
img{
  width: 100%;
  height: 150px;
}
</style>
