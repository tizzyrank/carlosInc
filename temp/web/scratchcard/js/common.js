$(function(){
	var isDrawing, lastPoint;
	var	canvas       = document.getElementById('canvas'),
		canvasWidth  = 414,
		canvasHeight = 715,
		ctx          = canvas.getContext('2d'),
		image        = new Image(),
		brush        = new Image();

	image.src = 'img/bg_outside.jpg'
	image.onload = function() {
		canvas.width = canvasWidth;
		canvas.height = canvasHeight;
		ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);
	};
	brush.src = 'img/brush.png';

	canvas.addEventListener('mousedown', handleMouseDown, false);
	canvas.addEventListener('touchstart', handleMouseDown, false);
	canvas.addEventListener('mousemove', handleMouseMove, false);
	canvas.addEventListener('touchmove', handleMouseMove, false);
	canvas.addEventListener('mouseup', handleMouseUp, false);
	canvas.addEventListener('touchend', handleMouseUp, false);

	function distanceBetween(point1, point2) {
		return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
	}

	function angleBetween(point1, point2) {
		return Math.atan2( point2.x - point1.x, point2.y - point1.y );
	}

	// 百分比計算
	function getFilledInPixels(stride) {
		if (!stride || stride < 1) { stride = 1; }

		var pixels   = ctx.getImageData(0, 0, canvasWidth, canvasHeight),
		    pdata    = pixels.data,
		    l        = pdata.length,
		    total    = (l / stride),
		    count    = 0;

		for(var i = count = 0; i < l; i += stride) {
			if (parseInt(pdata[i]) === 0) {
				count++;
			}
		}
		return Math.round((count / total) * 100);
	}

	function getMouse(e, canvas) {
		var offsetX = 0, offsetY = 0, mx, my;

		if (canvas.offsetParent !== undefined) {
			do {
				offsetX += canvas.offsetLeft;
				offsetY += canvas.offsetTop;
			} while ((canvas = canvas.offsetParent));
		}
		mx = (e.pageX || e.touches[0].clientX) - offsetX;
		my = (e.pageY || e.touches[0].clientY) - offsetY;
		return {x: mx, y: my};
	}

	function handlePercentage(filledInPixels) {
		filledInPixels = filledInPixels || 0;
		console.log(filledInPixels+'%');
		if (filledInPixels > 80) {
		  canvas.parentNode.removeChild(canvas);
		}
	}

	function handleMouseDown(e) {
		isDrawing = true;
		lastPoint = getMouse(e, canvas);
	}

	function handleMouseMove(e) {
		if (!isDrawing) { return; }

		e.preventDefault();

		var currentPoint = getMouse(e, canvas),
		    dist = distanceBetween(lastPoint, currentPoint),
		    angle = angleBetween(lastPoint, currentPoint),
		    x, y;

		for (var i = 0; i < dist; i++) {
		  x = lastPoint.x + (Math.sin(angle) * i) - 25;
		  y = lastPoint.y + (Math.cos(angle) * i) - 25;
		  ctx.globalCompositeOperation = 'destination-out';
		  ctx.drawImage(brush, x, y);
		}
		lastPoint = currentPoint;
		handlePercentage(getFilledInPixels(32));
	}

	function handleMouseUp(e) {
		isDrawing = false;
	}
});