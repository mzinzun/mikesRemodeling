 window.onload = function(){
    const form = document.getElementById('contactUsForm');
    const submitForm = document.getElementById('submitForm');
    $('.pager').show('clip',1000);
    // event Listeners
    $('#navRouter').on('click',(e)=>{
        e.preventDefault();
        console.log('target: ',$(e.target).attr('data-link'));
        $('.pager').hide('clip',1000, function(){
            window.location.href=$(e.target).attr('data-link');
        });
    });
    submitForm.addEventListener('click', (e)=>{
        e.preventDefault();
        let formEntry = {form: (e.target.form).name};
        let data = document.querySelectorAll('input');
        data.forEach((key,idx)=>{(idx>0)&&(formEntry[key.name]= form.elements[key.name].value);});
        console.log('form entries: ',formEntry);
    });

 };