/**
 * Safe Zone - CONSTELLATION NETWORK
 * Clean, interactive particle system with mouse connections.
 */

const canvas = document.querySelector('#particles-js canvas') || (() => {
    const c = document.createElement('canvas');
    const container = document.getElementById('particles-js');
    if(container) container.appendChild(c);
    return c;
})();
const ctx = canvas.getContext('2d');

let width, height;
// Audio variables
let audioContext, analyser, dataArray, audioInitialized = false;

// SOZLAMALAR
const CFG = {
    starCount: 150,          // Yulduzlar soni
    connectionDist: 140,     // Bog'lanish masofasi
    mouseDist: 200,          // Sichqoncha tortish masofasi
    starColor: '255, 255, 255', // Oq rang
    lineColor: '59, 130, 246',  // Moviy (Blue) chiziqlar
    speed: 0.5               // Suzish tezligi
};

// Sichqoncha joylashuvi
let mouse = { x: null, y: null };

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
});

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}
window.addEventListener('resize', resize);
resize();

// --- STAR CLASS ---
class Star {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Tasodifiy yo'nalish
        this.vx = (Math.random() - 0.5) * CFG.speed;
        this.vy = (Math.random() - 0.5) * CFG.speed;
        this.size = Math.random() * 2 + 1; // 1px dan 3px gacha
        this.baseSize = this.size;
    }

    update(audio) {
        // Musiqa ta'siri (Tezlik va hajm)
        const boost = 1 + (audio.bass * 2);
        
        // Harakat
        this.x += this.vx * boost;
        this.y += this.vy * boost;

        // Sichqoncha bilan interaktivlik
        if (mouse.x != null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx*dx + dy*dy);

            // Agar sichqonchaga yaqin bo'lsa, biroz sekinlashadi va kattalashadi
            if (distance < CFG.mouseDist) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (CFG.mouseDist - distance) / CFG.mouseDist;
                
                // Magnit effekti (Sichqonchaga sal tortiladi)
                this.vx += forceDirectionX * force * 0.05;
                this.vy += forceDirectionY * force * 0.05;
                
                this.size = this.baseSize * 2; // Kattalashadi
            } else {
                this.size = this.baseSize;
            }
        }

        // Devorlardan qaytish (Bounce)
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
        
        // Musiqa bass urganda "sakrash"
        this.size = this.baseSize + (audio.mid * 3);
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${CFG.starColor}, 0.8)`;
        ctx.fill();
    }
}

// --- SETUP ---
let stars = [];
function initStars() {
    stars = [];
    for(let i=0; i<CFG.starCount; i++) stars.push(new Star());
}

// --- AUDIO LOGIC ---
window.initAudioVisualization = function() {
    if (audioInitialized) return;
    const bgMusic = document.getElementById('bgMusic');
    if (!bgMusic) return;
    try {
        const AC = window.AudioContext || window.webkitAudioContext;
        audioContext = new AC();
        analyser = audioContext.createAnalyser();
        const src = audioContext.createMediaElementSource(bgMusic);
        src.connect(analyser);
        analyser.connect(audioContext.destination);
        analyser.fftSize = 256;
        dataArray = new Uint8Array(analyser.frequencyBinCount);
        audioInitialized = true;
    } catch(e) {}
};
window.resumeAudioContext = function() {
    if(audioContext && audioContext.state === 'suspended') audioContext.resume();
}
function getAudioData() {
    if (!audioInitialized || !analyser) return { bass: 0, mid: 0 };
    analyser.getByteFrequencyData(dataArray);
    const bass = dataArray.slice(0, 10).reduce((a,b)=>a+b,0) / (10 * 255);
    const mid = dataArray.slice(11, 100).reduce((a,b)=>a+b,0) / (89 * 255);
    return { bass, mid };
}

// --- ANIMATION LOOP ---
function animate() {
    ctx.clearRect(0, 0, width, height);
    const audio = getAudioData();

    // Har bir yulduzni yangilash
    for (let i = 0; i < stars.length; i++) {
        stars[i].update(audio);
        stars[i].draw();

        // CHIZIQLARNI CHIZISH (CONSTELLATION)
        for (let j = i + 1; j < stars.length; j++) {
            const dx = stars[i].x - stars[j].x;
            const dy = stars[i].y - stars[j].y;
            const dist = Math.sqrt(dx*dx + dy*dy);

            // Sichqonchaga yaqin bo'lsa, bog'lanish masofasi ortadi
            let dynamicDist = CFG.connectionDist;
            if (mouse.x != null) {
                const dMouse = Math.sqrt((stars[i].x - mouse.x)**2 + (stars[i].y - mouse.y)**2);
                if (dMouse < CFG.mouseDist) dynamicDist = CFG.mouseDist;
            }

            if (dist < dynamicDist) {
                // Masofaga qarab shaffoflik (Yaqin = to'qroq)
                const opacity = 1 - (dist / dynamicDist);
                ctx.beginPath();
                
                // Musiqa bass urganda chiziq qalinlashadi
                ctx.lineWidth = 0.5 + (audio.bass * 2);
                
                // Rang (Moviy gradient)
                ctx.strokeStyle = `rgba(${CFG.lineColor}, ${opacity * 0.5})`;
                
                ctx.moveTo(stars[i].x, stars[i].y);
                ctx.lineTo(stars[j].x, stars[j].y);
                ctx.stroke();
            }
        }
        
        // SICHQONCHA BILAN BOG'LANISH
        if (mouse.x != null) {
            const dx = stars[i].x - mouse.x;
            const dy = stars[i].y - mouse.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            if (dist < CFG.mouseDist) {
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist/CFG.mouseDist})`; // Oq chiziq
                ctx.moveTo(stars[i].x, stars[i].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animate);
}

initStars();
animate();