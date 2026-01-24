const bootText = document.getElementById("bootText");
const boot = document.getElementById("boot");
const loading = document.getElementById("loading");
const log = document.getElementById("log");
const terminal = document.getElementById("terminal");
const output = document.getElementById("output");
const input = document.getElementById("command");
const sound = document.getElementById("sound");

const projectsData = [
    {
        name: "Roblox Script",
        desc: "Script Muscle Legends",
        tech: "Lua",
        link: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Espectroxs/CLT-HUB/refs/heads/main/load.lua"))()`
    }
];

const bootLines = [
    "Booting EspectroOS v1.3...",
    "Loading kernel modules...",
    "Initializing memory...",
    "Mounting filesystem...",
    "System ready."
];

let b = 0;
const bootInterval = setInterval(() => {
    bootText.innerHTML += bootLines[b] + "<br>";
    b++;
    if (b >= bootLines.length) {
        clearInterval(bootInterval);
        setTimeout(() => {
            boot.classList.add("hidden");
            loading.classList.remove("hidden");
            scan();
        }, 800);
    }
}, 600);

const scanLogs = [
    "Detecting public IP...",
    "IP: 187.45.102." + Math.floor(Math.random()*255),
    "Location: São Paulo - BR",
    "ISP: NET Virtua",
    "Port 80: OPEN",
    "Port 443: OPEN",
    "Encryption: AES-256",
    "Connection secured."
];

let i = 0;
function scan(){
    const scanInterval = setInterval(()=>{
        log.innerText = scanLogs[i];
        i++;
        if(i >= scanLogs.length){
            clearInterval(scanInterval);
            setTimeout(()=>{
                loading.classList.add("hidden");
                terminal.classList.remove("hidden");
                print("ACCESS GRANTED");
                print("Type 'help' to list commands.");
                input.focus();
            },800);
        }
    },600);
}

function print(text){
    const p = document.createElement("p");
    p.innerText = text;
    output.appendChild(p);
    sound.currentTime = 0;
    sound.play();
    output.scrollTop = output.scrollHeight;
}

input.addEventListener("keydown", e=>{
    if(e.key==="Enter"){
        const cmd = input.value.trim().toLowerCase();
        print("> " + cmd);
        handle(cmd);
        input.value="";
    }
});

function handle(cmd){
    switch(cmd){
        case "help":
            print("commands: help, projects, about, contact, clear");
            break;
        case "projects":
    print("=== PROJECTS ===");
    projectsData.forEach((p, i) => {
        print(`[${i + 1}] ${p.name}`);
        print(`    ${p.desc}`);
        print(`    Tech: ${p.tech}`);
        print(`    Repo: ${p.link}`);
    });
            break;
        case "about":
            print("Developer Espectral Unknown No Information");
            break;
        case "contact":
            print("Email: notfound");
            print("Discord: espectroxs");
            break;
        case "clear":
            output.innerHTML="";
            break;
        default:
            print("Unknown command.");
    }
}

document.addEventListener("keydown", e=>{
    if(e.ctrlKey && e.shiftKey && e.key.toLowerCase()==="s"){
        document.body.classList.toggle("stealth");
        print("[STEALTH MODE TOGGLED]");
    }
});