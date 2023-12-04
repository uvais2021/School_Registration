const StudentFirstname = document.getElementById('Fname');
const StudentLastname = document.getElementById('Lname');
const ParentFirstname = document.getElementById('PFname');
const ParentLastname = document.getElementById('PLname');
var radios = document.getElementsByName('gender')
const Studentstd = document.getElementById('Std')
const StudentDob = document.getElementById('Dob');
const phonePin = document.getElementById('pin');
const MonileNo = document.getElementById('mobile');
const email = document.getElementById('email');
const country = document.getElementById('country');
var selectedInterests = [];
const checkBox = document.getElementsByName('inp');
const street = document.getElementById('street');
const city = document.getElementById('city');
const region = document.getElementById('Region');
const postalCode = document.getElementById('code');

const form = document.getElementById('form');
var a = 0;
const result = document.getElementById('result');
var radioBtn;
form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs()

    if (a >= 10) {
        display();
    } else {
        a = 0;
    }

});

function checkInputs() {

    const StudentFirstnameValue = StudentFirstname.value.trim();
    const StudentLastnameValue = StudentLastname.value.trim();

    const ParentFirstnameValue = ParentFirstname.value.trim();
    const ParentLastnameValue = ParentLastname.value.trim();
    const StudentDobValue = StudentDob.value.trim();

    const streetValue = street.value.trim();
    const cityValue = city.value.trim();
    const regionValue = region.value.trim();
    const postalCodeValue = postalCode.value.trim();

    const MonileNoValue = MonileNo.value.trim();
    const emailValue = email.value.trim();


    // Studebt name
    if (StudentFirstnameValue === '') {
        setErrorFor(StudentFirstname, 'First Name should be filled')
    }
    else {
        setSuccessFor(StudentFirstname)
    }
    if (StudentLastnameValue === '') {
        setErrorFor(StudentLastname, 'Last Name should be filled')
    }
    else {
        setSuccessFor(StudentLastname)
    }


    // parent name 
    if (ParentFirstnameValue === '') {
        setErrorFor(ParentFirstname, 'Parent First Name should be filled')
    }
    else {
        setSuccessFor(ParentFirstname)
    }
    if (ParentLastnameValue === '') {
        setErrorFor(ParentLastname, ' Parent Last Name should be filled')
    }
    else {
        setSuccessFor(ParentLastname)
    }

    // street
    if (streetValue === '') {
        setErrorFor(street, ' Street should be filled')
    }
    else {
        setSuccessFor(street)
    }
    // city
    if (cityValue === '') {
        setErrorFor(city, ' City should be filled')
    }
    else {
        setSuccessFor(city)
    }
    // region
    if (regionValue === '') {
        setErrorFor(region, ' Region should be filled')
    }
    else {
        setSuccessFor(region)
    }
    // postal
    if (postalCodeValue === '') {
        setErrorFor(postalCode, ' Code should be filled')
    }
    else {
        setSuccessFor(postalCode)
    }
    // mobile
    if (MonileNoValue === '') {
        setErrorFor(MonileNo, ' Mobile No should be filled')
    }
    else if (MonileNoValue.length != 10) {
        setErrorFor(MonileNo, 'Give 10 digits numbers')
    }
    else {
        setSuccessFor(MonileNo)
    }
    // email
    if (emailValue === '') {
        setErrorFor(email, ' Email should be filled')
    }
    else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Invalid email')
    }
    else {
        setSuccessFor(email)
    }

    // gender

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioBtn = radios[i].value;
        }
    }

    // class


    // Dob
    if (StudentDobValue === '') {
        setErrorFor(StudentDob, 'Date should be filled')
    }
    else {
        setSuccessFor(StudentDob)
    }

    // interest
    
    for (let i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked) {
            selectedInterests.push(checkBox[i].value);
        }
    }
}

function setErrorFor(input, msg) {
    const formControl = input.parentElement;

    const small = formControl.querySelector('small');
    small.innerText = msg;
    formControl.className = 'error input select'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'success input select'
    a += 1;

}


function setSuccessForRadio(checkBox) {
    let checkBoxArray = [''];
    checkBoxArray = checkBox;

}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function display() {
    document.write(`<center>`);
    document.write(`<h2>Your Inputs</h2>` + `<br>`);
    document.write(`Student Name: ${StudentFirstname.value}` + `${StudentLastname.value}` + `<br>`);
    document.write(`Father Name: ${ParentFirstname.value}` + `${ParentLastname.value}` + `<br>`);

    document.write(`Dob: ${StudentDob.value}` + `<br>`);
    document.write(`Gender: ${radioBtn}` + `<br>`);
    document.write(`Std: ${Studentstd.value}` + `<br>`);
    document.write(`Interest: ${selectedInterests.join(', ')}` + `<br>`);
    document.write(`Street: ${street.value}` + `<br>`);
    document.write(`City: ${city.value}` + `<br>`);
    document.write(`Region: ${region.value}` + `<br>`);
    document.write(`Postal Code: ${postalCode.value}` + `<br>`);
    document.write(`Country: ${country.value}` + `<br>`);
    document.write(`Dial Code: + ${phonePin.value}` + `${MonileNo.value}` + `<br>`);

    document.write(`Email: ${email.value}` + `<br>`);
}
// function display() {
//     document.write(`<center>`);
//         document.write(<h2>Your Inputs</h2> + <br>);
//             document.write(Student Name: ${StudentFirstname.value} ${StudentLastname.value} + <br>);
//                 document.write(Father Name: ${ParentFirstname.value} ${ParentLastname.value} + <br>);
//                     document.write(Dob: ${StudentDob.value} + <br>);
//                         document.write(Gender: ${radioBtn} + <br>);
//                             document.write(Std: ${Studentstd.value} + <br>);

//                                 // Displaying Interests

//                                 document.write(Interest: ${selectedInterests.join(', ')} + <br>);

//                                     document.write(Street: ${street.value} + <br>);
//                                         document.write(City: ${city.value} + <br>);
//                                             document.write(Region: ${region.value} + <br>);
//                                                 document.write(Postal Code: ${postalCode.value} + <br>);
//                                                     document.write(Country: ${country.value} + <br>);
//                                                         document.write(Dial Code: + ${phonePin.value} ${MonileNo.value} + <br>);
//                                                             document.write(Email: ${email.value} + <br>); 
//     }
