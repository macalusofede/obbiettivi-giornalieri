// ==========================================
// 1. CONFIGURAZIONE & STATO INIZIALE
// ==========================================
const sfidePool = [
    "Bevi 2 litri d'acqua oggi 💧", "Allenati 🏋️‍♂️", "Niente social dopo pranzo 📵",
    "Impara qualcosa di nuovo 🧠", "Niente 🔞", "Fai una passeggiata 🌲",
    "Vai a dormire presto 😴", "Non mangiare cibo spazzatura 🍎",
    "Rilassati 5 minuti 🧘‍♂️", "Giochi mentali 🧩", "Alzati presto domani ☀️",
    "Risparmia il più possibile 💰", "Pulisci camera 🧹", "Doccia gelata 🧊",
    "Niente caffeina ☕", "Fai qualcosa che odi 🔥", "Niente lamentele 🤐",
    "Niente telefono al lavoro 📵", "Butta 5 oggetti 🗑️"
];

const giorniSett = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

let state = {
    totale: parseInt(localStorage.getItem("pro_vF_tot")) || 0,
    streak: parseInt(localStorage.getItem("pro_vF_str")) || 0,
    attive: JSON.parse(localStorage.getItem("pro_vF_att")) || [],
    usateOggi: JSON.parse(localStorage.getItem("pro_vF_usa")) || [],
    cambiEffettuati: parseInt(localStorage.getItem("pro_vF_cambi")) || 0,
    storico: JSON.parse(localStorage.getItem("pro_vF_storico")) || [0, 0, 0, 0, 0, 0, 0]
};

// Variabili globali per i sistemi dei GIOCHI
let sudokuTimer = null;
let sudokuSecondi = 0;
let schemaCorrente = null;
let memoryLivello = 6; 

// DATABASE SUDOKU (Schemi casuali con soluzioni incorporate)
const databaseSudoku = [
    {
        puzzle: [5,3,0,0,7,0,0,0,0, 6,0,0,1,9,5,0,0,0, 0,9,8,0,0,0,0,6,0, 8,0,0,0,6,0,0,0,3, 4,0,0,8,0,3,0,0,1, 7,0,0,0,2,0,0,0,6, 0,6,0,0,0,0,2,8,0, 0,0,0,4,1,9,0,0,5, 0,0,0,0,8,0,0,7,9],
        soluzione: [5,3,4,6,7,8,9,1,2, 6,7,2,1,9,5,3,4,8, 1,9,8,3,4,2,5,6,7, 8,5,9,7,6,1,4,2,3, 4,2,6,8,5,3,7,9,1, 7,1,3,9,2,4,8,5,6, 9,6,1,5,3,7,2,8,4, 2,8,7,4,1,9,6,3,5, 3,4,5,2,8,6,1,7,9]
    },
    {
        puzzle: [0,0,0,2,6,0,7,0,1, 6,8,0,0,7,0,0,9,0, 1,9,0,0,0,4,5,0,0, 8,2,0,1,0,0,0,4,0, 0,0,4,6,0,2,9,0,0, 0,5,0,0,0,3,0,2,8, 0,0,9,3,0,0,0,7,4, 0,4,0,0,5,0,0,3,6, 7,0,3,0,1,8,0,0,0],
        soluzione: [4,3,5,2,6,9,7,8,1, 6,8,2,5,7,1,4,9,3, 1,9,7,8,3,4,5,6,2, 8,2,6,1,9,5,3,4,7, 3,7,4,6,8,2,9,1,5, 9,5,1,7,4,3,6,2,8, 5,1,9,3,2,6,8,7,4, 2,4,8,9,5,7,1,3,6, 7,6,3,4,1,8,2,5,9]
    },
    {
        puzzle: [0,2,0,6,0,8,0,0,0, 5,8,0,0,0,9,7,0,0, 0,0,0,0,4,0,0,0,0, 3,7,0,0,0,0,5,0,0, 6,0,0,0,0,0,0,0,4, 0,0,8,0,0,0,0,1,3, 0,0,0,0,2,0,0,0,0, 0,0,9,8,0,0,0,3,6, 0,0,0,3,0,6,0,9,0],
        soluzione: [1,2,3,6,7,8,9,4,5, 5,8,4,2,3,9,7,6,1, 9,6,7,5,4,1,3,8,2, 3,7,2,1,6,4,5,9,8, 6,1,5,9,8,3,2,7,4, 4,9,8,7,5,2,6,1,3, 8,3,6,4,2,5,1,2,7, 2,5,9,8,1,7,4,3,6, 7,4,1,3,9,6,8,9,5]
    }
];

// ==========================================
// 2. LOGICA RESET & CORE UI (SFIDE & GRAFICO)
// ==========================================
function controllaReset() {
    const oggi = new Date().toLocaleDateString();
    const ultimaData = localStorage.getItem("pro_vF_last_date");
    if (ultimaData !== oggi) {
        state.usateOggi = [];
        state.cambiEffettuati = 0;
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
    localStorage.setItem("pro_vF_cambi", state.cambiEffettuati);
    localStorage.setItem("pro_vF_storico", JSON.stringify(state.storico));
    renderAttive();
    renderChart();
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

function generaSfida() {
    const box = document.getElementById("box-sfida");
    const btnC = document.getElementById("btn-cambia");
    const pool = sfidePool.filter(s => !state.attive.includes(s) && !state.usateOggi.includes(s));
    
    if(pool.length === 0) { box.innerText = "Sfide finite! 🏆"; return; }
    
    box.classList.add("loading");
    let count = 0;
    const int = setInterval(() => {
        box.innerText = pool[Math.floor(Math.random()*pool.length)];
        if(count++ > 12) {
            clearInterval(int);
            box.classList.remove("loading");
            btnC.innerHTML = `CAMBIA 🔄 <span style="font-size:0.7rem;display:block">Rimasti: ${3-state.cambiEffettuati}</span>`;
            if(state.cambiEffettuati >= 3) btnC.disabled = true;
        }
    }, 70);
}

document.getElementById("btn-genera").onclick = () => {
    document.getElementById("controlli-generazione").classList.add("hidden");
    document.getElementById("azioni-sfida").classList.remove("hidden");
    generaSfida();
};

document.getElementById("btn-cambia").onclick = () => {
    if(state.cambiEffettuati < 3) {
        state.usateOggi.push(document.getElementById("box-sfida").innerText);
        state.cambiEffettuati++;
        generaSfida();
        updateUI();
    }
};

document.getElementById("btn-accetta").onclick = () => {
    state.attive.push(document.getElementById("box-sfida").innerText);
    state.usateOggi.push(document.getElementById("box-sfida").innerText);
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
        d.innerHTML = `<div style="padding:15px; background:var(--card); border-radius:15px; margin-bottom:10px; border-left:4px solid var(--accent); display:flex; justify-content:space-between; align-items:center;">
            <span>${s}</span>
            <div style="display:flex; gap:5px;">
                <button onclick="vinta(${i})" style="background:var(--success); padding:10px;">✅</button>
                <button onclick="persa(${i})" style="background:var(--danger); padding:10px;">X</button>
            </div>
        </div>`;
        l.appendChild(d);
    });
}

window.vinta = (i) => {
    state.attive.splice(i, 1);
    state.totale++; state.streak++;
    const d = new Date().getDay();
    state.storico[d === 0 ? 6 : d - 1]++;
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    updateUI();
};

window.persa = (i) => { state.attive.splice(i, 1); state.streak = 0; updateUI(); };

// ==========================================
// 3. SEZIONE GIOCHI: SUDOKU PRO CASUALE
// ==========================================
window.avviaSudoku = () => {
    chiudiOverlay(); 
    apriOverlay('overlay-game-screen');
    document.getElementById("sudoku-controls").classList.remove("hidden");
    
    clearInterval(sudokuTimer);
    sudokuSecondi = 0;
    
    const indiceCasuale = Math.floor(Math.random() * databaseSudoku.length);
    schemaCorrente = databaseSudoku[indiceCasuale];

    const c = document.getElementById("game-container");
    c.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding:0 10px;">
            <h2 style="margin:0;">Sudoku Mini</h2>
            <span id="sudoku-timer" style="font-family:monospace; font-size:1.2rem; color:var(--accent);">Tempo: 00:00</span>
        </div>
        <div class="sudoku-grid" id="grid"></div>
        <div class="pad" id="pad"></div>
    `;

    sudokuTimer = setInterval(() => {
        sudokuSecondi++;
        const min = String(Math.floor(sudokuSecondi / 60)).padStart(2, '0');
        const sec = String(sudokuSecondi % 60).padStart(2, '0');
        document.getElementById("sudoku-timer").innerText = `Tempo: ${min}:${sec}`;
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
                if(i !== schemaCorrente.soluzione[idx]) {
                    s.classList.add("error");
                } else {
                    s.classList.remove("error");
                }
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
        feedback.innerHTML = "<h2 style='color:var(--danger)'>GRIGLIA INCOMPLETA ⚠️</h2>";
    } else if (ok) {
        clearInterval(sudokuTimer);
        feedback.innerHTML = `<h2>BRAVO! 🏆</h2><p style="color:var(--success)">Risolto in ${document.getElementById("sudoku-timer").innerText.replace("Tempo: ", "")}</p><p style="font-size:0.9rem; color:#94a3b8;">Il prossimo schema sarà diverso!</p>`;
        confetti({ particleCount: 150, spread: 80 });
    } else {
        feedback.innerHTML = "<h2 style='color:var(--danger)'>CI SONO ERRORI, CORREGGILI (IN ROSSO) ❌</h2>";
    }
};

// ==========================================
// 4. SEZIONE GIOCHI: MEMORY PROGRESSIVO
// ==========================================
window.avviaMemory = () => {
    chiudiOverlay(); 
    apriOverlay('overlay-game-screen');
    
    let min = Math.pow(10, memoryLivello - 1);
    let max = Math.pow(10, memoryLivello) - 1;
    const secret = Math.floor(min + Math.random() * (max - min));
    
    const c = document.getElementById("game-container");
    c.innerHTML = `
        <h2>Livello attuale: ${memoryLivello - 5}</h2>
        <p style="color:#94a3b8">Ricorda questa sequenza di ${memoryLivello} cifre:</p>
        <h1 style="font-size:3rem; color:var(--accent); letter-spacing: 4px; margin: 20px 0;">${secret}</h1>
    `;
    
    let tempoVisualizzazione = 1500 + (memoryLivello * 100); 

    setTimeout(() => {
        c.innerHTML = `
            <h2>Inserisci i numeri che hai visto:</h2>
            <input type="number" id="m-in" autocomplete="off" style="width:100%; padding:15px; font-size:2rem; text-align:center; background:#0f172a; color:#fff; border:2px solid var(--accent); border-radius:15px; margin-bottom: 15px;">
            <button onclick="checkM(${secret})" class="btn-main">CONFERMA</button>
        `;
        document.getElementById("m-in").focus();
    }, tempoVisualizzazione);
};

window.checkM = (s) => {
    const v = document.getElementById("m-in").value;
    const feedback = document.getElementById("game-feedback");
    
    if (v == s) {
        feedback.innerHTML = `<h2 style="color:var(--success)">CORRETTO! 🎉</h2><p>Difficoltà aumentata per il prossimo round!</p>`;
        memoryLivello++; 
        if(window.confetti) confetti({ particleCount: 50, spread: 40 });
    } else {
        feedback.innerHTML = `<h2 style="color:var(--danger)">SBAGLIATO! ❌</h2><p>Era: <b>${s}</b></p><p style="font-size:0.9rem; color:#94a3b8">Livello resettato alla base.</p>`;
        memoryLivello = 6; 
    }
    setTimeout(resetEChiudi, 2500);
};

// ==========================================
// 5. UTILITY & OVERLAYS
// ==========================================
window.apriOverlay = (id) => { document.getElementById(id).style.display = "block"; document.body.style.overflow = "hidden"; };
window.chiudiOverlay = () => { document.querySelectorAll('.overlay').forEach(o => o.style.display = 'none'); document.body.style.overflow = "auto"; };
window.resetEChiudi = () => { 
    clearInterval(sudokuTimer);
    chiudiOverlay(); 
    document.getElementById("game-feedback").innerHTML = ""; 
    document.getElementById("sudoku-controls").classList.add("hidden"); 
};

// Inizializzazione Agenda Settimanale
const settCont = document.getElementById("settimana-container");
if (settCont) {
    giorniSett.forEach(g => {
        const box = document.createElement("div"); box.className = "giorno-box";
        const saved = localStorage.getItem("agenda_vF_" + g) || "";
        box.innerHTML = `<label>${g}</label><textarea id="input-${g}">${saved}</textarea>`;
        settCont.appendChild(box);
        const txt = box.querySelector("textarea");
        txt.oninput = () => localStorage.setItem("agenda_vF_" + g, txt.value);
    });
}

// Inizializzazione e gestione Splash Screen al caricamento della pagina
window.onload = () => {
    controllaReset();
    updateUI();

    // Nasconde lo Splash Screen dopo 2 secondi con effetto dissolvenza
    setTimeout(() => {
        const splash = document.getElementById("splash-screen");
        if (splash) {
            splash.classList.add("hidden-splash");
        }
    }, 2000);
};