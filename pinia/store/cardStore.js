const { defineStore } = Pinia;
import productsStore from "./productsStore.js";

export default defineStore("card", {
  // methods 方法
  // actions
  state: () => ({
    card: [],
  }),
  actions: {
    addToCard(productId, qty = 1) {
      // 取得已經有加入購物車的項目
      // 進行判斷，如果購物車有該項目則 +1 如果沒有則是新增一個購物車項目

      const currentCard = this.card.find(
        (item) => item.productId === productId
      );

      if (currentCard) {
        currentCard.qty += qty;
      } else {
        this.card.push({
          id: new Date().getTime(),
          productId,
          qty,
        });
      }

      //   console.log(productId, qty);
      //   console.log(this.card);
    },
    setCartQty(id, event) {
      //   console.log(id, event);
      const currentCard = this.card.find((item) => item.id === id);
      //   console.log(currentCard);
      currentCard.qty = event.target.value * 1;
    },

    removeCardItem(id) {
      const index = this.card.findIndex((item) => item.id === id);
      this.card.splice(index, 1);
    },
  },
  getters: {
    cardList: ({ card }) => {
      // 1. 購物車品項資訊，整合產品資訊
      // 2. 必須計算小計的金額
      // 3. 必須提供總金額

      const { products } = productsStore();
      //   console.log(products);
      //   console.log(card);

      const cards = card.map((item) => {
        // 1. 購物車品項資訊，整合產品資訊
        // console.log("item", item);
        //  單一產品取出
        const product = products.find(
          (product) => product.id === item.productId
        );
        return {
          ...item,
          product,
          subtotal: product.price * item.qty,
        };
      });
      const total = cards.reduce((a, b) => a + b.subtotal, 0);

      return {
        cards, // 列表
        total: total,
      };
    },
  },
});
