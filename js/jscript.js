jQuery(document).ready(function($){

    $('#btn').on("click",function(){
        //alert("I've been clicked")


        var textValue = $('#password').val();
        if(!textValue) {
            alert('enter your passowrd');
            return;
        }
        else{
              $("#tasks").prepend("<p><strong>The text has been validated</strong></p>")
        }
         
    });
   
});