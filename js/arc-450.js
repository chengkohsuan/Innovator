
var pd_infos=[
  {
    show_title: true,
    title: "Thermion AVD 450 電弧噴塗系統",
    show_sub: false,
    sub:"",
    show_text: true,
    text: "Thermion AVD 450 電弧噴塗系統普遍應用於噴塗工程用塗層或機械元件，也能應用在防蝕製程的塗層，工業上，直徑1/16”至1/8”所有的鋁線、鋅線及鋅鋁合金線線材規格，都能適用這套噴塗系統。一般而言提高線材尺寸噴塗效率也越高，該系統不需使用直徑3/16”或更高尺寸規格的線材，就能達成與鍍鋅保護塗層（galvanic protection coating）一樣優秀的防蝕效果。",
    show_features: true,
    features: ["使用電弧電壓驅動技術（Arc Voltage Drive, AVD）","噴塗作業車專為極端工作環境設計","扇形噴嘴噴塗距離為13’英尺（約4公尺）能製備高品質工業及塗層"],
    show_specs: true,
    specs: ["氣體：80-100 psi @ 65 cfm，進氣口勿小於直徑1/2”","電源：三相交流電 50/60 Hz，230/460/575 V",],
  },
  ];

var vm_1=new Vue({
  el: "#infos",
  data: {
  products: pd_infos,
  }
});

