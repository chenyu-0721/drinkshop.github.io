import productsStore from "../store/productsStore.js";
import cardStore from "../store/cardStore.js";
const { mapState, mapActions } = Pinia;

export default {
  data() {
    return {};
  },
  template: `  

<div class="album py-5 bg-light">
  <div class="container ">
      <div class="row py-5 featurette">
          <div class="col-md-5 order-md-2 ">
              <h2 class="featurette-heading drinkOne-text"><strong>{{getDrink.title}}</strong><br>

              </h2>
              <h6 class="lead">
                  {{getDrink.infor}}
              </h6>
          </div>
          <div class="col-md-5 order-md-1">
              <img class="drinkOne-image"
                  :src="getDrink.imageUrl">

          </div>
      </div>
  </div>
</div>


`,
  computed: {
    ...mapState(cardStore, ["getDrink"]),
  },
};
