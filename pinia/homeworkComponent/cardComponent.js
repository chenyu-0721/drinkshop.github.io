import cardStore from "../store/cardStore.js";

const { mapState, mapActions } = Pinia;

export default {
  template: `
  <div class="album py-5 bg-light">
  <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 my-4">
          <h2 v-if="!cardList.cards.length">購物車沒有任何品項</h2>
          <table v-else class="table align-middle">
              <tbody>
                  <tr>
                      <td>取消商品</td>
                      <td>圖片</td>
                      <td>名稱</td>
                      <td>甜度</td>
                      <td>溫度</td>
                      <td>數量</td>
                      <td class="text-end">價格</td>
                  </tr>
                  <tr v-for="item in cardList.cards" :key="item.id">
                      <td width='100'>
                          <button type="button" class="btn btn-danger"
                              @click.prevent="removeCardItem(item.id)">x</button>
                      </td>
                      <td>
                          <img :src="item.product.imageUrl" class="table-image" alt="">
                      </td>
                      <td>
                        <select name="" id="" class="form-select"  >
                                <option>無糖</option>
                                <option>三分糖</option>
                                <option>半糖</option>
                                <option>七分糖</option>
                                <option>全糖</option>
                        </select> 
                      </td>
                      <td>
                        <select name="" id="" class="form-select" >
                                <option>正常冰</option>
                                <option>少冰</option>
                                <option>微冰</option>
                                <option>常溫</option>
                                <option>熱飲</option>
                        </select> 
                      </td>
                      <td>                    
                      </td>
                      <td>{{ item.product.title }}</td>
                      <td>
                          <select name="" id="" class="form-select" :value="item.qty"
                              @change="(evt) => setCartQty(item.id,evt)">
                              <option :value="i" v-for="i in 20" :key="i">{{i}}</option>
                          </select>
                      </td>
                      <td class="text-end">
                          $ {{item.subtotal}}
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div v-if="cardList.cards.length" class="bg-light  h4">

          <div class="text-end">
              總金額 NT$ <span class=" text-danger "> {{ cardList.total }} </span>    
          </div>
          <div class="text-end">
            <button type="button" class="btn btn-danger ">買單去~</button>
          </div>
      </div>
  </div>
</div>
  `,
  computed: {
    ...mapState(cardStore, ["cardList"]),
  },
  methods: {
    ...mapActions(cardStore, ["removeCardItem", "setCartQty"]), // 取出方法
  },
};
