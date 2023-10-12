console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('your form has been submitted successfully');
}


let form = document.querySelector('#contact');


form.addEventListener('submit', handleSubmit);
form.addEventListener('Contact-Form', handleSubmit);

document.getElementById('myFavoriteColor').addEventListener('click', function () {
         alert('My favorite color is blue!');
});
document.getElementById('duck').addEventListener('mouseover', function () {
    alert('You have a great taste in ducks!');
});

//I forgot how to make the form reset/clear after submitting