import { require } from "./require.js";
export function getHomeMultidata(){
   return require({
     url:"/home/multidata"
   })
}
export function getHomeData(type,page){
  return require({
    url:"/home/data",
    params:{
      type,
      page
    }
  })
}

