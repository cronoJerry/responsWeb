$(function () {
    $("#toggle").on('click',function(e){
        e.preventDefault();
        $("#list").slideToggle(500,"linear");
    });
});