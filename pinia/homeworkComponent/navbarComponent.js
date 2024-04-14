import cardStore from "../store/cardStore.js";

const { mapState } = Pinia;

export default {
  template: ` 
  <nav class="navbar navbar-expand-lg navbar-light bg-light ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Home </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="navbar-brand" href="#">商品頁面</a>
            </li>
            <li class="nav-item">
              <a class="navbar-brand" href="#">馬卡龍</a>
            </li>      
          </ul>
        </div>
        <router-link to="/card" class="btn btn-light">
          購物車
          <span class="badge rounded-pill bg-danger text-white">{{ card.length }}</span>
        </router-link>
      </div>
    </nav>`,
  computed: {
    ...mapState(cardStore, ["card"]),
  },
};
