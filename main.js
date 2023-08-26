/* ----------------------
    OPERAZIONI INIZIALI
----------------------- */

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

// Preparo una variabile per tenere tutta la chat
const completeChat = [];

// Preparo una variabile per il genere selezionato
let selectedGenre;

/* ----------------------
    LOGICA DI GIOCO
----------------------- */

//per ogni bottone dei generi...
genreButtons.forEach(function(button){
    // Al click...
    button.addEventListener('click', function(){
        // 1. recuperiamo il genere cliccato
        // 2. Lo impostiamo come selectedGenre
        selectedGenre = button.dataset.genre;

        // 3. Avviamo la partita
        // startGame();
    });
});
