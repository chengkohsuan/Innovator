
var vm_text=new Vue({
  el: "#content-middle",
  data: {
    title: "熱噴塗系統規劃 & 硬面超合金耐磨銲材",
    subtitle: "我們著眼於客戶需求，規劃出最合適的整體解決方案",
    p_1: "以熱噴塗製程而言，使用者需要高品質、能符合應用特性的「塗層」，而非自限於特定廠牌或型號的設備，在這樣的理念下，我們的規劃重點也在於，如何協助客戶建立合適且優質的整體系統，包括主系統本身，以及前後端周邊設施、工安環保需求等。",
    p_2: "硬面超合金產品部份，英耐德作為 Deloro Stellite® 台灣總代理，提供最高品質的鈷基合金材料 Stellite® ，以及最先進的 PTA 設備。除各類型常用硬面銲材外，另有鑄件、板材等相關產品。",
  }
});

var data_card=[
  {
    href: "nav_bottom/HVOF/HVOF.html",
    picture: "image/home-pic-box-1.jpg",
    h3: "熱噴塗設備",
  },
  {
    href: "nav_bottom/asider/asider.html",
    picture: "image/home-pic-box-2.jpg",
    h3: "周邊輔助設備",
  },
  {
    href: "nav_top/tech.html",
    picture: "image/home-pic-box-3.jpg",
    h3: "相關技術應用",
  }
];

var vm_card=new Vue({
  el: "#content-bottom",
  data: {
    cont: data_card,
  }
});