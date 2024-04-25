function sendMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var message = document.getElementById("message").value;

    $.ajax({
        type: "POST",
        url: "ContactForm.aspx/SendMessage",
        data: "{ name: '" + name + "', email: '" + email + "', mobile: '" + mobile + "', message: '" + message + "' }",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(response) {
            alert(response.d);
        },
        error: function(response) {
            alert("Error: " + response.responseText);
        }
    });
}
