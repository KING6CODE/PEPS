// Populate content from index.json and handle interactions
(async function(){
  try{
    const res = await fetch('/index.json', { cache: 'no-store' });
    if(res.ok){
      const data = await res.json();
      // Header/brand
      document.querySelectorAll('.logo').forEach(el => el.textContent = data.brand || 'PEPS');
      // Hero
      const heroTitle = document.getElementById('heroTitle');
      const heroSubtitle = document.getElementById('heroSubtitle');
      if(heroTitle) heroTitle.textContent = data.hero.title;
      if(heroSubtitle) heroSubtitle.textContent = data.hero.subtitle;
      if(data.hero.image) document.getElementById('heroImage').src = data.hero.image;
      // About
      document.getElementById('aboutText').textContent = data.about.text;
      if(data.about.image) document.getElementById('aboutImage').src = data.about.image;
      const valuesList = document.getElementById('valuesList');
      valuesList.innerHTML = '';
      (data.values || []).forEach(v => {
        const li = document.createElement('li'); li.textContent = v; valuesList.appendChild(li);
      });
      // Services
      const grid = document.getElementById('servicesGrid');
      grid.innerHTML = '';
      (data.services || []).forEach(s => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
          ${s.image ? `<img src="${s.image}" alt="${s.title}">` : ''}
          <div class="title">${s.title}</div>
          <div class="desc">${s.description}</div>
        `;
        grid.appendChild(card);
      });
      // Testimonials
      const tg = document.getElementById('testimonialsGrid');
      tg.innerHTML = '';
      (data.testimonials || []).forEach(t => {
        const card = document.createElement('article');
        card.className = 'card testimonial';
        card.innerHTML = `
          <div class="desc">“${t.quote}”</div>
          <div class="author">${t.author}</div>
          <div class="role">${t.role || ''}</div>
        `;
        tg.appendChild(card);
      });
      // Contact info
      const email = document.getElementById('emailLink');
      const phone = document.getElementById('phoneLink');
      const address = document.getElementById('addressText');
      if(email){ email.href = 'mailto:' + data.contact.email; email.textContent = data.contact.email; }
      if(phone){ phone.href = 'tel:' + data.contact.phone.replace(/\s+/g,''); phone.textContent = data.contact.phone; }
      if(address){ address.textContent = data.contact.address; }
      const footerTag = document.getElementById('footerTagline');
      if(footerTag) footerTag.textContent = data.footer.tagline;
      document.getElementById('year').textContent = new Date().getFullYear();
    }
  }catch(err){
    console.warn('index.json unavailable, using defaults', err);
    document.getElementById('year').textContent = new Date().getFullYear();
  }
})();

// Mobile menu
const header = document.querySelector('.header');
document.getElementById('burger').addEventListener('click', ()=>{
  header.classList.toggle('open');
});

// Smooth scroll for hash links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: 'smooth' });
      header.classList.remove('open');
      history.pushState(null, '', '#' + id);
    }
  });
});

// Contact form via Formspree (replace YOUR_FORM_ID)
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
form.addEventListener('submit', async (e)=>{
  e.preventDefault();
  formStatus.textContent = 'Envoi en cours…';
  try{
    const fd = new FormData(form);
    const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: fd, headers: { 'Accept': 'application/json' }});
    if(res.ok){
      form.reset();
      formStatus.textContent = 'Merci ! Votre message a bien été envoyé.';
    }else{
      formStatus.textContent = 'Une erreur est survenue. Réessayez plus tard.';
    }
  }catch(err){
    formStatus.textContent = 'Impossible d’envoyer le message (connexion ?).';
  }
});
