window.addEventListener('DOMContentLoaded', () => {
    const allImg = document.querySelectorAll('.grid-item');
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber>5) {
        allImg.forEach(img => {
            img.style.margin = '10px'
        });
    }
});
jQuery(document).ready(function($) {
    'use strict';
    $('body').prepend('<div id="spinningSquaresG"><div id="spinningSquaresG_1" class="spinningSquaresG"></div><div id="spinningSquaresG_2" class="spinningSquaresG"></div><div id="spinningSquaresG_3" class="spinningSquaresG"></div><div id="spinningSquaresG_4" class="spinningSquaresG"></div><div id="spinningSquaresG_5" class="spinningSquaresG"></div><div id="spinningSquaresG_6" class="spinningSquaresG"></div><div id="spinningSquaresG_7" class="spinningSquaresG"></div><div id="spinningSquaresG_8" class="spinningSquaresG"></div></div>');

/*    
});
jQuery('section').load(function($) {
*/
    jQuery('body').find('#spinningSquaresG').remove();
    jQuery('.content').animate({
        'opacity': '1'
    }, 300);
});
jQuery(document).ready(function($) {
    'use strict';
    $('#mobile-nav').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 200);
        setTimeout(function() {
            $('header').toggleClass('active');
            $('#mobile-nav').toggleClass('active');
        }, 200);
    });
    $('a[href="/#contacts"]').click(function(){
        var Y = $('#contacts').parent().offset().top;
        $("html, body").animate({ scrollTop: Y }, 200);
        setTimeout(function() {
            $('header').toggleClass('active');
            $('#mobile-nav').toggleClass('active');
        }, 200);
    })
});
jQuery(document).ready(function($) {
    'use strict';
    $('nav a[href^="' + location.pathname.split("/")[1] + '"]').addClass('active').parents('li').children('a').addClass('active');
});
jQuery(document).ready(function($) {
    'use strict';
    $(".rslides").responsiveSlides({
        speed: 500,
        timeout: 4000,
        pager: true
    });
});
jQuery(window).load(function($) {
    'use strict';
    jQuery('ul.grid').isotope({ itemSelector: 'li', transformsEnabled: false });
    jQuery(window).smartresize(function() {
        jQuery('ul.grid').isotope('reLayout');
    });
    jQuery(window).trigger('resize');
    jQuery('header').height(jQuery(document).height());
    jQuery(window).resize(function() {
        jQuery('header').height(jQuery(window).height());
        setTimeout(function() {
            jQuery('header').height(jQuery(document).height());
        }, 900);
    });
});
jQuery(document).ready(function($) {
    'use strict';
    $(function() {
        $('ul.grid.portfolio li').on('click',function(){ window.location.replace( $(this).find('a').attr('href') ); });
        $('.more-hover').each(function() { $(this).hoverdir(); });
    });
});
jQuery(document).ready(function($) {
    'use strict';
    $('.gallery.animate li').hover(function() {
        $('.gallery li').not(this).stop().animate({
            'opacity': '0.3'
        }, 200);
    }, function() {
        $('.gallery li').stop().animate({
            'opacity': '1'
        }, 200);
    });
});
jQuery(window).load(function($) {
    'use strict';
    if (jQuery('#vertical').length > 0) {
        var sly = new Sly(jQuery('#vertical'), {
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBy: 1,
            activatePageOn: 'click',
            speed: 300,
            elasticBounds: 1,
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,
        }).init();
        jQuery(window).resize(function() {
            sly.reload();
        });
    }
});
jQuery(document).ready(function($) {
    'use strict';
    $('.view-background').click(function() {
        if ($('.content').css('left') == '0px') {
            $('.content').animate({
                'left': '-100%',
                'opacity': '0'
            });
            $('.view-background').html('<i class="icon-eye-open icon-2x"></i>');
        } else {
            $('.content').animate({
                'left': '0',
                'opacity': '1'
            });
            $('.view-background').html('<i class="icon-eye-close icon-2x"></i>');
        }
        return false;
    });
});
jQuery(document).ready(function($) {
    'use strict';
    $('.tab-container').easytabs();
});
jQuery(document).ready(function($) {
    'use strict';
    $('.alert i').click(function() {
        $(this).parent().slideUp();
    });
});
jQuery(document).ready(function($) {
    'use strict';
    $('.accordion > dd.active').show();
    $('.accordion > dt > a').click(function() {
        if ($(this).parent().hasClass('active')) {
            $(this).parents('.accordion').find('dt').removeClass('active');
            $(this).parents('.accordion').find('dd').removeClass('active').slideUp();
            return false;
        } else {
            $(this).parents('.accordion').find('dt').removeClass('active');
            $(this).parents('.accordion').find('dd').removeClass('active').slideUp();
            $(this).parent().addClass('active').next().addClass('active').slideDown();
            return false;
        }
    });

    $('ul.grid.blog').after('<div class="blog-col-1"></div><div class="blog-col-2"></div><div class="blog-col-3"></div>');
    $('ul.grid.blog li').each(function(i,e){
        var href = $(e).find('a').attr('href'), 
        title = $(e).find('h4').text(), 
        img_src=$(e).find('img').attr('src'),
        adv = $(e).find('.more-hover p').text(),
        desc = $(e).find('.last p').text(); 
        $(e).remove();
        $('.blog-col-'+((i % 3) + 1)).append('<div class="blog-article" itemscope="" itemtype="http://schema.org/Article"><a class="img-holder" href="'+href+'"><img itemprop="image" src="'+img_src+'"/><span>'+adv+'</span></a><a class="title" href="'+href+'" itemprop="name">'+title+'</a><p itemprop="articleBody">'+desc+'</p></div>');
    });
    $('')
});
