//Register

var nonEmpty = function (checkValue, valueName) {
    if (checkValue == "") {
        alert(valueName + " cannot be empty!");
        return false;
    }
}

function validDate() {
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(document.getElementById("dateOfBirth").value)) {
        alert("The date is not valid.");
        return false;
    }
    var parts = document.getElementById("dateOfBirth").value.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);
    if (year < 1000 || year > 2020 || month == 0 || month > 12) {
        alert("The date is not valid!");
        return false;
    }
    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 4 == 0)
        monthLength[1] = 29;
    return day > 0 && day <= monthLength[month - 1];
}

function checkForm() {
    var number = /\d/,
        uppercase = /[A-Z]/,
        lowercase = /[a-z]/,
        specialCharacter = /[#?!@$%^&\-*+=_.]/,
        letter = /[A-Za-z]/,

        n = document.getElementById("fname").value,
        l = document.getElementById("lname").value,
        d = document.getElementById("dateOfBirth").value,
        m = document.getElementById("email").value,
        p = document.getElementById("password").value;

    nonEmpty(n, "Name");

    if ((number.test(n)) || (!letter.test(n)) || (specialCharacter.test(n))) {
        alert("Name should contain only letters!");
        return false;
    }

    nonEmpty(l, "Surname");

    if ((number.test(l)) || (!letter.test(l)) || (specialCharacter.test(l))) {
        alert("Surname should contain only letters!");
        return false;
    }

    nonEmpty(d, "Date of birth");
    validDate();

    var validEmail = /\w+@\w+\.\w+/;

    nonEmpty(m, "Email");

    if (!validEmail.test(m)) {
        alert("Email should be a correctly formatted email address (<id>@<domain>).");
        return false;
    }

    nonEmpty(p, "Password")
    if ((p.length < 6) || (p.length > 15)) {
        alert("Password should be between 6 to 15 characters long!");
        return false;
    }

    if ((!number.test(p)) || (!uppercase.test(p)) || (!lowercase.test(p)) || (!specialCharacter.test(p))) {
        alert(
            "Password should contain at least one uppercase letter, one numeric digit, and one special character."
        );
        return false;
    }
}

function information() {
    alert(
        "Password must be at least 6 and at most 15 characters long. It must contain at least one uppercase letter, one numeric digit, and one special character"
    );
}