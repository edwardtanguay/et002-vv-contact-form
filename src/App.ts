import './styles/main.scss';
import { getMenu, getCurrentPage } from './Router';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<header>
	<h1>Info Site</h1>
	${getMenu()}
</header>
<main>
	${getCurrentPage()}
</main>
`;

// attach events
(() => {
	const btn = document.querySelector('.btnContactForm');
	btn?.addEventListener('click', (e:Event) => {
		e.preventDefault();
		const fullName = document.querySelector<HTMLInputElement>('.contactForm #fullName')?.value; 
		const email = document.querySelector<HTMLInputElement>('.contactForm #email')?.value; 
		const age = document.querySelector<HTMLInputElement>('.contactForm #age')?.value; 
		const formData = {
			fullName,
			email,
			age
		}
		console.log(formData);
	});
})();
