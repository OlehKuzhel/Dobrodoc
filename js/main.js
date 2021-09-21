// WebFont.load({
//     google: {
//         families: ['Montserrat:400,500,600,700:cyrillic']
//     }
// });

$(document).ready(function($) {


let isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;



const sliderMain = new Swiper('.main-slider', {
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 0,
        fadeEffect: { crossFade: true },
        effect: 'fade',
        autoplay: {
           delay: 10000,
         },
        // centeredSlides: true,
        // slideToClickedSlide: true,
        loop: true,
        pagination: {
            el: '.main-bread',
            type: 'bullets',
            clickable: true,
          },
        navigation: {
            nextEl: '.main--next',
            prevEl: '.main--prev',
        },
        on: {
            init: function () {
                // $all = this.slides.length
                // $index = this.activeIndex
                // $numbers = $('.insurance-navigation').find('p')
                // $activenumb = $numbers.find('.active').text($index + 1)
                // $allnumb = $numbers.find('.all').text($all)
            },
            slideChange: function () {
                // $index = this.activeIndex
                // $numbers = $('.insurance-navigation').find('p')
                // $activenumb = $numbers.find('.active').text($index + 1);
                
                // $prevIndex = this.previousIndex;
                // $('.insurance-content').find('.insurance-content__text').eq($prevIndex).fadeOut('fast', function() {
                //     $('.insurance-content').find('.insurance-content__text').eq($index).fadeIn('fast')
                // });
            },
        }

    });

// const sliderProductThumbs = new Swiper('.product-slider__thumbs', {
//         speed: 800,
//         slidesPerView: 4,
//         spaceBetween: 35,
//         // fadeEffect: { crossFade: true },
//         // effect: 'fade',
//         // centeredSlides: true,
//         slideToClickedSlide: true,
//         // loop: true,
//         // navigation: {
//         //     nextEl: '.product--next',
//         //     prevEl: '.product--prev',
//         // },
//         on: {
//             init: function () {
//                 // $all = this.slides.length
//                 // $index = this.activeIndex
//                 // $numbers = $('.insurance-navigation').find('p')
//                 // $activenumb = $numbers.find('.active').text($index + 1)
//                 // $allnumb = $numbers.find('.all').text($all)
//             },
//             slideChange: function () {
//                 // $index = this.activeIndex
//                 // $numbers = $('.insurance-navigation').find('p')
//                 // $activenumb = $numbers.find('.active').text($index + 1);
                
//                 // $prevIndex = this.previousIndex;
//                 // $('.insurance-content').find('.insurance-content__text').eq($prevIndex).fadeOut('fast', function() {
//                 //     $('.insurance-content').find('.insurance-content__text').eq($index).fadeIn('fast')
//                 // });
//             },
//         }

//     });

// const sliderProduct = new Swiper('.product-slider', {
//         speed: 800,
//         slidesPerView: 1,
//         spaceBetween: 35,
//         // fadeEffect: { crossFade: true },
//         // effect: 'fade',
//         // loop: true,
//         thumbs: {
//             // inverse: true,
//             swiper: sliderProductThumbs
//           },
//         navigation: {
//             nextEl: '.product--next',
//             prevEl: '.product--prev',
//         },
//         on: {
//             init: function () {
//                 // $all = this.slides.length
//                 // $index = this.activeIndex
//                 // $numbers = $('.insurance-navigation').find('p')
//                 // $activenumb = $numbers.find('.active').text($index + 1)
//                 // $allnumb = $numbers.find('.all').text($all)
//             },
//             slideChange: function () {
//                 // $index = this.activeIndex
//                 // $numbers = $('.insurance-navigation').find('p')
//                 // $activenumb = $numbers.find('.active').text($index + 1);
                
//                 // $prevIndex = this.previousIndex;
//                 // $('.insurance-content').find('.insurance-content__text').eq($prevIndex).fadeOut('fast', function() {
//                 //     $('.insurance-content').find('.insurance-content__text').eq($index).fadeIn('fast')
//                 // });
//             },
//         }

//     });



// const sliderRelated = new Swiper('.related-slider', {
//         speed: 800,
//         slidesPerView: 3,
//         spaceBetween: 40,
//         // fadeEffect: { crossFade: true },
//         // effect: 'fade',
//         // centeredSlides: true,
//         // loop: true,
//         navigation: {
//             nextEl: '.related--next',
//             prevEl: '.related--prev',
//         },
//         on: {
//             init: function () {
//                 // $all = this.slides.length
//                 // $index = this.activeIndex
//                 // $numbers = $('.insurance-navigation').find('p')
//                 // $activenumb = $numbers.find('.active').text($index + 1)
//                 // $allnumb = $numbers.find('.all').text($all)
//             },
//             slideChange: function () {
//                 // $index = this.activeIndex
//                 // $numbers = $('.insurance-navigation').find('p')
//                 // $activenumb = $numbers.find('.active').text($index + 1);
                
//                 // $prevIndex = this.previousIndex;
//                 // $('.insurance-content').find('.insurance-content__text').eq($prevIndex).fadeOut('fast', function() {
//                 //     $('.insurance-content').find('.insurance-content__text').eq($index).fadeIn('fast')
//                 // });
//             },
//         }

//     });

// const sliderRelatedNews = new Swiper('.newsrelated-slider', {
//         speed: 800,
//         slidesPerView: 4,
//         spaceBetween: 50,
//         // fadeEffect: { crossFade: true },
//         // effect: 'fade',
//         // centeredSlides: true,
//         // loop: true,
//         navigation: {
//             nextEl: '.newsrelated--next',
//             prevEl: '.newsrelated--prev',
//         },
//         on: {
//             init: function () {
//                 // $all = this.slides.length
//                 // $index = this.activeIndex
//                 // $numbers = $('.insurance-navigation').find('p')
//                 // $activenumb = $numbers.find('.active').text($index + 1)
//                 // $allnumb = $numbers.find('.all').text($all)
//             },
//             slideChange: function () {
//                 // $index = this.activeIndex
//                 // $numbers = $('.insurance-navigation').find('p')
//                 // $activenumb = $numbers.find('.active').text($index + 1);
                
//                 // $prevIndex = this.previousIndex;
//                 // $('.insurance-content').find('.insurance-content__text').eq($prevIndex).fadeOut('fast', function() {
//                 //     $('.insurance-content').find('.insurance-content__text').eq($index).fadeIn('fast')
//                 // });
//             },
//         }

//     });

// sliderProduct.controller.control = sliderProductThumbs;
// sliderProductThumbs.controller.control = sliderProduct;



$('.link--totop').on('click', function(event){
    event.preventDefault()
    $('body, html').animate({
        scrollTop: 0
    }, 1500);
});

   

 const opnsFancy = {
        touch: false,
        baseClass: "modal",
        beforeShow: function(instance, slide) {
            if (isMobile == false) {} else {

            }

            if (popup == '#vacancydetail') {
                $(popup).find('.popup-content').addClass('loader')
                $.ajax({
                    type: "GET",
                    url: thisBtnUrl,
                    success: function(data) {
                        $(popup).find('.popup-content').removeClass('loader')
                        $(popup).find('.vacancy-content').empty().append(data)
                    },
                    error: function(data) {
                      
                    }
                });
            }

            if (popup == '#districtdetail') {
                $(popup).find('.popup-content').addClass('loader')
                $.ajax({
                    type: "GET",
                    url: thisBtnUrl,
                    success: function(data) {
                        $(popup).find('.popup-content').removeClass('loader')
                        $(popup).find('.district').empty().append(data)

                    },
                    error: function(data) {
                      
                    }
                });
            }

            if (popup == '#consultation') {
                $(popup).find('.popup-content').addClass('loader')
                $.ajax({
                    type: "GET",
                    url: thisBtnUrl,
                    success: function(data) {
                        $(popup).find('.popup-content').removeClass('loader')
                        $(popup).find('.consultation-content').empty().append(data)
                    },
                    error: function(data) {
                      
                    }
                });
            }

            if (popup == '#callback') {
                $(popup).find('input[name="vacancy_id"]').val(vacancy_id)
            }

        },
        afterShow: function(instance, current) {
        },
        afterLoad: function(instance, current) {
        },
        afterClose: function(instance, slide) {
            if (popup == '#vacancydetail') {
                $(popup).find('.vacancy-content').empty()
            }
            if (popup == '#districtdetail') {
                $(popup).find('.district').empty()
            }
            if (popup == '#consultation') {
                $(popup).find('.consultation-content').empty()
            }
        },
        hideScrollbar: true,
        btnTpl: {
            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.53804 9L0 16.538L1.46196 18L9 10.462L16.538 18L18 16.538L10.462 9L18 1.46196L16.538 0L9 7.53804L1.46196 0L0 1.46196L7.53804 9Z" fill="white"/></svg></button>',

        },
    }

$('body').on('click', '.fancybtn', function(event) {
        popup = $(this).data('popup');
        thisBtnUrl = $(this).attr('data-url')
        vacancy_id = $(this).attr('data-vacancy')
        // popup = '#callback';
        $.fancybox.open({
            src: popup,
            type: 'inline',
            opts: opnsFancy,
        });
        return false
    });



     $('body').on('click', '.header-menu__lang .lang-selected', function(event) {
            event.preventDefault();
            
            $(this).parents('.header-menu__lang').toggleClass('open');


        });

     $(document).mouseup(function (e){ 
            var div = $(".header-menu__lang"); 
            if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.removeClass('open');
            }
        });
    

    $('body').on('click', '.reviews .link--action', function(event) {
        event.preventDefault();
        let thisBtn = $(this);
        let urlAllReviews = thisBtn.attr('data-url');
        $.ajax({
            type: "GET",
            url: urlAllReviews,
            success: function(data) {
                thisBtn.remove()
                $('.reviews-items').append(data)
            },
            error: function(data) {
              
            }
        });
    });

    $('body').on('click', '.gallery .link--showmore', function(event) {
        event.preventDefault();
        let thisBtn = $(this);
        let urlAllGallery = thisBtn.attr('data-url');
        $.ajax({
            type: "GET",
            url: urlAllGallery,
            success: function(data) {
                thisBtn.remove()
                $('.gallery-items').append(data)
            },
            error: function(data) {
              
            }
        });
    });


    $("body").on("click",".scroll-btn", function (event) {
        event.preventDefault(); //опустошим стандартную обработку
        var id  = new URL($(this).attr('href')).hash,
            top = $(id).offset().top - 95;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $('body').on('click', '.link--plan:not(.active)', function(event) {
        event.preventDefault();

        $parent = $(this).parents('.plan-tabs__header');
        $newTab = $(this)
        $newTabIndex = $newTab.attr('data-tab')
        $oldTab = $parent.find('.link--plan.active');
        $oldTabIndex = $oldTab.attr('data-tab');

        $newTab.addClass('active').siblings().removeClass('active')

        $('.plan-tabs__tab[data-tab='+$oldTabIndex+']').fadeOut(400, function() {
            $('.plan-tabs__tab[data-tab='+$newTabIndex+']').fadeIn(400)
        });
    });

    $('body').on('click', '.link--services:not(.active)', function(event) {
        event.preventDefault();
        $newFilter = $(this)
        $newFilterId = $(this).attr('data-filter')
        $newFilter.addClass('active').siblings().removeClass('active');

        $showedItems = $('.services-tabs__items').find('.services-tabs__item')
        if ($newFilterId != 'all') {
          $.each($showedItems, function(index, el) {
            if ($(el).attr('data-filter').indexOf($newFilterId) > -1) {
                $(el).fadeIn('fast')
            } else {
                $(el).hide()
            }
            });  
        } else {
            $.each($showedItems, function(index, el) {
                $(el).fadeIn('fast')
            });  
        }
    });

    $('body').on('click', '.link--consultation:not(.active)', function(event) {
        event.preventDefault();

        $parent = $(this).parents('.consultation-content__header');
        $newTab = $(this)
        $newTabIndex = $newTab.attr('data-tab')
        $oldTab = $parent.find('.link--consultation.active');
        $oldTabIndex = $oldTab.attr('data-tab');

        $newTab.addClass('active').siblings().removeClass('active')

        $('body').find('.consultation-content__tabs .tab[data-tab='+$oldTabIndex+']').fadeOut(400, function() {
            $('body').find('.consultation-content__tabs .tab[data-tab='+$newTabIndex+']').fadeIn(400)
        });
    });

});