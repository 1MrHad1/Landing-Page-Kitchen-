function sendEmail(){
Email.send({
    Host : "smtp.gmail.com",
    Username : "umaildanish776@gmail.com",
    Password : "9880190011Had",
    To : 'umaildanish776@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Enquiry for Mom's Kitchen",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}