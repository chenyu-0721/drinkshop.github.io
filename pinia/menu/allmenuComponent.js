import productsStore from "../store/productsStore.js";
import cardStore from "../store/cardStore.js";
const { mapState, mapActions } = Pinia;

export default {
  data() {
    return {};
  },
  template: `  


  
  <div>
  <div  class="album py-5 border-bottom">
      <div class="container ">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 my-4 ">
              <div class="col"  v-for="product in sortProducts" :key="product.id">
                  <div class="card"> 
                    <a :href="'#id=' + product.id" @click="getDrinkValue(product)">
                        <img :src="product.imageUrl" class="card-img-top"  alt="">
                    </a>
                        <div class="card-body">
                            <h6 class="card-title">{{ product.title }}
                                <span class="float-end">$ {{ product.price }}</span>
                            </h6>
                            <button type="button" class="btn btn-outline-primary w-100" id="liveToastBtn"
                                @click.prevent="addToCard(product.id)">加入購物車</button>
                        </div>                
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>




<!-- Toast 消息 -->
<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 12">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">    
            <strong class="me-auto">快樂飲料店</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast"
                aria-label="Close"></button>
        </div>
        <div class="toast-body">
            產品已加入至購物車
        </div>
    </div>
</div>
`,
  computed: {
    ...mapState(productsStore, ["sortProducts"]),
  },
  methods: {
    ...mapActions(cardStore, ["addToCard", "getDrinkValue"]),
  },
};
