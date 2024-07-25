const BtnE1 = document.getElementById("button");
const BirthdayE1 = document.getElementById("Birthday");
const resultE1 = document.getElementById("result");


function CalculateAge(){
    const BirthdayValue = BirthdayE1.value;
    if (!BirthdayValue) {
        alert("please Enter tour date of Birth");
    }else{
        const age = getAge(BirthdayValue);
        resultE1.innerText = `Your age is ${age} ${age>1 ? "year":"year"}old`
    }
}
function getAge(BirthdayValue){
    const currentDate = new Date();
    const BirthdayDate = new Date(BirthdayValue);
    let age = currentDate.getFullYear() - BirthdayDate.getFullYear();
    const month = currentDate.getMonth() - BirthdayDate.getMonth();
    const days = currentDate.getDate() - BirthdayDate.getDate();

    if(month<0 || (month === 0 && days < 0)){
        age--
    }
    return age;
}

BtnE1.addEventListener("click",CalculateAge);