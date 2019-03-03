// JavaScript Document

$(document).ready(function(){ 
    
    "use strict";
    
//    Header LEGO falling arrow----------
    
    var animMaxCount=999;
    var animCount=0;

    function runIt() {
        $('.arrow').delay(800).queue(function(){
            $( ".arrow1" ).css({ "opacity": "1" });
            $( ".arrow4" ).css({ "opacity": "0" });
            $(this).dequeue();
        });
        $('.arrow').delay(800).queue(function(){
            $( ".arrow2" ).css({ "opacity": "1" });
            $( ".arrow1" ).css({ "opacity": "0" });
            $(this).dequeue();
        });
        $('.arrow').delay(800).queue(function(){
            $( ".arrow3" ).css({ "opacity": "1" });
            $( ".arrow2" ).css({ "opacity": "0" });
            $(this).dequeue();
        });
        $('.arrow').delay(800).queue(function(){
            $( ".arrow4" ).css({ "opacity": "1" });
            $( ".arrow3" ).css({ "opacity": "0" });
            $(this).dequeue();
        });
    }

    runIt();
    while( animCount < animMaxCount ){
        runIt();
        animCount++;
    }
    
//    Smooth scroll with anchor tags----------
    
    function scrollToAnchor(aid){
        var aTag = $("a[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    }
    

    $("#ref3").click(function() {
        scrollToAnchor('dropdown');
    });

    $("#ref4").click(function() {
        scrollToAnchor('dropdown');
    });
    
    $("#closeVue").click(function() {
        scrollToAnchor('vueUp');
    });
    
    $("#closeModel").click(function() {
        scrollToAnchor('modelUp');
    });
    
    
//    Toggle drop down----------
    
    $('#ref3').click(function(){
        $('#show1').slideToggle('slow');
    });
    $('#ref4').click(function(){
        $('#show2').slideToggle('slow');
    });
    $('#show1 .close').click(function(){
        $('#show1').slideToggle('slow');
    });
    $('#show2 .close').click(function(){
        $('#show2').slideToggle('slow');
    });
    
    
    $('#ref3').click(function(){
        $('#show2:visible').slideToggle('slow');
    });
    $('#ref4').click(function(){
        $('#show1:visible').slideToggle('slow');
    });
    
});