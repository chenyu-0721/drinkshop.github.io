const { defineStore } = Pinia;

export default defineStore("productsStore", {
  // data, methods, computed
  // state, actions, getters
  // 資料建立在 state
  // 給元件使用寫在 getters
  state: () => ({
    products: [
      {
        id: 1,
        title: "檸檬芒果汁",
        imageUrl:
          "https://images.unsplash.com/photo-1546173159-315724a31696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRyaW5rfGVufDB8fDB8fHww",
        price: 60,
        variety: "特調",
        infor:
          "檸檬的酸爽與芒果的甜美相融合，讓您感受到口中的一片熱帶風情。每一口都充滿了水果的天然風味，帶來一股清涼的感覺，讓您在炎熱的夏日中得到舒緩和滿足。",
      },
      {
        id: 2,
        title: "檸檬氣泡水",
        imageUrl:
          "https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        variety: "特調",
        infor: "",
      },
      {
        id: 3,
        title: "檸檬茶飲",
        imageUrl:
          "https://images.unsplash.com/photo-1606444006818-3e66c09f2724?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJsYWNrJTIwdGVhfGVufDB8fDB8fHww",
        price: 50,
        variety: "茶飲",
        infor: "",
      },
      {
        id: 4,
        title: "oreo可可冰沙",
        imageUrl:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWlsayUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D",
        price: 140,
        variety: "冰沙",
        infor: "",
      },
      {
        id: 5,
        title: "珍珠茶飲",
        imageUrl:
          "https://images.unsplash.com/photo-1620360289473-bfafadc16c57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        variety: "茶飲",
        infor: "",
      },
      {
        id: 6,
        title: "拿鐵",
        imageUrl:
          "https://images.unsplash.com/photo-1594489556673-c816408242f5?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 70,
        variety: "特調",
        infor: "",
      },
      {
        id: 7,
        title: "巧克力茶飲",
        imageUrl:
          "https://images.unsplash.com/photo-1621221814631-e8bfdabd5ca4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 50,
        variety: "茶飲",
        infor: "",
      },
      {
        id: 8,
        title: "抹茶拿鐵",
        imageUrl:
          "https://images.unsplash.com/photo-1592284441621-581ebd2e677d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1pbGslMjB0ZWF8ZW58MHx8MHx8fDA%3D",
        price: 50,
        variety: "特調",
        infor: "",
      },
      {
        id: 9,
        title: "可可慕斯",
        imageUrl:
          "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 100,
        variety: "特調",
        infor:
          "一種口感柔滑、香濃可口的甜點，通常以巧克力或可可粉為主要原料製成。這款甜點在製作過程中包含淡奶油、蛋黃、糖和明膠等成分，使其擁有獨特的口感和風味。",
      },
      {
        id: 10,
        title: "肉桂奶茶",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1663928246165-1ab1c85ea324?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 80,
        variety: "茶飲",
        infor:
          "結合了茶葉的清香、牛奶的滑順以及肉桂的獨特風味，帶來了一種豐富而溫暖的口感體驗。每一口都充滿了茶葉和牛奶的香氣，並伴隨著肉桂的溫暖香氣，讓人感受到一種溫暖與舒適。",
      },
      {
        id: 11,
        title: "英式皇家紅茶",
        imageUrl:
          "https://images.unsplash.com/photo-1543721367-74f7de329e51?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        variety: "茶飲",
        infor:
          "其濃厚的口感和獨特的香氣而聞名。有著鮮明的紅棕色澤和濃郁的麥芽香氣，讓人回味無窮。口感上，具有濃厚而豐富的口感，帶有一絲絲的甜味和微苦的余韻，讓人愛不釋手。",
      },
      {
        id: 12,
        title: "英式珍珠奶茶",
        imageUrl:
          "https://images.unsplash.com/photo-1562547256-2c5ee93b60b7?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 30,
        variety: "茶飲",
        infor:
          "以熱紅茶或英式混合茶為基礎，加入適量的牛奶和糖調味，形成濃郁的茶香和奶香。然後再加入台灣特有的珍珠（波霸）或其他類似的珍珠糖，增添口感的層次和趣味性。茶飲的口感可能是濃郁的茶香與柔順的奶香，再加上QQ的珍珠口感，讓人回味無窮。",
      },
      {
        id: 13,
        title: "無憂茶",
        imageUrl:
          "https://images.unsplash.com/photo-1606377695906-236fdfcef767?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 20,
        variety: "茶飲",
        infor:
          "烏龍茶和綠茶各自具有獨特的風味和特點，混合在一起可以產生出更多層次的口感和豐富的風味。烏龍茶通常帶有花香和果香，口感柔和而清爽；而綠茶則帶有濃厚的草香和清新的風味，口感可能稍微帶有苦澀。混合後，同時享受到兩種茶的好處，如烏龍茶的清香和綠茶的健康效果",
      },
      {
        id: 14,
        title: "抹茶",
        imageUrl:
          "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 50,
        variety: "茶飲",
        infor:
          "傳統的日本茶，由磨成粉末的綠茶製成，常用於茶道和日本料理中。茶呈現出獨特的濃郁香氣和濃烈的綠色色澤。口感上具有濃郁的綠茶風味，並帶有微微的苦澀和甜味。它通常以熱水泡製而成，形成濃稠的茶湯，抹茶不僅具有濃厚的茶香和口感，還含有豐富的營養成分，如抗氧化劑和氨基酸，因此受到廣泛歡迎。",
      },
      {
        id: 15,
        title: "薄荷茶",
        imageUrl:
          "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        variety: "茶飲",
        infor:
          "具有清涼提神的效果。擁有薄荷葉特有的清新香氣和清涼味道。口感上帶有清新的薄荷味，並伴隨著微微的甜味。薄荷茶常被用作消化不良或者解渴的飲品。",
      },
      {
        id: 16,
        title: "烏龍茶飲",
        imageUrl:
          "https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 30,
        variety: "茶飲",
        infor:
          "這款茶可能擁有烏龍茶特有的香氣和風味，介於綠茶和紅茶之間，帶有清新的花香和果香。口感上，具有烏龍茶的濃郁香氣和柔和的甜味，並帶有微微的苦澀。",
      },
      {
        id: 17,
        title: "大吉嶺茶飲",
        imageUrl:
          "https://images.unsplash.com/photo-1620342942051-ab6a9d92eda4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        variety: "茶飲",
        infor:
          "大吉嶺茶飲是以斯里蘭卡大吉嶺地區（Ceylon）出產的茶葉製成的飲品，帶有清新的花香和淡淡的果香氣息。口感上，具有濃郁的茶香和柔和的甜味，並帶有微微的苦澀，讓人在炎熱的天氣中感受到涼爽的舒適感。",
      },
      {
        id: 18,
        title: "祁門茶飲",
        imageUrl:
          "https://images.unsplash.com/photo-1572889439628-d9a9af986c31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 50,
        variety: "茶飲",
        infor:
          "擁有祁門紅茶特有的香氣和風味，帶有濃郁的鮮香和花果的香氣。口感上，具有濃厚的茶香和淡淡的甜味，並且帶有微微的苦澀，讓人在炎熱的天氣中感受到涼爽的舒適感。",
      },
      {
        id: 19,
        title: "日月潭茶飲",
        imageUrl:
          "https://images.unsplash.com/photo-1597318109735-d3612887d1ad?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 30,
        variety: "茶飲",
        infor:
          "日月潭特有的高山茶或碧螺春等茶葉為基礎。這款茶飲擁有茶的清香和獨特的風味，帶有微微的甜味和清新的花果香氣。口感上，兼具滑順和濃郁，讓人一飲即感到清涼舒爽。無論是在寒冷的冬天還是炎熱的夏季，日月潭茶飲都能給人帶來一份愉悅和清新的享受，讓您感受到台灣茶文化的魅力。",
      },
      {
        id: 20,
        title: "阿薩姆珍珠茶飲",
        imageUrl:
          "https://images.unsplash.com/photo-1592318730259-6f18a6ba1c29?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 60,
        variety: "茶飲",
        infor:
          "每一口都充滿了阿薩姆茶的深厚風味和珍珠的彈牙口感，帶來一種獨特的茶香饗宴。阿薩姆珍珠茶飲伴隨著微微的甜味，讓口感更加豐富柔和。珍珠的口感豐富，使得飲品更加有趣和美味。無論是在寒冷的冬日還是炎熱的夏日，阿薩姆珍珠茶飲都能為您帶來一份濃郁、美味和驚喜，讓您享受到一場珍珠茶的獨特魅力。",
      },
      {
        id: 21,
        title: "阿薩姆茶飲",
        imageUrl:
          "https://images.unsplash.com/photo-1578335729120-279f54506af5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        variety: "茶飲",
        infor:
          "每一口都充滿了阿薩姆茶的獨特風味和茶香氣息，帶來一種濃郁醇厚的味覺享受。阿薩姆茶飲帶有微微的苦澀，同時也伴隨著些許的甜味，讓口感更加豐富柔和讓人沉醉其中。無論是在寒冷的冬日還是炎熱的夏日，阿薩姆茶飲都能為您帶來一份濃郁、美味和溫暖，讓您享受到一場茶香的饗宴。",
      },
      {
        id: 22,
        title: "草莓氣泡水",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1675949335489-f778abf84197?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 120,
        variety: "特調",
        infor:
          "每一口都充滿了草莓的天然香甜和氣泡水的清涼氣息，讓人感受到一種清爽的果香氛圍。草莓的酸甜和氣泡水的氣泡結合在一起，帶來了一種口感豐富、愉悅的味覺享受。",
      },
      {
        id: 23,
        title: "檸檬蘇打",
        imageUrl:
          "https://images.unsplash.com/photo-1609951651556-5334e2706168?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 50,
        variety: "特調",
        infor:
          "擁有檸檬的酸爽和蘇打水的氣泡，每一口都充滿了清涼和活力。檸檬的酸味與蘇打水的氣泡相互融合，帶來了一種獨特的口感享受，讓您在炎熱的夏日中感受到一絲清涼和舒適。這款飲品還可能帶有微微的甜味，增添口感層次，讓您感受到一種愉悅的味覺享受。",
      },
      {
        id: 24,
        title: "藍色海洋",
        imageUrl:
          "https://images.unsplash.com/photo-1587888637140-849b25d80ef9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        variety: "特調",
        infor:
          "這款飲品是一種以藍色為主題的綜合果汁。口感上帶有清涼的果味和一絲微妙的甜味，仿佛在海風中感受到的清新和涼爽。可能還帶有些許酸味，讓您感受到一種清爽的刺激感。",
      },
      {
        id: 25,
        title: "消暑柳橙汁",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1675667381451-be2fc08a122e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 30,
        variety: "特調",
        infor:
          "每一口都彷彿是在享受一片清涼的柳橙果肉，滋潤口腔，帶來一股陣陣的涼意。口感清爽柔滑，讓人仿佛置身於柳橙園中，感受到微風拂過的涼爽。這款飲品不僅能解渴消暑，還能為您補充水分和維生素C，讓您在夏日中保持清爽和健康。",
      },
      {
        id: 26,
        title: "柳橙櫻桃汁",
        imageUrl:
          "https://images.unsplash.com/photo-1560526860-1f0e56046c85?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        variety: "特調",
        infor:
          "結合了清新的柳橙和甜美的櫻桃，每一口都充滿了水果的天然風味和果汁的清新感。口感柔滑順口，柳橙的酸甜和櫻桃的甜美完美融合，帶來了一種獨特的口感享受。柳橙櫻桃汁可能還帶有微微的果肉質感，讓您感受到水果的真實存在。",
      },
      {
        id: 27,
        title: "oreo奶昔",
        imageUrl:
          "https://images.unsplash.com/photo-1619158401201-8fa932695178?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 100,
        variety: "特調",
        infor:
          "結合了香濃的牛奶和口感豐富的Oreo餅乾，每一口都充滿了濃濃的奶香和餅乾的香脆。口感滑順柔和，奶昔中還可能夾雜著小碎片的Oreo餅乾，增添了口感層次和咀嚼的樂趣。",
      },
      {
        id: 28,
        title: "桑葚汁",
        imageUrl:
          "https://images.unsplash.com/photo-1563223771-5fe4038fbfc9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 70,
        variety: "特調",
        infor:
          "豐富的口感和營養，每一口都充滿了桑葚的天然甜味和淡淡的酸味。口感柔滑順口，帶有微微的果肉質感，讓您感受到桑葚的獨特風味。桑葚汁可能還帶有淡淡的果香，給予您一種清新怡人的感受。",
      },
      {
        id: 29,
        title: "七彩繽紛",
        imageUrl:
          "https://images.unsplash.com/photo-1599566097412-69d00510d74a?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 100,
        variety: "特調",
        infor:
          "這款飲品可能是一種水果雞尾酒，或者是一種彩色的果汁混合飲料。口感上，它可能結合了各種水果的甜、酸、苦和清涼感，每一口都彷彿在味蕾上綻放一朵繽紛的花朵。無論是在派對上歡聚一堂還是在炎熱的夏日裡解渴，「七彩繽紛」都是讓人愉悅的選擇，帶來美好的口感體驗，彩色的果汁可能讓人心情愉悅，帶來一種色彩斑斕的視覺享受。",
      },
      {
        id: 30,
        title: "香蕉奶昔",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1695035007016-f7976bbb64d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 100,
        variety: "特調",
        infor:
          "滑順的口感和香濃的奶香，每一口都充滿了新鮮香蕉的甜美風味。口感濃郁豐富，奶香與香蕉的香甜交融，帶給您一種愉悅的味覺享受。無論是作為早餐的開胃飲品還是下午的小憩時光，香蕉奶昔都能為您帶來一份清新、美味和營養的享受，讓您感受到愉悅和滿足。",
      },
      {
        id: 31,
        title: "巧克力拿鐵聖代",
        imageUrl:
          "https://images.unsplash.com/photo-1553787499-6f9133860278?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxkcmlua3xlbnwwfHwwfHx8MA%3D%3D",
        price: 130,
        variety: "冰沙",
        infor:
          "濃郁的巧克力味和香醇的咖啡香氣，每一口都充滿了濃郁的口感享受。巧克力的甜美與咖啡的苦澀相融合，帶來了獨特的味覺體驗。口感滑順柔和，讓您感受到一種愉悅的舒適感。",
      },
      {
        id: 32,
        title: "阿薩姆茶飲",
        imageUrl:
          "https://images.unsplash.com/photo-1470162656305-6f429ba817bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 35,
        variety: "茶飲",
        infor:
          "濃郁的茶香和清新的口感，每一口都充滿了阿薩姆茶的濃郁風味和茶葉的香氣。口感濃厚而醇和，帶有微微的甜味，讓您在品嚐的同時感受到一種獨特的愉悅感。無論是在炎熱的夏日還是在寒冷的冬季，阿薩姆茶飲都能為您帶來一絲清涼或溫暖，讓您在每一口中都感受到茶香的魅力，享受茶飲帶來的愉悅和放鬆。",
      },
      {
        id: 33,
        title: "蔓越莓柳橙冰沙",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1681826664053-5f50e4a0c513?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 100,
        variety: "冰沙",
        infor:
          "混合了蔓越莓的微酸和柳橙的清新，每一口都充滿了水果的鮮美風味。口感柔滑順口，帶有清涼的冰沙感，讓您在炎熱的夏日中感受到一絲清涼和愉悅。蔓越莓的微酸與柳橙的清甜完美結合，讓您在每一口中都感受到口感的豐富和層次。",
      },
      {
        id: 34,
        title: "奇異果冰沙",
        imageUrl:
          "https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 120,
        variety: "冰沙",
        infor:
          "結合了奇異果的清新酸甜和冰沙的冰涼爽口，每一口都充滿了奇異果的濃郁風味，口感柔滑順口，帶給您一種清新怡人的感受。奇異果的獨特風味與冰沙的清涼交融，讓您在每一口中都感受到愉悅和滿足。",
      },
      {
        id: 35,
        title: "綜合水果冰沙",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1681826698463-7653724a5214?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 130,
        variety: "冰沙",
        infor:
          "口感豐富，清新果味與冰涼感完美融合，每一口都令人愉悅，口感柔滑順口，帶來極致的享受。混合了多種水果的鮮甜，如草莓、藍莓、芒果等，每一口都彷彿在口中綻放出繽紛的果香。冰沙的口感清涼爽口，給您帶來一股迷人的清新感受，是夏日中最佳的解暑飲品之一。",
      },
      {
        id: 36,
        title: "藍莓冰沙",
        imageUrl:
          "https://images.unsplash.com/photo-1532301634640-d623ab11bb22?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 200,
        variety: "冰沙",
        infor:
          "藍莓的酸甜和冰沙的冰涼相互融合，讓您在每一口中都感受到極致的清涼和愉悅。藍莓的天然甜味與微酸帶來了獨特的口感體驗，口感豐富飽滿，給予您一種清新怡人的味覺享受。",
      },
      {
        id: 37,
        title: "草莓冰沙",
        imageUrl:
          "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 130,
        variety: "冰沙",
        infor:
          "散發著誘人的甜美香氣，帶來清涼的口感享受。每一口都充滿了草莓的鮮美和冰沙的清涼，口感柔軟順滑，仿佛在舌尖上輕柔溶化。草莓的甜味和微酸與冰沙的冰涼交織在一起，帶給您一股清新的味覺衝擊，讓您在炎熱的夏日中感受到一絲清涼與愉悅。",
      },
      {
        id: 38,
        title: "鳳梨冰茶",
        imageUrl:
          "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 70,
        variety: "特調",
        infor:
          "「鳳梨冰茶」帶來清新怡人的口感體驗，結合了鳳梨的爽脆和茶的清香。每一口都讓人感受到鳳梨的甜美和茶的淡雅，清涼的茶香與鳳梨的果香交融，帶來一種獨特的口感享受。無論是在炎熱的夏日或是平常的一天，都能讓您感受到一絲清涼和舒適，讓您在品味的同時享受到身心的放鬆與愉悅。",
      },
      {
        id: 39,
        title: "木瓜牛奶",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1661715440356-ff1ca9ff72ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 60,
        variety: "特調",
        infor:
          "結合了木瓜的濃郁滑順和牛奶的濃郁濕潤。每一口都像是在享受一場柔軟綿密的口感之旅，木瓜的香氣與牛奶的香甜交織在一起，給您帶來無與倫比的愉悅感受。無論是清晨的一杯還是下午的一口，都能讓您感受到濃郁香滑的口感，讓味蕾與心靈同樂。",
      },
    ],
  }),
  getters: {
    sortProducts: ({ products }) => {
      return products.sort((a, b) => a.price - b.price); //價錢小到大
    },
  },
});

/**
 * 
 *
 {
        id: ,
        title: "",
        imageUrl:
          "",
        price: ,
      },

*/
