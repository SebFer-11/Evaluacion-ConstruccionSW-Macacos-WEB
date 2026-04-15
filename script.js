
  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  reveals.forEach(r => observer.observe(r));

  // Animate R2 bars on scroll
  const bars = document.querySelectorAll('.r2-fill');
  bars.forEach(b => {
    const target = b.style.width;
    b.style.width = '0';
    const barObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { b.style.width = target; barObs.disconnect(); }
      });
    }, { threshold: 0.5 });
    barObs.observe(b);
  });
