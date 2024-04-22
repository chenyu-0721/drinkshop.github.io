import productsStore from "../store/productsStore.js";
import cardStore from "../store/cardStore.js";
const { mapState, mapActions } = Pinia;

export default {
  data() {
    return {isLoaded: false };
  },
  template: `  
  <div>
  <div v-if="isLoaded" class="album py-5 border-bottom">
      <div class="container ">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 my-4 ">
              <div class="col" v-show="product.variety === '冰沙'" v-for="product in sortProducts" :key="product.id">
                  <div class="card">
                      <img :src="product.imageUrl" class="card-img-top" alt="">
                      <div class="card-body">
                          <h6 class="card-title">{{ product.title }}
                              <span class="float-end">$ {{ product.price }}</span>
                          </h6>
                          <button type="button" class="btn btn-outline-primary w-100" id="liveToastBtn"
                              @click.prevent="addToCard(product.title,product.id) ">加入購物車</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>


  <div v-else class="album py-5 border-bottom">
      <div class="container ">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 my-4 ">
              <div class="col" v-show="product.variety === '冰沙'" v-for="product in sortProducts" :key="product.id">
                  <div class="card" aria-hidden="true">
                  <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text></svg>
                      <div class="card-body ">
                          <p class="card-text placeholder-glow">
                              <span class="placeholder col-7"></span>
                              <span class="placeholder col-4"></span>
                          </p>
                          <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
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
    ...mapActions(cardStore, ["addToCard"]),
    // 模拟加载数据的方法
    loadData() {
      setTimeout(() => {
        this.isLoaded = true; // 将加载完成的标志位设为true
      }, 2000); // 假设加载数据需要2秒
    },
  },
  mounted() {
    this.loadData(); // 在组件加载完成后调用加载数据的方法
  },
};
