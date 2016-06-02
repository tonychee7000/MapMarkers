// Add your own markers to this file.

var MAPCRAFTER_MARKERS = [
	// just one example marker group
	{
		// id of the marker group, without spaces/other special chars
		"id" : "landmarks",
		// name of the marker group, displayed in the webinterface
		"name" : "地标建筑",
		// icon of the markers belonging to that group (optional)
		"icon" : "world.png",
		// size of that icon
		"iconSize" : [16, 16],
		// whether this marker group is shown by default (optional)
		"showDefault" : true,
		// markers of this marker group...
		"markers" : {
			// ...in the world "world"
			"world" : [
				{"pos" : [0, 0, 64], "title" : "零点纪念碑", "icon" : "tower.png", "iconSize" : [16, 16]},
				{"pos" : [230, 350, 64], "title" : "出生点", "icon" : "world.png", "iconSize" : [16, 16]},
				{"pos" : [241, 49, 64], "title" : "创造世界穿越点", "icon" : "portal.png", "iconSize" : [16, 16]},
			],
			"CREATIVE": [
				{"pos" : [3026, 3027, 64], "title" : "药丸 by:TonyChyi & cth451", "icon" : "anchor.png", "iconSize" : [16, 16]},
				{"pos" : [3093, 2953, 64], "title" : "主世界穿越点", "icon" : "portal.png", "iconSize" : [16, 16]},
				{"pos" : [3133, 2957, 64], "title" : "彩虹酒店 by:leo_song", "icon" : "building.png", "iconSize" : [16, 16]},
				{"pos" : [3069, 2970, 64], "title" : "RAmen by:TonyChyi", "icon" : "pin.png", "iconSize" : [16, 16]},
				{"pos" : [2971, 3008, 64], "title" : "Linux by:TonyChyi", "icon" : "pin.png", "iconSize" : [16, 16]},
				{"pos" : [2869, 3000, 64], "title" : "KDE Icons by:Icenowy", "icon" : "pin.png", "iconSize" : [16, 16]},
				{"pos" : [2821, 2856, 64], "title" : "炮姐 by:leo_song", "icon" : "pin.png", "iconSize" : [16, 16]},
			]
		},
	},
	{
	    "id": "homes",
	    "name": "玩家住宅",
	    "icon": "house.png",
	    "iconSize": [16, 16],
	    "showDefault": true,
	    "markers": {
	        "world": [],
	    },
	}
];
