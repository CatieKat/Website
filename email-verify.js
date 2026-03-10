// email-verify.js

// store OTP globally so the login handler can access it
window.generatedCode = "";

// Send the OTP email
document.getElementById("sendCode").addEventListener("click", function(e){
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

  // check username/password before sending OTP
    if(username !== "TheRealObiWan" || password !== "UseTheForce"){
        alert("Username or password incorrect. Please try again.");
        return;
    }

  // generate a 6-digit OTP
    window.generatedCode = Math.floor(100000 + Math.random() * 900000);

  // send email via EmailJS
    emailjs.send(
      "service_anby35p",      // my email Service ID
      "template_yrbvftw",     // Template ID for verification email message
    {
        email: "thetotallyrealobi@gmail.com",  // email address
        passcode: window.generatedCode     
    }
    ).then(function(response){
        console.log("Email sent!", response.status, response.text);
        alert("📡 Verification code sent. Check your email.");
    }, function(error){
        console.error("Error sending email:", error);
        alert("Error sending email: " + error.text);
    });
});