<!--  -->
<template>
  <div class="recommend">
     <div v-for="(item,index) in recommend" :key="index" class="item">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
props:{
  recommend:{
    type:Array,
    default(){
      return []
    }
  }
},
  components: {},

  computed: {},

}

</script>
<style>
.recommend{
  display: flex;
  font-size: 12px;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.item{
  flex: 1;
}
.item img{
  width: 60px;
  height: 60px;
}
.recommend a{
  width: 100%;
  height: 100%;
}
</style>
