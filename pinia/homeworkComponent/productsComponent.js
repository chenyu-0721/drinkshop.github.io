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
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img style="width:100%; height:600px; object-fit: cover; "
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block text-end">
                <h1>鳳梨冰茶</h1>
                <h5>清涼爽口，鳳梨香氣撲鼻，口感清甜宜人</h5>
            </div>
        </div>
        <div class="carousel-item">
            <img style="width:100%; height:600px; object-fit: cover; "
                src="https://plus.unsplash.com/premium_photo-1661756522906-5df7ee690868?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block text-end">
                <h1>冰抹茶拿鐵</h1>
                <h5>清新的抹茶風味與濃鬱的牛奶香氣完美融合，冰涼的口感帶來清爽的享受</h5>
            </div>
        </div>
        <div class="carousel-item">
            <img style="width:100%; height:600px; object-fit: cover; "
                src="https://plus.unsplash.com/premium_photo-1661715440356-ff1ca9ff72ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block text-end">
                <h1>木瓜牛奶</h1>
                <h5>滋味醇厚，木瓜香氣濃郁，清新爽口，帶來愉悅的口感</h5>

            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>



<div class="album py-5 bg-light">
  <h1 class="text-center">熱門商品</h1>
    <div class="container">
        <div id="carouselExampleIndicator" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="0" class="active "
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-4">
                        <div class="col">
                            <div class="card shadow-sm" style="height:470px;">
                                <img class="cart-cover"
                                    src="https://plus.unsplash.com/premium_photo-1681826698463-7653724a5214?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                <div class="card-body">
                                    <h4 class="border-bottom"><strong>綜合水果冰沙</strong></h4>
                                    <p class="card-text">
                                        以多種水果綜合而成，口感豐富多彩，清新爽口，每一口都能品味到不同水果的風味，帶來滿滿的夏日清涼感，是夏日裡最迷人的解渴之選，讓人心情愉悅，回味無窮
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm" style="height:470px;">
                                <img class="cart-cover"
                                    src="https://images.unsplash.com/photo-1619158401201-8fa932695178?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                <div class="card-body">
                                    <h4 class="border-bottom"><strong>oreo冰沙</strong></h4>
                                    <p class="card-text">濃郁的Oreo風味與冰涼的口感完美結合，每一口都散發出誘人的甜蜜香氣，帶來極致的口味享受，讓人陶醉其中</p>
                                </div>
                            </div>

                        </div>
                        <div class="card shadow-sm" style="height:470px;">
                            <img class="cart-cover"
                                src="https://images.unsplash.com/photo-1592318730259-6f18a6ba1c29?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                            <div class="card-body">
                                <h4 class="border-bottom"><strong>阿薩姆珍珠奶茶</strong></h4>
                                <p class="card-text">結合阿薩姆紅茶的濃郁香氣與爽口的珍珠，帶來獨特的口感體驗，香甜可口，令人愛不釋手</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-4">
                        <div class="col">
                            <div class="card shadow-sm" style="height:470px;">
                                <img class="cart-cover"
                                    src="https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                <div class="card-body">
                                    <h4 class="border-bottom"><strong>可可慕斯</strong></h4>
                                    <p class="card-text">濃郁的可可風味與柔滑的口感完美融合，帶來一份濃情蜜意的甜點享受，令人陶醉其中</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm" style="height:470px;">
                                <img class="cart-cover"
                                    src="https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                <div class="card-body">
                                    <h4 class="border-bottom"><strong>薄荷茶</strong></h4>
                                    <p class="card-text">清新爽口，清涼解渴，帶來清香的薄荷氣息，令人心情舒暢，是夏日裡的一份清涼怡人的選擇</p>
                                </div>
                            </div>

                        </div>
                        <div class="card shadow-sm" style="height:470px;">
                            <img class="cart-cover"
                                src="https://images.unsplash.com/photo-1597318109735-d3612887d1ad?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                            <div class="card-body">
                                <h4 class="border-bottom"><strong>日月潭紅茶</strong></h4>
                                <p class="card-text">擁有深邃的茶香和豐富的口感，入口醇厚，回味悠長，帶來濃郁的茶葉風味，是一款極具特色和品質的紅茶</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-4">
                        <div class="col">
                            <div class="card shadow-sm" style="height:470px;">
                                <img class="cart-cover"
                                    src="https://images.unsplash.com/photo-1587888637140-849b25d80ef9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                <div class="card-body">
                                    <h4 class="border-bottom"><strong>藍色海洋</strong></h4>
                                    <p class="card-text">水藍色的液體中蘊含著清涼的海洋風味，如置身於無邊無際的大海，清新怡人，令人心曠神怡，是讓人沉浸於寧靜和清涼中的飲料</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card shadow-sm" style="height:470px;">
                                <img class="cart-cover"
                                    src="https://images.unsplash.com/photo-1599566097412-69d00510d74a?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                                <div class="card-body">
                                    <h4 class="border-bottom"><strong>七彩繽紛</strong></h4>
                                    <p class="card-text">綜合多種水果原料，如彩虹一般絢麗多彩，口感豐富鮮美，清新爽口，每一口都是一場味覺的冒險，令人心情愉悅，回味無窮</p>
                                </div>
                            </div>

                        </div>
                        <div class="card shadow-sm" style="height:470px;">
                            <img class="cart-cover"
                                src="https://images.unsplash.com/photo-1543721367-74f7de329e51?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                            <div class="card-body">
                                <h4 class="border-bottom"><strong>英式皇家奶茶</strong></h4>
                                <p class="card-text">結合英式傳統風格，濃濃的紅茶香氣與醇厚的牛奶完美融合，帶來一份尊貴與優雅的品味享受，讓人沉浸在濃郁的英式風情中</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicator"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicator"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</div>




`,
  computed: {
    ...mapState(productsStore, ["sortProducts"]),
    ...mapState(cardStore, ["card"]),
  },
  methods: {
    ...mapActions(cardStore, ["addToCard"]),
  },
};
