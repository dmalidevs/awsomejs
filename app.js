document.addEventListener('DOMContentLoaded', () => {
	const texts = ['Handy Coded.', 'SEO Friendly.', 'Easy Customizable'];

	let count = 0;
	let index = 0;
	let currentText = '';
	let letter = '';

	function type() {
		if (count === texts.length) {
			count = 0;
		}

		currentText = texts[count];

		letter = currentText.slice(0, ++index);

		document.querySelector('.typing').textContent = letter;
		if (letter.length === currentText.length) {
			count++;
			index = 0;
		}
		setTimeout(type, 200);
	};
	type();


	document.querySelector('#email_validation #email').addEventListener('keydown', () => {
		var form = document.getElementById("email_validation");
		var email = document.getElementById("email").value;
		var text = document.getElementById("text");
		var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;

		if (email.match(pattern)) {
			form.classList.add("valid");
			form.classList.remove("invalid");
			text.innerHTML = "Your Email Address is Valid";
			text.style.color = "#00ff00";

		} else {
			form.classList.remove("valid");
			form.classList.add("invalid");
			text.innerHTML = "Please Input Valid Email Address";
			text.style.color = "#ff0000";
		}

		if (email == "") {
			form.classList.remove("valid");
			form.classList.remove("invalid");
			text.innerHTML = "";
			text.style.color = "#00ff00";
		}
	});
});