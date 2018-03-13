// seed database with BMW M Cars
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/M5power');
const MCar = require('../models/mcar-model');

const mcars = [
	{
		modelM: "M1",
		year: 1978,
		posts: [],
		specs: ["6 cylinders", "Gasoline", "277HP", "161mph top speed", "0-60 in 5.6 seconds"],
		image: "http://www.eurocarnews.com/media/pictorials/2065/11938.jpg"
	},
	{
		modelM: "M535i",
		year: 1979,
		posts: [],
		specs: ["6 cylinders", "Gasoline", "215HP", "138mph top speed", "0-60 in 7.5 seconds"],
		image: "https://car-images.bauersecure.com/pagefiles/7995/1752x1168/000055bmw_m235i.jpg?mode=max&quality=90&scale=down"
	},
	{
		modelM: "M635CSi",
		year: 1983,
		posts: [],
		specs: ["6 cylinders", "Gasoline", "286HP", "158mph top speed", "0-60 in 6.3 seconds"],
		image: "http://bimmertips.com/wp-content/uploads/2017/02/BMW_E24_M6_635csi_blue_04.jpg"
	},
	{
		modelM: "M5 E28",
		year: 1985,
		posts: [],
		specs: ["6 cylinders", "Gasoline", "286HP", "152mph top speed", "0-60 in 6.5 seconds"],
		image: "http://germancarsforsaleblog.com/wp-content/uploads/2014/11/5718.jpg"
	},
	{
		modelM: "M3 E30",
		year: 1986,
		posts: [],
		specs: ["4 cylinders", "Gasoline", "200HP", "142mph top speed", "0-60 in 6.8 seconds"],
		image: "http://foothillsalesandleasing.com/wp-content/uploads/imgp/BMW-M3-2.3-1986-1-6683.jpg"
	},
	{
		modelM: "M3 E30 Convertible",
		year: 1988,
		posts: [],
		specs: ["4 cylinders", "Gasoline", "200HP", "140mph top speed", "0-60 in 7.4 seconds"],
		image: "https://i.pinimg.com/originals/70/0f/6d/700f6dc02cdec19d11ddb55ecc2f6f9f.jpg"
	},
	{
		modelM: "M5 E34",
		year: 1988,
		posts: [],
		specs: ["6 cylinders", "Gasoline", "315HP", "155mph top speed", "0-60 in 6.3 seconds"],
		image: "https://www.tradebit.com/usr/bornfree/pub/9002/220707606_dsc09790z.jpg"
	},
	{
		modelM: "M5 E34 Touring",
		year: 1992,
		posts: [],
		specs: ["6 cylinders", "Gasoline", "340HP", "155mph top speed", "0-60 in 5.9 seconds"],
		image: "https://13252-presscdn-0-94-pagely.netdna-ssl.com/wp-content/uploads/2017/03/Creative6-940x627.jpg"
	},
	{
		modelM: "M3 E36 Coupe",
		year: 1992,
		posts: [],
		specs: ["6 cylinders", "Gasoline", "286HP", "155mph top speed", "0-60 in 6.0 seconds"],
		image: "http://cdn3.3dtuning.com/info/BMW%20M3%201992%20Coupe/factory/7.jpg"
	},
	{
		modelM: "M3 E36 Sedan",
		year: 1994,
		posts: [],
		specs: ["6 cylinders", "Gasoline", "286HP", "155mph top speed", "0-60 in 6.0 seconds"],
		image: "http://cdn.bmwblog.com/wp-content/uploads/e36-bmw-m3-006.jpg"
	},
	{
		modelM: "M3 E36 Convertible",
		year: 1994,
		posts: [],
		specs: ["6 cylinders", "Gasoline", "286HP", "155mph top speed", "0-60 in 6.2 seconds"],
		image: "https://i.pinimg.com/originals/4e/87/ea/4e87eaf86a3494e521f8c6661ce3d307.jpg"
	},
	{
		modelM: "M8",
		year: 1993,
		posts: [],
		specs: ["12 cylinders", "Gasoline", "381HP", "155mph top speed", "0-60 in 6.0 seconds"],
		image: "http://cdn.bimmertoday.de/wp-content/uploads/BMW-M8-Concept-E31-16.jpg"
	},
	{
		modelM: "Z3M",
		year: 1996,
		posts: [],
		specs: ["6 cylinders", "Gasoline", "321HP", "155mph top speed", "0-60 in 5.4 seconds"],
		image: "http://www.parkwayspecialistcars.co.uk/uploads/product/zoom_BMW_Z3M_3.2_ROADSTER_Collectable_Classic.jpg"
	},
	{
		modelM: "M5 E39",
		year: 1998,
		posts: [],
		specs: ["8 cylinders", "Gasoline", "400HP", "155mph top speed", "0-60 in 5.3 seconds"],
		image: "http://cdn.pinthiscars.com/images/bmw-e39-m5-wallpaper-wallpaper-3.jpg"
	},
	{
		modelM: "M3 E46",
		year: 2000,
		posts: [],
		specs: ["6 cylinders", "Gasoline", "343HP", "155mph top speed", "0-60 in 5.2 seconds"],
		image: "http://www.hdcarwallpapers.com/walls/vorsteiner_bmw_e46_m3-wide.jpg"
	},
	{
		modelM: "M3 E46 Convertible",
		year: 2001,
		posts: [],
		specs: ["6 cylinders", "Gasoline", "343HP", "155mph top speed", "0-60 in 5.5 seconds"],
		image: "https://farm6.staticflickr.com/5667/21644158551_f3b4883fdc_b.jpg"
	},
	{
		modelM: "Z4M E86",
		year: 2006,
		posts: [],
		specs: ["6 cylinders", "Gasoline", "343HP", "155mph top speed", "0-60 in 5.0 seconds"],
		image: "http://farm3.staticflickr.com/2834/12372271693_302f3b6382_b.jpg"
	},
	{
		modelM: "Z4M E85 Roadster",
		year: 2006,
		posts: [],
		specs: ["6 cylinders", "Gasoline", "343HP", "155mph top speed", "0-60 in 5.0 seconds"],
		image: "http://www.acschnitzer-us.com/fileadmin/_processed_/csm_Headerslider_Z4_M_Roadster_E85_01_1fb1cca8b3.jpg"
	},
	{
		modelM: "M5 E60",
		year: 2005,
		posts: [],
		specs: ["10 cylinders", "Gasoline", "507HP", "155mph top speed", "0-60 in 4.7 seconds"],
		image: "http://partsscore.com/wp-content/uploads/2017/03/IMG_5508-920x613.jpg"
	},
	{
		modelM: "M5 E61",
		year: 2007,
		posts: [],
		specs: ["10 cylinders", "Gasoline", "507HP", "155mph top speed", "0-60 in 4.8 seconds"],
		image: "http://cdn.bmwblog.com/wp-content/uploads/m5_touring_07-750x500.jpg"
	},
	{
		modelM: "M6 E63",
		year: 2005,
		posts: [],
		specs: ["10 cylinders", "Gasoline", "507HP", "155mph top speed", "0-60 in 4.6 seconds"],
		image: "https://s1.cdn.autoevolution.com/images/news/gallery/g-power-launches-its-most-powerful-car-yet-the-1001-hp-m6-photo-gallery_4.jpg"
	},
	{
		modelM: "M6 E64 Convertible",
		year: 2006,
		posts: [],
		specs: ["10 cylinders", "Gasoline", "507HP", "155mph top speed", "0-60 in 4.8 seconds"],
		image: "http://australiancar.reviews/_images/reviews/bmw_m6convertible_e64_ser1_05.jpg"
	},
	{
		modelM: "M1 Series E82",
		year: 2011,
		posts: [],
		specs: ["6 cylinders", "Gasoline", "340HP", "155mph top speed", "0-60 in 4.9 seconds"],
		image: "http://www.scopioneusa.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/s/c/scopione_carbon_fiber_bmw_1_series_e82_e88_front_splitters_m_tech_mtech_msport_performance_08_09_10_11_011_4.jpg"
	},
	{
		modelM: "M3 E92",
		year: 2007,
		posts: [],
		specs: ["8 cylinders", "Gasoline", "420HP", "155mph top speed", "0-60 in 4.8 seconds"],
		image: "http://markinternational.info/data/out/285/221217041-m3-e92-wallpapers.jpg"
	},
	{
		modelM: "M3 GTS E92",
		year: 2009,
		posts: [],
		specs: ["8 cylinders", "Gasoline", "450HP", "155mph top speed", "0-60 in 4.8 seconds"],
		image: "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/10q3/357232/bmw-m3-review-2011-bmw-m3-gts-drive-car-and-driver-photo-357928-s-original.jpg?crop=1xw:1xh;center,center&resize=900:*"
	},
	{
		modelM: "M3 E93",
		year: 2008,
		posts: [],
		specs: ["8 cylinders", "Gasoline", "420HP", "155mph top speed", "0-60 in 5.3 seconds"],
		image: "https://s1.cdn.autoevolution.com/images/news/tuned-bmw-e93-m3-convertible-puts-down-376-hp-at-the-wheels-on-the-dyno-video-91109_1.jpg"
	},
	{
		modelM: "M3 E90",
		year: 2007,
		posts: [],
		specs: ["8 cylinders", "Gasoline", "420HP", "155mph top speed", "0-60 in 4.9 seconds"],
		image: "http://cdn.bmwblog.com/wp-content/uploads/2017/01/A-JDM-Style-BMW-E90-M3-Project-1-750x500.jpg"
	},
	{
		modelM: "M3 CRT Sedan E90",
		year: 2007,
		posts: [],
		specs: ["8 cylinders", "Gasoline", "420HP", "155mph top speed", "0-60 in 4.4 seconds"],
		image: "http://cdn.bmwblog.com/wp-content/uploads/2015/12/BMW-M3-CRT-for-sale.jpg"
	},
	{
		modelM: "M5 F10",
		year: 2012,
		posts: [],
		specs: ["8 cylinders", "Gasoline", "560HP", "155mph top speed", "0-60 in 4.4 seconds"],
		image: "http://www.hdcarwallpapers.com/walls/2014_vorsteiner_bmw_f10_m5-wide.jpg"
	},
	{
		modelM: "M6 F12",
		year: 2012,
		posts: [],
		specs: ["8 cylinders", "Gasoline", "560HP", "190mph top speed", "0-60 in 4.3 seconds"],
		image: "http://carlook.net/data/db_photos/bmw/m6/f12_f13/bmw_m6_f12_f13_coupe2d-1695.jpg"
	},
	{
		modelM: "M6 F13 Coupe",
		year: 2013,
		posts: [],
		specs: ["8 cylinders", "Gasoline", "560HP", "190mph top speed", "0-60 in 4.2 seconds"],
		image: "http://www.hamann-motorsport.com/fileadmin/user_upload/assets/fotos/showroom/bmw-m6-f13/bmw_m6_f13_01.jpg"
	},
	{
		modelM: "X6 M E71",
		year: 2009,
		posts: [],
		specs: ["8 cylinders", "Gasoline", "555HP", "171mph top speed", "0-60 in 4.7 seconds"],
		image: "https://i.ytimg.com/vi/1LfcJ_k5Z00/maxresdefault.jpg"
	},
	{
		modelM: "M4",
		year: 2018,
		posts: [],
		specs: ["8 cylinders", "Gasoline", "444HP", "171mph top speed", "0-60 in 4.7 seconds"],
		image: "http://cdn.hiconsumption.com/wp-content/uploads/2017/04/2018-BMW-M4-CS-00.jpg"
	}
];

MCar.create(mcars, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((mcar) => {
    console.log(mcar.modelM)
  });
  mongoose.connection.close();
});