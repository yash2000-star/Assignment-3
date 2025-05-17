function isEmail(email){
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function isStrongPassword(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
}

$("#submitbutton").click(function(event){
    var errormessage = "";
    var missingfield = "";

    if($("#Email").val() == ""){
        missingfield += "<p>Email not filled</p>";
    }
    if($("#phoneno").val() == ""){
        missingfield += "<p>Phone number not filled</p>";
    }
    if($("#password").val() == ""){
        missingfield += "<p>Password not filled</p>";
    }
    if($("#confirmpass").val() == ""){
        missingfield += "<p>Confirm Password not filled</p>";
    }

    if($("#Email").val() != "" && isEmail($("#Email").val()) == false){
        errormessage += "<p>Email id is not valid</p>";
    }

    if($("#phoneno").val() != "" && !/^\d{10}$/.test($("#phoneno").val())){
        errormessage += "<p>Phone number must be exactly 10 digits</p>";
    }

    if($("#password").val() != "" && !isStrongPassword($("#password").val())){
        errormessage += "<p>Password must be at least 8 characters and include uppercase, lowercase, and a number</p>";
    }

    if($("#password").val() != "" && $("#confirmpass").val() != "" && $("#password").val() != $("#confirmpass").val()){
        errormessage += "<p>Password does not match</p>";
    }

    // Display Success or Error messages
    if(errormessage == "" && missingfield == ""){
        $("#errors").html("");  // Clear error messages
        $("#success").html("You are registered"); // Success message
    } else {
        $("#success").html("");  // Clear success message
        $("#errors").html(missingfield + errormessage); // Display error messages
    }
});

// Toggle Password visibility on checkbox click
$("#togglePassword").click(function(){
    var passwordField = $("#password");
    var confirmPasswordField = $("#confirmpass");

    // Toggle the 'type' attribute to show or hide the password
    var type = passwordField.attr("type") === "password" ? "text" : "password";
    
    passwordField.attr("type", type);
    confirmPasswordField.attr("type", type);  // Toggle confirm password field visibility
});
