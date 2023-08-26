// OPERAZIONI INIZIALI

// CONFIGURAZIONE DI ChatGPT
const API_BASE_URL = 'https://api.openai.com/v1';
const API_KEY = ''; // inserisci la tua chiave
const GPT_MODEL = 'gpt-3.5-turbo';

// Recuperiamo gli elementi principali della pagina
const loader = document.querySelector('.loader');
const genreButtons = document.querySelectorAll('.genre');
const placeholder = document.querySelector('#placeholder');
const stageTemplate = document.querySelector('#stage-template');
const gameoverTemplate = document.querySelector('#gameover-template');
