<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banners"></home-swiper>
      <recommends :recommend="recommends"></recommends>
      <feature-view></feature-view>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "../../network/home.js";
import HomeSwiper from "../home/childComps/HomeSwiper.vue";
import Recommends from "../home/childComps/Recommends"
import FeatureView from "../home/childComps/FeatureView.vue"
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    Recommends,
    Recommends,
    Recommends,
    FeatureView
  },
  data() {
    return {
      banners:[],
      recommends:[]
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    });
  },
};
</script>
<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
