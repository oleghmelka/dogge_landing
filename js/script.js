
var first_anim = 0;
var second_anim = 0;
var third_anim = 0;


$(document).ready( function(){



/* --------------------------------- С-Л-А-Й-Д-Е-Р ------------------------------------ */
	$("img").each(function(){
		$(this).attr("src", $(this).attr("src")+ "?" + new Date().getTime());
	})

	heightSet();



	$(window).on('resize', function () {
		setTimeout(function(){
			location.reload();
		}, 1000)
	});


/* --------------------------------- С-Л-А-Й-Д-Е-Р ------------------------------------ */
	$('.arrow-previous img').on('click', function(){
		var sliderLength = $('.active').length;
		var curSlide = Math.ceil(sliderLength/2);
		var i = 1;

		$('[data-target="' + curSlide + '"]').removeClass('current');
		$('[data-target="' + curSlide + '"]').prev().addClass('current');
		$('.active').first().prev().addClass('active');
		$('.active').first().removeClass('before');
		$('.active').last().attr('data-target', 0);
		$('.active').last().addClass('after');
		$('.active').last().removeClass('active');

		var cloneSl = $('.slider-el').last().detach();
		cloneSl.insertBefore($('.slider-el').first());
		cloneSl.removeClass('after');
		cloneSl.addClass('before');

		$('.active').each(function() {
			$(this).attr('data-target', i);
			i++;
		})

		var ad = $('.active-nav').attr('data-slide');
		if (ad > 1) {
			ad--;
		} else {
			ad = 5;
		}
		$('.slider-nav li.active-nav').removeClass('active-nav');
		$('.slider-nav li[data-slide=' + ad + ']').addClass('active-nav');
	})

/* --------------------------------- С-Л-А-Й-Д-Е-Р ------------------------------------ */
	$('.arrow-next img').on('click', function() {
		var sliderLength = $('.active').length;
		var curSlide = Math.ceil(sliderLength/2);
		var i = 1;

		$('[data-target="' + curSlide + '"]').removeClass('current');
		$('[data-target="' + curSlide + '"]').next().addClass('current');
		$('.active').last().next().addClass('active');
		$('.active').last().removeClass('after');
		$('.active').first().attr('data-target', 0);
		$('.active').first().addClass('before');
		$('.active').first().removeClass('active');

		var cloneSl = $('.slider-el').first().detach();
		cloneSl.insertAfter($('.slider-el').last());
		cloneSl.addClass('after');
		cloneSl.removeClass('before');

		$('.active').each(function() {
			$(this).attr('data-target', i);
			i++;
		})
		var ad = $('.active-nav').attr('data-slide');
		if (ad < 5) {
			ad++;
		} else {
			ad = 1;
		}
		$('.slider-nav li.active-nav').removeClass('active-nav');
		$('.slider-nav li[data-slide=' + ad + ']').addClass('active-nav');
	})








/* --------------- В-Е-С-Ь О-С-Т-А-Л-Ь-Н-О-Й Ф-У-Н-К-Ц-И-О-Н-А-Л В Д-О-К-У-М-Е-Н-Т-Р-Е-Д-І-------------------- */








// ----------------- Запускаем акордеон --------------------
     accordion();
    
    $(".active").next(".acordion_content").slideDown();  // со старта первый активный контент развёрнут

 // ------- Кнопка плавного всплытия вверх -------
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

 // ------- Открытие всей таблици при клике на кнопку -------
    $('.third_button button').click(function(){
        
        $(".table_small_opacity").css('opacity','1');
        $(".table_middle_opacity").css('opacity','1');
        $(".table_big_opacity").css('opacity','1');

        $(".table_hidden").slideToggle("slow");

    });


 // ------- Переключатель языков -------
    $('.lang_wrap').click(function(){
        $(".lang_hidden").slideToggle("slow");
    });


    // ------- YOUR REFERRALS -------

     $('.table_left_sub').click(function(){
         $(".referrals_wrap").slideDown("slow");
     });


    $(".referral").click(function(){
        var value = $(this).data('value');
        $(".table_right_sub").html(value);
        $(".referrals_wrap").slideUp("slow"); 
    });



jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".referrals_wrap"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.slideUp("slow"); // скрываем его
        }
    });
});



















})





/* --------------------------------- С-Л-А-Й-Д-Е-Р ------------------------------------ */
function heightSet() {
	var w = $(window).width();
	var h = w * 0.4921875;
	$('.top-section').css('min-height', h);


	$('.slider-el.current img').on('load', function() {
    
    if(w > 1560){
        $('.slider').height($('.slider-el.current')[0].getBoundingClientRect().height);
		}else{
            if (w > 1020) {
                $('.slider').height($('.slider-el.current')[0].getBoundingClientRect().height + 60);
            }else {
                if(w > 800){
                $('.slider').height($('.slider-el.current')[0].getBoundingClientRect().height);
                }else{
                    if(w > 600){
                        $('.slider').height($('.slider-el.current')[0].getBoundingClientRect().height);
                    }else{
                        if(w > 450){
                            $('.slider').height($('.slider-el.current')[0].getBoundingClientRect().height + 60);
                        }else{
                            $('.slider').height($('.slider-el.current')[0].getBoundingClientRect().height + 40);
                        }
                    }
                }   
            }
		}
	})
	

	$('.slider-el.current img').on('load', function() {
		var hEl = 1;
		$('.slider-el').each(function(){
			if (($(this).find('.slide-img').height() + $(this).find('.slide-header').height() + $(this).find('.slide-text').height()) > hEl) {
				hEl = $(this).find('.slide-img').height() + $(this).find('.slide-header').height() + $(this).find('.slide-text').height();
			}
		})
		$('.slider-el').each(function(){
			$(this).height(hEl + 60);
		})
	})

}

/* --------------------------------- С-Л-А-Й-Д-Е-Р ------------------------------------ */
function heightChange() {
	var w = $(window).width();
	var h = w * 0.4921875;
	$('.top-section').css('min-height', h);
	var hEl = 10;
	$('.slider-el').each(function(){
		if (($(this).find('.slide-img').height() + $(this).find('.slide-header').height() + $(this).find('.slide-text').height()) > hEl) {
			hEl = $(this).find('.slide-img').height() + $(this).find('.slide-header').height() + $(this).find('.slide-text').height();
		}
	})
	$('.slider-el').each(function(){
		$(this).height(hEl + 60);
	})



	
	if(w > 800){
		$('.slider').height(hEl + 110);
	}else{
		$('.slider').height(hEl + 140);
	}



    if(w > 300){
        $('.slider').height(370);
    }
    if(w > 376){
        $('.slider').height(500);
    }
    if(w > 500){
        $('.slider').height(600);
    }

/*
    if(w > ){
        $('.slider').height();
    }
*/

}






















/* --------------- В-Е-С-Ь О-С-Т-А-Л-Ь-Н-О-Й Ф-У-Н-К-Ц-И-О-Н-А-Л -------------------- */







// --------------- Плавный скрол --------------------
( function() {

    var links = document.querySelectorAll( '.footer_logo' ),p,h,time,
        fps =  60, duration = 1, distance, inc, cur;

    for( var i = 0; i < links.length; i++ ) {

        links[i].onclick = function(e) {

            e.preventDefault();
            p = document.documentElement.scrollTop;
            var href = this.href.split('#')[1];
            h = document.getElementById( href ).getBoundingClientRect().top + document.documentElement.scrollTop;
            distance = h - p;
            inc = distance/(duration*fps);
            cur = p;
            time = 0;
            timer = setInterval( smoothScroll, 1000/fps );

        }

    }

    function smoothScroll() {
        time += 1/fps;
        cur = easeInOutQuad(time*100/duration, time, p, h, duration);
        if( cur>=h ) {
            clearInterval(timer);
            window.scrollTo(0,h);
            return;
        }
        window.scrollTo(0, cur);
    };

    // t - текущее время
    // b - начальное значение
    // с - макс
    // d - длительность
    function easeInOutQuad(x, t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        } else {
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        }
    }
    

} )();







function accordion(){
    
    $(".acordion_title").on("click", function(){    // на клик по заголовку
        
        if ($(this).hasClass("abierto")) {   // если выбраный заголовок имеет клас "active"
            $(this).removeClass("abierto");  // убираем клас "active"
            $(".acordion_title").next(".acordion_content").slideUp();    // сворачиваем содержимое
        } 
        else {
            $(".acordion_title").removeClass("abierto"); // если выбраный заголовок не имеет клас "active"
            $(this).addClass("abierto"); // добавляем ему клас "active"
            $(".acordion_title").next(".acordion_content").slideUp();    // сворачиваем все остальные блоки
            $(this).next(".acordion_content").slideDown();   // выбранному заголовку раскрываем содержимое
        }

    }); 

};


/* ПАРАЛАКС НА ПЕРВЫЙ БЛОК*/

function Parallax(container) {
    this.parallaxCenterX = window.innerWidth / 2,
    this.parallaxCenterY = window.innerHeight / 2,
    this.container = container;

    this.Init()
    
}

Parallax.prototype.changePosition = function(e) {
    var _this = this;
    this.items.map(function(item) {
        item.transformX = (Math.round((_this.parallaxCenterX - e.clientX) / _this.measure)) * item.multiplier;
        item.transformY = (Math.round((_this.parallaxCenterY - e.clientY) / _this.measure)) * item.multiplier;
        item.element.style.transform = "translate(" + item.transformX + "px, " + item.transformY + "px)";
    })
}

Parallax.prototype.Init = function() {
    var _this = this;
    this.measure = Number(this.container.getAttribute('data-measure'));
    this.getItems();
    this.container.addEventListener('mouseover', function(e) {
        _this.changePosition(e);
    })
    this.container.addEventListener('mousemove', function(e) {
        _this.changePosition(e);
    })
}

Parallax.prototype.getItems = function() {
    var items = Array.from(this.container.querySelectorAll('.parallax__item'));
    items.map(function(item, i) {
        var x = {
            element: item,
            multiplier: Number(item.getAttribute('data-multiplier')),
            transformX: 0,
            transformY: 0
        }
        items[i] = x;
    })
    this.items = items;
}

/* ПАРАЛАКС НА ВТОРОЙ БЛОК*/

function Monets(container) {
    this.parallaxCenterX = window.innerWidth / 2,
    this.parallaxCenterY = window.innerHeight / 2,
    this.container = container;

    this.Init()
    
}

Monets.prototype.changePosition = function(e) {
    var _this = this;
    this.items.map(function(item) {
        item.transformX = (Math.round((_this.parallaxCenterX - e.clientX) / _this.measure)) * item.multiplier;
        item.transformY = (Math.round((_this.parallaxCenterY - e.clientY) / _this.measure)) * item.multiplier;
        item.element.style.transform = "translate(" + item.transformX + "px, " + item.transformY + "px)";
    })
}

Monets.prototype.Init = function() {
    var _this = this;
    this.measure = Number(this.container.getAttribute('data-measure'));
    this.getItems();
    this.container.addEventListener('mouseover', function(e) {
        _this.changePosition(e);
    })
    this.container.addEventListener('mousemove', function(e) {
        _this.changePosition(e);
    })
}

Monets.prototype.getItems = function() {
    var items = Array.from(this.container.querySelectorAll('.parallax__element'));
    items.map(function(item, i) {
        var x = {
            element: item,
            multiplier: Number(item.getAttribute('data-multiplier')),
            transformX: 0,
            transformY: 0
        }
        items[i] = x;
    })
    this.items = items;
}

/* ПАРАЛАКС НА ЧЕТВ₴РТЫЙ БЛОК*/

function Casino(container) {
    this.parallaxCenterX = window.innerWidth / 2,
    this.parallaxCenterY = window.innerHeight / 2,
    this.container = container;

    this.Init()
    
}

Casino.prototype.changePosition = function(e) {
    var _this = this;
    this.items.map(function(item) {
        item.transformX = (Math.round((_this.parallaxCenterX - e.clientX) / _this.measure)) * item.multiplier;
        item.transformY = (Math.round((_this.parallaxCenterY - e.clientY) / _this.measure)) * item.multiplier;
        item.element.style.transform = "translate(" + item.transformX + "px, " + item.transformY + "px)";
    })
}

Casino.prototype.Init = function() {
    var _this = this;
    this.measure = Number(this.container.getAttribute('data-measure'));
    this.getItems();
    this.container.addEventListener('mouseover', function(e) {
        _this.changePosition(e);
    })
    this.container.addEventListener('mousemove', function(e) {
        _this.changePosition(e);
    })
}

Casino.prototype.getItems = function() {
    var items = Array.from(this.container.querySelectorAll('.parallax__el'));
    items.map(function(item, i) {
        var x = {
            element: item,
            multiplier: Number(item.getAttribute('data-multiplier')),
            transformX: 0,
            transformY: 0
        }
        items[i] = x;
    })
    this.items = items;
}


/* ПАРАЛАКС НА ПЯТЫЙ БЛОК*/

function Makak(container) {
    this.parallaxCenterX = window.innerWidth / 2,
    this.parallaxCenterY = window.innerHeight / 2,
    this.container = container;

    this.Init()
    
}

Makak.prototype.changePosition = function(e) {
    var _this = this;
    this.items.map(function(item) {
        item.transformX = (Math.round((_this.parallaxCenterX - e.clientX) / _this.measure)) * item.multiplier;
        item.transformY = (Math.round((_this.parallaxCenterY - e.clientY) / _this.measure)) * item.multiplier;
        item.element.style.transform = "translate(" + item.transformX + "px, " + item.transformY + "px)";
    })
}

Makak.prototype.Init = function() {
    var _this = this;
    this.measure = Number(this.container.getAttribute('data-measure'));
    this.getItems();
    this.container.addEventListener('mouseover', function(e) {
        _this.changePosition(e);
    })
    this.container.addEventListener('mousemove', function(e) {
        _this.changePosition(e);
    })
}

Makak.prototype.getItems = function() {
    var items = Array.from(this.container.querySelectorAll('.parallax__segment'));
    items.map(function(item, i) {
        var x = {
            element: item,
            multiplier: Number(item.getAttribute('data-multiplier')),
            transformX: 0,
            transformY: 0
        }
        items[i] = x;
    })
    this.items = items;
}

/* ПАРАЛАКС НА ШЕСТОЙ БЛОК*/

function Giraf(container) {
    this.parallaxCenterX = window.innerWidth / 2,
    this.parallaxCenterY = window.innerHeight / 2,
    this.container = container;

    this.Init()
    
}

Giraf.prototype.changePosition = function(e) {
    var _this = this;
    this.items.map(function(item) {
        item.transformX = (Math.round((_this.parallaxCenterX - e.clientX) / _this.measure)) * item.multiplier;
        item.transformY = (Math.round((_this.parallaxCenterY - e.clientY) / _this.measure)) * item.multiplier;
        item.element.style.transform = "translate(" + item.transformX + "px, " + item.transformY + "px)";
    })
}

Giraf.prototype.Init = function() {
    var _this = this;
    this.measure = Number(this.container.getAttribute('data-measure'));
    this.getItems();
    this.container.addEventListener('mouseover', function(e) {
        _this.changePosition(e);
    })
    this.container.addEventListener('mousemove', function(e) {
        _this.changePosition(e);
    })
}

Giraf.prototype.getItems = function() {
    var items = Array.from(this.container.querySelectorAll('.parallax__section'));
    items.map(function(item, i) {
        var x = {
            element: item,
            multiplier: Number(item.getAttribute('data-multiplier')),
            transformX: 0,
            transformY: 0
        }
        items[i] = x;
    })
    this.items = items;
}


/* ПАРАЛАКС НА СЕДЬМОЙ БЛОК*/

function Phone(container) {
    this.parallaxCenterX = window.innerWidth / 2,
    this.parallaxCenterY = window.innerHeight / 2,
    this.container = container;

    this.Init()
    
}

Phone.prototype.changePosition = function(e) {
    var _this = this;
    this.items.map(function(item) {
        item.transformX = (Math.round((_this.parallaxCenterX - e.clientX) / _this.measure)) * item.multiplier;
        item.transformY = (Math.round((_this.parallaxCenterY - e.clientY) / _this.measure)) * item.multiplier;
        item.element.style.transform = "translate(" + item.transformX + "px, " + item.transformY + "px)";
    })
}

Phone.prototype.Init = function() {
    var _this = this;
    this.measure = Number(this.container.getAttribute('data-measure'));
    this.getItems();
    this.container.addEventListener('mouseover', function(e) {
        _this.changePosition(e);
    })
    this.container.addEventListener('mousemove', function(e) {
        _this.changePosition(e);
    })
}

Phone.prototype.getItems = function() {
    var items = Array.from(this.container.querySelectorAll('.parallax__dvij'));
    items.map(function(item, i) {
        var x = {
            element: item,
            multiplier: Number(item.getAttribute('data-multiplier')),
            transformX: 0,
            transformY: 0
        }
        items[i] = x;
    })
    this.items = items;
}




/* ПАРАЛАКС НА ВОСЬМОЙ БЛОК*/

function Dog(container) {
    this.parallaxCenterX = window.innerWidth / 2,
    this.parallaxCenterY = window.innerHeight / 2,
    this.container = container;

    this.Init()
    
}

Dog.prototype.changePosition = function(e) {
    var _this = this;
    this.items.map(function(item) {
        item.transformX = (Math.round((_this.parallaxCenterX - e.clientX) / _this.measure)) * item.multiplier;
        item.transformY = (Math.round((_this.parallaxCenterY - e.clientY) / _this.measure)) * item.multiplier;
        item.element.style.transform = "translate(" + item.transformX + "px, " + item.transformY + "px)";
    })
}

Dog.prototype.Init = function() {
    var _this = this;
    this.measure = Number(this.container.getAttribute('data-measure'));
    this.getItems();
    this.container.addEventListener('mouseover', function(e) {
        _this.changePosition(e);
    })
    this.container.addEventListener('mousemove', function(e) {
        _this.changePosition(e);
    })
}

Dog.prototype.getItems = function() {
    var items = Array.from(this.container.querySelectorAll('.parallax__jahoo'));
    items.map(function(item, i) {
        var x = {
            element: item,
            multiplier: Number(item.getAttribute('data-multiplier')),
            transformX: 0,
            transformY: 0
        }
        items[i] = x;
    })
    this.items = items;
}

/* ВЫЗОВ ВСЕХ ПАРАЛАКСОВ*/
window.onload = function() {
    var paral = new Parallax(document.querySelector('.parallax'));
    var monetka = new Monets(document.querySelector('.parallax_dos'));
    var darts = new Casino(document.querySelector('.parallax_tres'));
    var monkey = new Makak(document.querySelector('.parallax_cuatro'));
    var giraffe = new Giraf(document.querySelector('.parallax_cinco'));
    var plane = new Phone(document.querySelector('.parallax_seis'));
    var pes = new Dog(document.querySelector('.parallax_siete'));
}







$(window).scroll(function() {


    var okno = $(window).width();
    if (okno > 1320) {
        $('.robot_left').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+800) {
            $(this).addClass('fadeInUp');
            $(this).addClass('opacity_good');
          }
        });
    }else{
        if (okno > 920) {
            $('.robot_left').each(function(){
              var imagePos = $(this).offset().top;
              var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+500) {
                $(this).addClass('fadeInUp');
                $(this).addClass('opacity_good');
              }
            });
        } else {
            $('.robot_left').each(function(){
              var imagePos = $(this).offset().top;
              var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+100) {
                $(this).addClass('fadeInUp');
                $(this).addClass('opacity_good');
                }
            });
        }
    }

    if (okno > 1320) {
        $('.robot_right').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+800) {
            $(this).addClass('fadeInUp');
            $(this).addClass('opacity_good');
          }
        });
    }else{
        if (okno > 920) {
            $('.robot_right').each(function(){
              var imagePos = $(this).offset().top;
              var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+500) {
                $(this).addClass('fadeInUp');
                $(this).addClass('opacity_good');
              }
            });
        } else {
            $('.robot_right').each(function(){
              var imagePos = $(this).offset().top;
              var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+100) {
                $(this).addClass('fadeInUp');
                $(this).addClass('opacity_good');
                }
            });
        }
    }


    if (okno > 1320) {
        $('.mov').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+600) {
            $(this).addClass('fadeInRight');
            $(this).addClass('opacity_good');
          }
        });
    }else{
        if (okno > 920) {
            $('.mov').each(function(){
              var imagePos = $(this).offset().top;
              var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+400) {
                $(this).addClass('fadeInRight');
                $(this).addClass('opacity_good');
              }
            });
        } else {
            $('.mov').each(function(){
              var imagePos = $(this).offset().top;
              var topOfWindow = $(window).scrollTop();
              if (imagePos < topOfWindow+100) {
                $(this).addClass('fadeInRight');
                $(this).addClass('opacity_good');
                }
            });
        }
    }
    $('.ninth_button_wrap').each(function(){
          var imagePos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+1100) {
            $(this).addClass('fadeInUp');
            $(this).addClass('opacity_good');
          }
    });




});