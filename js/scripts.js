let errArray = [];
const errCheck = [];
const errIds = ["name-error", "e-mail-error", "pass-error", "gender-error", "sports-error", "country-error"];

const form = document.getElementById("form");

// Error
const getEleById = (id) => document.getElementById(id);
const getEleByName = (name) => document.getElementsByName(name)[0];

for (let i = 0; i < errIds.length; i++) errArray.push(getEleById(errIds[i])) && errCheck.push(0);

const resetErrForm = () => {
    for (let i = 0; i < errArray.length; i++) errArray[i].style.display = 'none' && errCheck[i]? errCheck[i]-- : null;
    getEleById("cong").style.display = "none"
}

const validateEmail = (email) => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)



const checkForm = (e) => {
    e.preventDefault();
    let errExist = 0;
    // reset Errors
    resetErrForm();
    // validate Name
    getEleByName("name").value.length < 1? errCheck[0]++ : null;
    // validate E-mail
    validateEmail(getEleByName("e-mail").value)? null: errCheck[1]++;
    // validate Password
    getEleById("pass").value.length < 8? errCheck[2]++ : null;
    // validate Gender
    const genderInput = document.querySelectorAll('input[name="gender"]:checked').length > 0;
    !genderInput? errCheck[3]++ : null;
    // validate Sports
    const sportsInput = document.querySelectorAll('input[name="sports"]:checked').length < 2
    sportsInput? errCheck[4]++ : null;
    // validate Country
    !getEleByName("country").value? errCheck[5]++ : null;

    for (let i = 0; i < errCheck.length; i++) errCheck[i]? errArray[i].style.display = "block": errExist++;

    errExist == errCheck.length ? getEleById("cong").style.display = "block" : null;

}

document.getElementById("submit").addEventListener("click", checkForm)

let checkPass = 1;
const showPass = () => {
    getEleById("pass").type = checkPass % 2 == 0?  'text': 'password';
    checkPass++;
}
getEleById("toggleShowPass").addEventListener('click', showPass)