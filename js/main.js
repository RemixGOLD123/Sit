//  Preloader
window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
	  document.body.classList.add('loaded');
	  document.body.classList.remove('loaded_hiding');
	}, 500);
  }
 
 /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 80
        }, 1500);
    });

// header sticky
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// scroller sticky
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 1) {
        $('.scroller').fadeIn();
    } else {
        $('.scroller').fadeOut();
    }
});
$(document).ready(function() {
    $(".scroller").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
// block3 video
   

// block slider
$(document).ready(function(){
  $('.block5__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
	slidesToScroll: 2,
	responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		  }
		},
	]
  });
});


function findVideos() {
	let videos = document.querySelectorAll('.video');

	for (let i = 0; i < videos.length; i++) {
		setupVideo(videos[i]);
	}
}

function setupVideo(video) {
	let link = video.querySelector('.video__link');
	let media = video.querySelector('.video__media');
	let button = video.querySelector('.video__button');
	let id = parseMediaURL(media);

	video.addEventListener('click', () => {
		let iframe = createIframe(id);

		link.remove();
		button.remove();
		video.appendChild(iframe);
	});

	link.removeAttribute('href');
	video.classList.add('video--enabled');
}

function parseMediaURL(media) {
	let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
	let url = media.src;
	let match = url.match(regexp);

	return match[1];
}

function createIframe(id) {
	let iframe = document.createElement('iframe');

	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('allow', 'autoplay');
	iframe.setAttribute('src', generateURL(id));
	iframe.classList.add('video__media');

	return iframe;
}

function generateURL(id) {
	let query = '?rel=0&showinfo=0&autoplay=1';

	return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();

// block10	

$('.bl').on('click', function() {
	var add = $(this).closest('ul').find('.a');
	$('.a').not(add).slideUp(400); // сворачиваем все блоки, кроме необходимого
	$(this).closest('ul').find('.a').slideToggle(400); // разворачиваем необходимый блок
  });



  // Модальное окно

// открыть по кнопке
$('.header__call,.marquiz__container a,.call,.marquiz__container a').click(function() { 
	
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		
	}
});