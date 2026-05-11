const sfidePool = [
    "Bevi 2 litri d'acqua oggi 💧", "Allenati 🏋️‍♂️", "Niente social dopo pranzo 📵",
    "Impara qualcosa di nuovo 🧠", "Niente 🔞", "Fai una passeggiata 🌲",
    "Vai a dormire presto 😴", "Non mangiare cibo spazzatura 🍎",
    "Rilassati 5 minuti 🧘‍♂️", "Giochi mentali 🧩", "Alzati presto domani ☀️",
    "Risparmia il più possibile 💰", "Pulisci camera 🧹", "Doccia gelata 🧊",
    "Niente caffeina ☕", "Fai qualcosa che odi 🔥", "Niente lamentele 🤐",
    "Niente telefono al lavoro 📵", "Butta 5 oggetti 🗑️"
];

const DB_KEY = "db_sfide_streak_v11";
const STREAK_KEY = "streak_vittorie_v11";
const CAMBI_KEY = "cambi_giornalieri_v11";
const SETTIMANA_KEY = "ultima_settimana_salvata_v11";

let database = JSON.parse(localStorage.getItem(DB_KEY)) || {};
let sfideAttive = JSON.parse(localStorage.getItem("attive_sfide_v11")) || [];
let streakVittorie = parseInt(localStorage.getItem(STREAK_KEY)) || 0;
let sfideScartateOggi = []; // Memoria temporanea per i cambi della sessione

function getDataKey() { return new Date().toISOString().split('T')[0]; }

function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function controllaResetSettimanale() {
    const settimanaCorrente = getWeekNumber(new Date());
    const ultimaSettimana = localStorage.getItem(SETTIMANA_KEY);
    if (ultimaSettimana && ultimaSettimana != settimanaCorrente) {
        ['lun','mar','mer','gio','ven','sab','dom'].forEach(g => {
            localStorage.removeItem(`agenda_v9_${g}`);
        });
    }
    localStorage.setItem(SETTIMANA_KEY, settimanaCorrente);
}

let datiCambi = JSON.parse(localStorage.getItem(CAMBI_KEY)) || { data: "", conteggio: 3 };
if (datiCambi.data !== getDataKey()) {
    datiCambi = { data: getDataKey(), conteggio: 3 };
    localStorage.setItem(CAMBI_KEY, JSON.stringify(datiCambi));
    sfideScartateOggi = []; 
}

const displaySfida = document.getElementById("box-sfida");
const btnGenera = document.getElementById("btn-genera");
const divAzioni = document.getElementById("azioni-sfida");
const btnCambia = document.getElementById("btn-cambia");
let sfidaProposta = "";

function genera(isCambio = false) {
    if (isCambio) {
        if (datiCambi.conteggio <= 0) {
            alert("Cambi esauriti!");
            return;
        }
        // Aggiungi la sfida attuale tra quelle scartate prima di generarne una nuova
        if (sfidaProposta) sfideScartateOggi.push(sfidaProposta);
        
        datiCambi.conteggio--;
        localStorage.setItem(CAMBI_KEY, JSON.stringify(datiCambi));
    }

    const oggi = getDataKey();
    const giaFatte = (database[oggi] || []).map(s => s.testo);
    
    // Filtro: NO già fatte oggi, NO già attive, NO scartate in questa sessione
    const disponibili = sfidePool.filter(s => 
        !giaFatte.includes(s) && 
        !sfideAttive.includes(s) && 
        !sfideScartateOggi.includes(s) &&
        s !== sfidaProposta
    );
    
    if (disponibili.length === 0) { 
        displaySfida.innerText = "Nessun'altra sfida disponibile!"; 
        btnCambia.classList.add("hidden");
        return; 
    }
    
    sfidaProposta = disponibili[Math.floor(Math.random() * disponibili.length)];
    displaySfida.innerText = `${sfidaProposta}\n(Cambi rimasti: ${datiCambi.conteggio})`;
    
    btnGenera.classList.add("hidden");
    divAzioni.classList.remove("hidden");

    if (datiCambi.conteggio <= 0) {
        btnCambia.style.opacity = "0.4";
        btnCambia.innerText = "Cambi Esauriti";
    }
}

btnGenera.onclick = () => genera(false);
btnCambia.onclick = () => genera(true);

document.getElementById("btn-accetta").onclick = () => {
    sfideAttive.push(sfidaProposta);
    localStorage.setItem("attive_sfide_v11", JSON.stringify(sfideAttive));
    renderAttive();
    btnGenera.classList.remove("hidden");
    divAzioni.classList.add("hidden");
    displaySfida.innerText = "Sfida Accettata! Vai!";
    sfidaProposta = ""; // Reset proposta
};

function renderAttive() {
    const lista = document.getElementById("lista-sfide-attive");
    lista.innerHTML = "";
    sfideAttive.forEach((t, i) => {
        const div = document.createElement("div");
        div.className = "sfida-attiva-card";
        div.innerHTML = `<b>${t}</b><div style="display:flex; gap:10px; margin-top:10px;">
            <button class="btn-success" onclick="finisci(${i}, true)">VINTA</button>
            <button class="btn-danger" onclick="finisci(${i}, false)">PERSA</button>
        </div>`;
        lista.appendChild(div);
    });
}

window.finisci = (i, esito) => {
    const oggi = getDataKey();
    if(!database[oggi]) database[oggi] = [];
    database[oggi].push({testo: sfideAttive[i], vinto: esito});

    if (esito === true) { streakVittorie++; } 
    else { streakVittorie = 0; }

    sfideAttive.splice(i, 1);
    localStorage.setItem(DB_KEY, JSON.stringify(database));
    localStorage.setItem("attive_sfide_v11", JSON.stringify(sfideAttive));
    localStorage.setItem(STREAK_KEY, streakVittorie.toString());
    renderAttive();
    aggiornaStats();
};

function aggiornaStats() {
    let tot = 0;
    Object.values(database).forEach(g => tot += g.filter(s => s.vinto).length);
    const oggiVinte = (database[getDataKey()] || []).filter(s => s.vinto).length;
    document.getElementById("stat-totale").innerText = tot;
    document.getElementById("stat-oggi").innerText = oggiVinte;
    document.getElementById("stat-streak").innerText = streakVittorie + " 🔥";
}

document.getElementById("btn-apri-cronologia").onclick = () => {
    const c = document.getElementById("calendario-dettagliato");
    c.innerHTML = "";
    const chiavi = Object.keys(database).sort().reverse();
    if(chiavi.length === 0) c.innerHTML = "<p>Nessuna sfida completata.</p>";
    chiavi.forEach(d => {
        let h = `<div class="day-card"><b>${d}</b>`;
        database[d].forEach(s => h += `<div>${s.vinto?'✅':'❌'} ${s.testo}</div>`);
        c.innerHTML += h + "</div>";
    });
    document.getElementById("overlay-cronologia").style.display = "block";
};
document.getElementById("btn-chiudi-cronologia").onclick = () => document.getElementById("overlay-cronologia").style.display = "none";

document.getElementById("btn-apri-agenda").onclick = () => {
    ['lun','mar','mer','gio','ven','sab','dom'].forEach(g => {
        document.getElementById(`note-${g}`).value = localStorage.getItem(`agenda_v9_${g}`) || "";
    });
    document.getElementById("overlay-agenda").style.display = "block";
};
document.getElementById("btn-chiudi-agenda").onclick = () => {
    ['lun','mar','mer','gio','ven','sab','dom'].forEach(g => {
        localStorage.setItem(`agenda_v9_${g}`, document.getElementById(`note-${g}`).value);
    });
    document.getElementById("overlay-agenda").style.display = "none";
};

controllaResetSettimanale();
renderAttive();
aggiornaStats();