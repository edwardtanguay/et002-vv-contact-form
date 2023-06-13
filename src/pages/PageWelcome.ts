import './styles/pageWelcome.scss';
import axios from 'axios';

export const PageWelcome = () => {
	return /*html*/`
<div class="page pageWelcome">
	<h1>HTML form which sends data via action attribute to local backend</h1>
	<form class="contactForm">
		<fieldset>
			<legend>Your contact details:</legend>

			<div class="row">
				<label for="fullName">Name:</label>
				<input type="text"
					   id="fullName">
			</div>

			<div class="row">
				<label for="email">Email:</label>
				<input type="email"
					   id="email">
			</div>

			<div class="row">
				<label for="age">Age:</label>
				<input type="number"
					   id="age">
			</div>

			<div class="buttonRow">
				<button class="btnContactForm">Sign up now</button>
			</div>
		</fieldset>
	</form>
</div>
`;
}

export const attachPageWelcomeEvents = () => {
	const apiUrl = 'http://localhost:5555';

	const btn = document.querySelector('.btnContactForm');
	btn?.addEventListener('click', (e: Event) => {
		e.preventDefault();
		const fullName = document.querySelector<HTMLInputElement>('.contactForm #fullName')?.value;
		const email = document.querySelector<HTMLInputElement>('.contactForm #email')?.value;
		const age = document.querySelector<HTMLInputElement>('.contactForm #age')?.value;
		const formData = {
			fullName,
			email,
			age
		};

		(async () => {
			const response = await axios.post(`${apiUrl}/contacts`, formData);
			console.log(response);
		})();
	});
}