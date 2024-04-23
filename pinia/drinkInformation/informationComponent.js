import productsStore from "../store/productsStore.js";
import cardStore from "../store/cardStore.js";
const { mapState, mapActions } = Pinia;

export default {
  data() {
    return {};
  },
  template: `  

<div class="album py-5 bg-light">
  <div class="container drinkOne-padding">
      <div class="row py-6 featurette">
          <div class="col-md-5 order-md-2 drinkOne-text d-flex flex-column justify-content-between">
            <h2 class="featurette-heading"><strong>{{getDrink.title}}</strong><br></h2>
            <h6 class="lead">{{getDrink.infor}}</h6>
            <button type="button" class="btn btn-outline-primary  mt-auto " style="width:400px;" id="liveToastBtn"
                    @click.prevent="addToCard(getDrink.id)">加入購物車</button>
          </div>
          <div class="col-md-5 order-md-1 ">
              <img class="featurette-image img-fluid mx-auto drinkOne-image"
                  :src="getDrink.imageUrl">
          </div>   
      </div>  
  </div>
</div>


`,
  computed: {
    ...mapState(cardStore, ["getDrink", "addToCard"]),
  },
};
