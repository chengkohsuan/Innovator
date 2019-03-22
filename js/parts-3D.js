
var pd_infos=[
  {
    show_title: true,
    title: "Praxair 3D列印TruForm™金屬粉末",
    show_text: true,
    text: "隨著增材製造的迅速發展，Praxair正在以相同的速度研發粉末，適用於粉體床式、雷射覆焊式，以及冷氣體動力噴塗成型等各種3D列印製程。鈷、鐵、鎳和鈦金屬粉末呈現球形、高流動性、均勻堆積，所製備的塗層密度一致、厚度均勻，有助於3D列印部件的機械性能，並能滿足3D列印部件所需規格。 Praxair可以依需求訂製顆粒大小和化學成分比，以確保成品符合性能和表面整潔度之規格與標準。",
    show_features: true,
    features: ["符合航太等級","粉體流動性高","堆積均勻","密度高"],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_1=new Vue({
  el: "#infos",
  data: {
  products: pd_infos,
  }
});