import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Button } from './components/Button';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
    throw new Error('No se encontró el elemento con id "app"');
}

const header = new Header('Programación Web Avanzada');
const footer = new Footer();
const button = new Button('Guardar');

app.innerHTML = `
    ${header.render()}
    ${button.render()}
    ${footer.render()}
`;

document.querySelector('#saveBtn')?.addEventListener('click', () => 
    button.onClick());