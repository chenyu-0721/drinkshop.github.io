import productsStore from "../store/productsStore.js";
import cardStore from "../store/cardStore.js";

const { mapState, mapActions } = Pinia;

export default {
  data() {
    return {};
  },

  template: `  
  <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img style="width:100%; height:600px; object-fit: cover; " src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img style="width:100%; height:600px; object-fit: cover; " src="https://plus.unsplash.com/premium_photo-1661756522906-5df7ee690868?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img style="width:100%; height:600px; object-fit: cover; " src="https://plus.unsplash.com/premium_photo-1661715440356-ff1ca9ff72ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  
  
<div class="album py-5 bg-light">
  <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 my-4">
          <div class="col" v-for="product in sortProducts" :key="product.id">
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
    ...mapState(cardStore, ["card"]),
  },
  methods: {
    ...mapActions(cardStore, ["addToCard"]),
  },
};
