$(document).ready(function(){
	var n = $(".jsClick");
	var videoPlay = $(".header__Cours--Articl");
	function webview(t) {
		$(t).click(function(){
			$(".none").slideToggle();
			$(t).parent().remove();
		});
	}
	webview(n)

	function showPlay(element) {
		$(element).click(function() {
			$(".Articl--Figure img").fadeOut('fast');
			$("video").css('display','block');


			//None Cap
			$(".container--Icon").css('display','none');
			//Playing Video
			document.getElementById("showvideo").play();

		});
	}

	showPlay(videoPlay)

	function stripe(){

		$(".payment, .linkBuy").click(function(e){
			e.preventDefault();

			var $button = $(this);
			var $form = $button.parents('form');

			var opts = $.extend({}, $button.data(), {
				token: function(result) {
                        $form.append($('<input>').attr({ type: 'hidden', name: 'stripeToken', value: result.id })).submit();
                    	
                        $.ajax({
                        	url: 'new',
                        	type: 'POST',
                        	dataType: 'JSON',
                        	contentType: 'application/json',
                        	data: JSON.stringify({
                        		resultado: result
                        	}),
                        	success: function(data){
                        		fnTheme(data);
                        	},
                        	error: function(err){

                        	}
                        });
                    }

			});

			StripeCheckout.open(opts);

			return false;

		});


	}
	stripe();


	function fnTheme(data){
		var theme = "<div class='container-fluid successUserBg'></div>"+
					"<div class='container successUser'>"+
						"<div class='row'>"+
							"<div class='col-md-12'>" +
								"<header class='headerSuccess'><h2 class='title'>Felicidades</h2></header>" +
								"<figure class='figure'><img src='https://scontent-grt2-1.xx.fbcdn.net/v/t1.0-1/p160x160/14238254_340746319649533_2462327527717628267_n.jpg?oh=32a8e777071336b6becfdd6b603f6ff7&oe=587EDB74' alt='carrerasdelfuturo'></figure>" +
								"<div class='usershow'>"+
									"<div class='usershow--Name'>"+
										"<span><strong>Email</strong>: "+data.email+"</span>"+
									"</div>"+
									"<div class='usershow'>"+
										"<span><strong>Password</strong>: "+data.password+"</span>"
									+"</div>"+
									"<div class='usershow--Login'>"+
										"<a href='login' class='link'>Ingresar</a>"
									+"</div>"+
								"</div>"+
							"</div>"+
						"</div>"+
					"</div>";
		$("body").append(theme);
	}


	function slider(t){
		var _img = $(".subHeader");
		var _img__Other = '../images/bg2.jpg';

		setTimeout(function(){
			$(_img).css('background-image', 'url("'+_img__Other+'")').fadeIn('slow');
		}, t);


	}
	slider(100000);

	var editProfile = function() {
		//item Select
		$('.linkEdit').click(item);
		
		function item() {

			$(".editProfileForm").append('<input type="hidden" name="toaccess" value="pdoxlurjhgf" >');

			//Actuality Button
			var _actualityBTN = '<input type="submit" class="linkEdit" value="Guardar Perfil">';

			//Show event to click
			var _arr_Elements = ['.jsName', '.jsNickname'];

			var _img_Change = '<div class="changeIMG"><label for="img">Seleccíone una imagen</label><input type="file" id="img" name="avatar" style="display:none;"></div>';

			$(this).after(_actualityBTN);

			$(".profileView--Figure").append(_img_Change);

			_arr_Elements.map(function(element, index, arr){
				$(element).attr('contenteditable', 'true');
				$(element).css({
					'border': '1px solid #dedede',
					'transition': 'all 0.5s linear',
					'background': '#dedede',
					'outline': 'medium none',
					'padding': '0.5em',
					'color': '#0a8ecd !important',
					'width': '340px',
					'margin': '0 0 0.5em 0',
					'box-shadow': '0 0 5px #807e7e'
				});
			});

			viewIMG($("#img"));
		}


		function viewIMG(data) {
			$(data).change(function(e){
				var path = e.target.value;
				
				$(".changeIMG").addClass('successAvatar');
				$(".changeIMG label").text('Su imagen se selecciono')

				setTimeout(function(){
					$(".changeIMG").removeClass('successAvatar');
				}, 2500);

			});
		}
	}
	editProfile();

	

});