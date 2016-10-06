$(document).ready(function(){

	
	function person(visionary){
		this.visionary = 'Tecnología y Negocios';
	}

	function areaPerson(){

		var rectOne = '<div class="visionaryPerson"></div>';
		var rectOneCss = $(rectOne).css({
			'position': 'absolute',
			'top': '30%',
			'right': '14%',
			'background-color': 'rgba(255, 255, 255, 0.59)',
			'border-radius': '50%',
			'border': '10px solid transparent',
			'padding': '1em',
			'width': '20px',
			'height': '20px',
			'cursor': 'pointer'
		}).addClass('jsPersonClick');


		//Insert head top user
		$(".jsPerson").before(rectOneCss);


		//LoppHead
		function loopHead(){
			setInterval(function(){
				$(".visionaryPerson").animate({
					opacity: 1
				}, 1000, 'linear', function(e){
					
				});

			}, 1000);

			setInterval(function(){
				$(".visionaryPerson").animate({
					opacity: 0.5
				}, 1000, 'linear', function(e){
				});

			}, 500);
		}

		loopHead();

	}
	areaPerson();



});
