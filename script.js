// ==========================================
// 1. CONFIGURAZIONE & STATO INIZIALE
// ==========================================
const sfidePool = [
    // SALUTE E BENESSERE FISICO
    "Bevi 2 litri d'acqua oggi 💧", "Allenati almeno 30 minuti 🏋️‍♂️",
    "Fai una passeggiata di 20 minuti 🌲", "Stretching mattutino 🤸",
    "Vai a dormire prima delle 23 😴", "Fai 50 addominali 💪",
    "Fai una doccia gelata 🧊",
    "Cammina 8000 passi 🚶", "Fai 10 minuti di yoga 🧘‍♀️",
    "Bevi una tisana rilassante prima di dormire 🍵",
    "Fai una corsa all'aperto 🏃‍♂️", "Respira profondamente per 5 minuti 🌬️",
    "Fai stretching prima di dormire 🌙",

    // ALIMENTAZIONE
    "Non mangiare cibo spazzatura 🍎", "Niente zuccheri aggiunti oggi 🚫🍬",
    "Mangia 5 porzioni di frutta e verdura 🥦", "Niente caffeina dopo le 16 ☕",
    "Prepara un pasto sano da zero 🥗", "Salta lo snack serale 🌙",
    "Bevi solo acqua, niente bibite 🥤🚫", "Mangia lentamente e senza distrazioni 🍽️",
    "Niente fritti oggi 🍟🚫", "Prova un piatto nuovo e sano 🍲",

    // DIGITALE / SOCIAL
    "Niente social dopo pranzo 📵", "Niente telefono per la prima ora del giorno 📴",
    "Niente telefono al lavoro/studio 📵", "Un'ora senza schermi prima di dormire 🌙",
    "Elimina un'app che usi troppo e ti crea dipendenza 🗑️📱", "Disattiva le notifiche inutili 🔕",
    "Rispondi a tutte le email/messaggi in sospeso 📧", "Fai una pausa digital di 3 ore 🌿",
    "Metti il telefono in modalità aereo per 1 ora e fai qualcosa di produttivo✈️", "Non guardare serie TV oggi 📺🚫",

    // MENTALE / CRESCITA PERSONALE
    "Impara qualcosa di nuovo 🧠", "Leggi almeno 20 pagine di un libro 📖",
    "Scrivi 3 cose per cui sei grato 🙏", "Medita per 10 minuti 🧘‍♂️",
    "Ascolta un podcast educativo 🎧",
    "Scrivi i tuoi obiettivi per la settimana 📝", "Fai un puzzle o un gioco di logica 🧩",
    "Guarda un documentario 🎬",
    "Rifletti sui tuoi progressi del mese 🪞", "Impara una nuova ricetta 👨‍🍳",
    "Fai un test di conoscenza online 📚", "Ascolta un audiolibro 🎧",
    "Pianifica la settimana prossima 🗓️",

    // EMOTIVO / SOCIALE
    "Chiama un amico che non senti da tempo 📞", "Fai un complimento sincero a qualcuno 💬",
    "Niente lamentele per tutto il giorno 🤐", "Scrivi un messaggio di apprezzamento a qualcuno 💌",
    "Aiuta qualcuno senza aspettarti nulla 🤝",
    "Passa del tempo di qualità in famiglia 👨‍👩‍👧",

    // PRODUTTIVITÀ
    "Alzati presto domani ☀️", "Fai la lista delle priorità della giornata ✅",
    "Completa il compito che rimandi da giorni ⏳", "Lavora 25 minuti senza distrazioni 🍅",
    "Riordina la tua scrivania 🗂️", "Pulisci la camera 🧹",
    "Organizza i file sul computer 💻", "Svuota la casella email 📬",
    "Fai il bucato 🧺", "Butta via 5 oggetti inutili 🗑️",
    "Completa una task arretrata 📋", "Pianifica il budget della settimana 💰",
    "Fai ordine nell'armadio 👕", "Prepara i vestiti per domani 👔",
    "Rifai il letto appena sveglio 🛏️",

    // FINANZA
    "Risparmia il più possibile oggi 💰", "Non fare acquisti non necessari 🚫🛒",
    "Controlla le tue spese del mese 📊", "Metti da parte una piccola somma 💵",
    "Cancella un abbonamento che non usi ✂️",

    // SFIDE PERSONALI
    "Fai qualcosa che ti spaventa un po' 😬", "Fai qualcosa che odi ma va fatto 🔥",
    "Prova qualcosa per la prima volta 🌟",
    "Passa un'ora in silenzio, solo con te stesso 🤫", "Digiuna dai dolci per un giorno 🍰🚫",
    "Sfida te stesso con 20 minuti di attività extra 🔥", "Elimina una cattiva abitudine per un giorno ⛔",
    "Passa 30 minuti senza lamentarti di nulla 🤐",

    // VARI / DIVERTENTI
    "Balla per 10 minuti senza motivo 💃", "Scatta una foto a qualcosa di bello oggi 📸",
    "Cucina qualcosa di nuovo 👩‍🍳",
    "Disegna o scrivi qualcosa di creativo 🎨", "Guarda l'alba o il tramonto 🌅",
    "Passa del tempo nella natura 🌳", "Fai un gioco da tavolo con qualcuno 🎲",
    "Scrivi una lettera a te stesso del futuro 💌", "Fai qualcosa di totalmente spontaneo oggi 🎉"
];

// Sfide esclusive PREMIUM
const sfidePoolPremium = [
    "Digiuno intermittente 16:8 oggi 🍽️⏰", "Corri almeno 5km 🏃‍♂️💨",
    "Scrivi un capitolo del tuo progetto personale ✍️", "Medita per 20 minuti 🧘‍♂️🕐",
    "Impara 10 parole in una lingua nuova 🌍", "Fai un allenamento HIIT completo 🔥💪",
    "Organizza tutta la tua casa in un giorno 🏠", "Pianifica i prossimi 3 mesi della tua vita 🗺️",
    "Niente schermi per un'intera giornata 📵🌞", "Fai volontariato per qualche ora 🤲",
    "Scrivi una lettera a mano a qualcuno 💌✒️", "Prepara i pasti per tutta la settimana 🍱",
    "Fai un bilancio finanziario completo del mese 📈", "Cammina 15000 passi 🚶‍♂️🚶‍♀️",
    "Impara una nuova skill in 1 ora (video tutorial) 🎓"
];

const giorniSett = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

// Migrazione: le sfide attive salvate in vecchio formato (solo testo) diventano oggetti
function migraAttive(raw) {
    const arr = JSON.parse(raw) || [];
    return arr.map(item => typeof item === "string"
        ? { testo: item, taskId: null, dataISO: null }
        : item
    );
}

let state = {
    totale: parseInt(localStorage.getItem("pro_vF_tot")) || 0,
    streak: parseInt(localStorage.getItem("pro_vF_str")) || 0,
    attive: migraAttive(localStorage.getItem("pro_vF_att") || "[]"),
    usateOggi: JSON.parse(localStorage.getItem("pro_vF_usa")) || [],
    storico: JSON.parse(localStorage.getItem("pro_vF_storico")) || [0, 0, 0, 0, 0, 0, 0],
    isPremium: localStorage.getItem("pro_vF_premium") === "true",
    sfideAccettateOggi: parseInt(localStorage.getItem("pro_vF_accettate")) || 0,
    totalePerse: parseInt(localStorage.getItem("pro_vF_perse")) || 0,
    partiteOggi: JSON.parse(localStorage.getItem("pro_vF_partite_oggi")) || { impiccato: 0, memorycarte: 0, texting: 0 }
};

const LIMITE_SFIDE_STANDARD = 5;
const LIMITE_PARTITE_STANDARD = 5;
const LIMITE_PARTITE_TEXTING = 10;

// Variabili Giochi
let sudokuTimer = null;
let sudokuSecondi = 0;
let schemaCorrente = null;
let livelloSudoku = 40; // default: medio (celle vuote)
let memoryLivello = 6; 
let reactionTimeout = null;
let reactionStartTime = 0;
let reactionState = 'idle'; 
let bestReaction = parseInt(localStorage.getItem("pro_vF_best_reaction")) || null;
let mathTimer = null;
let mathTimeLeft = 30;
let mathScore = 0;
let bestMathScore = parseInt(localStorage.getItem("pro_vF_best_math")) || 0;

// Variabili gioco Simon Colori (Premium)
let simonSequence = [];
let simonUserIndex = 0;
let simonLivello = 0;
let simonAccettaInput = false;
let bestSimon = parseInt(localStorage.getItem("pro_vF_best_simon")) || 0;

// Variabili gioco Anagramma Lampo (Premium)
const paroleAnagramma = [
    "computer", "montagna", "biblioteca", "arancione", "elefante", "gelato",
    "fotografia", "biscotto", "farfalla", "ombrello", "scoiattolo", "chitarra",
    "vulcano", "dinosauro", "cioccolato", "bicicletta", "ristorante", "girasole",
    "pattinaggio", "ventaglio", "medaglia", "fontana", "labirinto", "orologio",
    "gondola", "castello", "formaggio", "pianoforte", "acquario", "cannocchiale"
];
let anagrammaTimer = null;
let anagrammaTimeLeft = 30;
let anagrammaScore = 0;
let anagrammaParolaCorrente = "";
let bestAnagramma = parseInt(localStorage.getItem("pro_vF_best_anagram")) || 0;

// Variabili gioco Impiccato (Standard)
const paroleImpiccato = [
    "GIRAFFA", "OMBRELLO", "MONTAGNA", "BICICLETTA", "VULCANO", "LABIRINTO", "FARFALLA",
    "CIOCCOLATO", "PIANOFORTE", "SCOIATTOLO", "FOTOGRAFIA", "CASTELLO", "GONDOLA",
    "TARTARUGA", "OROLOGIO", "FONTANA", "VENTAGLIO", "MEDAGLIA", "RISTORANTE", "ARANCIONE",
    "ELEFANTE", "GELATO", "BISCOTTO", "CHITARRA", "DINOSAURO", "GIRASOLE", "ACQUARIO",
    "CANNOCCHIALE", "BIBLIOTECA", "PATTINAGGIO"
];
let impiccatoParola = "";
let impiccatoLettereIndovinate = [];
let impiccatoLettereSbagliate = [];
let impiccatoTentativiMax = 6;
let impiccatoFinito = false;
let impiccatoVinte = parseInt(localStorage.getItem("pro_vF_impiccato_vinte")) || 0;

// Variabili gioco Memory Carte (Standard)
const emojiMemoryCarte = ["🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🥝", "🍍"];
let memoryCarteEmoji = [];
let memoryCartePrimaScelta = null;
let memoryCarteBloccato = false;
let memoryCarteCoppieTrovate = 0;
let memoryCarteMosse = 0;
let memoryCarteMigliorPunteggio = parseInt(localStorage.getItem("pro_vF_memcarte_best")) || null;

// Variabili gioco 2048 (Premium)
let grid2048 = [];
let punteggio2048 = 0;
let best2048 = parseInt(localStorage.getItem("pro_vF_best_2048")) || 0;
let vinto2048 = false;

// Variabili gioco Snake (Premium)
let snakeCanvas = null;
let snakeCtx = null;
let snakeBody = [];
let snakeDirezione = 'destra';
let snakeProssimaDirezione = 'destra';
let snakeCibo = { x: 0, y: 0 };
let snakeInterval = null;
let snakePunteggio = 0;
let bestSnake = parseInt(localStorage.getItem("pro_vF_best_snake")) || 0;
const SNAKE_CELLE = 15;
const SNAKE_CELLA_PX = 18;

// Variabili gioco Digita Veloce (Standard, per tutti)
const frasiTexting = [
    "Il gatto nero dorme tranquillo sul davanzale della finestra al sole.",
    "Ogni mattina mi piace bere un caffe caldo prima di iniziare la giornata.",
    "La pioggia cadeva lentamente sui tetti della citta addormentata.",
    "Abbiamo deciso di organizzare una gita in montagna per il prossimo weekend.",
    "Il libro che sto leggendo racconta una storia avvincente ambientata nel medioevo.",
    "Dopo il lavoro andro in palestra per allenarmi un paio d'ore.",
    "La cucina italiana e conosciuta in tutto il mondo per la sua semplicita e qualita.",
    "I bambini giocavano felici nel parco vicino a casa mia.",
    "Ho appena finito di guardare un film molto interessante sulla natura.",
    "Il treno delle otto era in ritardo di quasi venti minuti stamattina.",
    "Mi piacerebbe imparare a suonare la chitarra durante l'estate.",
    "La squadra ha vinto la partita grazie a un gol negli ultimi minuti.",
    "Domani andremo al mercato per comprare frutta e verdura fresca.",
    "Il computer si e bloccato proprio mentre stavo salvando il documento.",
    "Passeggiare lungo la spiaggia al tramonto e sempre un'esperienza rilassante.",
    "Abbiamo passato tutta la serata a chiacchierare davanti al camino acceso.",
    "La nuova app permette di gestire le proprie finanze in modo semplice e veloce.",
    "Il professore ha spiegato con chiarezza un argomento piuttosto complicato.",
    "Durante le vacanze abbiamo visitato tre citta diverse in una sola settimana.",
    "Il profumo del pane appena sfornato riempiva tutta la casa."
];
let textingFraseCorrente = "";
let textingFinito = false;
let textingFrasiCompletate = 0;
let textingMigliorStreak = parseInt(localStorage.getItem("pro_vF_best_texting_streak")) || 0;

// ==========================================
// SISTEMA AUDIO (suoni generati via Web Audio API, nessun file esterno)
// ==========================================
let audioCtx = null;
let suoniAttivi = localStorage.getItem("pro_vF_suoni") !== "false"; // default: attivi

function getAudioCtx() {
    if (!audioCtx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        audioCtx = new AC();
    }
    return audioCtx;
}

function playTone(frequenza, durata, tipo = "sine", volume = 0.15, ritardo = 0) {
    if (!suoniAttivi) return;
    try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        if (ctx.state === "suspended") ctx.resume();

        const start = ctx.currentTime + ritardo;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = tipo;
        osc.frequency.value = frequenza;
        gain.gain.setValueAtTime(volume, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + durata);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + durata);
    } catch (e) { /* Web Audio non disponibile: nessun suono, nessun crash */ }
}

function suonoClick() { playTone(600, 0.05, "sine", 0.06); }
function suonoDing() { playTone(700, 0.09, "sine", 0.12); }
function suonoErroreLeggero() { playTone(180, 0.12, "sawtooth", 0.08); }
function suonoSuccesso() {
    playTone(523.25, 0.14, "sine", 0.15, 0);
    playTone(659.25, 0.16, "sine", 0.15, 0.1);
    playTone(783.99, 0.2, "sine", 0.15, 0.2);
}
function suonoErrore() { playTone(200, 0.28, "sawtooth", 0.12); }
function suonoLevelUp() {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => playTone(f, 0.16, "triangle", 0.15, i * 0.09));
}
function suonoAchievement() {
    playTone(880, 0.1, "sine", 0.15, 0);
    playTone(1108.73, 0.22, "sine", 0.15, 0.12);
}

window.toggleSuoni = () => {
    suoniAttivi = !suoniAttivi;
    localStorage.setItem("pro_vF_suoni", suoniAttivi);
    renderToggleSuoni();
    if (suoniAttivi) suonoClick();
};

function renderToggleSuoni() {
    const btn = document.getElementById("btn-toggle-suoni");
    if (!btn) return;
    btn.innerText = suoniAttivi ? "ATTIVI 🔊" : "DISATTIVI 🔇";
    btn.className = "btn-action " + (suoniAttivi ? "ok" : "swap");
}

// Click generico su ogni bottone dell'app (feedback sonoro uniforme)
document.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (btn && !btn.disabled) suonoClick();
});

// Variabile Agenda
let weekOffset = 0; // 0 = settimana corrente

// ==========================================
// LIVELLI, XP & ACHIEVEMENT
// ==========================================
let progressi = {
    xpTotale: parseInt(localStorage.getItem("pro_vF_xp")) || 0,
    partiteGiocate: parseInt(localStorage.getItem("pro_vF_partite")) || 0,
    sudokuRisolti: parseInt(localStorage.getItem("pro_vF_sudoku_risolti")) || 0,
    bestMemoryLivello: parseInt(localStorage.getItem("pro_vF_best_memory")) || 0,
    premiumAttivato: localStorage.getItem("pro_vF_premium_attivato") === "true",
    achievementCompletati: JSON.parse(localStorage.getItem("pro_vF_achievement_completati")) || [],
    obiettiviSbloccati: JSON.parse(localStorage.getItem("pro_vF_obiettivi_sbloccati")) || [],
    obiettiviCompletati: JSON.parse(localStorage.getItem("pro_vF_obiettivi_completati")) || [],
    ultimoLivelloObiettivo: parseInt(localStorage.getItem("pro_vF_ultimo_livello_obiettivo")) || 0
};

const XP_VITTORIA_SFIDA = 10;
const XP_SUDOKU_RISOLTO = 20;
const XP_MEMORY_CORRETTO = 5;
const XP_RIFLESSI_TENTATIVO = 3;
const XP_MATH_RISPOSTA = 2;
const XP_SIMON_LIVELLO = 5;
const XP_ANAGRAMMA_PAROLA = 3;
const XP_NUOVO_RECORD = 25;
const XP_TEXTING_COMPLETATO = 10;

// Achievement "normali": sempre visibili a tutti, si completano da soli quando la condizione è vera
const achievements = [
    { id: "prima_sfida", nome: "Prima Sfida", desc: "Vinci la tua prima sfida", icona: "🎯", condizione: () => state.totale >= 1 },
    { id: "dieci_sfide", nome: "Determinato", desc: "Vinci 10 sfide", icona: "🔥", condizione: () => state.totale >= 10 },
    { id: "cinquanta_sfide", nome: "Inarrestabile", desc: "Vinci 50 sfide", icona: "💪", condizione: () => state.totale >= 50 },
    { id: "cento_sfide", nome: "Leggenda delle Sfide", desc: "Vinci 100 sfide", icona: "👑", condizione: () => state.totale >= 100 },
    { id: "streak_7", nome: "Settimana di Fuoco", desc: "Raggiungi 7 giorni di streak", icona: "🔥", condizione: () => state.streak >= 7 },
    { id: "streak_30", nome: "Streak Leggendario", desc: "Raggiungi 30 giorni di streak", icona: "🌟", condizione: () => state.streak >= 30 },
    { id: "prima_partita", nome: "Primi Passi", desc: "Gioca la tua prima partita", icona: "🎮", condizione: () => progressi.partiteGiocate >= 1 },
    { id: "cinquanta_partite", nome: "Giocatore Incallito", desc: "Gioca 50 partite in totale", icona: "🕹️", condizione: () => progressi.partiteGiocate >= 50 },
    { id: "primo_sudoku", nome: "Primo Sudoku", desc: "Risolvi il tuo primo Sudoku", icona: "🔢", condizione: () => progressi.sudokuRisolti >= 1 },
    { id: "sudoku_master", nome: "Sudoku Master", desc: "Risolvi 20 Sudoku", icona: "🧩", condizione: () => progressi.sudokuRisolti >= 20 },
    { id: "memoria_ferro", nome: "Memoria di Ferro", desc: "Raggiungi il livello 10 al Memory Numbers", icona: "🧠", condizione: () => progressi.bestMemoryLivello >= 10 },
    { id: "fulmine", nome: "Fulmine", desc: "Reagisci in meno di 200ms al Test Riflessi", icona: "⚡", condizione: () => bestReaction !== null && bestReaction <= 200 },
    { id: "genio_calcolo", nome: "Genio del Calcolo", desc: "Risolvi 20 operazioni in una partita", icona: "🧮", condizione: () => bestMathScore >= 20 },
    { id: "memoria_cromatica", nome: "Memoria Cromatica", desc: "Raggiungi il livello 10 a Simon Colori", icona: "🎨", condizione: () => bestSimon >= 10 },
    { id: "wordsmith", nome: "Wordsmith", desc: "Indovina 15 anagrammi in una partita", icona: "🔤", condizione: () => bestAnagramma >= 15 },
    { id: "livello_5", nome: "In Crescita", desc: "Raggiungi il livello 5", icona: "⭐", condizione: () => calcolaLivello(progressi.xpTotale).livello >= 5 },
    { id: "livello_10", nome: "Veterano", desc: "Raggiungi il livello 10", icona: "🏅", condizione: () => calcolaLivello(progressi.xpTotale).livello >= 10 },
    { id: "sostenitore", nome: "Sostenitore", desc: "Attiva la modalità Premium", icona: "💎", condizione: () => progressi.premiumAttivato }
];

// Obiettivi speciali: riservati ai soli utenti Premium, sbloccati a sorte ogni 5 livelli, completamento manuale
const obiettiviSpeciali = [
    { id: "ob_maratona", nome: "Mezza Maratona", desc: "Completa una corsa di almeno 10km", icona: "🏃‍♂️", xp: 60 },
    { id: "ob_libro", nome: "Divoratore di Libri", desc: "Leggi un libro intero in una settimana", icona: "📚", xp: 50 },
    { id: "ob_donazione", nome: "Cuore Generoso", desc: "Fai una donazione benefica", icona: "🤲", xp: 50 },
    { id: "ob_lingua", nome: "Poliglotta", desc: "Impara 50 parole di una lingua nuova", icona: "🗣️", xp: 55 },
    { id: "ob_cena", nome: "Padrone di Casa", desc: "Organizza una cena con amici o famiglia", icona: "🍽️", xp: 45 },
    { id: "ob_progetto", nome: "Anima Creativa", desc: "Completa un progetto creativo (disegno, scrittura, musica)", icona: "🎨", xp: 55 },
    { id: "ob_volontariato", nome: "Cuore Puro", desc: "Fai volontariato per un giorno intero", icona: "🙌", xp: 60 },
    { id: "ob_10km", nome: "Camminatore Instancabile", desc: "Cammina 10km in una sola giornata", icona: "🚶", xp: 45 },
    { id: "ob_lettera", nome: "Parole Sincere", desc: "Scrivi una lettera di gratitudine a qualcuno di importante", icona: "💌", xp: 40 },
    { id: "ob_sport_squadra", nome: "Spirito di Squadra", desc: "Fai un allenamento o sport di gruppo", icona: "⚽", xp: 45 },
    { id: "ob_gita", nome: "Esploratore", desc: "Pianifica e realizza una gita di un giorno", icona: "🗺️", xp: 50 },
    { id: "ob_sonno", nome: "Sonno Regolare", desc: "Completa una settimana intera con orari di sonno regolari", icona: "😴", xp: 55 },
    { id: "ob_detox", nome: "Weekend Analogico", desc: "Fai un digital detox per un intero weekend", icona: "📵", xp: 60 },
    { id: "ob_ricetta", nome: "Chef per un Giorno", desc: "Impara una ricetta complessa e cucinala per qualcuno", icona: "👨‍🍳", xp: 45 },
    { id: "ob_risparmio", nome: "Formica Previdente", desc: "Metti da parte un risparmio importante in un mese", icona: "💰", xp: 50 }
];

function calcolaLivello(xpTotale) {
    let livello = 1;
    let xpRichiesto = 100;
    let xpAccumulato = 0;
    while (xpTotale >= xpAccumulato + xpRichiesto) {
        xpAccumulato += xpRichiesto;
        livello++;
        xpRichiesto += 50;
    }
    return {
        livello,
        xpAttuale: xpTotale - xpAccumulato,
        xpProssimoLivello: xpRichiesto
    };
}

function salvaProgressi() {
    localStorage.setItem("pro_vF_xp", progressi.xpTotale);
    localStorage.setItem("pro_vF_partite", progressi.partiteGiocate);
    localStorage.setItem("pro_vF_sudoku_risolti", progressi.sudokuRisolti);
    localStorage.setItem("pro_vF_best_memory", progressi.bestMemoryLivello);
    localStorage.setItem("pro_vF_premium_attivato", progressi.premiumAttivato);
    localStorage.setItem("pro_vF_achievement_completati", JSON.stringify(progressi.achievementCompletati));
    localStorage.setItem("pro_vF_obiettivi_sbloccati", JSON.stringify(progressi.obiettiviSbloccati));
    localStorage.setItem("pro_vF_obiettivi_completati", JSON.stringify(progressi.obiettiviCompletati));
    localStorage.setItem("pro_vF_ultimo_livello_obiettivo", progressi.ultimoLivelloObiettivo);
}

function guadagnaXP(quantita) {
    const livelloPrima = calcolaLivello(progressi.xpTotale).livello;
    progressi.xpTotale += quantita;
    salvaProgressi();
    const livelloDopo = calcolaLivello(progressi.xpTotale).livello;
    if (livelloDopo > livelloPrima) suonoLevelUp();
    controllaAchievements();
    controllaLivelloObiettivi();
    renderLivelloBadge();
}

// XP dei giochi: concesso SOLO agli utenti Premium. Le sfide danno XP a tutti (vedi vinta()).
function guadagnaXPGioco(quantita) {
    if (!state.isPremium) return;
    guadagnaXP(quantita);
}

function incrementaPartite() {
    progressi.partiteGiocate++;
    salvaProgressi();
    controllaAchievements();
}

// ==========================================
// ACHIEVEMENT: sempre visibili, si completano da soli
// ==========================================
function controllaAchievements() {
    const completatiOra = [];
    achievements.forEach(a => {
        if (!progressi.achievementCompletati.includes(a.id) && a.condizione()) {
            progressi.achievementCompletati.push(a.id);
            completatiOra.push(a);
        }
    });
    if (completatiOra.length > 0) {
        salvaProgressi();
        completatiOra.forEach(a => mostraNotificaCompletamento(a));
    }
    renderTraguardi();
}

function mostraNotificaCompletamento(a) {
    suonoAchievement();
    const toast = document.createElement("div");
    toast.className = "achievement-toast";
    toast.innerHTML = `
        <div class="achievement-toast-icon">${a.icona}</div>
        <div>
            <div class="achievement-toast-title">✅ Traguardo completato!</div>
            <div class="achievement-toast-name">${a.nome}</div>
        </div>
    `;
    document.body.appendChild(toast);
    if (window.confetti) confetti({ particleCount: 90, spread: 70, origin: { y: 0.3 } });
    setTimeout(() => {
        toast.classList.add("achievement-toast-hide");
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

function renderLivelloBadge() {
    const { livello, xpAttuale, xpProssimoLivello } = calcolaLivello(progressi.xpTotale);
    document.querySelectorAll(".livello-num").forEach(el => el.innerText = livello);
    document.querySelectorAll(".level-xp-text").forEach(el => el.innerText = `${xpAttuale} / ${xpProssimoLivello} XP`);
    document.querySelectorAll(".level-bar-fill").forEach(el => el.style.width = `${Math.min(100, (xpAttuale / xpProssimoLivello) * 100)}%`);
}

function renderTraguardi() {
    const cont = document.getElementById("achievements-list");
    if (!cont) return;
    cont.innerHTML = "";
    achievements.forEach(a => {
        const completato = progressi.achievementCompletati.includes(a.id);
        const div = document.createElement("div");
        div.className = "achievement-card " + (completato ? "unlocked" : "pending");
        div.innerHTML = `
            <div class="achievement-icon">${a.icona}</div>
            <div class="achievement-info">
                <div class="achievement-name">${a.nome}</div>
                <div class="achievement-desc">${a.desc}</div>
            </div>
            ${completato ? `<span class="objective-done-tag">✅</span>` : `<span class="objective-done-tag" style="color:#94a3b8;">In corso</span>`}
        `;
        cont.appendChild(div);
    });
}

// ==========================================
// OBIETTIVI SPECIALI: solo Premium, uno casuale ogni 5 livelli, completamento manuale
// ==========================================
function controllaLivelloObiettivi() {
    const { livello } = calcolaLivello(progressi.xpTotale);
    while (progressi.ultimoLivelloObiettivo + 5 <= livello) {
        const target = progressi.ultimoLivelloObiettivo + 5;
        const riuscito = sbloccaObiettivoCasuale();
        if (!riuscito) break; // non premium o pool esaurita: si ritenta più avanti
        progressi.ultimoLivelloObiettivo = target;
        salvaProgressi();
    }
}

function sbloccaObiettivoCasuale() {
    if (!state.isPremium) return false;
    const disponibili = obiettiviSpeciali.filter(o => !progressi.obiettiviSbloccati.includes(o.id));
    if (disponibili.length === 0) return false;

    const scelto = disponibili[Math.floor(Math.random() * disponibili.length)];
    progressi.obiettiviSbloccati.push(scelto.id);
    salvaProgressi();
    mostraNotificaObiettivo(scelto);
    renderObiettivi();
    return true;
}

function mostraNotificaObiettivo(o) {
    suonoAchievement();
    const toast = document.createElement("div");
    toast.className = "achievement-toast objective-toast";
    toast.innerHTML = `
        <div class="achievement-toast-icon">${o.icona}</div>
        <div>
            <div class="achievement-toast-title">🎯 Obiettivo disponibile!</div>
            <div class="achievement-toast-name">${o.nome}</div>
        </div>
    `;
    document.body.appendChild(toast);
    if (window.confetti) confetti({ particleCount: 70, spread: 60, origin: { y: 0.3 }, colors: ['#a855f7', '#c084fc', '#e9d5ff'] });
    setTimeout(() => {
        toast.classList.add("achievement-toast-hide");
        setTimeout(() => toast.remove(), 500);
    }, 3500);
}

function renderObiettivi() {
    const cont = document.getElementById("obiettivi-list");
    if (!cont) return;
    cont.innerHTML = "";

    const sbloccati = obiettiviSpeciali.filter(o => progressi.obiettiviSbloccati.includes(o.id));

    if (sbloccati.length === 0) {
        cont.innerHTML = state.isPremium
            ? `<p class="task-empty">Sali di livello per sbloccarne uno a caso!</p>`
            : `<p class="task-empty">Disponibili solo con Premium — sali di livello per scoprirli ⭐</p>`;
        return;
    }

    sbloccati.forEach(o => {
        const completato = progressi.obiettiviCompletati.includes(o.id);
        const div = document.createElement("div");
        div.className = "objective-card " + (completato ? "completed" : "pending");
        div.innerHTML = `
            <div class="achievement-icon">${o.icona}</div>
            <div class="achievement-info">
                <div class="achievement-name">${o.nome}</div>
                <div class="achievement-desc">${o.desc}</div>
            </div>
            ${completato
                ? `<span class="objective-done-tag">✅ Fatto</span>`
                : `<button class="objective-complete-btn" onclick="completaObiettivo('${o.id}')">Completa</button>`
            }
        `;
        cont.appendChild(div);
    });
}

window.completaObiettivo = (id) => {
    if (progressi.obiettiviCompletati.includes(id)) return;
    progressi.obiettiviCompletati.push(id);
    salvaProgressi();
    const o = obiettiviSpeciali.find(x => x.id === id);
    guadagnaXP(o ? o.xp : 30);
    suonoAchievement();
    if (window.confetti) confetti({ particleCount: 120, spread: 80, colors: ['#a855f7', '#c084fc'] });
    renderObiettivi();
};

// ==========================================
// 2. LOGICA REFRESH & UI SFIDE
// ==========================================
function controllaReset() {
    const oggi = new Date().toLocaleDateString();
    const ultimaData = localStorage.getItem("pro_vF_last_date");
    if (ultimaData !== oggi) {
        state.usateOggi = [];
        state.sfideAccettateOggi = 0;
        state.partiteOggi = { impiccato: 0, memorycarte: 0, texting: 0 };
        if (new Date().getDay() === 1) state.storico = [0, 0, 0, 0, 0, 0, 0];
        localStorage.setItem("pro_vF_last_date", oggi);
        updateUI();
    }
}

function updateUI() {
    document.getElementById("stat-totale").innerText = state.totale;
    document.getElementById("stat-streak").innerText = state.streak + " 🔥";
    localStorage.setItem("pro_vF_tot", state.totale);
    localStorage.setItem("pro_vF_str", state.streak);
    localStorage.setItem("pro_vF_att", JSON.stringify(state.attive));
    localStorage.setItem("pro_vF_usa", JSON.stringify(state.usateOggi));
    localStorage.setItem("pro_vF_storico", JSON.stringify(state.storico));
    localStorage.setItem("pro_vF_accettate", state.sfideAccettateOggi);
    localStorage.setItem("pro_vF_perse", state.totalePerse);
    localStorage.setItem("pro_vF_partite_oggi", JSON.stringify(state.partiteOggi));
    renderAttive();
    renderChart();
    renderPremiumBadge();
    renderSfideCounter();
    renderLivelloBadge();
}

function renderChart() {
    const chart = document.getElementById("settimana-chart");
    if(!chart) return;
    chart.innerHTML = "";
    const nomi = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];
    const d = new Date().getDay();
    const oggiIdx = d === 0 ? 6 : d - 1;
    const maxVal = Math.max(...state.storico, 5);

    state.storico.forEach((val, i) => {
        const h = (val / maxVal) * 100;
        const w = document.createElement("div"); w.className = "chart-bar-wrapper";
        w.innerHTML = `<div class="bar ${i===oggiIdx?'today':''}" style="height:${h}%"><div class="bar-fill"></div></div><span class="day-label">${nomi[i]}</span>`;
        chart.appendChild(w);
    });
}

function renderPremiumBadge() {
    const badge = document.getElementById("btn-premium-badge");
    if (!badge) return;
    if (state.isPremium) {
        badge.innerText = "⭐ PREMIUM";
        badge.classList.add("is-premium");
    } else {
        badge.innerText = "STANDARD";
        badge.classList.remove("is-premium");
    }
}

function renderSfideCounter() {
    const el = document.getElementById("sfide-counter");
    if (!el) return;
    if (state.isPremium) {
        el.innerText = "Sfide oggi: illimitate ⭐";
    } else {
        el.innerText = `Sfide oggi: ${state.sfideAccettateOggi}/${LIMITE_SFIDE_STANDARD}`;
    }
}

function generaSfida() {
    const box = document.getElementById("box-sfida");
    const btnC = document.getElementById("btn-cambia");
    const poolCompleto = state.isPremium ? [...sfidePool, ...sfidePoolPremium] : sfidePool;
    const pool = poolCompleto.filter(s =>
        !state.attive.some(a => a.testo === s) &&
        !state.usateOggi.includes(s)
    );

    if(pool.length === 0) { box.innerText = "Sfide finite! 🏆"; return; }
    
    box.classList.add("loading");
    let count = 0;
    const int = setInterval(() => {
        box.innerText = pool[Math.floor(Math.random()*pool.length)];
        if(count++ > 12) {
            clearInterval(int);
            box.classList.remove("loading");
            if (state.isPremium) {
                btnC.innerHTML = `CAMBIA 🔄`;
            } else {
                btnC.innerHTML = `CAMBIA 🔒 <span style="font-size:0.6rem;display:block">Solo Premium</span>`;
            }
            btnC.disabled = false;
        }
    }, 70);
}

document.getElementById("btn-genera").onclick = () => {
    if (!state.isPremium && state.sfideAccettateOggi >= LIMITE_SFIDE_STANDARD) {
        apriOverlay('overlay-premium');
        return;
    }
    document.getElementById("controlli-generazione").classList.add("hidden");
    document.getElementById("azioni-sfida").classList.remove("hidden");
    generaSfida();
};

document.getElementById("btn-cambia").onclick = () => {
    if (!state.isPremium) {
        apriOverlay('overlay-premium');
        return;
    }
    state.usateOggi.push(document.getElementById("box-sfida").innerText);
    generaSfida();
    updateUI();
};

document.getElementById("btn-accetta").onclick = () => {
    if (!state.isPremium && state.sfideAccettateOggi >= LIMITE_SFIDE_STANDARD) {
        apriOverlay('overlay-premium');
        return;
    }

    const testo = document.getElementById("box-sfida").innerText;
    const oggiISO = getISODate(new Date());
    const taskId = "sfida_" + Date.now();

    aggiungiTaskAgenda(oggiISO, testo, taskId, true);

    state.attive.push({ testo, taskId, dataISO: oggiISO });
    state.usateOggi.push(testo);
    state.sfideAccettateOggi++;

    document.getElementById("controlli-generazione").classList.remove("hidden");
    document.getElementById("azioni-sfida").classList.add("hidden");
    document.getElementById("box-sfida").innerText = "Sfida Accettata!";
    updateUI();
};

function renderAttive() {
    const l = document.getElementById("lista-sfide-attive");
    l.innerHTML = "";
    state.attive.forEach((s, i) => {
        const d = document.createElement("div");
        d.innerHTML = `<div style="padding:10px 12px; background:var(--card); border-radius:12px; margin-bottom:8px; border-left:3px solid var(--accent); display:flex; justify-content:space-between; align-items:center; font-size:0.9rem;">
            <span>${s.testo}</span>
            <div style="display:flex; gap:5px;">
                <button onclick="vinta(${i})" style="background:var(--success); padding:8px 10px; font-size:0.85rem;">✅</button>
                <button onclick="persa(${i})" style="background:var(--danger); padding:8px 10px; font-size:0.85rem;">X</button>
            </div>
        </div>`;
        l.appendChild(d);
    });
}

window.vinta = (i) => {
    const sfida = state.attive[i];
    state.attive.splice(i, 1);
    state.totale++; state.streak++;
    const d = new Date().getDay();
    state.storico[d === 0 ? 6 : d - 1]++;
    if (sfida && sfida.taskId && sfida.dataISO) marcaTaskCompletata(sfida.dataISO, sfida.taskId, true);
    guadagnaXP(XP_VITTORIA_SFIDA);
    suonoSuccesso();
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    updateUI();
    renderAgenda();
};

window.persa = (i) => {
    const sfida = state.attive[i];
    state.attive.splice(i, 1);
    state.streak = 0;
    state.totalePerse++;
    suonoErrore();
    if (sfida && sfida.taskId && sfida.dataISO) eliminaTaskAgenda(sfida.dataISO, sfida.taskId);
    updateUI();
    renderAgenda();
};

// ==========================================
// 3. PREMIUM: ATTIVAZIONE (TEST) & PAYWALL
// ==========================================
window.togglePremium = () => {
    state.isPremium = !state.isPremium;
    localStorage.setItem("pro_vF_premium", state.isPremium);
    if (state.isPremium) {
        progressi.premiumAttivato = true;
        salvaProgressi();
        controllaAchievements();
        controllaLivelloObiettivi(); // ritenta eventuali estrazioni rimaste in sospeso
        renderObiettivi();
    }
    renderPremiumOverlay();
    updateUI();
};

function renderPremiumOverlay() {
    const cont = document.getElementById("premium-content");
    if (!cont) return;
    if (state.isPremium) {
        cont.innerHTML = `
            <div class="premium-status active">⭐ SEI PREMIUM</div>
            <p style="color:#94a3b8; font-size:0.85rem; margin:15px 0; text-align:center;">Hai accesso illimitato a sfide, cambi e a tutti i giochi.</p>
            <button onclick="togglePremium()" class="btn-close" style="margin-top:10px;">Disattiva (solo test)</button>
        `;
    } else {
        cont.innerHTML = `
            <div class="premium-status">MODALITÀ STANDARD</div>
            <ul class="premium-benefits">
                <li>✅ Sfide illimitate al giorno</li>
                <li>✅ Cambi sfida illimitati</li>
                <li>✅ Sfide esclusive Premium</li>
                <li>✅ Giochi Premium</li>
                <li>✅ Guadagni XP dai giochi</li>
            </ul>
            <div class="premium-price">2,99€ <span>/mese</span></div>
            <button onclick="togglePremium()" class="btn-main">ATTIVA PREMIUM (TEST)</button>
            <p style="color:#475569; font-size:0.65rem; margin-top:10px; text-align:center;">Pulsante di prova — il pagamento reale verrà integrato in seguito.</p>
        `;
    }
}

window.handlePremiumGame = (fnName) => {
    if (!state.isPremium) {
        chiudiOverlay();
        apriOverlay('overlay-premium');
        return;
    }
    chiudiOverlay();
    window[fnName]();
};

// ==========================================
// LIMITE GIORNALIERO GIOCHI STANDARD (max 5/giorno se non Premium)
// ==========================================
function puoGiocare(gameId, limite = LIMITE_PARTITE_STANDARD) {
    if (state.isPremium) return true;
    return (state.partiteOggi[gameId] || 0) < limite;
}

function registraPartitaStandard(gameId) {
    if (!state.isPremium) {
        state.partiteOggi[gameId] = (state.partiteOggi[gameId] || 0) + 1;
        localStorage.setItem("pro_vF_partite_oggi", JSON.stringify(state.partiteOggi));
    }
    renderContatoriGiochi();
}

function renderContatoriGiochi() {
    const aggiorna = (id, gameId, limite) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (state.isPremium) {
            el.innerText = "illimitato ⭐";
            el.classList.remove("limit-reached");
        } else {
            const usate = state.partiteOggi[gameId] || 0;
            el.innerText = `${usate}/${limite} oggi`;
            el.classList.toggle("limit-reached", usate >= limite);
        }
    };
    aggiorna("impiccato-counter", "impiccato", LIMITE_PARTITE_STANDARD);
    aggiorna("memcarte-counter", "memorycarte", LIMITE_PARTITE_STANDARD);
    aggiorna("texting-counter", "texting", LIMITE_PARTITE_TEXTING);
}

// ==========================================
// 4. SEZIONE GIOCHI: SUDOKU (GENERATORE PROCEDURALE)
// ==========================================
function creaGrigliaVuota() {
    return Array(81).fill(0);
}

function numeroValido(griglia, pos, num) {
    const riga = Math.floor(pos / 9);
    const col = pos % 9;

    for (let c = 0; c < 9; c++) {
        if (griglia[riga * 9 + c] === num) return false;
    }
    for (let r = 0; r < 9; r++) {
        if (griglia[r * 9 + col] === num) return false;
    }
    const boxRiga = Math.floor(riga / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let r = boxRiga; r < boxRiga + 3; r++) {
        for (let c = boxCol; c < boxCol + 3; c++) {
            if (griglia[r * 9 + c] === num) return false;
        }
    }
    return true;
}

function mescola(array) {
    const a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function riempiGriglia(griglia) {
    const posVuota = griglia.indexOf(0);
    if (posVuota === -1) return true;

    const numeri = mescola([1,2,3,4,5,6,7,8,9]);
    for (const num of numeri) {
        if (numeroValido(griglia, posVuota, num)) {
            griglia[posVuota] = num;
            if (riempiGriglia(griglia)) return true;
            griglia[posVuota] = 0;
        }
    }
    return false;
}

function generaSchemaCompleto() {
    const griglia = creaGrigliaVuota();
    riempiGriglia(griglia);
    return griglia;
}

// difficolta: numero di celle da svuotare (piu alto = piu difficile)
function generaSudoku(difficolta = 40) {
    const soluzione = generaSchemaCompleto();
    const puzzle = [...soluzione];

    let celleDaSvuotare = difficolta;
    const posizioni = mescola([...Array(81).keys()]);

    for (const pos of posizioni) {
        if (celleDaSvuotare <= 0) break;
        puzzle[pos] = 0;
        celleDaSvuotare--;
    }

    return { puzzle, soluzione };
}

window.avviaSudoku = () => {
    chiudiOverlay();
    apriOverlay('overlay-game-screen');
    document.getElementById("sudoku-controls").classList.add("hidden");

    const c = document.getElementById("game-container");
    c.innerHTML = `
        <h3 style="margin:5px 0 15px 0;">Scegli la difficoltà</h3>
        <div class="diff-pad">
            <button onclick="iniziaSudoku(32)">FACILE</button>
            <button onclick="iniziaSudoku(40)">MEDIO</button>
            <button onclick="iniziaSudoku(50)">DIFFICILE</button>
        </div>
    `;
};

window.iniziaSudoku = (difficolta) => {
    livelloSudoku = difficolta;
    document.getElementById("sudoku-controls").classList.remove("hidden");
    incrementaPartite();

    clearInterval(sudokuTimer);
    sudokuSecondi = 0;

    schemaCorrente = generaSudoku(livelloSudoku);

    const c = document.getElementById("game-container");
    c.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; padding:0 5px;">
            <h3 style="margin:0; font-size:1rem;">Sudoku Mini</h3>
            <span id="sudoku-timer" style="font-family:monospace; font-size:1rem; color:var(--accent);">00:00</span>
        </div>
        <div class="sudoku-grid" id="grid"></div>
        <div class="pad" id="pad"></div>
    `;

    sudokuTimer = setInterval(() => {
        sudokuSecondi++;
        const min = String(Math.floor(sudokuSecondi / 60)).padStart(2, '0');
        const sec = String(sudokuSecondi % 60).padStart(2, '0');
        document.getElementById("sudoku-timer").innerText = `${min}:${sec}`;
    }, 1000);

    schemaCorrente.puzzle.forEach((n, i) => {
        const cell = document.createElement("div");
        cell.className = "s-cell" + (n !== 0 ? " fixed" : "");
        cell.innerText = n !== 0 ? n : "";
        cell.dataset.index = i;

        if(n === 0) {
            cell.onclick = () => {
                document.querySelectorAll('.s-cell').forEach(e => e.classList.remove('selected'));
                cell.classList.add('selected');
            };
        }
        document.getElementById("grid").appendChild(cell);
    });

    for(let i = 1; i <= 9; i++) {
        const b = document.createElement("button"); b.innerText = i;
        b.onclick = () => {
            const s = document.querySelector('.s-cell.selected');
            if(s) {
                s.innerText = i;
                const idx = parseInt(s.dataset.index);
                if(i !== schemaCorrente.soluzione[idx]) s.classList.add("error");
                else s.classList.remove("error");
            }
        };
        document.getElementById("pad").appendChild(b);
    }
};

window.verificaSudoku = () => {
    let ok = true;
    let completo = true;
    document.querySelectorAll(".s-cell").forEach((c, i) => { 
        if (c.innerText == "") completo = false;
        if (c.innerText != schemaCorrente.soluzione[i]) ok = false; 
    });
    
    const feedback = document.getElementById("game-feedback");
    if(!completo) {
        feedback.innerHTML = "<h3 style='color:var(--danger); margin:10px 0;'>GRIGLIA INCOMPLETA ⚠️</h3>";
    } else if (ok) {
        clearInterval(sudokuTimer);
        feedback.innerHTML = `<h3 style="margin:5px 0;">BRAVO! 🏆</h3><p style="color:var(--success); font-size:0.85rem; margin:0;">Risolto in ${document.getElementById("sudoku-timer").innerText}</p>`;
        progressi.sudokuRisolti++;
        salvaProgressi();
        guadagnaXPGioco(XP_SUDOKU_RISOLTO);
        suonoSuccesso();
        confetti({ particleCount: 150, spread: 80 });
    } else {
        feedback.innerHTML = "<h3 style='color:var(--danger); margin:10px 0;'>CI SONO ERRORI ❌</h3>";
        suonoErrore();
    }
};

// ==========================================
// 5. SEZIONE GIOCHI: MEMORY
// ==========================================
window.avviaMemory = () => {
    chiudiOverlay(); 
    apriOverlay('overlay-game-screen');
    incrementaPartite();
    
    let min = Math.pow(10, memoryLivello - 1);
    let max = Math.pow(10, memoryLivello) - 1;
    const secret = Math.floor(min + Math.random() * (max - min));
    
    const c = document.getElementById("game-container");
    c.innerHTML = `
        <h3 style="margin:5px 0;">Livello attuale: ${memoryLivello - 5}</h3>
        <p style="color:#94a3b8; font-size:0.85rem; margin:0 0 10px 0;">Ricorda questa sequenza:</p>
        <h1 style="font-size:2.2rem; color:var(--accent); letter-spacing: 3px; margin: 15px 0;">${secret}</h1>
    `;
    
    let tempoVisualizzazione = 1500 + (memoryLivello * 100); 

    setTimeout(() => {
        c.innerHTML = `
            <h3 style="margin:5px 0 15px 0;">Inserisci i numeri visti:</h3>
            <input type="number" id="m-in" autocomplete="off" style="width:100%; padding:10px; font-size:1.5rem; text-align:center; background:#0f172a; color:#fff; border:2px solid var(--accent); border-radius:10px; margin-bottom: 12px;">
            <button onclick="checkM(${secret})" class="btn-main">CONFERMA</button>
        `;
        document.getElementById("m-in").focus();
    }, tempoVisualizzazione);
};

window.checkM = (s) => {
    const v = document.getElementById("m-in").value;
    const feedback = document.getElementById("game-feedback");
    
    if (v == s) {
        feedback.innerHTML = `<h3 style="color:var(--success); margin:8px 0;">CORRETTO! 🎉</h3>`;
        const livelloCompletato = memoryLivello - 5;
        progressi.bestMemoryLivello = Math.max(progressi.bestMemoryLivello, livelloCompletato);
        salvaProgressi();
        guadagnaXPGioco(XP_MEMORY_CORRETTO);
        suonoSuccesso();
        memoryLivello++; 
        if(window.confetti) confetti({ particleCount: 50, spread: 40 });
    } else {
        feedback.innerHTML = `<h3 style="color:var(--danger); margin:8px 0;">SBAGLIATO! ❌</h3><p style="font-size:0.85rem; margin:0;">Era: <b>${s}</b></p>`;
        suonoErrore();
        memoryLivello = 6; 
    }
    setTimeout(resetEChiudi, 2000);
};

// ==========================================
// 6. SEZIONE GIOCHI: TEST DEI RIFLESSI
// ==========================================
window.avviaRiflessi = () => {
    chiudiOverlay(); 
    apriOverlay('overlay-game-screen');
    incrementaPartite();
    reactionState = 'idle';
    
    const recordText = bestReaction ? `${bestReaction} ms` : "--";

    const c = document.getElementById("game-container");
    c.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <h3 style="margin:0;">Reaction Time</h3>
            <span style="font-size:0.8rem; color:#94a3b8;">Record: <b style="color:var(--accent);">${recordText}</b></span>
        </div>
        <p style="color:#94a3b8; font-size:0.85rem; margin:0;">Tocca il riquadro appena diventa VERDE.</p>
        <div id="reaction-pad" class="reaction-idle" onpointerdown="gestisciRiflessi(event)">
            TOCCA PER INIZIARE
        </div>
    `;
};

window.gestisciRiflessi = (e) => {
    if(e) e.preventDefault(); 
    const pad = document.getElementById("reaction-pad");
    
    if (reactionState === 'idle' || reactionState === 'result') {
        pad.className = "reaction-wait";
        pad.innerHTML = "ASPETTA...";
        reactionState = 'wait';
        
        const randomDelay = Math.floor(Math.random() * 3000) + 1500; 
        reactionTimeout = setTimeout(() => {
            pad.className = "reaction-go";
            pad.innerHTML = "ORA!";
            reactionStartTime = Date.now();
            reactionState = 'go';
        }, randomDelay);
    } 
    else if (reactionState === 'wait') {
        clearTimeout(reactionTimeout);
        pad.className = "reaction-result";
        pad.innerHTML = "FALSA PARTENZA!<br><span style='font-size:1rem; font-weight:normal; margin-top:10px; display:block; color:#94a3b8;'>Tocca per riprovare</span>";
        reactionState = 'result';
        suonoErrore();
    } 
    else if (reactionState === 'go') {
        const tempo = Date.now() - reactionStartTime;
        pad.className = "reaction-result";
        
        let giudizio = "";
        let extraHtml = "";

        guadagnaXPGioco(XP_RIFLESSI_TENTATIVO);
        suonoDing();

        if (!bestReaction || tempo < bestReaction) {
            bestReaction = tempo;
            localStorage.setItem("pro_vF_best_reaction", bestReaction);
            giudizio = "🚀 CLAMOROSO!";
            extraHtml = "<br><span style='color:var(--success); font-size:1rem; margin-top:5px; display:block;'>🏆 NUOVO RECORD!</span>";
            guadagnaXPGioco(XP_NUOVO_RECORD);
            suonoLevelUp();
            if(window.confetti) confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
        } else {
            if (tempo < 250) giudizio = "🔥 FULMINE!";
            else if (tempo < 350) giudizio = "👍 OTTIMO!";
            else if (tempo < 450) giudizio = "🚶 NELLA MEDIA";
            else giudizio = "🐢 LENTUCCIO...";
        }

        pad.innerHTML = `
            <span style="font-size:2.5rem; color:var(--accent)">${tempo}</span> ms
            <br><span style='font-size:1.2rem; margin-top:5px; display:block;'>${giudizio}</span>
            ${extraHtml}
            <span style='font-size:0.9rem; font-weight:normal; margin-top:15px; display:block; color:#94a3b8;'>Tocca per riprovare</span>
        `;
        reactionState = 'result';
    }
};

// ==========================================
// 7. SEZIONE GIOCHI: CALCOLO RAPIDO
// ==========================================
window.avviaMath = () => {
    chiudiOverlay(); 
    apriOverlay('overlay-game-screen');
    incrementaPartite();
    mathScore = 0;
    mathTimeLeft = 30;
    
    const recordText = bestMathScore > 0 ? bestMathScore : "--";

    const c = document.getElementById("game-container");
    c.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
            <h3 style="margin:0;">Calcolo Rapido</h3>
            <span style="font-size:0.8rem; color:#94a3b8;">Record: <b style="color:var(--accent);">${recordText}</b></span>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; background:var(--card); padding:10px 15px; border-radius:12px; margin-bottom:20px;">
            <span style="font-size:1.1rem; font-weight:bold;">Punti: <span id="math-score" style="color:var(--success)">0</span></span>
            <span style="font-size:1.1rem; font-weight:bold;">Tempo: <span id="math-timer" style="color:var(--danger)">30</span>s</span>
        </div>
        <h1 id="math-question" style="font-size:3.5rem; text-align:center; color:var(--accent); margin:20px 0; letter-spacing: 2px;">--</h1>
        <div id="math-pad" class="math-pad"></div>
    `;
    
    generaDomandaMath();
    
    clearInterval(mathTimer);
    mathTimer = setInterval(() => {
        mathTimeLeft--;
        const timerEl = document.getElementById("math-timer");
        if (timerEl) timerEl.innerText = mathTimeLeft;
        
        if(mathTimeLeft <= 0) fineMath();
    }, 1000);
};

window.generaDomandaMath = () => {
    const ops = ['+', '-', 'x'];
    const op = ops[Math.floor(Math.random() * ops.length)];
    let n1, n2, correct;
    
    if(op === '+') {
        n1 = Math.floor(Math.random() * 40) + 10;
        n2 = Math.floor(Math.random() * 40) + 10;
        correct = n1 + n2;
    } else if(op === '-') {
        n1 = Math.floor(Math.random() * 50) + 20;
        n2 = Math.floor(Math.random() * n1);
        correct = n1 - n2;
    } else {
        n1 = Math.floor(Math.random() * 8) + 2;
        n2 = Math.floor(Math.random() * 8) + 2;
        correct = n1 * n2;
    }
    
    document.getElementById("math-question").innerText = `${n1} ${op} ${n2}`;
    
    let options = [correct];
    while(options.length < 4) {
        let wrong = correct + (Math.floor(Math.random() * 14) - 7);
        if(wrong !== correct && !options.includes(wrong) && wrong >= 0) options.push(wrong);
    }
    
    options.sort(() => Math.random() - 0.5);
    
    const pad = document.getElementById("math-pad");
    pad.innerHTML = "";
    options.forEach(opt => {
        const b = document.createElement("button");
        b.innerText = opt;
        b.onclick = () => checkMath(opt, correct);
        pad.appendChild(b);
    });
};

window.checkMath = (scelta, corretta) => {
    if(mathTimeLeft <= 0) return;
    
    if(scelta === corretta) {
        mathScore++;
        document.getElementById("math-score").innerText = mathScore;
        guadagnaXPGioco(XP_MATH_RISPOSTA);
        suonoDing();
        generaDomandaMath();
    } else {
        mathTimeLeft -= 2;
        if(mathTimeLeft < 0) mathTimeLeft = 0;
        document.getElementById("math-timer").innerText = mathTimeLeft;
        suonoErrore();
        
        const q = document.getElementById("math-question");
        q.style.color = "var(--danger)";
        setTimeout(() => q.style.color = "var(--accent)", 200);
    }
};

window.fineMath = () => {
    clearInterval(mathTimer);
    const pad = document.getElementById("math-pad");
    let extraHtml = "";
    
    if(mathScore > bestMathScore) {
        bestMathScore = mathScore;
        localStorage.setItem("pro_vF_best_math", bestMathScore);
        extraHtml = "<br><span style='color:var(--success); font-size:1.1rem; margin-top:10px; display:block;'>🏆 NUOVO RECORD!</span>";
        guadagnaXPGioco(XP_NUOVO_RECORD);
        suonoLevelUp();
        if(window.confetti) confetti({ particleCount: 100, spread: 70, origin: { y: 0.5 } });
    }
    
    document.getElementById("math-question").innerHTML = `SCADUTO!`;
    document.getElementById("math-question").style.fontSize = "2.5rem";
    
    pad.style.display = "block";
    pad.innerHTML = `
        <div style="text-align:center; margin-top:10px;">
            <span style="font-size:1.2rem; color:#94a3b8;">Hai risolto</span><br>
            <span style="font-size:4rem; color:var(--accent); font-weight:900;">${mathScore}</span><br>
            <span style="font-size:1.2rem; color:#94a3b8;">operazioni in 30 secondi</span>
            ${extraHtml}
        </div>
    `;
};

// ==========================================
// 7b. SEZIONE GIOCHI STANDARD: IMPICCATO
// ==========================================
window.avviaImpiccato = () => {
    if (!puoGiocare('impiccato')) {
        chiudiOverlay();
        apriOverlay('overlay-premium');
        return;
    }
    chiudiOverlay();
    apriOverlay('overlay-game-screen');
    registraPartitaStandard('impiccato');
    incrementaPartite();

    impiccatoParola = paroleImpiccato[Math.floor(Math.random() * paroleImpiccato.length)];
    impiccatoLettereIndovinate = [];
    impiccatoLettereSbagliate = [];
    impiccatoFinito = false;

    renderImpiccato();
};

function renderImpiccato() {
    const c = document.getElementById("game-container");
    const tentativiRimasti = impiccatoTentativiMax - impiccatoLettereSbagliate.length;
    const parolaVisuale = impiccatoParola.split("").map(l => impiccatoLettereIndovinate.includes(l) ? l : "_").join(" ");
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    c.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <h3 style="margin:0;">Impiccato</h3>
            <span style="font-size:0.8rem; color:#94a3b8;">Vinte: <b style="color:var(--accent);">${impiccatoVinte}</b></span>
        </div>
        <p style="text-align:center; font-size:1.5rem; letter-spacing:4px; color:var(--accent); margin:20px 0; font-weight:900; word-break:break-all;">${parolaVisuale}</p>
        <p style="text-align:center; color:${tentativiRimasti <= 2 ? 'var(--danger)' : '#94a3b8'}; font-size:0.85rem; margin-bottom:15px;">❤️ Tentativi rimasti: ${tentativiRimasti}</p>
        <div class="hangman-keyboard" id="hangman-keyboard"></div>
    `;

    const keyboard = document.getElementById("hangman-keyboard");
    alfabeto.forEach(l => {
        const usata = impiccatoLettereIndovinate.includes(l) || impiccatoLettereSbagliate.includes(l);
        const sbagliata = impiccatoLettereSbagliate.includes(l);
        const b = document.createElement("button");
        b.className = "hangman-key" + (usata ? (sbagliata ? " wrong" : " correct") : "");
        b.innerText = l;
        b.disabled = usata || impiccatoFinito;
        b.onclick = () => indovinaLetteraImpiccato(l);
        keyboard.appendChild(b);
    });
}

window.indovinaLetteraImpiccato = (lettera) => {
    if (impiccatoFinito) return;
    const feedback = document.getElementById("game-feedback");

    if (impiccatoParola.includes(lettera)) {
        impiccatoLettereIndovinate.push(lettera);
        guadagnaXPGioco(3);
        suonoDing();

        const completo = impiccatoParola.split("").every(l => impiccatoLettereIndovinate.includes(l));
        if (completo) {
            impiccatoFinito = true;
            impiccatoVinte++;
            localStorage.setItem("pro_vF_impiccato_vinte", impiccatoVinte);
            guadagnaXPGioco(20);
            suonoSuccesso();
            if (window.confetti) confetti({ particleCount: 120, spread: 80 });
            feedback.innerHTML = `<h3 style="color:var(--success); margin:10px 0;">HAI VINTO! 🎉</h3><p style="font-size:0.85rem; margin:0;">Parola: <b>${impiccatoParola}</b></p>`;
        }
    } else {
        impiccatoLettereSbagliate.push(lettera);
        suonoErrore();
        const tentativiRimasti = impiccatoTentativiMax - impiccatoLettereSbagliate.length;
        if (tentativiRimasti <= 0) {
            impiccatoFinito = true;
            feedback.innerHTML = `<h3 style="color:var(--danger); margin:10px 0;">HAI PERSO ❌</h3><p style="font-size:0.85rem; margin:0;">La parola era: <b>${impiccatoParola}</b></p>`;
        }
    }
    renderImpiccato();
};

// ==========================================
// 7c. SEZIONE GIOCHI STANDARD: MEMORY CARTE
// ==========================================
window.avviaMemoryCarte = () => {
    if (!puoGiocare('memorycarte')) {
        chiudiOverlay();
        apriOverlay('overlay-premium');
        return;
    }
    chiudiOverlay();
    apriOverlay('overlay-game-screen');
    registraPartitaStandard('memorycarte');
    incrementaPartite();

    const coppie = [...emojiMemoryCarte, ...emojiMemoryCarte];
    memoryCarteEmoji = mescola(coppie).map((emoji, i) => ({ id: i, emoji, trovata: false, girata: false }));
    memoryCartePrimaScelta = null;
    memoryCarteBloccato = false;
    memoryCarteCoppieTrovate = 0;
    memoryCarteMosse = 0;

    renderMemoryCarte();
};

function renderMemoryCarte() {
    const c = document.getElementById("game-container");
    const record = memoryCarteMigliorPunteggio ? `${memoryCarteMigliorPunteggio} mosse` : "--";

    c.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <h3 style="margin:0;">Memory Carte</h3>
            <span style="font-size:0.8rem; color:#94a3b8;">Record: <b style="color:var(--accent);">${record}</b></span>
        </div>
        <p style="text-align:center; color:#94a3b8; font-size:0.85rem; margin:0 0 12px 0;">Mosse: <b style="color:var(--accent);">${memoryCarteMosse}</b> — Coppie: <b style="color:var(--success);">${memoryCarteCoppieTrovate}/${emojiMemoryCarte.length}</b></p>
        <div class="memcarte-grid" id="mc-grid"></div>
    `;

    const grid = document.getElementById("mc-grid");
    memoryCarteEmoji.forEach(carta => {
        const btn = document.createElement("button");
        const scoperta = carta.trovata || carta.girata;
        btn.className = "memcarte-card" + (carta.trovata ? " found" : (carta.girata ? " flipped" : ""));
        btn.innerText = scoperta ? carta.emoji : "❔";
        btn.onclick = () => giraCartaMemory(carta.id);
        grid.appendChild(btn);
    });
}

window.giraCartaMemory = (id) => {
    if (memoryCarteBloccato) return;
    const carta = memoryCarteEmoji.find(c => c.id === id);
    if (!carta || carta.trovata || carta.girata) return;

    carta.girata = true;

    if (!memoryCartePrimaScelta) {
        memoryCartePrimaScelta = carta;
        renderMemoryCarte();
        return;
    }

    memoryCarteMosse++;
    memoryCarteBloccato = true;
    renderMemoryCarte();

    if (memoryCartePrimaScelta.emoji === carta.emoji) {
        carta.trovata = true;
        memoryCartePrimaScelta.trovata = true;
        memoryCarteCoppieTrovate++;
        guadagnaXPGioco(5);
        suonoDing();
        memoryCartePrimaScelta = null;
        memoryCarteBloccato = false;
        renderMemoryCarte();

        if (memoryCarteCoppieTrovate === emojiMemoryCarte.length) {
            let extra = "";
            suonoSuccesso();
            if (!memoryCarteMigliorPunteggio || memoryCarteMosse < memoryCarteMigliorPunteggio) {
                memoryCarteMigliorPunteggio = memoryCarteMosse;
                localStorage.setItem("pro_vF_memcarte_best", memoryCarteMigliorPunteggio);
                guadagnaXPGioco(25);
                suonoLevelUp();
                extra = "<br><span style='color:var(--success);'>🏆 NUOVO RECORD!</span>";
            }
            guadagnaXPGioco(15);
            if (window.confetti) confetti({ particleCount: 150, spread: 80 });
            const feedback = document.getElementById("game-feedback");
            feedback.innerHTML = `<h3 style="margin:10px 0;">COMPLETATO! 🏆</h3><p style="font-size:0.85rem; margin:0;">In ${memoryCarteMosse} mosse${extra}</p>`;
        }
    } else {
        suonoErroreLeggero();
        setTimeout(() => {
            carta.girata = false;
            memoryCartePrimaScelta.girata = false;
            memoryCartePrimaScelta = null;
            memoryCarteBloccato = false;
            renderMemoryCarte();
        }, 800);
    }
};

// ==========================================
// 7d. SEZIONE GIOCHI STANDARD: DIGITA VELOCE
// ==========================================
window.avviaTexting = () => {
    if (!puoGiocare('texting', LIMITE_PARTITE_TEXTING)) {
        chiudiOverlay();
        apriOverlay('overlay-premium');
        return;
    }
    chiudiOverlay();
    apriOverlay('overlay-game-screen');
    registraPartitaStandard('texting');
    incrementaPartite();

    textingFrasiCompletate = 0;
    textingFinito = false;

    nuovaFraseTexting();
};

function nuovaFraseTexting() {
    textingFraseCorrente = frasiTexting[Math.floor(Math.random() * frasiTexting.length)];
    renderTexting();
}

function renderTexting() {
    const c = document.getElementById("game-container");
    const record = textingMigliorStreak > 0 ? `${textingMigliorStreak} frasi` : "--";

    c.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <h3 style="margin:0;">Digita Veloce</h3>
            <span style="font-size:0.8rem; color:#94a3b8;">Record: <b style="color:var(--accent);">${record}</b></span>
        </div>
        <p style="text-align:center; color:#94a3b8; font-size:0.75rem; margin:0 0 6px 0;">Scrivi la frase senza sbagliare: un solo errore e la partita finisce!</p>
        <p style="text-align:center; color:var(--success); font-size:0.85rem; margin:0 0 10px 0;">Frasi completate: <b>${textingFrasiCompletate}</b></p>
        <p id="texting-frase" style="background:var(--card); padding:14px; border-radius:12px; font-size:1rem; line-height:1.6;"></p>
        <input type="text" id="texting-input" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Inizia a scrivere qui..." style="width:100%; padding:12px; font-size:1rem; background:#0f172a; color:#fff; border:2px solid var(--accent); border-radius:10px; margin-top:12px; box-sizing:border-box;">
    `;

    aggiornaEvidenziazioneTexting("");
    document.getElementById("game-feedback").innerHTML = "";

    const input = document.getElementById("texting-input");
    input.addEventListener("input", () => {
        if (textingFinito) return;
        const valore = input.value;

        // Controllo carattere per carattere: un solo errore e la partita finisce subito
        for (let i = 0; i < valore.length; i++) {
            if (valore[i] !== textingFraseCorrente[i]) {
                aggiornaEvidenziazioneTexting(valore);
                fineTextingErrore();
                return;
            }
        }

        aggiornaEvidenziazioneTexting(valore);

        if (valore === textingFraseCorrente) completaFraseTexting();
    });
    input.focus();
}

function aggiornaEvidenziazioneTexting(valore) {
    const el = document.getElementById("texting-frase");
    if (!el) return;
    let html = "";
    for (let i = 0; i < textingFraseCorrente.length; i++) {
        const char = textingFraseCorrente[i];
        if (i < valore.length) {
            html += valore[i] === char
                ? `<span style="color:var(--success);">${char}</span>`
                : `<span style="color:var(--danger); text-decoration:underline;">${char}</span>`;
        } else {
            html += `<span style="color:#64748b;">${char}</span>`;
        }
    }
    el.innerHTML = html;
}

function completaFraseTexting() {
    textingFinito = true;
    textingFrasiCompletate++;
    guadagnaXPGioco(XP_TEXTING_COMPLETATO);
    suonoDing();

    let extra = "";
    if (textingFrasiCompletate > textingMigliorStreak) {
        textingMigliorStreak = textingFrasiCompletate;
        localStorage.setItem("pro_vF_best_texting_streak", textingMigliorStreak);
        extra = " 🏆 Nuovo record!";
        guadagnaXPGioco(XP_NUOVO_RECORD);
        suonoLevelUp();
        if (window.confetti) confetti({ particleCount: 60, spread: 55 });
    }

    const input = document.getElementById("texting-input");
    if (input) input.disabled = true;

    const feedback = document.getElementById("game-feedback");
    feedback.innerHTML = `<p style="color:var(--success); font-size:0.85rem; margin:10px 0;">✅ Corretto!${extra} Prossima frase...</p>`;

    setTimeout(() => {
        textingFinito = false;
        nuovaFraseTexting();
    }, 900);
}

function fineTextingErrore() {
    textingFinito = true;
    suonoErrore();

    if (textingFrasiCompletate > textingMigliorStreak) {
        textingMigliorStreak = textingFrasiCompletate;
        localStorage.setItem("pro_vF_best_texting_streak", textingMigliorStreak);
    }

    const input = document.getElementById("texting-input");
    if (input) input.disabled = true;

    const feedback = document.getElementById("game-feedback");
    feedback.innerHTML = `<h3 style="color:var(--danger); margin:10px 0;">ERRORE! ❌</h3><p style="font-size:0.85rem; margin:0;">Frasi completate in questa partita: <b>${textingFrasiCompletate}</b></p>`;
}

// ==========================================
// 8. SEZIONE GIOCHI PREMIUM: SIMON COLORI
// ==========================================
window.avviaSimon = () => {
    apriOverlay('overlay-game-screen');
    incrementaPartite();
    simonSequence = [];
    simonLivello = 0;

    const c = document.getElementById("game-container");
    c.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <h3 style="margin:0;">Simon Colori</h3>
            <span style="font-size:0.8rem; color:#94a3b8;">Record: <b style="color:var(--accent);">${bestSimon}</b></span>
        </div>
        <p id="simon-status" style="color:#94a3b8; font-size:0.85rem; margin:0 0 15px 0;">Guarda e ripeti la sequenza</p>
        <div class="simon-grid">
            <button class="simon-pad" style="background:#ef4444;" onclick="simonInput(0)"></button>
            <button class="simon-pad" style="background:#3b82f6;" onclick="simonInput(1)"></button>
            <button class="simon-pad" style="background:#22c55e;" onclick="simonInput(2)"></button>
            <button class="simon-pad" style="background:#eab308;" onclick="simonInput(3)"></button>
        </div>
        <button id="simon-start-btn" onclick="prossimoTurnoSimon()" class="btn-main" style="margin-top:20px;">INIZIA</button>
    `;
};

window.prossimoTurnoSimon = () => {
    simonAccettaInput = false;
    simonUserIndex = 0;
    simonLivello++;
    simonSequence.push(Math.floor(Math.random() * 4));

    const status = document.getElementById("simon-status");
    if (status) status.innerText = `Livello: ${simonLivello}`;
    const startBtn = document.getElementById("simon-start-btn");
    if (startBtn) startBtn.style.display = "none";

    playSimonSequence();
};

function playSimonSequence() {
    let i = 0;
    const pads = document.querySelectorAll(".simon-pad");
    const interval = setInterval(() => {
        pads.forEach(p => p.classList.remove("active"));
        if (i < simonSequence.length) {
            const padCorrente = pads[simonSequence[i]];
            padCorrente.classList.add("active");
            setTimeout(() => padCorrente.classList.remove("active"), 400);
            i++;
        } else {
            clearInterval(interval);
            simonAccettaInput = true;
        }
    }, 600);
}

window.simonInput = (i) => {
    if (!simonAccettaInput) return;
    if (i === simonSequence[simonUserIndex]) {
        suonoDing();
        simonUserIndex++;
        if (simonUserIndex === simonSequence.length) {
            simonAccettaInput = false;
            guadagnaXPGioco(XP_SIMON_LIVELLO);
            setTimeout(prossimoTurnoSimon, 700);
        }
    } else {
        simonAccettaInput = false;
        suonoErrore();
        const feedback = document.getElementById("game-feedback");
        const livelloFinale = simonLivello - 1;
        let extra = "";
        if (livelloFinale > bestSimon) {
            bestSimon = livelloFinale;
            localStorage.setItem("pro_vF_best_simon", bestSimon);
            extra = "<br><span style='color:var(--success);'>🏆 NUOVO RECORD!</span>";
            guadagnaXPGioco(XP_NUOVO_RECORD);
            suonoLevelUp();
        }
        feedback.innerHTML = `<h3 style="color:var(--danger); margin:10px 0;">GAME OVER ❌</h3><p style="font-size:0.85rem; margin:0;">Livello raggiunto: ${livelloFinale}${extra}</p>`;
    }
};

// ==========================================
// 9. SEZIONE GIOCHI PREMIUM: ANAGRAMMA LAMPO
// ==========================================
function mescolaParola(parola) {
    let lettere = parola.split("");
    let mescolata;
    do {
        lettere = mescola(lettere);
        mescolata = lettere.join("");
    } while (mescolata === parola);
    return mescolata;
}

window.avviaAnagramma = () => {
    apriOverlay('overlay-game-screen');
    incrementaPartite();
    anagrammaScore = 0;
    anagrammaTimeLeft = 30;

    const recordText = bestAnagramma > 0 ? bestAnagramma : "--";

    const c = document.getElementById("game-container");
    c.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
            <h3 style="margin:0;">Anagramma Lampo</h3>
            <span style="font-size:0.8rem; color:#94a3b8;">Record: <b style="color:var(--accent);">${recordText}</b></span>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; background:var(--card); padding:10px 15px; border-radius:12px; margin-bottom:20px;">
            <span style="font-size:1.1rem; font-weight:bold;">Punti: <span id="anagram-score" style="color:var(--success)">0</span></span>
            <span style="font-size:1.1rem; font-weight:bold;">Tempo: <span id="anagram-timer" style="color:var(--danger)">30</span>s</span>
        </div>
        <p style="text-align:center; color:#94a3b8; font-size:0.75rem; margin:0 0 5px 0;">Indovina la parola</p>
        <h1 id="anagram-word" style="font-size:2.1rem; text-align:center; color:var(--accent); margin:5px 0 20px 0; letter-spacing: 3px; text-transform:uppercase;">--</h1>
        <input type="text" id="anagram-input" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Scrivi la parola..." style="width:100%; padding:12px; font-size:1.1rem; text-align:center; background:#0f172a; color:#fff; border:2px solid var(--accent); border-radius:10px; margin-bottom:12px; box-sizing:border-box;">
        <button onclick="checkAnagramma()" class="btn-main">CONFERMA</button>
    `;

    document.getElementById("anagram-input").addEventListener("keydown", (e) => {
        if (e.key === "Enter") checkAnagramma();
    });

    generaAnagramma();

    clearInterval(anagrammaTimer);
    anagrammaTimer = setInterval(() => {
        anagrammaTimeLeft--;
        const t = document.getElementById("anagram-timer");
        if (t) t.innerText = anagrammaTimeLeft;
        if (anagrammaTimeLeft <= 0) fineAnagramma();
    }, 1000);
};

window.generaAnagramma = () => {
    anagrammaParolaCorrente = paroleAnagramma[Math.floor(Math.random() * paroleAnagramma.length)];
    document.getElementById("anagram-word").innerText = mescolaParola(anagrammaParolaCorrente);
    const input = document.getElementById("anagram-input");
    if (input) { input.value = ""; input.focus(); }
};

window.checkAnagramma = () => {
    if (anagrammaTimeLeft <= 0) return;
    const input = document.getElementById("anagram-input");
    const val = input.value.trim().toLowerCase().replace(/[^a-zàèéìòù]/g, "");

    if (val === anagrammaParolaCorrente) {
        anagrammaScore++;
        document.getElementById("anagram-score").innerText = anagrammaScore;
        guadagnaXPGioco(XP_ANAGRAMMA_PAROLA);
        suonoDing();
        generaAnagramma();
    } else {
        anagrammaTimeLeft -= 2;
        if (anagrammaTimeLeft < 0) anagrammaTimeLeft = 0;
        document.getElementById("anagram-timer").innerText = anagrammaTimeLeft;
        suonoErrore();
        const w = document.getElementById("anagram-word");
        w.style.color = "var(--danger)";
        setTimeout(() => w.style.color = "var(--accent)", 200);
        input.value = "";
    }
};

window.fineAnagramma = () => {
    clearInterval(anagrammaTimer);
    let extraHtml = "";
    if (anagrammaScore > bestAnagramma) {
        bestAnagramma = anagrammaScore;
        localStorage.setItem("pro_vF_best_anagram", bestAnagramma);
        extraHtml = "<br><span style='color:var(--success); font-size:1.1rem; margin-top:10px; display:block;'>🏆 NUOVO RECORD!</span>";
        guadagnaXPGioco(XP_NUOVO_RECORD);
        suonoLevelUp();
        if (window.confetti) confetti({ particleCount: 100, spread: 70, origin: { y: 0.5 } });
    }

    const c = document.getElementById("game-container");
    c.innerHTML = `
        <div style="text-align:center; margin-top:20px;">
            <h3 style="margin:0 0 10px 0;">TEMPO SCADUTO!</h3>
            <span style="font-size:1.2rem; color:#94a3b8;">Hai indovinato</span><br>
            <span style="font-size:4rem; color:var(--accent); font-weight:900;">${anagrammaScore}</span><br>
            <span style="font-size:1.2rem; color:#94a3b8;">parole in 30 secondi</span>
            ${extraHtml}
        </div>
    `;
};

// ==========================================
// 9b. SEZIONE GIOCHI PREMIUM: 2048
// ==========================================
window.avvia2048 = () => {
    apriOverlay('overlay-game-screen');
    incrementaPartite();

    grid2048 = Array(16).fill(0);
    punteggio2048 = 0;
    vinto2048 = false;
    aggiungiNumero2048();
    aggiungiNumero2048();
    render2048();
};

function aggiungiNumero2048() {
    const vuote = grid2048.map((v, i) => v === 0 ? i : null).filter(i => i !== null);
    if (vuote.length === 0) return;
    const pos = vuote[Math.floor(Math.random() * vuote.length)];
    grid2048[pos] = Math.random() < 0.9 ? 2 : 4;
}

function render2048() {
    const c = document.getElementById("game-container");
    c.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <h3 style="margin:0;">2048</h3>
            <span style="font-size:0.8rem; color:#94a3b8;">Record: <b style="color:var(--accent);">${best2048}</b></span>
        </div>
        <p style="text-align:center; color:#94a3b8; font-size:0.9rem; margin:0 0 10px 0;">Punteggio: <b style="color:var(--success);">${punteggio2048}</b></p>
        <div class="grid2048" id="grid-2048"></div>
        <div class="pad2048">
            <div></div><button onclick="muovi2048('su')">▲</button><div></div>
            <button onclick="muovi2048('sinistra')">◀</button><div></div><button onclick="muovi2048('destra')">▶</button>
            <div></div><button onclick="muovi2048('giu')">▼</button><div></div>
        </div>
    `;
    const gridEl = document.getElementById("grid-2048");
    grid2048.forEach(v => {
        const cell = document.createElement("div");
        cell.className = "cell2048" + (v ? ` v${v}` : "");
        cell.innerText = v || "";
        gridEl.appendChild(cell);
    });
}

function comprimiELinea2048(linea) {
    let nums = linea.filter(v => v !== 0);
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            punteggio2048 += nums[i];
            nums.splice(i + 1, 1);
        }
    }
    while (nums.length < 4) nums.push(0);
    return nums;
}

function getRighe2048() {
    const righe = [];
    for (let r = 0; r < 4; r++) righe.push(grid2048.slice(r * 4, r * 4 + 4));
    return righe;
}
function setRighe2048(righe) {
    grid2048 = righe.flat();
}
function getColonne2048() {
    const colonne = [];
    for (let c = 0; c < 4; c++) colonne.push([grid2048[c], grid2048[c + 4], grid2048[c + 8], grid2048[c + 12]]);
    return colonne;
}
function setColonne2048(colonne) {
    for (let c = 0; c < 4; c++) {
        for (let r = 0; r < 4; r++) grid2048[r * 4 + c] = colonne[c][r];
    }
}

function haMosseDisponibili2048() {
    if (grid2048.includes(0)) return true;
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            const idx = r * 4 + c;
            if (c < 3 && grid2048[idx] === grid2048[idx + 1]) return true;
            if (r < 3 && grid2048[idx] === grid2048[idx + 4]) return true;
        }
    }
    return false;
}

window.muovi2048 = (direzione) => {
    const prima = [...grid2048];
    const punteggioPrima = punteggio2048;

    if (direzione === 'sinistra') {
        setRighe2048(getRighe2048().map(r => comprimiELinea2048(r)));
    } else if (direzione === 'destra') {
        setRighe2048(getRighe2048().map(r => comprimiELinea2048([...r].reverse()).reverse()));
    } else if (direzione === 'su') {
        setColonne2048(getColonne2048().map(c => comprimiELinea2048(c)));
    } else if (direzione === 'giu') {
        setColonne2048(getColonne2048().map(c => comprimiELinea2048([...c].reverse()).reverse()));
    }

    const cambiato = prima.some((v, i) => v !== grid2048[i]);
    if (!cambiato) return;

    if (punteggio2048 > punteggioPrima) suonoDing();

    aggiungiNumero2048();
    guadagnaXPGioco(1);

    if (punteggio2048 > best2048) {
        best2048 = punteggio2048;
        localStorage.setItem("pro_vF_best_2048", best2048);
    }

    render2048();

    if (!vinto2048 && grid2048.includes(2048)) {
        vinto2048 = true;
        guadagnaXPGioco(50);
        suonoLevelUp();
        if (window.confetti) confetti({ particleCount: 150, spread: 90 });
    }

    if (!haMosseDisponibili2048()) {
        suonoErrore();
        const feedback = document.getElementById("game-feedback");
        feedback.innerHTML = `<h3 style="color:var(--danger); margin:10px 0;">GAME OVER</h3><p style="font-size:0.85rem; margin:0;">Punteggio finale: ${punteggio2048}</p>`;
    }
};

// ==========================================
// 9c. SEZIONE GIOCHI PREMIUM: SNAKE
// ==========================================
window.avviaSnake = () => {
    apriOverlay('overlay-game-screen');
    incrementaPartite();

    const c = document.getElementById("game-container");
    c.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <h3 style="margin:0;">Snake</h3>
            <span style="font-size:0.8rem; color:#94a3b8;">Record: <b style="color:var(--accent);">${bestSnake}</b></span>
        </div>
        <p style="text-align:center; color:#94a3b8; font-size:0.9rem; margin:0 0 10px 0;">Punteggio: <b id="snake-score" style="color:var(--success);">0</b></p>
        <canvas id="snake-canvas" width="${SNAKE_CELLE * SNAKE_CELLA_PX}" height="${SNAKE_CELLE * SNAKE_CELLA_PX}" style="background:#0f172a; border-radius:10px; display:block; margin:0 auto; border:2px solid #334155;"></canvas>
        <div class="pad2048" style="margin-top:15px;">
            <div></div><button onclick="cambiaDirezioneSnake('su')">▲</button><div></div>
            <button onclick="cambiaDirezioneSnake('sinistra')">◀</button><div></div><button onclick="cambiaDirezioneSnake('destra')">▶</button>
            <div></div><button onclick="cambiaDirezioneSnake('giu')">▼</button><div></div>
        </div>
    `;

    snakeCanvas = document.getElementById("snake-canvas");
    snakeCtx = snakeCanvas.getContext("2d");

    snakeBody = [{ x: 7, y: 7 }, { x: 6, y: 7 }, { x: 5, y: 7 }];
    snakeDirezione = 'destra';
    snakeProssimaDirezione = 'destra';
    snakePunteggio = 0;
    posizionaCiboSnake();

    clearInterval(snakeInterval);
    snakeInterval = setInterval(tickSnake, 160);
    disegnaSnake();
};

function posizionaCiboSnake() {
    let valido = false;
    while (!valido) {
        snakeCibo = { x: Math.floor(Math.random() * SNAKE_CELLE), y: Math.floor(Math.random() * SNAKE_CELLE) };
        valido = !snakeBody.some(s => s.x === snakeCibo.x && s.y === snakeCibo.y);
    }
}

window.cambiaDirezioneSnake = (dir) => {
    const opposti = { su: 'giu', giu: 'su', sinistra: 'destra', destra: 'sinistra' };
    if (opposti[dir] !== snakeDirezione) snakeProssimaDirezione = dir;
};

function tickSnake() {
    snakeDirezione = snakeProssimaDirezione;
    const testa = { ...snakeBody[0] };
    if (snakeDirezione === 'su') testa.y--;
    if (snakeDirezione === 'giu') testa.y++;
    if (snakeDirezione === 'sinistra') testa.x--;
    if (snakeDirezione === 'destra') testa.x++;

    if (testa.x < 0 || testa.x >= SNAKE_CELLE || testa.y < 0 || testa.y >= SNAKE_CELLE) return fineSnake();
    if (snakeBody.some(s => s.x === testa.x && s.y === testa.y)) return fineSnake();

    snakeBody.unshift(testa);

    if (testa.x === snakeCibo.x && testa.y === snakeCibo.y) {
        snakePunteggio += 10;
        guadagnaXPGioco(5);
        suonoDing();
        const scoreEl = document.getElementById("snake-score");
        if (scoreEl) scoreEl.innerText = snakePunteggio;
        posizionaCiboSnake();
    } else {
        snakeBody.pop();
    }

    disegnaSnake();
}

function disegnaSnake() {
    snakeCtx.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);
    snakeCtx.fillStyle = "#ef4444";
    snakeCtx.fillRect(snakeCibo.x * SNAKE_CELLA_PX, snakeCibo.y * SNAKE_CELLA_PX, SNAKE_CELLA_PX - 2, SNAKE_CELLA_PX - 2);

    snakeBody.forEach((s, i) => {
        snakeCtx.fillStyle = i === 0 ? "#38bdf8" : "#0ea5e9";
        snakeCtx.fillRect(s.x * SNAKE_CELLA_PX, s.y * SNAKE_CELLA_PX, SNAKE_CELLA_PX - 2, SNAKE_CELLA_PX - 2);
    });
}

function fineSnake() {
    clearInterval(snakeInterval);
    suonoErrore();
    let extra = "";
    if (snakePunteggio > bestSnake) {
        bestSnake = snakePunteggio;
        localStorage.setItem("pro_vF_best_snake", bestSnake);
        guadagnaXPGioco(25);
        suonoLevelUp();
        extra = "<br><span style='color:var(--success);'>🏆 NUOVO RECORD!</span>";
        if (window.confetti) confetti({ particleCount: 100, spread: 70 });
    }
    const feedback = document.getElementById("game-feedback");
    feedback.innerHTML = `<h3 style="color:var(--danger); margin:10px 0;">GAME OVER 🐍</h3><p style="font-size:0.85rem; margin:0;">Punteggio: ${snakePunteggio}${extra}</p>`;
}

// ==========================================
// 10. AGENDA: DATE REALI + TASK CON CHECKBOX
// ==========================================
function getISODate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function getLunediSettimana(date) {
    const d = new Date(date);
    const giorno = d.getDay(); // 0 = Domenica
    const diff = giorno === 0 ? -6 : 1 - giorno;
    d.setDate(d.getDate() + diff);
    d.setHours(0, 0, 0, 0);
    return d;
}

function caricaGiorno(dataISO) {
    return JSON.parse(localStorage.getItem("agenda_giorno_" + dataISO)) || [];
}

function salvaGiorno(dataISO, tasks) {
    localStorage.setItem("agenda_giorno_" + dataISO, JSON.stringify(tasks));
}

function aggiungiTaskAgenda(dataISO, testo, taskId = null, sfida = false) {
    const tasks = caricaGiorno(dataISO);
    tasks.push({
        id: taskId || ("t_" + Date.now() + Math.random().toString(36).slice(2, 6)),
        text: testo,
        done: false,
        sfida
    });
    salvaGiorno(dataISO, tasks);
}

function marcaTaskCompletata(dataISO, taskId, done) {
    const tasks = caricaGiorno(dataISO);
    const t = tasks.find(x => x.id === taskId);
    if (t) t.done = done;
    salvaGiorno(dataISO, tasks);
}

function eliminaTaskAgenda(dataISO, taskId) {
    let tasks = caricaGiorno(dataISO);
    tasks = tasks.filter(x => x.id !== taskId);
    salvaGiorno(dataISO, tasks);
}

window.toggleTaskAgenda = (dataISO, taskId) => {
    const tasks = caricaGiorno(dataISO);
    const t = tasks.find(x => x.id === taskId);
    if (t) t.done = !t.done;
    salvaGiorno(dataISO, tasks);
    renderAgenda();
};

window.rimuoviTaskAgenda = (dataISO, taskId) => {
    eliminaTaskAgenda(dataISO, taskId);
    renderAgenda();
};

window.aggiungiTaskUtente = (dataISO) => {
    const input = document.getElementById("input-" + dataISO);
    if (!input || !input.value.trim()) return;
    aggiungiTaskAgenda(dataISO, input.value.trim());
    input.value = "";
    renderAgenda();
};

window.cambiaSettimana = (delta) => {
    weekOffset += delta;
    renderAgenda();
};

function renderAgenda() {
    const cont = document.getElementById("settimana-container");
    if (!cont) return;
    cont.innerHTML = "";

    const oggi = new Date();
    const lunediBase = getLunediSettimana(oggi);
    const lunediSettimana = new Date(lunediBase);
    lunediSettimana.setDate(lunediSettimana.getDate() + weekOffset * 7);

    const nomiMesi = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
    const fineSettimana = new Date(lunediSettimana);
    fineSettimana.setDate(fineSettimana.getDate() + 6);
    const rangeLabel = `${lunediSettimana.getDate()} ${nomiMesi[lunediSettimana.getMonth()]} - ${fineSettimana.getDate()} ${nomiMesi[fineSettimana.getMonth()]}`;

    const nav = document.createElement("div");
    nav.style.cssText = "display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;";
    nav.innerHTML = `
        <button onclick="cambiaSettimana(-1)" style="background:#1e293b; padding:8px 14px; border-radius:10px;">◀</button>
        <span style="font-size:0.9rem; font-weight:bold; color:var(--accent);">${rangeLabel}</span>
        <button onclick="cambiaSettimana(1)" style="background:#1e293b; padding:8px 14px; border-radius:10px;">▶</button>
    `;
    cont.appendChild(nav);

    if (weekOffset !== 0) {
        const backBtn = document.createElement("button");
        backBtn.innerText = "TORNA A OGGI";
        backBtn.style.cssText = "width:100%; background:none; color:var(--accent); border:1px solid var(--accent); padding:6px; font-size:0.7rem; margin-bottom:12px; border-radius:8px;";
        backBtn.onclick = () => { weekOffset = 0; renderAgenda(); };
        cont.appendChild(backBtn);
    }

    const oggiISO = getISODate(oggi);

    giorniSett.forEach((nomeGiorno, idx) => {
        const dataGiorno = new Date(lunediSettimana);
        dataGiorno.setDate(dataGiorno.getDate() + idx);
        const dataISO = getISODate(dataGiorno);
        const isOggi = dataISO === oggiISO;

        const tasks = caricaGiorno(dataISO);

        const box = document.createElement("div");
        box.className = "giorno-box";
        if (isOggi) box.classList.add("giorno-oggi");

        const dataLabel = `${String(dataGiorno.getDate()).padStart(2, '0')}/${String(dataGiorno.getMonth() + 1).padStart(2, '0')}`;

        let tasksHtml = tasks.map(t => `
            <div class="task-row ${t.sfida ? 'task-sfida' : ''}">
                <input type="checkbox" ${t.done ? 'checked' : ''} onchange="toggleTaskAgenda('${dataISO}','${t.id}')">
                <span class="task-text ${t.done ? 'task-done' : ''}">${t.sfida ? '⚡ ' : ''}${t.text}</span>
                <button class="task-del" onclick="rimuoviTaskAgenda('${dataISO}','${t.id}')">✕</button>
            </div>
        `).join("");

        box.innerHTML = `
            <label>${nomeGiorno} <span class="giorno-data">${dataLabel}</span> ${isOggi ? '<span class="giorno-oggi-tag">• OGGI</span>' : ''}</label>
            <div class="task-list">${tasksHtml || '<p class="task-empty">Nessun impegno</p>'}</div>
            <div class="task-input-row">
                <input type="text" id="input-${dataISO}" placeholder="Aggiungi impegno..." onkeydown="if(event.key==='Enter') aggiungiTaskUtente('${dataISO}')">
                <button onclick="aggiungiTaskUtente('${dataISO}')">+</button>
            </div>
        `;
        cont.appendChild(box);
    });
}

// ==========================================
// 10c. PAGINA STATISTICHE
// ==========================================
function renderStatistiche() {
    const cont = document.getElementById("statistiche-content");
    if (!cont) return;

    const { livello } = calcolaLivello(progressi.xpTotale);
    const totaleSfide = state.totale + state.totalePerse;
    const percentualeSuccesso = totaleSfide > 0 ? Math.round((state.totale / totaleSfide) * 100) : 0;

    cont.innerHTML = `
        <h3 class="section-title">🎯 SFIDE</h3>
        <div class="stat-row"><span>Sfide vinte</span><b>${state.totale}</b></div>
        <div class="stat-row"><span>Sfide perse</span><b>${state.totalePerse}</b></div>
        <div class="stat-row"><span>Percentuale di successo</span><b>${totaleSfide > 0 ? percentualeSuccesso + '%' : '--'}</b></div>
        <div class="stat-row"><span>Streak attuale</span><b>${state.streak} 🔥</b></div>

        <h3 class="section-title" style="margin-top:18px;">⭐ LIVELLO</h3>
        <div class="stat-row"><span>Livello attuale</span><b>${livello}</b></div>
        <div class="stat-row"><span>XP totali guadagnati</span><b>${progressi.xpTotale}</b></div>

        <h3 class="section-title" style="margin-top:18px;">🏆 TRAGUARDI</h3>
        <div class="stat-row"><span>Achievement completati</span><b>${progressi.achievementCompletati.length}/${achievements.length}</b></div>
        <div class="stat-row"><span>Obiettivi speciali completati</span><b>${progressi.obiettiviCompletati.length}/${obiettiviSpeciali.length}</b></div>

        <h3 class="section-title" style="margin-top:18px;">🎮 GIOCHI</h3>
        <div class="stat-row"><span>Partite giocate in totale</span><b>${progressi.partiteGiocate}</b></div>
        <div class="stat-row"><span>Sudoku risolti</span><b>${progressi.sudokuRisolti}</b></div>
        <div class="stat-row"><span>Miglior livello Memory Numbers</span><b>${progressi.bestMemoryLivello > 0 ? progressi.bestMemoryLivello : '--'}</b></div>
        <div class="stat-row"><span>Record Test Riflessi</span><b>${bestReaction ? bestReaction + ' ms' : '--'}</b></div>
        <div class="stat-row"><span>Record Calcolo Rapido</span><b>${bestMathScore > 0 ? bestMathScore : '--'}</b></div>
        <div class="stat-row"><span>Impiccato — parole vinte</span><b>${impiccatoVinte}</b></div>
        <div class="stat-row"><span>Miglior Memory Carte</span><b>${memoryCarteMigliorPunteggio ? memoryCarteMigliorPunteggio + ' mosse' : '--'}</b></div>
        <div class="stat-row"><span>Miglior livello Simon Colori</span><b>${bestSimon > 0 ? bestSimon : '--'}</b></div>
        <div class="stat-row"><span>Record Anagramma Lampo</span><b>${bestAnagramma > 0 ? bestAnagramma : '--'}</b></div>
        <div class="stat-row"><span>Record 2048</span><b>${best2048 > 0 ? best2048 : '--'}</b></div>
        <div class="stat-row"><span>Record Snake</span><b>${bestSnake > 0 ? bestSnake : '--'}</b></div>
        <div class="stat-row"><span>Miglior streak Digita Veloce</span><b>${textingMigliorStreak > 0 ? textingMigliorStreak + ' frasi' : '--'}</b></div>
    `;
}

// ==========================================
// 10b. BACKUP DATI: ESPORTA / IMPORTA / RESET
// ==========================================
function chiaviDatiApp() {
    const chiavi = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("pro_vF_") || key.startsWith("agenda_giorno_")) {
            chiavi.push(key);
        }
    }
    return chiavi;
}

window.esportaDati = () => {
    const dati = {};
    chiaviDatiApp().forEach(key => { dati[key] = localStorage.getItem(key); });

    const blob = new Blob([JSON.stringify(dati, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const oggi = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `sfide-pro-backup-${oggi}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
};

window.gestisciImportFile = (input) => {
    if (!input.files || !input.files[0]) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const dati = JSON.parse(e.target.result);
            Object.keys(dati).forEach(key => {
                if (key.startsWith("pro_vF_") || key.startsWith("agenda_giorno_")) {
                    localStorage.setItem(key, dati[key]);
                }
            });
            alert("Dati importati con successo! L'app si ricaricherà ora.");
            location.reload();
        } catch (err) {
            alert("File non valido. Assicurati di selezionare un backup esportato da questa app.");
        }
    };
    reader.readAsText(input.files[0]);
    input.value = ""; // permette di reimportare lo stesso file più volte se serve
};

window.confermaReset = () => {
    const conferma = confirm("Sei sicuro di voler cancellare TUTTI i dati dell'app? Questa azione è irreversibile.\n\nTi consigliamo di esportare prima un backup.");
    if (!conferma) return;

    chiaviDatiApp().forEach(key => localStorage.removeItem(key));
    location.reload();
};

// ==========================================
// 11. UTILITY & OVERLAYS
// ==========================================
window.apriOverlay = (id) => {
    document.getElementById(id).style.display = "block";
    document.body.style.overflow = "hidden";
    if (id === 'overlay-giochi') renderContatoriGiochi();
    if (id === 'overlay-agenda') renderAgenda();
    if (id === 'overlay-premium') renderPremiumOverlay();
    if (id === 'overlay-traguardi') { renderLivelloBadge(); renderTraguardi(); renderObiettivi(); }
    if (id === 'overlay-statistiche') renderStatistiche();
    if (id === 'overlay-impostazioni') renderToggleSuoni();
};
window.chiudiOverlay = () => { document.querySelectorAll('.overlay').forEach(o => o.style.display = 'none'); document.body.style.overflow = "auto"; };
window.resetEChiudi = () => { 
    clearInterval(sudokuTimer);
    clearTimeout(reactionTimeout); 
    clearInterval(mathTimer);
    clearInterval(anagrammaTimer);
    clearInterval(snakeInterval);
    chiudiOverlay(); 
    document.getElementById("game-feedback").innerHTML = ""; 
    document.getElementById("sudoku-controls").classList.add("hidden"); 
};

window.onload = () => {
    controllaReset();
    updateUI();
    controllaAchievements();
    controllaLivelloObiettivi();
    renderToggleSuoni();
    setTimeout(() => {
        const splash = document.getElementById("splash-screen");
        if (splash) splash.classList.add("hidden-splash");
    }, 2000);
};
