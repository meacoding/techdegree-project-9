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
    
//  Smooth scroll with anchor tags----------
    
    function scrollToAnchor(aid){
        var aTag = $("a[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    }
    

    $("#ref-digi").click(function() {
        scrollToAnchor('dropdown');
    });

    $("#ref-vue").click(function() {
        scrollToAnchor('dropdown');
    });

    $("#ref-lego").click(function() {
        scrollToAnchor('dropdown');
    });
    
    $("#closeDigi").click(function() {
        scrollToAnchor('digiUp');
    });

    $("#closeVue").click(function() {
        scrollToAnchor('vueUp');
    });
    
    $("#closeModel").click(function() {
        scrollToAnchor('legoUp');
    });
    
    
//    Toggle drop down----------
    
    $('#ref-digi').click(function(){
        $('#show-digi').slideToggle('slow');
    });
    $('#ref-vue').click(function(){
        $('#show-vue').slideToggle('slow');
    });
    $('#ref-lego').click(function(){
        $('#show-lego').slideToggle('slow');
    });
    $('#show-digi .close').click(function(){
        $('#show-digi').slideToggle('slow');
    });
    $('#show-vue .close').click(function(){
        $('#show-vue').slideToggle('slow');
    });
    $('#show-lego .close').click(function(){
        $('#show-lego').slideToggle('slow');
    });
    
    $('#ref-digi').click(function(){
        $('#show-vue:visible').slideToggle('slow');
    });
    $('#ref-digi').click(function(){
        $('#show-lego:visible').slideToggle('slow');
    });
    $('#ref-vue').click(function(){
        $('#show-digi:visible').slideToggle('slow');
    });
    $('#ref-vue').click(function(){
        $('#show-lego:visible').slideToggle('slow');
    });
    $('#ref-lego').click(function(){
        $('#show-digi:visible').slideToggle('slow');
    });
    $('#ref-lego').click(function(){
        $('#show-vue:visible').slideToggle('slow');
    });
});