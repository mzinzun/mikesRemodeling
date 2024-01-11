 window.onload = function(){
     // href assigned to sliced filename from full href path
     let href = (window.location.href).slice((window.location.href).lastIndexOf('/')+1);
     // check which html page is being loaded.  All pages share this js.file(remodel.js)
     switch(href){
         case 'index.html':
            $('.pager').show('puff',1500);
            imagePager(1);
            break;
         case 'about.html':
            $('.pager').show('puff',1000);
            break;
        case 'testimonies.html':
            $('.pager').show('slide',{direction: 'up'},1500);
            break;
        case 'contactUs.html':
            $('.pager').show('clip',1500);
            $('#submitForm').on('click', e=> collectFormData2(e));
            break;
        case 'services.html':
            $('.pager').show('slide',{direction: 'down'},1500);
            break;
        default:
            $('.pager').show('explode',1500);
     }
    //  custom slider for landing page (index.html)
    function imagePager(img){
        // rotate classes to change background image
        $('#imageWrapper').addClass('img'+img);
        $('#imageWrapper').show('slide',{ direction : 'left' },2000, function(){
            // add margin after image slides as continuation of slide motion
            $('#imageWrapper').animate({margin: '0 5%'},500);
        });
        // delay each image to display for 5 seconds
        setTimeout(function(){
                $('#imageWrapper').animate({margin: '0'},500);
                $('#imageWrapper').hide('slide',{ direction: 'left'},2000,function(){
                $('#imageWrapper').removeClass('img'+img);
                img<4?img=img+1:img=1;
                imagePager(img);
            });
        },5000);
    }
    // function to collect form data into object using vanilla js
    function collectFormData(e){
        const form = document.getElementById('contactUsForm');
        e.preventDefault();
        let formEntry = {};
        (document.querySelectorAll('#contactUsForm input,#contactUsForm textarea')).forEach(key=>formEntry[key.name]=key.value);
        (document.querySelectorAll('#contactUsForm input:checked')).forEach(key=>formEntry[key.name]=key.value);
        console.log('form element entries: ',formEntry);
    }
    // function to collect form data into object using JQuery
    function collectFormData2(e){
        e.preventDefault();
        let finalData ={};
        $('#contactUsForm input, #contactUsForm textarea').each(function(){finalData[$(this).attr('name')]=$(this).val()});
        $('#contactUsForm input:checked').each(function(){finalData[$(this).attr('name')]=$(this).val()});
        console.log('preparing to collect contact form data: ', finalData);

    }
    // global event listeners
    // manually select page to load after cuurent page fades out
    $('#navRouter').on('click',(e)=>{
        e.preventDefault();
        ($(e.target).attr('data-link'))&&$('.pager').hide('fade',1000,()=>window.location.href=$(e.target).attr('data-link'));
    });

 };
