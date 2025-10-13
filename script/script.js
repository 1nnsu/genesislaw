document.addEventListener("DOMContentLoaded", function(e){
    qnaToggle();
    checkUl_1();
    checkUl_2();
    bottomMenuBtn();
    b_menu_scroll_top();
})


const qnaToggle = () => {
    $('.qna_ul li .item1').click(function(){
        $(this).siblings('.qna_ul li .item2').slideToggle();
        $(this).find('.arrow').toggleClass('on');
    })
}
const checkUl_1 = () => {
    $('.check_ul_1 li').click(function(){
        // $('.check_ul_1 li').removeClass('on');
        $(this).toggleClass('on');
    })
}
const checkUl_2 = () => {
    $('.check_ul_2 li').click(function(){
        // $('.check_ul_2 li').removeClass('on');
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
    $("body").on("wheel", function (e) {
        var wheel = e.originalEvent.deltaY;
        if (wheel > 0) {
            $('.bottom-apply-sec').addClass("hide");
        } else {
            $('.bottom-apply-sec').removeClass("hide");
        }
    });  
}