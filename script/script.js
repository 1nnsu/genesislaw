document.addEventListener("DOMContentLoaded", function(e){
    qnaToggle();
    // checkUl_1();
    // checkUl_2();
    bottomMenuBtn();
    b_menu_scroll_top();
})


const qnaToggle = () => {
    $('.qna_ul li .item1').click(function(){
        $(this).siblings('.qna_ul li .item2').stop().slideToggle();
        $(this).find('.arrow').toggleClass('on');
    })
}
const checkUl_1 = () => {
    $('.check_ul_1 li').click(function(){
        $('.check_ul_1 li').removeClass('on');
        $(this).toggleClass('on');
    })
}
const checkUl_2 = () => {
    $('.check_ul_2 li').click(function(){
        $('.check_ul_2 li').removeClass('on');
        $(this).toggleClass('on');
    })
}
const bottomMenuBtn = () => {
    $('.bottom-apply-sec .b_button').click(function(){
        // $('.bottom-apply-sec .b_button').removeClass('on');
        $(this).toggleClass('on');
        $('.bottom-apply-sec').toggleClass('on');
    })
}
const b_menu_scroll_top = () => {
    $(window).on("scroll", function () {
        const scrollBottom = $(window).scrollTop() + $(window).height(); // 현재 스크롤 맨 아래 위치
        const docHeight = $(document).height(); // 문서 전체 높이

        if (scrollBottom >= docHeight) {
            // 페이지 맨 아래에 도달하면 숨기기
            $('.bottom-apply-sec').addClass("hide");
        } else {
            // 맨 아래가 아니면 항상 보이기
            $('.bottom-apply-sec').removeClass("hide");
        }
    });
};