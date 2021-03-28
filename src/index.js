document.querySelector("form").addEventListener("submit", handleSubmit);

const handleSubmit = (event) => {
  event.preventDefault()
  let myForm = document.getElementById('RSVP');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}

document.querySelectorAll("input").autofocus=false;