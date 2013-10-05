function drawTile() {
	
	//Mimic JSON file
	//var txt = '{"tile":[{"src":"images/Grumpy-Cat.jpg","title":"Grump","numberofRepins":1000,"pinnedFrom":"Gray Ocean Baker"}]}';
	var txt = '{"tiles":[{"image":"images/Grumpy-Cat.jpg","title":"NO","numberofRepins":0,"pinnedFrom":"Gray Ocean Baker"},{"image":"images/Lil-Bub.jpg","title":"YES","numberofRepins":0,"pinnedFrom":"Ronni"}]}';
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

function drawTiles() {
	
	var myCanvas = document.createElement('canvas');
	
	
	//myCanvas.style.border = "red 1px solid";
	context = myCanvas.getContext('2d');
	
	myCanvas.width = "365";
	myCanvas.height = "500";
	
	var cat = new Image();
	cat.src = "images/Grumpy-Cat.jpg";
	cat.onload = function() {
		context.drawImage(cat,0,0);
	};
	
	/*context = myCanvas.getContext('2d');
	context.fillStyle = 'red';
    context.strokeStyle = 'black';

    context.font = '20pt Verdana';
    context.fillText('Some text', 50, 50);
    context.strokeText('Some text', 50, 50);

    context.fill();
    context.stroke();*/
	

	document.body.appendChild(myCanvas); // adds the canvas to the body element
	//document.getElementById('someBox').appendChild(canv); // adds the canvas to #someBox
	
}

