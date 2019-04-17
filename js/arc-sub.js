var data_sidebar=[
  {
    page: "arc-8835.html",
    name: "Praxair 8835/8830",
  },
  {
    page: "arc-bp400.html",
    name: "Praxair BP400",
  },
  {
    page: "arc-coarc.html",
    name: "Praxair CoArc",
  },
  {
    page: "arc-456.html",
    name: "Thermion AVD456",
  },
  {
    page: "arc-450.html",
    name: "Thermion AVD450",
  },
];

var vm_sidebar=new Vue({
  el: "aside",
  data: {
    tag: "arc.html",
    tag_name: "電弧噴塗設備",
    sidemenu: data_sidebar,
  }
});

var data_450=[
  {
    show_title: true,
    title: "Thermion AVD 450 電弧噴塗系統",
    show_text: true,
    text: "Thermion AVD 450 電弧噴塗系統普遍應用於噴塗工程用塗層或機械元件，也能應用在防蝕製程的塗層，工業上，直徑1/16”至1/8”所有的鋁線、鋅線及鋅鋁合金線線材規格，都能適用這套噴塗系統。一般而言提高線材尺寸噴塗效率也越高，該系統不需使用直徑3/16”或更高尺寸規格的線材，就能達成與鍍鋅保護塗層（galvanic protection coating）一樣優秀的防蝕效果。",
    pic: "../../image/arc-450.jpg",
    show_features: true,
    features: ["使用電弧電壓驅動技術（Arc Voltage Drive, AVD）","噴塗作業車專為極端工作環境設計","扇形噴嘴噴塗距離為13’英尺（約4公尺）能製備高品質工業及塗層"],
    show_specs: true,
    specs: ["氣體：80-100 psi @ 65 cfm，進氣口勿小於直徑1/2”","電源：三相交流電 50/60 Hz，230/460/575 V",],
  },
  ];

var vm_1=new Vue({
  el: "#content_450",
  data: {
  products: data_450,
  }
});



var data_456=[
  {
    show_title: true,
    title: "Thermion AVD 456HD電弧噴塗系統",
    show_text: true,
    text: "Thermion的設計可以讓新線材導入時自動改變導輪壓力，不會出現壓力過大或過小的狀態，即使改變不同線徑，也可提供適當的導輪壓力（過大的壓力會使線材表面出現刮痕，甚至讓線材變形，容易導致在噴塗過程中出現卡線的問題）。大多數線材在包裝過程中，會形成螺旋狀，導致在噴塗過程中發生卡線的問題。線材矯直機可避免因卡線而導致故障的情況，且不需任何零件更換，就能切換不同線材，包含各種線徑線材及包芯線。模組化控制系統可自動化控制噴塗系統，提升噴塗品質。透過監測／校正電纜或其他電子元件中的電壓變化，精確維持電弧間隙。能控制噴塗系統中所有的操作功能，如系統啟動、氣流量、送線穩定度等，並確保系統正確地關閉，避免下次啟動時可能出現的異常狀況。",
    pic: "../../image/arc-456hd.jpg",
    show_features: true,
    features: ["滾柱軸承入口導軌可大幅減少導線進入送料器時的摩擦和阻力","電壓儀錶板可供操作人員隨時觀測噴塗系統之電壓變化，噴塗前或過程中，皆可進行電壓調節（於過程中調節更精確）","六輥線驅動器可使送線過程中完全防滑，完全克服由於乾燥、灰塵或線材表面缺陷，所導致的線材摩損","若相關人員發現系統設備在運行過程中出現異常情況，可利用緊急中斷裝置及時中斷設備","安培儀錶板可供操作人員隨時觀測噴塗系統之電流量，噴塗前或過程中，皆可進行電流量調節（於過程中調節更精確）"],
    show_specs: true,
    specs: ["電源：（N / S）450 Amp，三相交流電電壓60 Hz","六輥動力驅動送料機容量：55磅","12.5’前端引線與噴射頭","氣體需求：70 cfm @ 80-100 psi，進氣口直徑不小於1/2”"],
  },
  
  ];

var vm_2=new Vue({
  el: "#content_456",
  data: {
  products: data_456,
  }
});




var data_8835=[
  {
    show_title: true,
    title: "Praxair 8830MHU和8835MHU拉線式電弧噴塗系統",
    show_text: true,
    text: "簡易的操作界面與穩定的系統設備，提供操作員安全與便利的操作環境，並維持塗層品質。該系統優化顆粒霧化和噴霧模式分佈，使8830與8835均具有高沉積效率，使塗層具有良好的鍵結強度、均勻的微觀結構與優異的加工性能。",
    show_features: true,
    features: ["符合CE標準", "電動（8835型）或氣動馬達（8830型）驅動", "手持式（8830型）或機器安裝型（8835型）", "多種噴霧模式", "精確的送線定位", "隨時與自動化系統連接（8835型）", "簡便的參數調整", "可選配ArcJet®、遠程捲軸支架、各種驅動輥等配件提升性能"],
    show_specs: false,
    specs: [""],
  },
  ];

var vm_3=new Vue({
  el: "#content_8835",
  data: {
  products: data_8835,
  }
});

var specdata_8835=[
  {
  s_title: "8835電弧噴槍",
  s_pic: "../../image/arc-8835-01.jpg",
  s_items: ["重量：4 kg","尺寸：長8.3 cm，寬40.6 cm，高8.9 cm","空壓最小需求：35.4 L/min at 60 psi"],
  },
  {
  s_title: "8835電弧噴槍控制台",
  s_pic: "../../image/arc-8835-02.jpg",
  s_items: ["重量：18 kg","尺寸：長63.5 cm，寬30.5 cm，高40.6 cm"],
  },
  {
  s_title: "8830電弧噴槍",
  s_pic: "../../image/arc-8830-01.jpg",
  s_items: ["重量：3.2 kg","尺寸：長8.9 cm，寬30.5 cm，高8.9 cm","空壓最小需求：35.4 L/min at 60 psi"],
  },
  {
    s_title: "8830電弧噴槍控制台",
    s_pic: "../../image/arc-8830-02.jpg",
    s_items: ["重量：16.7 kg","尺寸：長45.7 cm，寬30.4 cm，高42.1 cm"]
  },
  {
    s_title: "TCV400電源供應器",
    s_items: ["重量：205 kg","尺寸：長59 cm，寬82 cm，高92.3 cm","電力需求：輸入電壓220/400V 50Hz；230/480V 60Hz"]
  },
];

var vm_3_1=new Vue({
  el: "#spec_infos_8835",
  data: {
  contents: specdata_8835,
  }
});

Vue.component('table_template', {
  template: '#table-template_8835',
  props: {
    data: {},
    columns: [],
  }
});

var vm_3_2= new Vue({
  el: '#table_8835',
  data: {
    tableTitle: "線材噴塗速率／安培數對照：",
    tableHead: ["線材材料", "Lbs/hr ／100 Amp",],
    tableData: [
      { 線材材料: '鋼', "Lbs/hr ／100 Amp": "10", },
      { 線材材料: '鋁青銅', "Lbs/hr ／100 Amp": "9", },
      { 線材材料: '青銅', "Lbs/hr ／100 Amp": "11", },
      { 線材材料: '銅', "Lbs/hr ／100 Amp": "11", },
      { 線材材料: '鎳合金包藥線', "Lbs/hr ／100 Amp": "8.5", },
      { 線材材料: '鋁', "Lbs/hr ／100 Amp": "6", },
      { 線材材料: '鋅', "Lbs/hr ／100 Amp": "24", }
    ]
  }
});



var data_bp400=[
  {
    show_title: true,
    title: "Praxair BP-400推線式電弧噴塗系統",
    show_text: true,
    text: "Praxair BP-400推線式電弧噴塗系統輕量化的設計可手持且操作靈活，適用於各式場所，也可安裝於機械手臂上進行操做。槍身設計堅固耐用，減少保養維修的時間。",
    pics: ["../../image/img-2-bp400-01.jpg","../../image/img-2-bp400-02.jpg"],
    show_features: true,
    features: ["符合CE標準","數字顯示電壓和電流","多種噴塗模式","可拆卸的送線系統","自動對準空氣帽和導線器"],
    show_specs: false,
    specs: ["",],
  },
  
  ];

var vm_4=new Vue({
  el: "#content_bp400",
  data: {
  products: data_bp400,
  }
});

var specdata_bp400=[
  {
  s_title: "Praxair BP-400",
  s_items: ["重量：1.4 kg"],
  },
  {
  s_title: "送線裝置",
  s_items: ["尺寸：長84 cm，寬33 cm，高41.9 cm"],
  },
  {
  s_title: "TCV400電源供應器",
  s_items: ["尺寸：長59 cm，寬82 cm，高92.3 cm","重量：205 kg","電力需求：輸入電壓220/400V 50Hz，230/480V 60Hz"],
  },
];

var vm_4_1=new Vue({
  el: "#spec_infos_bp400",
  data: {
  contents: specdata_bp400,
  }
});



var data_coarc=[
  {
    show_title: true,
    title: "TAFA 9910i CoArc雙線電弧噴塗系統",
    show_text: true,
    text: "閉迴路控制使系統可以精確的監控並自動調節電壓、噴槍頭部的噴氣壓力和送線速率。功能強大且穩定，可以長時間工作，創造更多可重複的塗層並提升塗層品質。操控界面採用7吋觸控螢幕，使操作人員可以更直覺的進行操控，在系統操作的過程中，會同時記錄所有的操作參數，可進行製程監控，維持塗層品質。系統支援9935電弧噴槍、8830/8835和BP-400系列電弧噴槍。",
    pics: ["../../image/img-2-coarc-01.jpg","../../image/img-2-coarc-02.jpg",],
    show_features: true,
    features: ["採用PLC更穩定的操控系統","閉迴路參數控制","可進行遠程操作","可選「推／拉」送線方式","參數記錄與儲存功能","操作者權限設定","7吋工業觸控螢幕","可搭配現有Praxair TAFA的電弧式噴槍"],
    show_specs: false,
    specs: ["",],
  },
  
  ];

var vm_5=new Vue({
  el: "#content_coarc",
  data: {
  products: data_coarc,
  }
});

var specdata_coarc=[
  {
  s_title: "9910i CoArc雙線電弧噴塗系統",
  s_items: ["尺寸：長46 cm，寬94 cm，高52 cm","重量：27.2 kg","空壓需求：38L/sec @ 100 psi"],
  },
  {
  s_title: "TCV400電源供應器",
  s_items: ["尺寸：長59 cm，寬82 cm，高92.3 cm","重量：205 kg","電力需求：輸入電壓220/400V 50Hz 或230/480V 60Hz"],
  },
];

var vm_5_1=new Vue({
  el: "#spec_infos_coarc",
  data: {
  contents: specdata_coarc,
  }
});
