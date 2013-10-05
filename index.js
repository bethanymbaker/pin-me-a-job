function drawTiles() {
	
	// Mimic JSON file
	var txt = '{"tiles":[{"src":"images/Grumpy-Cat.jpg","title":"NO","numberofRepins":0,"pinnedFrom":"Gray Ocean Baker"},{"src":"images/Lil-Bub.jpg","title":"YES","numberofRepins":0,"pinnedFrom":"Ronni"}]}';
	var obj = eval("(" + txt + ")");	
	
	for (i=0; i<obj.tiles.length; i++) {
	
	var canvas = document.createElement('canvas');
	var cat = new Image();
	cat.canvas = canvas;
	cat.context = canvas.getContext('2d');
	cat.onload = function() {
		return function() {
			this.canvas.width = this.width;
			this.canvas.height = this.height;
			this.context.drawImage(this,0,0);
		};
	}();
	cat.src = obj.tiles[i].src;
	document.getElementById("myDiv").appendChild(canvas);
	
	};
	

};
