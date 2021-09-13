<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll-vue class="wrapper" ref="top" :probeType="3" @scroll="contentScroll">
    <!-- <div class="wrapper" ref="wrapper"> -->
      <!-- <div class="content"> -->
        <home-swiper :banner="banners"></home-swiper>
        <recommends :recommend="recommends"></recommends>
        <feature-view></feature-view>
        <tab-control
          :title="['精选', '流行', '新款']"
          class="tab-control"
          @tabClick="tabclick"
        ></tab-control>
        <goods-list :goodlist="this.goods[currentType].list"></goods-list>
      <!-- </div> -->
    <!-- </div> -->
    </scroll-vue>
    <back-top  @click.native="clickTop" v-show="isShowTop"></back-top>
  </div>
</template>

<script>

import NavBar from "../../components/common/navbar/NavBar.vue";
import { getHomeMultidata, getHomeData } from "../../network/home.js";
import HomeSwiper from "../home/childComps/HomeSwiper.vue";
import Recommends from "../home/childComps/Recommends";
import FeatureView from "../home/childComps/FeatureView.vue";
import TabControl from "../../components/content/tabControl/TabContol.vue";
import Goodlist from "../../components/content/goods/GoodsList.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import ScrollVue from "../../components/common/scroll/Scroll.vue";
import BackTop from "../../components/content/backTop/backTop.vue"
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    Recommends,
    Recommends,
    Recommends,
    FeatureView,
    TabControl,
    GoodsList,
    ScrollVue,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      scroll: null,
      isShowTop:false
    };
  },
  methods: {
    getHomeData(type) {
      const page = this.goods[type].page + 1;
      getHomeData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        console.log(res);
        this.goods[type].page += 1;
      });
    },
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    clickTop(){
      this.$refs.top.scroll.scrollTo(0,0,500)
    },
    contentScroll(position){
      this.isShowTop = -(position.y) > 1000

    },
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";

          break;
        case 1:
          this.currentType = "sell";

          break;
        case 2:
          this.currentType = "new";

          break;
        default:
          break;
      }
    },
  },
  created() {
    this.getHomeMultidata();
    this.getHomeData("pop");
    this.getHomeData("sell");
    this.getHomeData("new");
  },
};
</script>
<style scoped>
.wrapper{
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;


}
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: sticky;
  top: 0px;
  z-index: 9;
}

</style>
