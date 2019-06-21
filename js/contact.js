$(document).ready(function() {

    $("#form1").submit(function(event) {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:5000/api/contact',
            data: $('#form1').serialize(),
            dataType: "json",
            success: function(response) {
                console.log(response);
                // $('#form1')[0].reset();
                // console.log(response);
                // $("#check").html(response.Success).addClass("alert");

            },
            error: function() {}
        })
    })
});