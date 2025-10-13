document.addEventListener("DOMContentLoaded", function(e){
    qnaToggle();
    checkUl_1();
    checkUl_2();
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