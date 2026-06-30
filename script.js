document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MODAL DE AGENDAMENTO ---
    const modal = document.getElementById('demoModal');
    const closeBtn = document.getElementById('closeModal');
    const demoButtons = document.querySelectorAll('.btn-primary, .btn-lg.btn-primary'); // Seleciona "Agendar Demo" e "Agendar Demonstração Técnica"

    const openModal = (e) => {
        // Verifica se o botão clicado é de agendamento (previne disparar em outros primários se houver)
        if (e.target.innerText.includes("Agendar")) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Trava scroll do fundo
        }
    };

    demoButtons.forEach(btn => btn.addEventListener('click', openModal));

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Envio do Formulário (Simulação)
    document.getElementById('demoForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.innerText = "Enviando...";
        setTimeout(() => {
            alert("Solicitação enviada com sucesso! Entraremos em contato em breve.");
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            e.target.reset();
            btn.innerText = "Enviar solicitação";
        }, 1500);
    });

    // --- 2. SMOOTH SCROLL PARA ECOSSISTEMA ---
    const exploreBtn = document.querySelector('.btn-secondary'); // Botão "Explorar Ecossistema"
    exploreBtn.addEventListener('click', () => {
        const target = document.getElementById('ciclo');
        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });
    });

    // --- 3. SIMULADOR DE EVACUAÇÃO (Injeção de Pontos Móveis) ---
    const simBox = document.querySelector('.sim-3d-box');
    if (simBox) {
        // Cria 4 pontos de evacuação contínuos
        for (let i = 1; i <= 4; i++) {
            const dot = document.createElement('div');
            dot.className = `moving-dot dot-${(i % 2) + 1}`;
            dot.style.animationDelay = `${i * 2}s`;
            simBox.appendChild(dot);
        }
    }

    // --- 4. PROTOCOLO SOS (Notificação Visual) ---
    const sosBtn = document.querySelector('.sos-btn');
    const sosToast = document.getElementById('sosNotification');

    if (sosBtn) {
        sosBtn.addEventListener('click', () => {
            sosToast.style.display = 'flex';
            sosBtn.style.transform = 'scale(0.95)';
            sosBtn.disabled = true;

            setTimeout(() => {
                sosToast.style.animation = 'modalEntry 0.4s reverse forwards';
                setTimeout(() => {
                    sosToast.style.display = 'none';
                    sosToast.style.animation = 'modalEntry 0.4s forwards';
                    sosBtn.style.transform = 'scale(1)';
                    sosBtn.disabled = false;
                }, 400);
            }, 5000); // Fica na tela por 5 segundos
        });
    }

    // --- 5. REVEAL ANIMATIONS (Intersection Observer) ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

    // --- 6. NAVBAR DYNAMICS ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});