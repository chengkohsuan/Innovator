var data_sidebar=[
  {
    page: "asider-robotics.html",
    name: "自動化設備",
  },
  {
    page: "asider-enclosure.html",
    name: "隔音間",
  },
  {
    page: "asider-dustcollecter.html",
    name: "集塵系統設備",
  },
  {
    page: "asider-spraywatch.html",
    name: "噴塗監控系統",
  },
];

var vm_sidebar=new Vue({
  el: "aside",
  data: {
    tag: "asider.html",
    tag_name: "周邊輔助設備",
    sidemenu: data_sidebar,
  }
});

var data_dust=[
  {
    pic: "../../image/asider-dustcolletor.jpg",
    show_title: true,
    title: "集塵系統",
    show_text: true,
    text: "採用美國Donaldson原廠濾心，可隔絕99.999%的0.5微米以上顆粒，專利文氏管設計，可提高濾材壽命。",
    show_features: false,
    features: ["","",""],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_1=new Vue({
  el: "#content_dust",
  data: {
  products: data_dust,
  }
});

Vue.component('table_template', {
  template: '#table-template_dust',
  props: {
    data: {},
    columns: [],
  }
});

var vm_1_1= new Vue({
  el: '#table_dust',
  data: {
    tableTitle: "",
    tableHead: [ "項目", "美國 Donaldson", "其他仿製產品"],
    tableData: [
      {項目 : "表面塗裝", "美國 Donaldson" : "烤漆，300小時鹽霧測試；原廠結構保固10年", 其他仿製產品: "一般烤漆，耐候性差"},
      {項目 : "組裝方式", "美國 Donaldson" : "模組化", 其他仿製產品: "模組化"},
      {項目 : "防爆門", "美國 Donaldson" : "薄膜式設計", 其他仿製產品: "鐵製防爆門，無效果"},
      {項目 : "濾材材質", "美國 Donaldson" : "Donaldson最高等級Ultra Web®", 其他仿製產品: "美國進口濾材"},
      {項目 : "單支濾材面積（平方英呎）", "美國 Donaldson" : "190", 其他仿製產品: "254（仿Donaldson第一代濾材設計）"},
      {項目 : "過濾效果", "美國 Donaldson" : "99.999% @ 0.5 micron", 其他仿製產品: "N/A，無驗證"},
      {項目 : "濾材表面毛深", "美國 Donaldson" : "表面毛深1.5”,粉塵不易深卡入底層，不易變形，不會造成纖維變形妨礙過濾效能", 其他仿製產品: "傳統濾材毛深2”，粉塵易卡入，纖維易變形，阻擋粉塵過濾效果"},
    ]
  }
});



var data_enclosure=[
  {
    show_title: true,
    title: "熱噴塗專用隔音室",
    show_text: true,
    text: "熱噴塗專用高效隔音室，可針對客戶場地空間及製程應用量身打造，採用國外進口止燃型隔音棉，在熱噴塗作業中可以將噪音降至80dBA以下。尺寸從2M*2M到6M*12M，高度可達5M以上，可依客戶需求規劃頂開門、側開門、單開門，及窗戶位置、大小。",
    pics: ["../../image/img-2-enclosure-01.jpg","../../image/img-2-enclosure-02.jpg","../../image/img-2-enclosure-03.jpg"],
    show_features: false,
    features: ["","",""],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_2=new Vue({
  el: "#content_enclosure",
  data: {
  products: data_enclosure,
  }
});



var data_robotic=[
  {
    show_title: true,
    title: "自動化機械手臂設備",
    show_text: true,
    text: "我們可依客戶需求搭配KUKA、發那科、安川機械或ABB之機械手臂進行連動，除機械手臂本體的六軸外可外加三軸（兩軸同動轉台和軌道一軸），達到九軸同動之功能，可更容易噴塗高複雜度之工件，例如葉片。",
    pics: ["../../image/img-2-robotic-01.jpg","../../image/img-2-robotic-02.jpg","../../image/img-2-robotic-03.jpg"],
    show_features: false,
    features: ["","",""],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_3=new Vue({
  el: "#content_robotic",
  data: {
  products: data_robotic,
  }
});



var data_spraywatch=[
  {
    pics: ["../../image/img-2-spraywatch-1.jpg","../../image/img-2-spraywatch-2.jpg","../../image/img-2-spraywatch-3.jpg"],
    show_title: true,
    title: "噴塗監控系統 Spray Watch",
    show_text: true,
    text: "Spray Watch可將噴塗中的顆粒特性進行量化，包括顆粒的溫度、速度、數量、噴塗角度、火焰寬度與基材溫度。藉由以上的數值，可以協助生產者確認每次噴塗的數值是否正確，確保塗層的一致性。而對於開發者而言，量化的顆粒數值可以有效提升開發效率，大幅降低開發成本。",
    show_features: false,
    features: ["","",""],
    show_specs: false,
    specs: ["","",],
  },
  ];

var vm_4=new Vue({
  el: "#content_spraywatch",
  data: {
  products: data_spraywatch,
  }
});

Vue.component('table_template', {
  template: '#table-template_spraywatch',
  props: {
    data: {},
    columns: [],
  }
});

var vm_4_1= new Vue({
  el: '#table_spraywatch',
  data: {
    tableTitle: "",
    tableHead: ["項目", "2S 科研版","4S HS","2i","G"],
    tableData: [
      { 項目: "顆粒溫度（解析度1°C）", "2S 科研版": "1000~4000°C", "4S HS": "1000~4000°C", "2i":"1000~4000°C", "G":"NA"},
      { 項目:"顆粒速度（解析度0.1-5 m/s）", "2S 科研版": "1-2000 m/s", "4S HS": "1-2000 m/s", "2i":"1-2000 m/s", "G":"<1000 m/s"},
      { 項目: "顆粒相對數量（解析度1%）", "2S 科研版": "0~100%", "4S HS": "0~100%", "2i":"0~100%", "G":"0~100%"},
      { 項目: "顆粒大小（解析度5μm）", "2S 科研版": "10-500 μm", "4S HS": "NA", "2i":"NA", "G":"NA"},
      { 項目: "噴塗流束監測位置", "2S 科研版": "-12～12 mm", "4S HS": "-20～20 mm", "2i":"-12～12 mm", "G":"-20～20 mm"},
      { 項目: "噴塗流束監測寬度", "2S 科研版": "1-53 mm", "4S HS": "1-30 mm", "2i":"1-36 mm", "G":"0-40 mm"},
      { 項目: "噴塗角度監測", "2S 科研版": "-10°~+10°", "4S HS": "-15°~+15°", "2i":"-10°~+10°", "G":"-10°~+10°"},
      { 項目: "噴塗角度差異量", "2S 科研版": "0°~15°", "4S HS": "0°~15°", "2i":"0°~15°", "G":"NA"},
      { 項目: "基材溫度", "2S 科研版": "0~500°C", "4S HS": "0~500°C", "2i":"0~500°C", "G":"0~500°C"},
      { 項目: "最大量測體積（立方毫米）", "2S 科研版": "7050", "4S HS": "19000", "2i":"30000", "G":"-"},
      { 項目: "重量", "2S 科研版": "5.5kg", "4S HS": "3kg", "2i":"10kg", "G":"2kg"},
    ]
  }
});