function Addition() {
    let a = 20;
    let b = 30;
    console.log("working..." + (a + b));+
}

///LOGIN +++++++++++++++++++++++++++++++++++++++++++++
function Login() {
    UserName();
}

function UserName() {
    let username = prompt("Enter UserName");

    if (username == "sumitkumar") {
        password();
    }
    else {
        UserName();
    }
}


function password() {
    let password = prompt("Enter Password");
    if (password == "123456") {
        alert("Login Successfully");
    }
    else {
        password();
    }
}
///+++++++++++++++++++++++++++++++++++++++++++++++++++++++

