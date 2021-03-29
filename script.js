$(function(){
    $("#form").submit(function(e){

        if ($("#name").val() === "" || $("#name").val() == null) {
            $("#errorname").text("де імя твоє?");
            e.preventDefault();
        } else if ($("#password").val() === "" || $("#password").val() == null) {
            $("#errorname").text("Нуууу, пароль всьо таки тоже потрібно");
            e.preventDefault();
        } else if ($("#password").val().length < 6 ) {
            $("#errorname").text("двавай більше циферок, хотяб 6");
            e.preventDefault();
        };
    })
});