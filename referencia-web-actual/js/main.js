(function() {
  'use strict';

  // ═══════════ NAV & SCROLL ═══════════
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  function handleScroll() {
    const scrollY = window.scrollY;
    
    // Nav appearance
    if (scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // init

  // ═══════════ MOBILE MENU ═══════════
  navToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ═══════════ SCROLL REVEAL ═══════════
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries, obs) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function(el) {
      el.classList.add('visible');
    });
  }

  // ═══════════ CONTACT FORM ═══════════
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    const csrfInput = document.getElementById('csrf');
    const submitBtn = document.getElementById('submitBtn');
    
    // Basic CSRF token generation
    function generateToken() {
      const array = new Uint8Array(16);
      crypto.getRandomValues(array);
      return Array.from(array, function(b) {
        return b.toString(16).padStart(2, '0');
      }).join('');
    }
    
    if (csrfInput) {
      csrfInput.value = generateToken();
    }

    function showMessage(type, text) {
      removeMessage();
      const msg = document.createElement('div');
      msg.className = 'form-msg ' + type;
      msg.textContent = text;
      // Insert before the form elements but inside the form
      contactForm.insertBefore(msg, contactForm.firstChild);
    }

    function removeMessage() {
      const existing = contactForm.querySelector('.form-msg');
      if (existing) existing.remove();
    }

    function setLoading(loading) {
      if (loading) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
      } else {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar mensaje';
      }
    }

    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      removeMessage();

      // Honeypot check
      const website = document.getElementById('website').value;
      if (website !== '') {
        // Silently fail for bots
        contactForm.reset();
        return;
      }

      const nombre = document.getElementById('nombre');
      const email = document.getElementById('email');
      const mensaje = document.getElementById('mensaje');
      
      let hasError = false;
      
      // Basic validation
      [nombre, email, mensaje].forEach(el => el.classList.remove('error'));
      
      if (!nombre.value.trim()) {
        nombre.classList.add('error');
        hasError = true;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        email.classList.add('error');
        hasError = true;
      }
      
      if (!mensaje.value.trim() || mensaje.value.trim().length < 10) {
        mensaje.classList.add('error');
        hasError = true;
      }

      if (hasError) {
        showMessage('error', 'Por favor, revisa los campos marcados en rojo.');
        return;
      }

      setLoading(true);
      
      const formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(function(res) {
        if (!res.ok) {
          throw new Error('Error en el servidor');
        }
        return res.json();
      })
      .then(function(data) {
        if (data.ok) {
          showMessage('success', 'Mensaje enviado correctamente. Me pondré en contacto contigo pronto.');
          contactForm.reset();
          if (csrfInput) csrfInput.value = generateToken();
        } else {
          showMessage('error', data.error || 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo.');
        }
      })
      .catch(function() {
        showMessage('error', 'Error de conexión. Por favor, inténtalo de nuevo más tarde.');
      })
      .finally(function() {
        setLoading(false);
      });
    });
  }

})();
