(function(){
    emailjs.init("lYk9wfEbT16fARhFS");
})();

let sendStatus = document.getElementById("send_status");
let thank = document.getElementById("thank_you");

function success() {
    sendStatus.innerText = "Your Message was SENT SUCCESSFULLY."
    sendStatus.style.color = "rgb(0, 255, 200)";
    sendStatus.style.display = 'block';
    setTimeout( function() {
        thank.style.opacity = 1;
    }, 2000);
    setTimeout( function() {
        sendStatus.style.display = 'none';
    }, 5000);
}

function failed() {
    sendStatus.innerText = "Your Message was NOT SENT."
    sendStatus.style.color = "rgb(255, 0, 55)";
    sendStatus.style.display = 'block';
    setTimeout( function() {
        sendStatus.style.display = 'none';
    }, 5000);
}

function formEmpty() {
    sendStatus.innerText = "Please FILL in all required fields.";
    sendStatus.style.color = 'rgb(255, 0, 25)';
    sendStatus.style.display = 'block';
    setTimeout( function() {
        sendStatus.style.display = 'none';
    }, 7500);
}

function sendMail() {
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        message: document.getElementById("message").value
    };

    const serviceID = 'service_cd9qtw7';
    const templateID = 'template_l9u9g8spo1';

    if(params.name === "" || params.email === "" || params.message === "") {
        formEmpty();
    }
    else {
        emailjs.send(serviceID, templateID, params)
        .then(
            res =>{
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                setTimeout(success(), 2000);
            }
        )
        .catch(
            (err) => {
                console.log(err);
                setTimeout(failed(), 3000);
            }
        );
    }
}
