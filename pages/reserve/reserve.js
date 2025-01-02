
const formName = document.getElementById("form-name");
const wrongName = document.getElementById("wrong-name");
const formNumber = document.getElementById("form-number");
const wrongNumber = document.getElementById("wrong-number");
const formDate = document.getElementById("form-date");
const wrongDate = document.getElementById("wrong-Date");
const formTime = document.getElementById("form-time");
const wrongTime = document.getElementById("wrong-time");
const formSelect = document.getElementById("form-select");
const wrongSelect = document.getElementById("wrong-select");
const formButton = document.getElementById("form-button");
const wrongSubmit = document.getElementById("wrong-submit");
let formTimeHours = formTime.value.split(":")[0]
let formTimeMinutes = formTime.value.split(":")[1]
const regex = /^(01)([0-9]{9})$/g;
let tempChecker = false;

function wrongInput(input, wrongMessage){
  input.textContent = wrongMessage;
  tempChecker = false
}
function correctInput(input){
  input.textContent = "";
  tempChecker = true;
}

// ===== NAME LISTENER CONTROLER =====
function nameCheck(){
  formName.value === ""? 
  wrongInput(wrongName, `Name is Required`)
  :
  correctInput(wrongName);
}
formName.addEventListener("input",nameCheck)
// ====={{ NAME LISTENER CONTROLER }}=====


// ===== PHONE-NUMBER EVETLISTENER =====
function numberCheck(){
  let checker = regex.test(formNumber.value);
  switch (formNumber.value.length) {
    case 0:
      wrongInput(wrongNumber,`number is required`)
    break;
    case 11:
      if(checker){
        correctInput(wrongNumber)
      }
      else {
        wrongInput(wrongNumber, 'check your number')
      }
    break;
    default:
      wrongInput(wrongNumber, 'match your number to 01234567891')
      break;
  }
}
  formNumber.addEventListener("input",numberCheck)
// ====={{ PHONE-NUMBER EVENTLISTENER }}=====

// ===== REMOVE PREVIOUS DAYS FROM THE CALENDAR =====
const todayDate = new Date().getDate() <= 9 ? "0"+new Date().getDate():new Date().getDate(); //day
const todayMonth = new Date().getMonth()+1 <= 9 ? "0" + (new Date().getMonth()+1) :  new Date().getMonth()+1 //month
const todayYear = new Date().getFullYear() //year
const fullDate = 
formDate.setAttribute("min", `${todayYear}-${todayMonth}-${todayDate}`)
formDate.value= `${todayYear}-${todayMonth}-${todayDate}`
// ====={{ REMOVE PREVIOUS DAYS FROM THE CALENDAR }}=====

// =====  TIME EVENTLISTENER  =====
const todayHour = new Date().getHours()
const todayMinutes = new Date().getMinutes()
formTime.setAttribute("min", `${todayHour === '23'?todayHour : Number(todayHour)< 9 ? "09": todayHour + 1}:00`)
formTime.setAttribute("max", `23:30`)
formTime.value=  `${todayHour === '23'?todayHour : Number(todayHour)< 9 ? "09": todayHour + 1}:00`


function dateCheck(dateValue){
  let todayDate = new Date()
  todayDate.setHours(0,0,0,0);
  let reservationDate = new Date(dateValue)
  reservationDate.setHours(0,0,0,0);
  return reservationDate > todayDate
}
formTime.addEventListener("change",(e)=>{
  
  let otherDayReservation = dateCheck(formDate.value)
  if(otherDayReservation){
    formTime.setAttribute("min", "09:00")
  }else{
    formTime.setAttribute("min", `${todayHour === '23'? todayHour : Number(todayHour)< 9 ? "09": todayHour + 1}:00`)
  }
})
// ====={{ TIME EVENTLISTENER }}=====



// ===== SELECTION EVENTLISTENER =====
formSelect.addEventListener("change", (e)=>{
  if(formSelect.value === ""){
    wrongInput(wrongSelect, "how many person?")
  }else{
    correctInput(wrongSelect)
  }
// ====={{ SELECTION EVENTLISTENER }}=====

})
// ===== SUBMIT =====
document.querySelector("form").addEventListener("submit",async (e)=>{
  e.preventDefault();
  if(tempChecker){
    const formData = new FormData(e.target);
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSeXlFrcOfm11AgB1KI2B009-CsGQgXRPwblfv3VdHMaauyj6g/formResponse', {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
    .then(response => {
      console.log("Success",response)
      document.querySelector(".landing-page p").style.display = "none"
      document.querySelector(".landing-page form").style.display = "none"
      let header1  = document.createElement("h1")
      let header2  = document.createElement("h2")
      let messageImg  = document.createElement("img")
      header1.textContent = "Your Reservation Was Sent"
      header1.style.color = "white"
      header1.style.textAlign = "center"
      header2.textContent = "See You Soon"
      header2.style.color = "white"
      header2.style.textAlign = "center"
      messageImg.src = "../../logo-images/fork-knife.png"
      messageImg.alt = "logo"
      messageImg.style.display = "block"
      messageImg.style.margin = "0 auto"
      messageImg.style.width  = "300px"
      document.querySelector(".landing-page").append(header1, header2, messageImg)
      setTimeout(() => {
        window.location.href = "../../index.html"
      }, 3000);

    })
    .catch(error => {
      console.error('Error:', error);
    });
  }else{
    wrongInput(wrongSubmit, "check your reservation")
  }
})
// ====={{ SUBMIT }}=====
