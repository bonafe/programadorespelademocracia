import { SITE } from './site.js';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

// Links do grupo (todos os botões com data-whatsapp)
const group = SITE.grupoWhatsApp;
for (const link of $$('[data-whatsapp]')) {
    if (group) {
        link.href = group;
        link.target = '_blank';
        link.rel = 'noopener';
    }
}
document.documentElement.classList.toggle('has-group', Boolean(group));

if (SITE.github) {
    for (const link of $$('[data-github]')) {
        link.href = SITE.github;
        link.hidden = false;
    }
}

// Contagem regressiva. O texto estático do HTML continua valendo sem JavaScript.
const target = new Date(SITE.eleicao).getTime();
const box = $('[data-countdown]');

function tick() {
    const left = target - Date.now();
    if (left <= 0) {
        box.textContent = 'A votação começou. Vá votar.';
        return false;
    }
    const days = Math.floor(left / 864e5);
    const hours = Math.floor(left / 36e5) % 24;
    const minutes = Math.floor(left / 6e4) % 60;
    $('[data-d]', box).textContent = days;
    $('[data-h]', box).textContent = String(hours).padStart(2, '0');
    $('[data-m]', box).textContent = String(minutes).padStart(2, '0');
    for (const el of $$('[data-days]')) {
        el.textContent = Math.ceil(left / 864e5); // "em 18 dias" no texto corrido, contagem exata no relógio
    }
    return true;
}

if (box && tick()) {
    setInterval(tick, 30_000);
}

// Compartilhar: Web Share no celular; fallback para o WhatsApp.
const text = 'Programadores pela Democracia 2026: faltam poucos dias para a eleição e a gente está construindo isso em código aberto. Entra:';
for (const button of $$('[data-share]')) {
    button.addEventListener('click', async () => {
        const url = SITE.url;
        if (navigator.share) {
            try {
                await navigator.share({ title: document.title, text, url });
                return;
            } catch (error) {
                if (error.name === 'AbortError') return;
            }
        }
        window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, '_blank', 'noopener');
    });
}
