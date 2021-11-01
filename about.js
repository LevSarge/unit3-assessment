console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Form has been submitted successfully!");
}

function rubberDucky(evt) {
  evt.preventDefault();

  alert("I see that you are a man of culture!");
}

let form = document.querySelector("form#contact");
let ducky = document.querySelector("img#rubber-ducky");

form.addEventListener("submit", handleSubmit);
ducky.addEventListener("mouseover", rubberDucky);
