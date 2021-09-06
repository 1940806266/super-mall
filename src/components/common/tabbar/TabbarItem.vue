
<template>
  <div class="tab-bar-item" @click="itemClick">
     <slot v-if="!isActive" name="item-icon"></slot>
     <slot v-else name="item-active"></slot>
     <div :class="{activeStyle:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'Tabbaritem',
  props:{
    path:String
  },
  data () {
    return {
      // isActive:true
    };
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)

    }
  },
  components: {},

  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    }
  },

}

</script>
<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.activeStyle{
  color: red;
}
</style>
