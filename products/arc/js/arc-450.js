$(function(){
	$(".layer-1 > li").hover(function(){
		$(this).children('.layer-2').css('display','block');
	},function(){
		$(this).children('.layer-2').css('display','none');
	});
});

var product_data={
  pd_infos:[
  {
    name: "商品一",
    text: "LKJHGFDSAPOIUYTREWQ><MNBVCXZLKJHGFDSAPOIUYTREWQ><MNBVCXZLKJHGFDSAPOIUYTREWQ><MNBVCXZLKJHGFDSAPOIUYTREWQ><MNBVCXZLKJHGFDSAPOIUYTREWQ><MNBVCXZLKJHGFDSAPOIUYTREWQ><MNBVCXZ",
    features: ["AAA","BBB","CCC"],
    specs: ["XXX","YYY","ZZZ"],
  },
  {
    name: "商品二",
    text: "LKJHGFDSAPOIUYTREWQ><MNBVCXZLKJHGFDSAPOIUYTREWQ><MNBVCXZLKJHGFDSAPOIUYTREWQ><MNBVCXZLKJHGFDSAPOIUYTREWQ><MNBVCXZLKJHGFDSAPOIUYTREWQ><MNBVCXZLKJHGFDSAPOIUYTREWQ><MNBVCXZ",
    features: ["AAA","BBB","CCC"],
    specs: ["XXX","YYY","ZZZ"],
  },
  {
    name: "商品三",
    text: "LKJHGFDSAPOIUYTREWQ><MNBVCXZLKJHGFDSAPOIUYTREWQ><MNBVCXZLKJHGFDSAPOIUYTREWQ><MNBVCXZLKJHGFDSAPOIUYTREWQ><MNBVCXZLKJHGFDSAPOIUYTREWQ><MNBVCXZLKJHGFDSAPOIUYTREWQ><MNBVCXZ",
    features: ["AAA","BBB","CCC"],
    specs: ["XXX","YYY","ZZZ"],
  }],
};

var vm_1=new Vue({
  el: "#infos",
  data: product_data
});

