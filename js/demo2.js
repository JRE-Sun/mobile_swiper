$(function() {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
        preventClicks: true,
        // slidesPerView: 'auto',
        speed: 400, //移动的速度
        loop: true, //是够能够循环无缝滑动
        grabCursor: true,
        paginationClickable: true, //允许触摸
        // autoplay: 4000, //一秒切换
        observeParents: true,
        onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });

});