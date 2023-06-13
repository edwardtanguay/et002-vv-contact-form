import './styles/pageWelcome.scss';

export const PageWelcome = () => {
	return /*html*/`
<div class="page pageWelcome">
	<h1>HTML form which sends data via action attribute to local backend</h1>
	<form>
		<fieldset>
			<legend>Your contact details:</legend>

			<div class="row">
				<label for="fullName">Name:</label>
				<input type="text"
					   name="fullName"
					   id="fullName">
			</div>

			<div class="row">
				<label for="email">Email:</label>
				<input type="email"
					   name="email"
					   id="email">
			</div>

			<div class="row">
				<label for="age">Age:</label>
				<input type="number"
					   name="age"
					   id="age">
			</div>

			<div class="buttonRow">
				<button>Sign up now</button>
			</div>
		</fieldset>
	</form>
</div>
`; 
}