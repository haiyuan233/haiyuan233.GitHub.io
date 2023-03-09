$(function(){
    var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: true,
		live: true
	})
	wow.init()
    if($('.wow').length){$('.wow').attr('data-wow-duration','1.5s')}
    var mySwiper1 = new Swiper('.container_sw',{
        direction : 'vertical',
        mousewheel: true,
        parallax : true,
        speed: 1200,
    })
    var sw1 = new Swiper('.container_sec', {
        loop: true,
        autoplay: true,
        speed: 1000,
        slidesPerView: 1,
        slidesPerGroup : 1,
        pagination: {
            el: '.pagination_sec',
        },
    })
    var sw2 = new Swiper('.container_1', {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        slidesPerGroup : 1,
        navigation: {
            nextEl: '.next_1',
            prevEl: '.prev_1',
        },
    })
    if($('.xg_pro_li').length){del(3,0.1,1,'.xg_pro_li')}
    var sw3 = new Swiper('.container_2', {
        loop: true,
        // autoplay: true,
        speed: 1000,
        slidesPerView: 1,
        slidesPerGroup : 1,
        spaceBetween: 40,
        pagination: {
            el: '.pagination_2',
        },
    })
    if($(window).width()>1023){
        var sw4 = new Swiper('.container_3', {
            loop: true,
            speed: 1000,
            slidesPerView: 2,
            slidesPerGroup : 1,
            spaceBetween: 60,
            navigation: {
                nextEl: '.next_2',
                prevEl: '.prev_2',
            },
        })
    }else{
        var sw4 = new Swiper('.container_3', {
            loop: true,
            speed: 1000,
            slidesPerView: 1,
            slidesPerGroup : 1,
            spaceBetween: 20,
            navigation: {
                nextEl: '.next_2',
                prevEl: '.prev_2',
            },
        })
    }
    if($(window).width()>1023){
        var sw5 = new Swiper('.container_4', {
            loop: true,
            speed: 1000,
            autoplay: true,
            slidesPerView: 3,
            slidesPerGroup : 1,
            spaceBetween: 40,
            pagination: {
                el: '.pagination_4',
            },
        })
    }else{
        var sw5 = new Swiper('.container_4', {
            loop: true,
            speed: 1000,
            autoplay: true,
            slidesPerView: 1,
            slidesPerGroup : 1,
            spaceBetween: 20,
            pagination: {
                el: '.pagination_4',
            },
        })
    }
    var sw6 = new Swiper('.container_5', {
        loop: true,
        speed: 1000,
        slidesPerView: 'auto',
        slidesPerGroup : 1,
        spaceBetween: 200,
        centeredSlides : true,
        navigation: {
            nextEl: '.next_5',
            prevEl: '.prev_5',
        },
    })
    for(var i = 0;i<$('.xg_find_list_choose_inp').length;i++){
        $('.xg_find_list_choose_inp').eq(i).find('option').eq(0).hide()
    }
    $('.xg_find_details_btn').eq(0).click(function(){
        $('.xg_question_box').fadeIn()
    })
    $('.xg_question_close').click(function(){
        $('.xg_question_box').fadeOut()
    })
    pages('.pages-c3>a','.pages-sel','.pages-c3','pages-sel',1);
    var sw7 = new Swiper('.container_6', {
        loop: true,
        speed: 1000,
        slidesPerView: 'auto',
        slidesPerGroup : 1,
        spaceBetween: 128,
        centeredSlides : true,
        navigation: {
            nextEl: '.next_6',
            prevEl: '.prev_6',
        },
        pagination: {
            el: '.pagination_6',
            type : 'progressbar',
        },
    })
    if($(window).width()>1023){
        var sw8 = new Swiper('.container_7', {
            speed: 1000,
            slidesPerView: 3,
            slidesPerGroup : 1,
            centeredSlides : true,
            pagination: {
                el: '.pagination_7',
                clickable :true,
            },
            navigation: {
                nextEl: '.next_7',
                prevEl: '.prev_7',
            },
            on: {
                slideChangeTransitionStart: function(){
                    $('.xg_about_year_text').html($('.container_7 .swiper-slide-active .xg_about_year_liw2').html());
                }
            }
        })
    }else{
        var sw8 = new Swiper('.container_7', {
            speed: 1000,
            slidesPerView: 3,
            slidesPerGroup : 1,
            centeredSlides : true,
            pagination: {
                el: '.pagination_7',
                clickable :true,
            },
            navigation: {
                nextEl: '.next_7',
                prevEl: '.prev_7',
            },
            on: {
                slideChangeTransitionStart: function(){
                    $('.xg_about_year_text').html($('.container_7 .swiper-slide-active .xg_about_year_liw2').html());
                }
            }
        })
    }
    for(var i = 0;i<$('.container_7').find('.swiper-slide').length;i++){
        $('.pagination_7').find('.swiper-pagination-bullet').eq(i).html($('.container_7').find('.swiper-slide').eq(i).find('.xg_about_year_liw1').html())
    }
    if($(window).width()>1023){
        $('.xg_ph_about_style_box').remove()
        $('.xg_about_style_box').find('.xg_about_style_textli').eq(0).show()
    }else{
        $('.xg_about_style_box').remove()
        $('.xg_ph_about_style_box').find('.xg_about_style_textli').eq(0).show()
    }
    var sw9 = new Swiper('.container_8', {
        loop: true,
        autoplay: true,
        speed: 1500,
        slidesPerView: 'auto',
        slidesPerGroup : 1,
        pagination: {
            el: '.pagination_8',
            type: 'fraction',
        },
        on: {
            slideChangeTransitionStart: function(){
                var ii = parseInt($('.container_8').find('.swiper-slide-active').attr('data-swiper-slide-index'))
                console.log(ii)
                $('.xg_about_style_textli').hide()
                $('.xg_about_style_textli').eq(ii).fadeIn()
            }
        }
    })
    $('.xg_about_honor_text_li').eq(0).show()
    if($(window).width()>1023){
        var sw10 = new Swiper('.container_9', {
            loop: true,
            autoplay: true,
            speed: 1000,
            slidesPerView: 5,
            slidesPerGroup : 1,
            spaceBetween: 38,
            centeredSlides : true,
            navigation: {
                nextEl: '.next_9',
                prevEl: '.prev_9',
            },
            on: {
                slideChangeTransitionStart: function(){
                    var ii = parseInt($('.container_9').find('.swiper-slide-active').attr('data-swiper-slide-index'))
                    console.log(ii)
                    $('.xg_about_honor_text_li').hide()
                    $('.xg_about_honor_text_li').eq(ii).fadeIn()
                }
            }
        })
    }else{
        var sw10 = new Swiper('.container_9', {
            loop: true,
            speed: 1000,
            autoplay: true,
            slidesPerView: 3,
            slidesPerGroup : 1,
            spaceBetween: 20,
            centeredSlides : true,
            on: {
                slideChangeTransitionStart: function(){
                    var ii = parseInt($('.container_9').find('.swiper-slide-active').attr('data-swiper-slide-index'))
                    console.log(ii)
                    $('.xg_about_honor_text_li').hide()
                    $('.xg_about_honor_text_li').eq(ii).fadeIn()
                }
            }
        })
    }
    $('.xg_about_life_img').find('img').eq(0).show()
    $('.xg_about_life_textli').eq(0).addClass('xg_about_life_textli_check')
    $('.xg_about_life_textli').click(function(){
        if(!$(this).hasClass('xg_about_life_textli_check')){
            $('.xg_about_life_textli').removeClass('xg_about_life_textli_check')
            $(this).addClass('xg_about_life_textli_check')
            $('.xg_about_life_img').find('img').hide()
            $('.xg_about_life_img').find('img').eq($(this).index()).fadeIn()
        }
    })
    var sw11 = new Swiper('.container_10', {
        loop: true,
        autoplay: true,
        speed: 1000,
        slidesPerView: 1,
        slidesPerGroup : 1,
        effect : 'coverflow',
        pagination: {
            el: '.pagination_10',
            type: 'fraction',
        },
    })
    $('.xg_team_skill_li').eq(0).find('.xg_team_skill_li_d2').show()
    $('.xg_team_skill_li').click(function(){
        if(!$(this).hasClass('xg_team_skill_li_check')){
            $('.xg_team_skill_li').removeClass('xg_team_skill_li_check')
            $(this).addClass('xg_team_skill_li_check')
            $('.xg_team_skill_li_d2').slideUp()
            $(this).find('.xg_team_skill_li_d2').slideDown()
        }
    })
    var sw12 = new Swiper('.container_11', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 4000,
        },
        slidesPerView: 'auto',
        slidesPerGroup : 1,
        spaceBetween: 60,
        navigation: {
            nextEl: '.next_11',
            prevEl: '.prev_11',
        },
        pagination: {
            el: '.pagination_11',
            type : 'progressbar',
        },
    })
    var l1 = $('.container_ind').find('.swiper-slide').length
    if(l1<10){
        $('.xg_ind_d1_num_w3').html('0' + l1)
    }
    var swind = new Swiper('.container_ind', {
        loop: true,
        autoplay: {
            delay: 10000,
        },
        speed: 1500,
        slidesPerView: 1,
        slidesPerGroup : 1,
        on: {
            init: function(){
                swiperAnimateCache(this);
                swiperAnimate(this);
            },
            slideChangeTransitionEnd: function(){
                swiperAnimate(this);
            },
            slideChangeTransitionStart: function(){
                var l2 = parseInt($('.container_ind').find('.swiper-slide-active').attr('data-swiper-slide-index'))+1
                if(l2<10){
                    $('.xg_ind_d1_num_w1').html('0' + l2)
                }
            }
        }
    })
    var swbox = new Swiper('.container_box', {
        speed: 1200,
        slidesPerView: 1,
        slidesPerGroup : 1,
        mousewheel: true,
        direction : 'vertical',
        parallax : true,
        on:{
            init: function(){
                swiperAnimateCache(this);
                swiperAnimate(this);
            },
            slideChangeTransitionEnd: function(){
                swiperAnimate(this);
            },
            slideChangeTransitionStart: function(){
                if($('.container_box>div>.swiper-slide-active').index() ==  1){
                    number($('.xg_ind_d2_w5').eq(0).find('.xg_ind_d2_w7 span'),2010,1960,60);
                    number($('.xg_ind_d2_w5').eq(1).find('.xg_ind_d2_w7 span'),100,50,60);
                    number($('.xg_ind_d2_w5').eq(2).find('.xg_ind_d2_w7 span'),400,340,60);
                }else if($('.container_box>div>.swiper-slide-active').index() ==  2){
                    // number($('.xg_ind_d3_bli').eq(0).find('.xg_ind_d3_bliw1 span'),2,0,1000);
                    number($('.xg_ind_d3_bli').eq(0).find('.xg_ind_d3_bliw1 span'),4,0,600);
                    number($('.xg_ind_d3_bli').eq(1).find('.xg_ind_d3_bliw1 span'),20,0,100);
                    number($('.xg_ind_d3_bli').eq(2).find('.xg_ind_d3_bliw1 span'),100,50,60);
                }
            }
        }
    })
    if($(window).width()>1024){
        var sw11 = new Swiper('.container_pro', {
            loop: true,
            speed: 1000,
            slidesPerView: 4,
            slidesPerGroup : 1,
            navigation: {
                nextEl: '.next_pro',
                prevEl: '.prev_pro',
            },
        })
    }else{
        var sw11 = new Swiper('.container_pro', {
            autoplay: {
                disableOnInteraction: false,
            },
            loop: true,
            speed: 1000,
            slidesPerView: 3,
            slidesPerGroup : 1,
        })
    }
    $('.xg_ind_d4_pro_l>div').eq(0).show()
    $('.xg_ind_d4_pro_r>div').eq(0).show()
    $('.xg_ph_ind_d4>div').eq(0).show()
    $('.xg_ind_d4_li').click(function(){
        var src = $(this).find('img').attr('src')
        $('.xg_ind_d4_pro_m').find('img').attr('src',src)
        $('.xg_pro_details_pro_imgbox').find('img').attr('src',src)
        var cc = $(this).parents('.swiper-slide').attr('data-swiper-slide-index')
        $('.xg_ind_d4_pro_l>div').hide()
        $('.xg_ind_d4_pro_l>div').eq(cc).fadeIn()
        $('.xg_ind_d4_pro_r>div').hide()
        $('.xg_ind_d4_pro_r>div').eq(cc).fadeIn()
        $('.xg_ph_ind_d4>div').hide()
        $('.xg_ph_ind_d4>div').eq(cc).fadeIn()
    })
    $('.xg_ind_d5_text>div>div').eq(0).show()
    $('.xg_ind_d5_bg').find('img').eq(0).addClass('xg_ind_d5_bg_check')
    $('.xg_ph_ind_d5_bg').find('img').eq(0).addClass('xg_ind_d5_bg_check')
    $('.xg_ind_d5_nav').click(function(){
        if(!$(this).hasClass('xg_ind_d5_nav_check')){
            $('.xg_ind_d5_nav').removeClass('xg_ind_d5_nav_check')
            $(this).addClass('xg_ind_d5_nav_check')
            $('.xg_ind_d5_text>div>div').hide()
            $('.xg_ind_d5_text>div>div').eq($(this).index()).fadeIn()
            $('.xg_ind_d5_bg').find('img').removeClass('xg_ind_d5_bg_check')
            $('.xg_ind_d5_bg').find('img').eq($(this).index()).addClass('xg_ind_d5_bg_check')
        }
    })
    $('.xg_ind_d5_btn1').click(function(){
        var ii = $('.xg_ind_d5_nav_check').index()
        if(ii>0){
            $('.xg_ind_d5_nav').removeClass('xg_ind_d5_nav_check')
            $('.xg_ind_d5_nav').eq(ii-1).addClass('xg_ind_d5_nav_check')
            $('.xg_ind_d5_text>div>div').hide()
            $('.xg_ind_d5_text>div>div').eq(ii-1).fadeIn()
            $('.xg_ind_d5_bg').find('img').removeClass('xg_ind_d5_bg_check')
            $('.xg_ind_d5_bg').find('img').eq(ii-1).addClass('xg_ind_d5_bg_check')
        }
    })
    $('.xg_ind_d5_btn2').click(function(){
        var ii = $('.xg_ind_d5_nav_check').index()
        var ll = $('.xg_ind_d5_nav').length
        if(ii<ll-1){
            $('.xg_ind_d5_nav').removeClass('xg_ind_d5_nav_check')
            $('.xg_ind_d5_nav').eq(ii+1).addClass('xg_ind_d5_nav_check')
            $('.xg_ind_d5_text>div>div').hide()
            $('.xg_ind_d5_text>div>div').eq(ii+1).fadeIn()
            $('.xg_ind_d5_bg').find('img').removeClass('xg_ind_d5_bg_check')
            $('.xg_ind_d5_bg').find('img').eq(ii+1).addClass('xg_ind_d5_bg_check')
        }
    })
    var swbox = new Swiper('.container_new', {
        loop: true,
        autoplay: true,
        speed: 1200,
        slidesPerView: 3,
        slidesPerGroup : 1,
        direction : 'vertical',
        spaceBetween: 40,
    })
    var swabout = new Swiper('.container_about_nav', {
        speed: 1000,
        slidesPerView: 5,
        slidesPerGroup : 1,
    })
    if($(window).width()>1024){
        var swabout = new Swiper('.container_idea', {
            speed: 1000,
            autoplay: true,
            slidesPerView: 2,
            slidesPerGroup : 1,
            spaceBetween: 50,
            pagination: {
                el: '.pagination_4',
            },
        })
    }else{
        var swabout = new Swiper('.container_idea', {
            speed: 1000,
            autoplay: true,
            slidesPerView: 1,
            slidesPerGroup : 1,
            spaceBetween: 30,
            pagination: {
                el: '.pagination_4',
            },
        })
    }
    $('.xg_ph_sec_head').find('img').last().click(function(){
        if($('.rjy_mobile_secnav').css('display') == 'none'){
            $('.rjy_mobile_secnav').slideDown()
        }else{
            $('.rjy_mobile_secnav').slideUp()
        }
    })
    var swbox = new Swiper('.container_ph1', {
        loop: true,
        autoplay: true,
        speed: 1200,
        slidesPerView: 1,
        slidesPerGroup : 1,
        spaceBetween: 20,
        pagination: {
            el: '.pagination_ph1',
        },
    })
    var swbox = new Swiper('.container_ph2', {
        loop: true,
        autoplay: true,
        speed: 1200,
        slidesPerView: 3,
        slidesPerGroup : 1,
        centeredSlides : true,
    })
    var img1 = $('.xg_sec_head>img').attr('src')
    console.log(img1)
    var img2 = $('.xg_img2').attr('src')
    console.log(img2)
    setInterval(function() {
        if($(window).width()>1023){
            if($('.container_box>div>.swiper-slide-active').index() ==  3 || $('.container_box>div>.swiper-slide-active').index() ==  6){
                $('.xg_sec_head').addClass('xg_top_check')
                $('.xg_sec_head>img').attr('src',img2)
            }else{
                $('.xg_sec_head').removeClass('xg_top_check')
                $('.xg_sec_head>img').attr('src',img1)
            }
        }
    }, 100)
})
function del(a,b,c,d){for(var i=0;i<$(d).length;i++){var t1=(a*b+b*(c*i))+'s';$(d).eq(i).attr('data-wow-delay',t1)}}
function pages(a1,a2,a3,b1,c1){
    if($(a1).first().hasClass(b1)){
        $(a3).prevAll().hide();
    }if($(a1).last().hasClass(b1)){
        $(a3).nextAll().hide();
    }
    for(var i=0;i<$(a1).length;i++){
        if($(a1).length>(2*c1+3)){
            if($(a1).eq(i).hasClass(b1)){
                $(a1).hide();
                if($(a2).index()<(c1+2)){
                    for(var j=0;j<($(a2).index()+(c1+1));j++){
                        $(a1).eq(j).show();
                    }
                    $(a1).last().show();
                    $(a1).last().before('<span>...</span>');
                }else if($(a2).index()>($(a1).length-(c1+3))){
                    for(var j=($(a1).length-1);j>($(a2).index()-(c1+1));j--){
                        $(a1).eq(j).show();
                    }
                    $(a1).first().show();
                    $(a1).first().after('<span>...</span>');
                }else{
                    for(var j=($(a2).index()+c1);j>($(a2).index()-(c1+1));j--){
                        $(a1).eq(j).show();
                    }
                    $(a1).last().show();
                    $(a1).last().before('<span>...</span>');
                    $(a1).first().show();
                    $(a1).first().after('<span>...</span>');
                }
                break;
            }
        }else{
            break;
        }
    }
}
function rotate1(){
	for(let i=0;i<arr1.length;i++){
		if(arr1[i]>arr2[i]){
			arr2[i] += 1;
			if(arr2[i]>50){
				$('.cicle1_a1').eq(i).find('.cicle1_a6').css('opacity',0);
				$('.cicle1_a1').eq(i).find('.cicle1_a5').css('opacity',1);
				$('.cicle1_a1').eq(i).find('.cicle1_a5').css('transform','rotate('+((arr2[i]-50)/100*360)+'deg)');
			}else{
				$('.cicle1_a1').eq(i).find('.cicle1_a4').css('transform','rotate('+(arr2[i]/100*360)+'deg)');
			}
		}
	}
	setTimeout(function(){
		if(arr1.toString() !== arr2.toString()){
			rotate1();
		}
	},20)
}
function number(a,b,c,d){
    var i=c;
    var j=setInterval(function(){
     i++;
     a.html(i);
     if(i >= b){
      clearInterval(j);
     }
    },d);
}
