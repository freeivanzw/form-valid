$(function(){
    $("#form").submit(function(e){

        if ($("#name").val() === "" || $("#name").val() == null) {
            $("#errorname").text("where is the name?")
            e.preventDefault();
        } else if ($("#password").val() === "" || $("#password").val() == null) {
            $("#errorpass").text("where is the password?")
            e.preventDefault();
        }
    })
});