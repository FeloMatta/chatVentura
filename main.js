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
        startGame();
    });
});

// Funzione per avviare la partita
function startGame() {
    // 1. Inserisco la classe "game-started"
    document.body.classList.add('game-started');
    // 2. Preparo le istruzioni iniziali per chat GPT
    completeChat.push({
        role: `system`, // come si deve comportare ChatGPT
        content: `Voglio che ti comporti come se fossi un classico gioco di avventura testuale. Io sarò il protagonista e giocatore principale. Non fare riferimento a te stesso. L\'ambientazione di questo gioco sarà a tema ${selectedGenre}. Ogni ambientazione ha una descrizione di 150 caratteri seguita da una array di 3 azioni possibili che il giocatore può compiere. Una di queste azioni è mortale e termina il gioco.


        Non aggiungere mai altre spiegazioni. Non fare riferimento a te stesso. Le tue risposte sono solo in formato JSON come questo esempio:
        
        ###
        
        { 
         "description":"descrizione ambientazione",
          "actions":["azione 1", "azione 2", "azione 3"]
        }
         
         ###`
    });
    // 3. Avvio il primo livello
    setStage();
}