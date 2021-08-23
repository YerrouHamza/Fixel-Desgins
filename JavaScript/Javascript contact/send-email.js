

function sendEmail() {
    let firstName = document.querySelector('#first-name');
    let lastName = document.querySelector('#last-name');
    let email = document.querySelector('#email');
    let phone = document.querySelector('#phone');
    let message = document.querySelector('#contact-message');

    let mail = 'Name: ' + firstName.value + ' ' + lastName.value
    + '<br>Email: ' + email.value
    + '<br>Phone: ' + phone.value
    + '<br>Message: ' + message.value;
}



Email.send({
    Host : "smtp.yahoo.com",
    Username : "mohamadyerrou@yahoo.com",
    Password : "fuklove1",
    To : 'hamzayerrou5@yahoo.com',
    From : "mohamadyerrou@yahoo.com",
    Subject : "New Client Mail On contact form" ,
    Body : sendEmail(mail)
}).then(
message =>{
    if(message == 'OK'){
        alert('Thank You Your Email Has been Send')
    }
} 
);