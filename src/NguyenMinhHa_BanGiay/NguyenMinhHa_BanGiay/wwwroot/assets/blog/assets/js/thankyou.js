/* ── PARTICLE EXPLOSION ── */
(function () {
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const colors = [
        "#e8ff00",
        "#ff3d00",
        "#00d4ff",
        "#ffffff",
        "#e8ff00",
        "#e8ff00",
    ];
    const particles = [];
    for (let i = 0; i < 160; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 8 + 2;
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 5,
            size: Math.random() * 6 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            shape: Math.random() > 0.5 ? "rect" : "circle",
            rot: Math.random() * Math.PI * 2,
            rotV: (Math.random() - 0.5) * 0.15,
            gravity: 0.18,
            drag: 0.97,
            life: 1,
            decay: Math.random() * 0.012 + 0.008,
        });
    }
    let frame = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        particles.forEach((p) => {
            if (p.life <= 0) return;
            alive = true;
            p.vx *= p.drag;
            p.vy *= p.drag;
            p.vy += p.gravity;
            p.x += p.vx;
            p.y += p.vy;
            p.rot += p.rotV;
            p.life -= p.decay;
            ctx.save();
            ctx.globalAlpha = Math.max(0, p.life);
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.fillStyle = p.color;
            if (p.shape === "circle") {
                ctx.beginPath();
                ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.6);
            }
            ctx.restore();
        });
        frame++;
        if (alive && frame < 300) requestAnimationFrame(animate);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setTimeout(() => animate(), 300);
})();

/* ── COPY ORDER ID ── */
function copyId() {
    navigator.clipboard.writeText("#SD-2025-04721").then(() => {
        const btn = document.querySelector(".oid-copy");
        const orig = btn.innerHTML;
        btn.innerHTML =
            '<svg width="14" height="14" fill="none" stroke="var(--accent)" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>';
        btn.style.borderColor = "var(--accent)";
        setTimeout(() => {
            btn.innerHTML = orig;
            btn.style.borderColor = "";
        }, 2000);
    });
}

window.addEventListener("resize", () => {
    const c = document.getElementById("particle-canvas");
    c.width = window.innerWidth;
    c.height = window.innerHeight;
});