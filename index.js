function drawTile() {
	
	//Mimic JSON file
	var txt = '{"tile":[{"src":"images/Grumpy-Cat.jpg","title":"Grump","numberofRepins":1000,"pinnedFrom":"Gray Ocean Baker"}]}';
	var obj = eval("(" + txt + ")");
		
	var canvas = document.getElementById("b");
	var context = canvas.getContext("2d");
	var cat = new Image();
	
	cat.onload = function() {
		context.drawImage(cat,0,0);
		context.font = "bold 12px sans-serif";
		context.fillText(obj.tile[0].title,0,300);
		context.fillText("Pinned from: "  + obj.tile[0].pinnedFrom,0,350);
	};
	
	cat.src = obj.tile[0].src;
	
};
