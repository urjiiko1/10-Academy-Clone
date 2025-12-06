
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(drop => {
    const btn = drop.querySelector('.dropdown-btn');
    
    btn.addEventListener('click', () => {
      // Close other dropdowns
      dropdowns.forEach(d => {
        if(d !== drop) d.classList.remove('open');
      });

      // Toggle this dropdown
      drop.classList.toggle('open');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if(!e.target.closest('.dropdown')) {
      dropdowns.forEach(d => d.classList.remove('open'));
    }
  });

