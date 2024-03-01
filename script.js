$(document).ready(function(){
    console.log("running");

    $("#my-dear").click(function(event){
        event.preventDefault(); // Prevent the default form submission behavior
        $("#my-dear").validate({
            rules:{
                fname:{
                    required: true,
                    minlength: 4
                },
                sname:{
                    required: true,
                    minlength: 4
                },
                emailaddress:{
                    required: true,
                    email: true
                }, 
                password:{
                    minlength: 6
                },
                day:{
                    required: true
                }
            },
            
        });
    });
});
