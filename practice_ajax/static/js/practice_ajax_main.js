$(document).ready(function(){

    document.cookie = 'name=JohnSmith';

    console.log(document.cookie);

    var csrf = $("input[name=csrfmiddlewaretoken]").val();

    $(".btn").click(function(){
        $.ajax({
            url: '',
            type: 'get',
            data: {
                button_text: $(this).text()
            },
            success: function(response){
                $(".btn").text(response.seconds)
                $("#seconds").append('<li>' + response.seconds+ '</li>')
            }
        });
    });


    $("#seconds").on('click', 'li', function(){
        $.ajax({
            url: '',
            type: 'post',
            data: {
                // someTextHere: $(this).text(),
                someTextHere: "first sample text",
                forDatabase: "Sample text",
                csrfmiddlewaretoken: csrf
            },
            success: function(response){
                $("#right").append('<li>' + response.data + '</li>')
            }
        })
    })
});