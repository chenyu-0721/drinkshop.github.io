import cardStore from "../store/cardStore.js";

const { mapState } = Pinia;

export default {
  template: ` 
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container " >
        <a class="navbar-brand" href="#">商品頁面</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item ">
                <a class="navbar-brand" href="#/blacktea">紅茶</a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" href="#/milkTea">奶茶</a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" href="#/tea">綠茶</a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" href="#/ice">冰沙</a>
              </li>
              <li class="nav-item">
                <a class="navbar-brand" href="#/other">其他飲品</a>
              </li>
            </ul>
            <form class="d-flex">
              <router-link to="/card" class="btn btn-dark" style="font-size:20px">
                購物車
                <span class="badge rounded-pill bg-danger text-white">{{ card.length }}</span>
              </router-link>
            </form>
        </div>
    </div>
  </nav>


  
    `,
  computed: {
    ...mapState(cardStore, ["card"]),
  },
};

//   <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" >

//     <div class="collapse navbar-collapse justify-content-center" id="navbarCollapse">
// <ul class="navbar-nav ">

//       </ul>

//   </div>
// </nav>