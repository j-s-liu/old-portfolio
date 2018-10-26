$(document).ready(function(){

	$('.project-container').hover(function(){
        $(this).find('.index-hover').fadeIn(500);
    }, function() {
        $(this).find('.index-hover').fadeOut(500);
    });

    $('.project-container').hover(function(){
        $(this).find('.project-hover').fadeIn(500);
    }, function() {
        $(this).find('.project-hover').fadeOut(500);
    });

    $('.project-container').hover(function(){
        $(this).find('.forum-hover').fadeIn(500);
    }, function() {
        $(this).find('.forum-hover').fadeOut(500);
    });

    $('.project-container').hover(function(){
        $(this).find('.ill-hover').fadeIn(500);
    }, function() {
        $(this).find('.ill-hover').fadeOut(500);
    });

    // lightboxes

    // forum

    $("#forum2").click(function(){
		$("#arce-container").fadeIn(600);
	});

    $("#arce-overlay").click(function(){
		$("#arce-container").fadeOut(600);
	});

	$("#forum1").click(function(){
		$("#sc-container").fadeIn(600);
	});

    $("#sc-overlay").click(function(){
		$("#sc-container").fadeOut(600);
	});

	$("#forum3").click(function(){
		$("#fb-container").fadeIn(600);
	});

    $("#fb-overlay").click(function(){
		$("#fb-container").fadeOut(600);
	});

	$("#forum4").click(function(){
		$("#gcd-container").fadeIn(600);
	});

    $("#gcd-overlay").click(function(){
		$("#gcd-container").fadeOut(600);
	});

    // illustrations

	$("#micah-c").click(function(){
		$("#micah-container").fadeIn(600);
	});

    $("#micah-overlay").click(function(){
		$("#micah-container").fadeOut(600);
	});

	$("#peter-c").click(function(){
		$("#peter-container").fadeIn(600);
	});

    $("#peter-overlay").click(function(){
		$("#peter-container").fadeOut(600);
	});

	$("#rigel-c").click(function(){
		$("#rigel-container").fadeIn(600);
	});

    $("#rigel-overlay").click(function(){
		$("#rigel-container").fadeOut(600);
	});

	$("#tien-c").click(function(){
		$("#tien-container").fadeIn(600);
	});

    $("#tien-overlay").click(function(){
		$("#tien-container").fadeOut(600);
	});

	$("#idk-c").click(function(){
		$("#idk-container").fadeIn(600);
	});

    $("#idk-overlay").click(function(){
		$("#idk-container").fadeOut(600);
	});

    //batchery

    $("#batch1").click(function(){
        $("#b1-container").fadeIn(600);
    });

    $("#b1-overlay").click(function(){
        $("#b1-container").fadeOut(600);
    });

    $("#batch3").click(function(){
        $("#b3-container").fadeIn(600);
    });

    $("#b3-overlay").click(function(){
        $("#b3-container").fadeOut(600);
    });

    $("#batch2").click(function(){
        $("#b2-container").fadeIn(600);
    });

    $("#b2-overlay").click(function(){
        $("#b2-container").fadeOut(600);
    });

    $("#batch4").click(function(){
        $("#b4-container").fadeIn(600);
    });

    $("#b4-overlay").click(function(){
        $("#b4-container").fadeOut(600);
    });

    //art

    $("#art1").click(function(){
        $("#a1-container").fadeIn(600);
    });

    $("#a1-overlay").click(function(){
        $("#a1-container").fadeOut(600);
    });

    $("#art2").click(function(){
        $("#a2-container").fadeIn(600);
    });

    $("#a2-overlay").click(function(){
        $("#a2-container").fadeOut(600);
    });

    $("#art3").click(function(){
        $("#a3-container").fadeIn(600);
    });

    $("#a3-overlay").click(function(){
        $("#a3-container").fadeOut(600);
    });

    $("#art4").click(function(){
        $("#a4-container").fadeIn(600);
    });

    $("#a4-overlay").click(function(){
        $("#a4-container").fadeOut(600);
    });

    $("#art5").click(function(){
        $("#a5-container").fadeIn(600);
    });

    $("#a5-overlay").click(function(){
        $("#a5-container").fadeOut(600);
    });

    $("#art6").click(function(){
        $("#a6-container").fadeIn(600);
    });

    $("#a6-overlay").click(function(){
        $("#a6-container").fadeOut(600);
    });

    //photography

    $("#photo1").click(function(){
        $("#p1-container").fadeIn(600);
    });

    $("#p1-overlay").click(function(){
        $("#p1-container").fadeOut(600);
    });

    $("#photo2").click(function(){
        $("#p2-container").fadeIn(600);
    });

    $("#p2-overlay").click(function(){
        $("#p2-container").fadeOut(600);
    });

    $("#photo3").click(function(){
        $("#p3-container").fadeIn(600);
    });

    $("#p3-overlay").click(function(){
        $("#p3-container").fadeOut(600);
    });

    $("#photo4").click(function(){
        $("#p4-container").fadeIn(600);
    });

    $("#p4-overlay").click(function(){
        $("#p4-container").fadeOut(600);
    });

    $("#photo5").click(function(){
        $("#p5-container").fadeIn(600);
    });

    $("#p5-overlay").click(function(){
        $("#p5-container").fadeOut(600);
    });

    $("#photo6").click(function(){
        $("#p6-container").fadeIn(600);
    });

    $("#p6-overlay").click(function(){
        $("#p6-container").fadeOut(600);
    });

    $("#photo7").click(function(){
        $("#p7-container").fadeIn(600);
    });

    $("#p7-overlay").click(function(){
        $("#p7-container").fadeOut(600);
    });

    $("#photo8").click(function(){
        $("#p8-container").fadeIn(600);
    });

    $("#p8-overlay").click(function(){
        $("#p8-container").fadeOut(600);
    });

    $("#photo9").click(function(){
        $("#p9-container").fadeIn(600);
    });

    $("#p9-overlay").click(function(){
        $("#p9-container").fadeOut(600);
    });

    $("#photo10").click(function(){
        $("#p10-container").fadeIn(600);
    });

    $("#p10-overlay").click(function(){
        $("#p10-container").fadeOut(600);
    });

    // buttons and animations

	$("#button").click(function(){
    	$('body, html').animate({scrollTop: 0}, 600);
	});

	$(".animsition").animsition({
    	inClass: 'fade-in',
    	outClass: 'fade-out',
    	inDuration: 1500,
    	outDuration: 800,
    	linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    	loading: true,
    	loadingParentElement: 'body', //animsition wrapper element
    	loadingClass: 'animsition-loading',
    	loadingInner: '', // e.g '<img src="loading.svg" />'
    	timeout: false,
    	timeoutCountdown: 5000,
    	onLoadEvent: true,
    	browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    	overlay : false,
    	overlayClass : 'animsition-overlay-slide',
    	overlayParentElement : 'body',
    	transition: function(url){ window.location.href = url; }
  	});

});