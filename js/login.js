$(document).ready(function() {

    $("#login").submit(function(event) {
        event.preventDefault();
        var data = $('#login').serialize();
        // data += '&username=blah&id=blah1';
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:5000/api/users/login',
            data: data,
            dataType: "json",
            beforeSend: function() {
                $(".lbl_status").hide();
            },
            success: function(response) {
                // alert("a");
                console.log(response);
                $('#login')[0].reset();
                $(".modal-content").addClass("active");
                // document.getElementById("check").innerHTML = response.message;
                //ADD THIS CODE
                setTimeout(function() {
                    // document.getElementById("check").innerHTML = "";
                    if (response.Success == "Success!") {
                        if (typeof(Storage) !== "undefined") {
                            localStorage.setItem("token", response.token);
                            localStorage.setItem("admin", response.admin);
                            localStorage.setItem("username", response.username);
                            localStorage.setItem("_id", response._id);
                            $(".modal-content").removeClass("active");
                        } else {
                            // document.getElementById("check").innerHTML = "Sorry, your browser does not support Web Storage...";
                        }
                        $('<a href="admin/dashboard.html" id="aa"></a>').appendTo("body");
                        document.getElementById("aa").click();
                    } else {
                        $(".modal-content").removeClass("active");
                    }
                }, 3000);
                setTimeout(function() {
                    $(".lbl_status").show();
                }, 1000);


            },
            error: function() {}
        })
    });

    $("#signup").submit(function(event) {
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:5000/api/users/registration',
            data: $('#signup').serialize(),
            dataType: "json",
            beforeSend: function() {
                $(".lbl_status").hide();
            },
            success: function(response) {
                alert("You are registered now");
                //console.log(response.Success);
                $('#signup')[0].reset();

                $(".modal-content").addClass("active");
                // document.getElementById("check").innerHTML = response.Success;
                //ADD THIS CODE
                setTimeout(function() {

                    // document.getElementById("check").innerHTML = "";
                    if (response.Success == "You are regestered,You can login now.") {
                        $('<a href="index.html" id="aa"></a>').appendTo("body");
                        document.getElementById("aa").click();
                    } else {
                        $(".modal-content").removeClass("active");
                    }
                }, 5000);
                setTimeout(function() {
                    $(".lbl_status").show();
                }, 8000);

            },
            error: function() {}
        })
    });

});