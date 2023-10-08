import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'Fox Spirit', img: 'https://prod-eurasian-res.popmart.com/default/20230928_095838_173728__1200x1200.jpg', price: 990 },
    { name: ' SKULLPANDA Everyday ', img: 'https://prod-eurasian-res.popmart.com/default/2_Ty56Q49k5M_1200x1200.jpg', price: 890 },
    { name: ' Earphone Case ', img: 'https://prod-eurasian-res.popmart.com/default/2_WuMHJopf7u_1200x1200.jpg', price: 590 },
    { name: 'DIMOO Snowman ', img: 'https://prod-eurasian-res.popmart.com/default/20230918_160518_846561__1200x1200.jpg', price: 450 },
    { name: ' SKULLPANDA Everyday', img: 'https://prod-eurasian-res.popmart.com/default/2_9mA0VBmC2c_1200x1200.jpg', price: 690 },
    { name: ' Hirono Mime Series ', img: 'https://prod-eurasian-res.popmart.com/default/2_ijXIP3AkHR_1200x1200.jpg', price: 890 },
    { name: ' the Sophisticates ', img: 'https://prod-eurasian-res.popmart.com/default/2_zSiTIIQep1_1200x1200.jpg', price: 450 },
    { name: ' The Lethargic ', img: 'https://prod-eurasian-res.popmart.com/default/3_xqAC0TWirE_1200x1200.jpg', price: 450 },
    { name: ' BIRDIE BABY ', img: 'https://prod-eurasian-res.popmart.com/default/20230928_102622_805598__1200x1200.jpg', price: 990 },
    { name: ' Spirit Phone Case ', img: 'https://prod-eurasian-res.popmart.com/default/20230928_101417_313639__1200x1200.jpg', price: 890 },
    { name: ' Silicone Earphone Bag ', img: 'https://prod-eurasian-res.popmart.com/default/5_AWI6iGL54o_1200x1200.jpg', price: 350 },
    { name: ' Cotton Doll Unicorn ', img: 'https://prod-eurasian-res.popmart.com/default/3_BZQbTSDnH6_1200x1200.jpg', price: 990 },
  ])
    
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
