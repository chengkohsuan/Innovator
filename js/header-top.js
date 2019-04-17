var data_mnav=[
	{
		page: "index.html",
		page_1: "../index.html",
		page_2: "../../index.html",
		name: "HOME"
	},
	{
		page: "nav_top/tech.html",
		page_1: "../nav_top/tech.html",
		page_2: "../../nav_top/tech.html",
		name: "技術應用"
	},
	{
		page: "nav_top/about.html",
		page_1: "../nav_top/about.html",
		page_2: "../../nav_top/about.html",
		name: "關於我們"
	},
	{
		page: "nav_top/contact.html",
		page_1: "../nav_top/contact.html",
		page_2: "../../nav_top/contact.html",
		name: "聯絡我們"
	},
];

var vm_ntop=new Vue({
	el: "nav.main-nav",
  	data: {
  		main: data_mnav
  	}
});

var data_pnav=[
	{
		page: "../arc/arc.html",
		name: "AA",
		tags: [
		{
			page: "",
			name: "111",
		},
		{
			page: "",
			name: "222",
		},
		{
			page: "",
			name: "333",
		},
		{
			page: "",
			name: "444",
		},
		{
			page: "",
			name: "555",
		},
		{
			page: "",
			name: "666",
		},
		],

	}
];

var vm_nbottom=new Vue({
	el: "#pd-nav",
	data: {
		pd: data_pnav
	}
});
