function drawTiles() {
	
	// Mimic JSON file
	var txt = '{"tiles":[{"src":"images/Grumpy-Cat.jpg","title":"NO","numberofRepins":0,"pinnedFrom":"Gray Ocean Baker"},{"src":"images/Lil-Bub.jpg","title":"YES","numberofRepins":0,"pinnedFrom":"Ronni"},{"src":"images/Nyan-Cat.jpg","title":"Poptart","numberofRepins":0,"pinnedFrom":"Muffin"}]}';
	var obj = eval("(" + txt + ")");	
	
	for (i=0; i<obj.tiles.length; i++) {
	
	var canvas = document.createElement('canvas');
	canvas.style.border = "gray 1px solid";
	var cat = new Image();
	cat.title = obj.tiles[i].title;
	
	cat.canvas = canvas;
	cat.canvas.id = i;
	cat.context = canvas.getContext('2d');
	cat.onload = function() {
		return function() {
			this.canvas.width = this.width;
			this.canvas.height = this.height + 50;
			this.context.drawImage(this,0,0);
			this.context.font = "bold 12px sans-serif";
			this.context.fillText(this.title,0,this.height+25);
		};
	}();
	cat.src = obj.tiles[i].src;
	document.getElementById("myDiv").appendChild(canvas);
	
	};
	

};
