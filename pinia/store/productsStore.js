const { defineStore } = Pinia;

export default defineStore("productsStore", {
  // data, methods, computed
  // state, actions, getters
  // 資料建立在 state
  // 給元件使用寫在 getters
  state: () => ({
    products: [
      // {
      //   id: 1,
      //   title: "多色餅乾",
      //   imageUrl:
      //     "https://images.unsplash.com/photo-1576717585968-8ea8166b89b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      //   price: 80,
      // },
      // {
      //   id: 2,
      //   title: "綠色馬卡龍",
      //   imageUrl:
      //     "https://images.unsplash.com/photo-1623066463831-3f7f6762734d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1135&q=80",
      //   price: 120,
      // },
      // {
      //   id: 3,
      //   title: "彩色馬卡龍",
      //   imageUrl:
      //     "https://images.unsplash.com/photo-1558312657-b2dead03d494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      //   price: 200,
      // },
      // {
      //   id: 4,
      //   title: "巧克力心連心",
      //   imageUrl:
      //     "https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      //   price: 160,
      // },
      // {
      //   id: 5,
      //   title: "粉色馬卡龍",
      //   imageUrl:
      //     "https://images.unsplash.com/photo-1612201142855-7873bc1661b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      //   price: 120,
      // },
      {
        id: 1,
        title: "檸檬芒果汁",
        imageUrl:
          "https://images.unsplash.com/photo-1546173159-315724a31696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRyaW5rfGVufDB8fDB8fHww",
        price: 60,
      },
      {
        id: 2,
        title: "檸檬氣泡水",
        imageUrl:
          "https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
      },
      {
        id: 3,
        title: "檸檬紅茶",
        imageUrl:
          "https://images.unsplash.com/photo-1606444006818-3e66c09f2724?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJsYWNrJTIwdGVhfGVufDB8fDB8fHww",
        price: 50,
      },
      {
        id: 4,
        title: "oreo可可冰沙",
        imageUrl:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlsayUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D",
        price: 140,
      },
      {
        id: 5,
        title: "oreo可可冰沙",
        imageUrl:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlsayUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D",
        price: 140,
      },
      {
        id: 6,
        title: "oreo可可冰沙",
        imageUrl:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlsayUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D",
        price: 140,
      },
      {
        id: 7,
        title: "oreo可可冰沙",
        imageUrl:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlsayUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D",
        price: 140,
      },
      {
        id: 8,
        title: "oreo可可冰沙",
        imageUrl:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlsayUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D",
        price: 140,
      },
      {
        id:9,
        title: "oreo可可冰沙",
        imageUrl:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlsayUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D",
        price: 140,
      },
      {
        id: 10,
        title: "oreo可可冰沙",
        imageUrl:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlsayUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D",
        price: 140,
      },
    ],
  }),
  getters: {
    sortProducts: ({ products }) => {
      return products.sort((a, b) => a.price - b.price); //價錢小到大
    },
  },
});

/**

 {
        id: ,
        title: "",
        imageUrl:
          "",
        price: ,
      },

*/
