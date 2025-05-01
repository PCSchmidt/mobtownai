// This script will generate a dynamic background for the hero section
// It will simulate the tech/AI-style background seen in the template image

document.addEventListener('DOMContentLoaded', function() {
    const heroContainer = document.querySelector('.hero-container');
    if (!heroContainer) return;
    
    // Remove the static background image
    heroContainer.style.backgroundImage = 'none';
    heroContainer.style.backgroundColor = '#0a0a0a';
    
    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '0';
    heroContainer.prepend(canvas);
    
    // Set canvas size to match container
    function resizeCanvas() {
        canvas.width = heroContainer.offsetWidth;
        canvas.height = heroContainer.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Get context
    const ctx = canvas.getContext('2d');
    
    // Configuration
    const config = {
        particleCount: 100,
        particleColor: '#34b4eb',
        lineColor: 'rgba(52, 180, 235, 0.15)',
        particleRadius: 1.5,
        lineWidth: 1,
        lineLength: 150,
        speed: 0.25
    };
    
    // Particles array
    let particles = [];
    
    // Create particles
    function createParticles() {
        particles = [];
        for (let i = 0; i < config.particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * config.speed,
                vy: (Math.random() - 0.5) * config.speed,
                radius: Math.random() * config.particleRadius + 0.5
            });
        }
    }
    
    // Draw particles and lines
    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Add a subtle gradient background
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#0a0a0a');
        gradient.addColorStop(1, '#121212');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < config.lineLength) {
                    ctx.beginPath();
                    ctx.strokeStyle = config.lineColor;
                    ctx.lineWidth = config.lineWidth * (1 - distance / config.lineLength);
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        // Draw particles
        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = config.particleColor;
            ctx.fill();
            
            // Move particles
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > canvas.width) particle.vx = -particle.vx;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy = -particle.vy;
        });
        
        // Optional: Add some glowing light spots
        for (let i = 0; i < 3; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const radius = Math.random() * 100 + 50;
            
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
            gradient.addColorStop(0, 'rgba(52, 180, 235, 0.03)');
            gradient.addColorStop(1, 'rgba(52, 180, 235, 0)');
            
            ctx.beginPath();
            ctx.fillStyle = gradient;
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
        }
        
        requestAnimationFrame(drawParticles);
    }
    
    // Initialize
    createParticles();
    drawParticles();
    
    // Update particles on mousemove
    document.addEventListener('mousemove', function(e) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        if (mouseX >= 0 && mouseX <= canvas.width && mouseY >= 0 && mouseY <= canvas.height) {
            particles[0].x = mouseX;
            particles[0].y = mouseY;
        }
    });
});
