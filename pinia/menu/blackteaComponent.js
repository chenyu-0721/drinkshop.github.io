import productsStore from "../store/productsStore.js";
import cardStore from "../store/cardStore.js";
const { mapState, mapActions } = Pinia;

export default {
  data() {
    return {};
  },

  template: `  
  <div class="album py-5 bg-light">
  <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 my-4">
          <div class="col" v-show="product.variety === '紅茶'" v-for="product in sortProducts" :key="product.id">
              <div class="card" >
                  <img 
                      :src="product.imageUrl"
                       class="card-img-top" alt="" >
                  <div class="card-body">
                      <h6 class="card-title">{{ product.title }}
                      <span class="float-end">$ {{ product.price }}</span>
                      </h6>
                      <a href="#" class="btn btn-outline-primary w-100" @click.prevent="addToCard(product.id)">加入購物車</a>
                  </div>
              </div>
          </div>         
      </div>
   </div>
</div>`,
  computed: {
    ...mapState(productsStore, ["sortProducts"]),
  },
  methods: {
    ...mapActions(cardStore, ["addToCard"]),
  },
};
