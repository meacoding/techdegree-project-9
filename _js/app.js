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
    $("#ref-dash").click(function() {
        scrollToAnchor('dropdown');
    });
    // $("#ref-lego").click(function() {
    //     scrollToAnchor('dropdown');
    // });
    

    $("#closeDigi").click(function() {
        scrollToAnchor('digiUp');
    });
    $("#closeVue").click(function() {
        scrollToAnchor('vueUp');
    });
    $("#closeDash").click(function() {
        scrollToAnchor('dashUp');
    });
    // $("#closeModel").click(function() {
    //     scrollToAnchor('legoUp');
    // });
    
    
//    Toggle drop down----------
    
    // On click of project, open project
    $('#ref-digi').click(function(){
        $('#show-digi').slideToggle('slow');
    });
    $('#ref-vue').click(function(){
        $('#show-vue').slideToggle('slow');
    });
    $('#ref-dash').click(function(){
        $('#show-dash').slideToggle('slow');
    });
    // $('#ref-lego').click(function(){
    //     $('#show-lego').slideToggle('slow');
    // });

    //On click of close arrow inside project, close project
    $('#show-digi .close').click(function(){
        $('#show-digi').slideToggle('slow');
    });
    $('#show-vue .close').click(function(){
        $('#show-vue').slideToggle('slow');
    });
    $('#show-dash .close').click(function(){
        $('#show-dash').slideToggle('slow');
    });
    // $('#show-lego .close').click(function(){
    //     $('#show-lego').slideToggle('slow');
    // });
    

    // On click of project, close any other project
    //Interactive Invitation
    $('#ref-digi').click(function(){
        $('#show-vue:visible').slideToggle('slow');
    });
    // $('#ref-digi').click(function(){
    //     $('#show-lego:visible').slideToggle('slow');
    // });
    $('#ref-digi').click(function(){
        $('#show-dash:visible').slideToggle('slow');
    });

    //Accounting App
    $('#ref-vue').click(function(){
        $('#show-digi:visible').slideToggle('slow');
    });
    // $('#ref-vue').click(function(){
    //     $('#show-lego:visible').slideToggle('slow');
    // });
    $('#ref-vue').click(function(){
        $('#show-lego:visible').slideToggle('slow');
    });

    //Responsive Dashboard
    $('#ref-dash').click(function(){
        $('#show-digi:visible').slideToggle('slow');
    });
    // $('#ref-dash').click(function(){
    //     $('#show-lego:visible').slideToggle('slow');
    // });
    $('#ref-dash').click(function(){
        $('#show-vue:visible').slideToggle('slow');
    });

    //LEGO
    // $('#ref-lego').click(function(){
    //     $('#show-digi:visible').slideToggle('slow');
    // });
    // $('#ref-lego').click(function(){
    //     $('#show-vue:visible').slideToggle('slow');
    // });
    // $('#ref-lego').click(function(){
    //     $('#show-dash:visible').slideToggle('slow');
    // });


});