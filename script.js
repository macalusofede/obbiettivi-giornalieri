// LA TUA LISTA PERSONALIZZATA
const sfidePool = [
    "Bevi 2 litri d'acqua oggi 💧",
    "Allenati 🏋️‍♂️",
    "Non usare i social per 1 ora dopo pranzo 📵",
    "Impara qualcosa di nuovo 🧠",
    "Niente 🔞",
    "Fai una passeggiata 🌲",
    "Vai a dormire presto 😴",
    "Non mangiare cibo spazzatura 🍎",
    "Rilassati e prenditi 5 minuti per capire cosa vuoi diventare 🧘‍♂️",
    "Allena il tuo cervello risolvendo giochi mentali 🧩",
    "Alzati presto il giorno dopo ☀️",
    "Risparmia il più possibile 💰",
    "Ordina e pulisci la tua camera e le tue cose 🧹",
    "Fai una doccia gelata 🧊",
    "Niente caffeina ☕",
    "Fai qualcosa che odi fare 🔥",
    "Niente lamentele per oggi 🤐",
    "Se studi o lavori niente telefono 📵",
    "Butta via 5 oggetti che non usi più 🗑️"
];

let sfidaCorrente = "";
// Carichiamo il database dal telefono o ne creiamo uno vuoto
let database = JSON.parse(localStorage.getItem("db_sfide")) || {};

const btnGenera = document.getElementById("btn-genera");
const btnFatto = document.getElementById("btn-fatto");
const displaySfida = document.getElementById("box-sfida");
const registroUI = document.getElementById("registro-calendario");

// Funzione per ottenere la data odierna
function getOggi() { 
    return new Date().toLocaleDateString('it-IT'); 
}

// Funzione per aggiornare i contatori e la grafica
function aggiornaStats() {
    let totale = 0;
    let oggiCount = (database[getOggi()]) ? database[getOggi()].length : 0;
    
    for (let giorno in database) {
        totale += database[giorno].length;
    }

    document.getElementById("stat-totale").innerText = totale;
    document.getElementById("stat-oggi").innerText = oggiCount;
    renderCalendario();
}

// Funzione per mostrare il registro storico
function renderCalendario() {
    registroUI.innerHTML = "";
    // Ordiniamo le date in modo che le più recenti appaiano per prime
    const dateOrdinate = Object.keys(database).sort((a,b) => {
        return new Date(b.split('/').reverse().join('-')) - new Date(a.split('/').reverse().join('-'));
    });

    dateOrdinate.forEach(data => {
        const div = document.createElement("div");
        div.className = "day-group";
        div.innerHTML = `<div class="day-title">${data === getOggi() ? "OGGI" : data}</div>`;
        
        database[data].forEach(task => {
            const p = document.createElement("p");
            p.className = "completed-task";
            p.innerText = "✅ " + task;
            div.appendChild(p);
        });
        registroUI.appendChild(div);
    });
}

// Quando clicchi "Genera Nuova Sfida"
btnGenera.onclick = () => {
    const rand = Math.floor(Math.random() * sfidePool.length);
    sfidaCorrente = sfidePool[rand];
    displaySfida.innerText = sfidaCorrente;
    displaySfida.style.color = "#f1c40f"; // Colore giallo per la sfida attiva
    btnFatto.style.display = "block";    // Mostra tasto Fatto
    btnGenera.style.display = "none";    // Nasconde tasto Genera
};

// Quando clicchi "Segna come Completata"
btnFatto.onclick = () => {
    const oggi = getOggi();
    
    // Se non ci sono sfide salvate per oggi, crea la lista
    if (!database[oggi]) database[oggi] = [];
    
    // Aggiunge la sfida corrente al database
    database[oggi].push(sfidaCorrente);
    
    // Salva tutto nella memoria del telefono
    localStorage.setItem("db_sfide", JSON.stringify(database));
    
    displaySfida.innerText = "Ottimo lavoro! Un'altra?";
    displaySfida.style.color = "#2ecc71"; // Colore verde per il successo
    btnFatto.style.display = "none";
    btnGenera.style.display = "block";
    
    aggiornaStats();
};

// Avvio iniziale
aggiornaStats();