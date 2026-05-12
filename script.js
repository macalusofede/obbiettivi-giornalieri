const sfidePool = [
    "Bevi 2 litri d'acqua oggi 💧", "Allenati 🏋️‍♂️", "Niente social dopo pranzo 📵",
    "Impara qualcosa di nuovo 🧠", "Niente 🔞", "Fai una passeggiata 🌲",
    "Vai a dormire presto 😴", "Non mangiare cibo spazzatura 🍎",
    "Rilassati 5 minuti 🧘‍♂️", "Giochi mentali 🧩", "Alzati presto domani ☀️",
    "Risparmia il più possibile 💰", "Pulisci camera 🧹", "Doccia gelata 🧊",
    "Niente caffeina ☕", "Fai qualcosa che odi 🔥", "Niente lamentele 🤐",
    "Niente telefono al lavoro 📵", "Butta 5 oggetti 🗑️"
];

const giorni = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

let state = {
    totale: parseInt(localStorage.getItem("pro_vF_tot")) || 0,
    streak: parseInt(localStorage.getItem("pro_vF_str")) || 0,
    attive: JSON.parse(localStorage.getItem("pro_vF_att")) || [],
    usateOggi: JSON.parse(localStorage.getItem("pro_vF_usa")) || [], // Sfide già uscite/scartate/finite
    cambiEffettuati: 0
};

function updateUI() {
    document.getElementById("stat-totale").innerText = state.totale;
    document.getElementById("stat-streak").innerText = state.streak + " 🔥";
    localStorage.setItem("pro_vF_tot", state.totale);
    localStorage.setItem("pro_vF_str", state.streak);
    localStorage.setItem("pro_vF_att", JSON.stringify(state.attive));
    localStorage.setItem("pro_vF_usa", JSON.stringify(state.usateOggi));
    renderAttive();
}

// Agenda Init
const settContainer = document.getElementById("settimana-container");
giorni.forEach(g => {
    const box = document.createElement("div"); box.className = "giorno-box";
    const saved = localStorage.getItem("agenda_vF_" + g) || "";
    box.innerHTML = `<label>${g}</label><textarea id="input-${g}">${saved}</textarea>`;
    settContainer.appendChild(box);
    const txt = box.querySelector("textarea");
    txt.oninput = () => localStorage.setItem("agenda_vF_" + g, txt.value);
});

// Generazione con Filtro Totale
function generaSfida() {
    const display = document.getElementById("box-sfida");
    const btnCambia = document.getElementById("btn-cambia");
    const btnGenera = document.getElementById("btn-genera");

    // Filtra le sfide disponibili (non attive e non usate oggi)
    const disponibili = sfidePool.filter(s => !state.attive.includes(s) && !state.usateOggi.includes(s));

    if (disponibili.length === 0) {
        display.innerText = "Hai finito tutte le sfide per oggi! 🏆";
        document.getElementById("controlli-generazione").classList.remove("hidden");
        document.getElementById("azioni-sfida").classList.add("hidden");
        btnGenera.disabled = true;
        btnGenera.innerText = "COMPLETATO";
        return;
    }

    display.classList.add("loading");
    let giri = 0;
    const interval = setInterval(() => {
        display.innerText = disponibili[Math.floor(Math.random() * disponibili.length)];
        giri++;
        if (giri > 10) {
            clearInterval(interval);
            display.classList.remove("loading");
            
            const rimasti = 3 - state.cambiEffettuati;
            btnCambia.innerHTML = `CAMBIA 🔄 <span id="cambi-rimasti">Rimasti: ${rimasti}</span>`;
            if (state.cambiEffettuati >= 3) {
                btnCambia.disabled = true;
                btnCambia.innerHTML = "CAMBI FINITI 🚫";
            }
        }
    }, 60);
}

document.getElementById("btn-genera").onclick = () => {
    state.cambiEffettuati = 0;
    document.getElementById("btn-cambia").disabled = false;
    document.getElementById("controlli-generazione").classList.add("hidden");
    document.getElementById("azioni-sfida").classList.remove("hidden");
    generaSfida();
};

document.getElementById("btn-cambia").onclick = () => {
    if (state.cambiEffettuati < 3) {
        // Quando cambi, la sfida mostrata viene segnata come "usata"
        state.usateOggi.push(document.getElementById("box-sfida").innerText);
        state.cambiEffettuati++;
        generaSfida();
        updateUI();
    }
};

document.getElementById("btn-accetta").onclick = () => {
    const sfidaCorrente = document.getElementById("box-sfida").innerText;
    state.attive.push(sfidaCorrente);
    state.usateOggi.push(sfidaCorrente); // Segnata come usata così non riappare
    document.getElementById("controlli-generazione").classList.remove("hidden");
    document.getElementById("azioni-sfida").classList.add("hidden");
    document.getElementById("box-sfida").innerText = "Sfida Accettata!";
    updateUI();
};

function renderAttive() {
    const list = document.getElementById("lista-sfide-attive");
    list.innerHTML = "";
    state.attive.forEach((s, i) => {
        const d = document.createElement("div");
        d.className = "sfida-item";
        d.innerHTML = `<div style="padding:15px; background:#1e293b; border-radius:15px; margin-bottom:10px; border-left: 4px solid var(--accent)">
            <span>${s}</span>
            <div style="display:flex; gap:10px; margin-top:10px;">
                <button class="btn-action ok" onclick="vinta(${i})" style="flex:2">VINTA</button>
                <button class="btn-action" onclick="persa(${i})" style="background:var(--danger); flex:1">X</button>
            </div>
        </div>`;
        list.appendChild(d);
    });
}

window.vinta = (i) => {
    state.attive.splice(i, 1);
    state.totale++; state.streak++;
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    updateUI();
};

window.persa = (i) => {
    state.attive.splice(i, 1);
    state.streak = 0;
    updateUI();
};

// Reset quotidiano (Opzionale: svuota le sfide usate se è un nuovo giorno)
// Per ora le sfide usate rimangono salvate finché non pulisci la cache, 
// così il gioco è coerente con la tua richiesta.

window.apriOverlay = (id) => { document.getElementById(id).style.display = "block"; document.body.style.overflow = "hidden"; };
window.chiudiOverlay = () => { document.querySelectorAll('.overlay').forEach(o => o.style.display = 'none'); document.body.style.overflow = "auto"; };
window.resetEChiudi = () => { chiudiOverlay(); document.getElementById("game-feedback").innerHTML = ""; document.getElementById("sudoku-controls").classList.add("hidden"); };

// Giochi
window.avviaMemory = () => {
    chiudiOverlay(); apriOverlay('overlay-game-screen');
    const cont = document.getElementById("game-container");
    const secret = Math.floor(100000 + Math.random() * 900000);
    cont.innerHTML = `<h2>Ricorda:</h2><h1 style="font-size:3.5rem; color:var(--accent)">${secret}</h1>`;
    setTimeout(() => {
        cont.innerHTML = `<h2>Inserisci il numero:</h2>
            <input type="number" id="m-in" style="width:100%; padding:15px; font-size:2rem; text-align:center; background:#0f172a; color:#fff; border:2px solid var(--accent); border-radius:15px;">
            <button onclick="checkM(${secret})" class="btn-main" style="margin-top:15px">VERIFICA</button>`;
    }, 2500);
};

window.checkM = (s) => {
    const val = document.getElementById("m-in").value;
    const f = document.getElementById("game-feedback");
    if(val == s) { f.innerHTML = "<h2>ESATTO!</h2>"; confetti(); } else { f.innerHTML = `<h2>ERRORE! Era ${s}</h2>`; }
    setTimeout(resetEChiudi, 2500);
};

window.avviaSudoku = () => {
    chiudiOverlay(); apriOverlay('overlay-game-screen');
    document.getElementById("sudoku-controls").classList.remove("hidden");
    const cont = document.getElementById("game-container");
    cont.innerHTML = `<h2>Sudoku</h2><div class="sudoku-grid" id="grid"></div>`;
    const grid = document.getElementById("grid");
    const puzzle = [5,3,0,0,7,0,0,0,0, 6,0,0,1,9,5,0,0,0, 0,9,8,0,0,0,0,6,0, 8,0,0,0,6,0,0,0,3, 4,0,0,8,0,3,0,0,1, 7,0,0,0,2,0,0,0,6, 0,6,0,0,0,0,2,8,0, 0,0,0,4,1,9,0,0,5, 0,0,0,0,8,0,0,7,9];
    puzzle.forEach((n, i) => {
        const c = document.createElement("div"); c.className = "s-cell" + (n !== 0 ? " fixed" : "");
        c.innerText = n !== 0 ? n : "";
        if(n === 0) c.onclick = () => { document.querySelectorAll('.s-cell').forEach(el => el.classList.remove('selected')); c.classList.add('selected'); };
        grid.appendChild(c);
    });
};

updateUI();

updateUI();