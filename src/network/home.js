import { require } from "./require.js";
export function getHomeMultidata(){
   return require({
     url:"/home/multidata"
   })
}

