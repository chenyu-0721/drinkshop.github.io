import cardStore from "../store/cardStore.js";

const { mapState } = Pinia;

export default {
  template: ` 

  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" >
    <div class="container-fluid" >
      <div class="collapse navbar-collapse justify-content-center" id="navbarCollapse">
        <ul class="navbar-nav ">
          <li class="nav-item">
            <a class="navbar-brand" href="#">商品頁面</a>
          </li>
          <li class="nav-item">
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
      </div> <router-link to="/card" class="btn btn-dark" style="font-size:20px">
      
      購物車
      <span class="badge rounded-pill bg-danger text-white">{{ card.length }}</span>
    </div>
  </nav>
  
    `,
  computed: {
    ...mapState(cardStore, ["card"]),
  },
};
