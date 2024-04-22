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
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
          aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
      <div class="carousel-item active">
          <img style="width:100%; height:600px; object-fit: cover; "
              src="https://images.unsplash.com/photo-1602943543714-cf535b048440?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block text-end">
              <h1><strong>茶葉</strong></h1>
              <h5>一片片普通的葉子，卻蘊藏著無限的智慧和文化，如同生活中的困難和挑戰，需要細心品味才能領悟其深刻之處</h5>
          </div>
      </div>
      <div class="carousel-item">
          <img style="width:100%; height:600px; object-fit: cover; "
              src="https://images.unsplash.com/photo-1516518691269-6d1e18187234?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block text-end">
              <h1><strong>牛奶</strong></h1>
              <h5>牛奶的香氣，彷彿來自樹蔭下清晨的氣息，細緻溫潤，如同自然的懷抱，散發著滿滿的溫馨與安詳，讓人沉醉其中，享受悠然的片刻</h5>
          </div>
      </div>
      <div class="carousel-item">
          <img style="width:100%; height:600px; object-fit: cover; "
              src="https://images.unsplash.com/photo-1493925410384-84f842e616fb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block text-end">
              <h1><strong>可可</strong></h1>
              <h5>愉悅的味道，源自於可可的精華，蘊含著甜蜜與濃郁，每一口都是對幸福的享受，如同一場美妙的心靈之旅，讓人陶醉其中</h5>
          </div>
      </div>
      <div class="carousel-item">
          <img style="width:100%; height:600px; object-fit: cover; "
              src="https://plus.unsplash.com/premium_photo-1674228288342-d72cf144e5de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block text-end">
              <h1><strong>水果</strong></h1>
              <h5>色彩絢麗，口感清爽，是大自然賜予的美味饋贈，每一種水果都有其獨特的風味與營養，豐富了人們的飲食選擇，讓生活充滿了色彩與活力</h5>
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
  <div class="container">
      <h1 class="text-center pt-3 ">最新消息</h1>
      <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne">
                      <strong>悅享美味，飲悅時光 ( 2024/04/23 ----- 2024/06/30 )</strong>
                  </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" 
                  aria-labelledby="panelsStayOpen-headingOne">
                  <div class="accordion-body">
                      <img class="cart-new" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                      
                        <p class="pt-3"><strong>親愛的顧客，歡迎來到我們的飲料店，「飲悅時光」活動即將開啟！在這個特別的時刻，我們特別為您準備了一系列精彩的活動和美味的飲品，讓您在舒適的環境中盡情享受美好時光。
                          <br><br>
                          在「飲悅時光」活動中，我們將推出各種口味的飲品優惠，包括茶飲、冰沙、特調等，讓您可以盡情品嚐不同風味的美味。此外，我們還準備了豐富的禮品和驚喜抽獎活動，讓您有機會贏得精美禮品和折扣券，享受更多的優惠和驚喜。
                          <br><br>
                          除了美味飲品和豐富禮品外，我們還為您準備了舒適的用餐環境和親切的服務，讓您感受到家的溫暖和舒適。無論是和朋友聚會還是獨自一人，「飲悅時光」都是您放鬆身心、享受美味的最佳選擇。
                          <br><br>
                          快來我們的店鋪，加入我們的「飲悅時光」活動，一起享受美味飲品和愉悅時光吧！
                        </strong></p>
                  </div>
              </div>
          </div>
          <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree">
                      <strong>畢業季快樂飲 ( 2024/05/01 ----- 2024/08/30 ) </strong>
                  </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree">
                  <div class="accordion-body">
                      <img class="cart-new"
                          src="https://images.unsplash.com/photo-1627556704243-5f0771d90783?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">                
                          <p class="pt-3"><strong>親愛的顧客們，為了慶祝這個特別的畢業季，我們特別推出了「畢業季快樂飲」活動！在這個重要的時刻，與親朋好友一起享受美味飲品，是無比愉悅的事情。我們精心準備了各種口味的奶茶、紅茶等飲品，讓您在品味的同時，感受到溫馨與幸福。
                          <br><br>
                          在活動期間，凡購買指定的奶茶、紅茶類飲品，即可獲得精美禮品一份，讓您的畢業季更加難忘！同時，我們也推出了限量特惠組合，讓您以優惠價格一次品味多款美味飲品，更多驚喜等您發現！
                          <br><br>
                          除了美味飲品外，我們還準備了精彩的畢業季活動，包括抽獎、拍照打卡等互動環節，讓您與親朋好友共同分享美好時光，留下珍貴的回憶。快來我們的店鋪，加入我們的「畢業季快樂飲」活動，一起共度難忘的畢業季吧！               
                          </strong>
                          </p>
                  </div>
              </div>
          </div>
          <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo">
                      <strong>安心防詐網</strong>
                  </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo">
                  <div class="accordion-body">
                      <img class="cart-new"
                          src="https://www.police.ntpc.gov.tw/Public/Images/201604/0251604130939be33c.png">
                          <p class="pt-3"><strong>親愛的網友，歡迎來到「安心防詐網」！在當今網路時代，詐騙活動層出不窮，給許多人帶來了困擾和損失。我們「安心防詐網」的成立旨在提供一個安全、可靠的平台，幫助大眾辨識和預防各類詐騙行為。
                          <br><br>
                          我們的網站提供了豐富的詐騙資訊和防範指南，涵蓋了網路詐騙、電話詐騙、郵件詐騙等各種形式。我們專業的團隊不斷搜集、整理最新的詐騙案例和騙術手段，並提供有效的防範建議和應對策略，讓您遠離詐騙陷阱，保障您的財產和個人資訊安全。
                          <br><br>
                          此外，我們設置了緊急聯繫通道，供大家報告可疑活動或嫌疑人，我們會及時跟進處理，保護您的權益。我們也鼓勵網友分享自己的詐騙經驗和教訓，相互學習、提高防範意識，共同打造一個更加安全的網絡環境。
                          <br><br>
                          讓我們攜手合作，共同抵禦詐騙風險，維護自身權益，營造一個更加安心的網絡世界！
                      </strong></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
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
