(function() {
	var inputDown = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'mousedown';
	var inputMove = ('ontouchmove' in document.documentElement) ? 'touchmove' : 'mousemove';
	var inputUp = ('ontouchend' in document.documentElement) ? 'touchend' : 'mouseup';

	var divider = document.querySelector('.divider');
	var handle = document.querySelector('.handle');
	var beforeImg = document.querySelector('.beforeImage');
	var handleClicked = false;
	
	var containerOffset = divider.offsetLeft;
	var containerWidth = divider.offsetWidth;

	window.addEventListener(inputUp, function() { return handleClicked = false });
	handle.addEventListener(inputDown, function() { return handleClicked = true });
	divider.addEventListener(inputMove, handleMove);

	function handleMove(e) {
		var relativeX, slidePercent;

		if (handleClicked) {
		  relativeX = (e.pageX) ? e.pageX : e.touches[0].pageX;
		  slidePercent = (((relativeX - containerOffset) / containerWidth) * 100) + '%';
	  	
	  	resizeBeforeImage(slidePercent);
		}

		return handleClicked;
	}

	function resizeBeforeImage(slidePercent) {
    beforeImg.style.width = slidePercent;
    handle.style.left = slidePercent;

	  return handleClicked;
	}
})();
