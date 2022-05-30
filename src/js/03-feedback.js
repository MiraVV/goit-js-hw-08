import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = "feedback-form-state";

const refs ={
    feedbackForm : document.querySelector(".feedback-form"),
    email : document.querySelector("input"),
    message : document.querySelector("textarea"),
}

refs.feedbackForm.addEventListener("submit", saveDataForm);
refs.feedbackForm.addEventListener("input", throttle(onTextareaInput, 500))

popularTextarea();

function saveDataForm(evt) {
  evt.preventDefault();
  const saveData = localStorage.getItem(LOCALSTORAGE_KEY);
  const parseData = JSON.parse(saveData);

  console.log(parseData);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  evt.currentTarget.reset();
}

function onTextareaInput() {

   const dataInputForm ={
     email: refs.email.value,
     message: refs.message.value,
    }

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataInputForm));
}


function popularTextarea() {

    const saveDataForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || "";
      
    if(saveDataForm){
      console.log(saveDataForm);
      refs.email.value = saveDataForm.email;
      refs.message.textcontent =saveDataForm.message;
     }
}
