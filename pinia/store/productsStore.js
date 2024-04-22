const { defineStore } = Pinia;

export default defineStore("productsStore", {
  // data, methods, computed
  // state, actions, getters
  // 資料建立在 state
  // 給元件使用寫在 getters
  state: () => ({
    products: [
      {
        id: 1,
        title: "檸檬芒果汁",
        imageUrl:
          "https://images.unsplash.com/photo-1546173159-315724a31696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRyaW5rfGVufDB8fDB8fHww",
        price: 60,
        variety: "其他飲品",
      },
      {
        id: 2,
        title: "檸檬氣泡水",
        imageUrl:
          "https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        variety: "其他飲品",
      },
      {
        id: 3,
        title: "檸檬紅茶",
        imageUrl:
          "https://images.unsplash.com/photo-1606444006818-3e66c09f2724?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJsYWNrJTIwdGVhfGVufDB8fDB8fHww",
        price: 50,
        variety: "紅茶",
      },
      {
        id: 4,
        title: "oreo可可冰沙",
        imageUrl:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlsayUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D",
        price: 140,
        variety: "冰沙",
      },
      {
        id: 5,
        title: "珍珠奶茶",
        imageUrl:
          "https://images.unsplash.com/photo-1620360289473-bfafadc16c57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        variety: "奶茶",
      },
      {
        id: 6,
        title: "拿鐵",
        imageUrl:
          "https://images.unsplash.com/photo-1594489556673-c816408242f5?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 70,
        variety: "其他飲品",
      },
      {
        id: 7,
        title: "巧克力奶茶",
        imageUrl:
          "https://images.unsplash.com/photo-1621221814631-e8bfdabd5ca4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 50,
        variety: "奶茶",
      },
      {
        id: 8,
        title: "抹茶拿鐵",
        imageUrl:
          "https://images.unsplash.com/photo-1592284441621-581ebd2e677d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1pbGslMjB0ZWF8ZW58MHx8MHx8fDA%3D",
        price: 50,
        variety: "其他飲品",
      },
      {
        id: 9,
        title: "可可慕斯",
        imageUrl:
          "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 100,
        variety: "其他飲品",
      },
      {
        id: 10,
        title: "肉桂奶茶",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1663928246165-1ab1c85ea324?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 80,
        variety: "奶茶",
      },
      {
        id: 11,
        title: "英式皇家奶茶",
        imageUrl:
          "https://images.unsplash.com/photo-1543721367-74f7de329e51?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        variety: "奶茶",
      },
      {
        id: 12,
        title: "英式紅茶",
        imageUrl:
          "https://images.unsplash.com/photo-1562547256-2c5ee93b60b7?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 30,
        variety: "紅茶",
      },
      {
        id: 13,
        title: "本島綠茶",
        imageUrl:
          "https://images.unsplash.com/photo-1606377695906-236fdfcef767?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 20,
        variety: "綠茶",
      },
      {
        id: 14,
        title: "抹茶",
        imageUrl:
          "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 50,
        variety: "綠茶",
      },
      {
        id: 15,
        title: "薄荷茶",
        imageUrl:
          "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        variety: "綠茶",
      },
      {
        id: 16,
        title: "烏龍綠茶",
        imageUrl:
          "https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 30,
        variety: "綠茶",
      },
      {
        id: 17,
        title: "大吉嶺紅茶",
        imageUrl:
          "https://images.unsplash.com/photo-1620342942051-ab6a9d92eda4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        variety: "紅茶",
      },
      {
        id: 18,
        title: "祁門紅茶",
        imageUrl:
          "https://images.unsplash.com/photo-1572889439628-d9a9af986c31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 50,
        variety: "紅茶",
      },
      {
        id: 19,
        title: "日月潭紅茶",
        imageUrl:
          "https://images.unsplash.com/photo-1597318109735-d3612887d1ad?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 30,
        variety: "紅茶",
      },
      {
        id: 20,
        title: "阿薩姆珍珠奶茶",
        imageUrl:
          "https://images.unsplash.com/photo-1592318730259-6f18a6ba1c29?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 60,
        variety: "奶茶",
      },
      {
        id: 21,
        title: "阿薩姆奶茶",
        imageUrl:
          "https://images.unsplash.com/photo-1578335729120-279f54506af5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        variety: "奶茶",
      },
      {
        id: 22,
        title: "草莓氣泡水",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1675949335489-f778abf84197?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 120,
        variety: "其他飲品",
      },
      {
        id: 23,
        title: "檸檬蘇打",
        imageUrl:
          "https://images.unsplash.com/photo-1609951651556-5334e2706168?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 50,
        variety: "其他飲品",
      },
      {
        id: 24,
        title: "藍色海洋",
        imageUrl:
          "https://images.unsplash.com/photo-1587888637140-849b25d80ef9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        variety: "其他飲品",
      },
      {
        id: 25,
        title: "消暑柳橙汁",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1675667381451-be2fc08a122e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 30,
        variety: "其他飲品",
      },
      {
        id: 26,
        title: "柳橙櫻桃汁",
        imageUrl:
          "https://images.unsplash.com/photo-1560526860-1f0e56046c85?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        variety: "其他飲品",
      },
      {
        id: 27,
        title: "oreo奶昔",
        imageUrl:
          "https://images.unsplash.com/photo-1619158401201-8fa932695178?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 100,
        variety: "其他飲品",
      },
      {
        id: 28,
        title: "桑葚汁",
        imageUrl:
          "https://images.unsplash.com/photo-1563223771-5fe4038fbfc9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 70,
        variety: "其他飲品",
      },
      {
        id: 29,
        title: "七彩繽紛",
        imageUrl:
          "https://images.unsplash.com/photo-1599566097412-69d00510d74a?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 100,
        variety: "其他飲品",
      },
      {
        id: 30,
        title: "香蕉奶昔",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1695035007016-f7976bbb64d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 100,
        variety: "",
      },
      {
        id: 31,
        title: "巧克力拿鐵聖代",
        imageUrl:
          "https://images.unsplash.com/photo-1553787499-6f9133860278?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxkcmlua3xlbnwwfHwwfHx8MA%3D%3D",
        price: 130,
        variety: "冰沙",
      },
      {
        id: 32,
        title: "阿薩姆綠茶",
        imageUrl:
          "https://images.unsplash.com/photo-1470162656305-6f429ba817bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 35,
        variety: "綠茶",
      },
      {
        id: 33,
        title: "蔓越莓柳橙冰沙",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1681826664053-5f50e4a0c513?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 100,
        variety: "冰沙",
      },
      {
        id: 34,
        title: "奇異果冰沙",
        imageUrl:
          "https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 120,
        variety: "冰沙",
      },
      {
        id: 35,
        title: "綜合水果冰沙",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1681826698463-7653724a5214?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 130,
        variety: "冰沙",
      },
      {
        id: 36,
        title: "藍莓冰沙",
        imageUrl:
          "https://images.unsplash.com/photo-1532301634640-d623ab11bb22?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 200,
        variety: "冰沙",
      },
      {
        id: 37,
        title: "草莓冰沙",
        imageUrl:
          "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 130,
        variety: "冰沙",
      },
      {
        id: 38,
        title: "鳳梨冰茶",
        imageUrl:
          "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 70,
        variety: "其他飲品",
      },
      {
        id: 39,
        title: "木瓜牛奶",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1661715440356-ff1ca9ff72ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 60,
        variety: "其他飲品",
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
 * 
 *
 {
        id: ,
        title: "",
        imageUrl:
          "",
        price: ,
      },

*/
