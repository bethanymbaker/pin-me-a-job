function drawTiles() {
	
	// Mimic JSON file
	var txt = '{"tiles":[{"src":"images/Grumpy-Cat.jpg","title":"NO","numberofRepins":0,"pinnedFrom":"Gray Ocean Baker"},{"src":"images/Lil-Bub.jpg","title":"YES","numberofRepins":0,"pinnedFrom":"Ronni"},{"src":"images/Nyan-Cat.jpg","title":"Poptart","numberofRepins":0,"pinnedFrom":"Muffin"}]}';
	var obj = eval("(" + txt + ")");	
	
	tilesArray = [];
	for (i=0; i<obj.tiles.length; i++) {		
		tilesArray[i] = new Tile(i,obj.tiles[i]);
	};
	
};

function Tile(elementId,info) {
	this.id = elementId;
	this.title = info.title;
	this.numberOfRepins = info.numberOfRepins;
	this.pinnedFrom = info.pinnedFrom;

	var self = this;
	this.image = new Image();
	this.image.onload = function() {
		return function() {
		var canvas = document.createElement('canvas');
		var context = canvas.getContext('2d');
		canvas.width = this.width;
		canvas.height = this.height + 50;
		context.drawImage(this,0,0);
		context.font = "bold 12px sans-serif";
		context.fillText(self.title,5,this.height+25);
		document.getElementById('wrapper').appendChild(canvas);
		};
	}();
	this.image.src = info.src;
	
};