$(function(){

	var carouselList = $("#carousel ul");
	
	
	var intervalId=0;

	function setDefaultInterval() {
		
		intervalId = setInterval(changeSlide, 3000); 
		
	};

	
	function changeSlide() {

		changePagination();
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
			
	
		function moveFirstSlide() {
			var firstItem = carouselList.find("li:first");
			var lastItem = carouselList.find("li:last");

			lastItem.after(firstItem);
			carouselList.css({marginLeft:0});
			changePagination();
		};
	};

	function moveFirstSlideBack(){
		    var firstItem = carouselList.find("li:first");
		    var lastItem = carouselList.find("li:last");
		    firstItem.before(lastItem);
		    carouselList.css({marginLeft:-400});
		};
	
	function changeSlideBack(){
		clearInterval(intervalId);
	    moveFirstSlideBack();
	    changePagination();
		carouselList.animate({'marginLeft':0}, 500, setDefaultInterval());
		   
	};

	$('#goRight').click(function(){
		
		stopInterval();	
	    changeSlide();
	    setDefaultInterval()
	    
	  });

	$('#goLeft').click(function(){
		
		stopInterval();	
	    changeSlideBack();
	    
	    
	});

	setDefaultInterval();

	function stopInterval() {
		clearInterval(intervalId);
	};

	
	function changePagination() {
		var currentSlide = carouselList.find("li:first");
		var clickedButton = $('.change-slide');
		var currentSlideNum = currentSlide.attr('data-slide');

		clickedButton.each(function(index, element) {
			if ((index + 1 ) == currentSlideNum) {
				$(element).addClass('active')
			} else {
				$(element).removeClass('active');
			}

		})
	}

});	