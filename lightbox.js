// Simple lightbox: open images in an overlay when clicking links with .lightbox
document.addEventListener('DOMContentLoaded', function(){
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';

  const img = document.createElement('img');
  overlay.appendChild(img);

  const closeBtn = document.createElement('button');
  closeBtn.className = 'lightbox-close';
  closeBtn.innerHTML = '✕';
  overlay.appendChild(closeBtn);

  document.body.appendChild(overlay);

  function openLightbox(src){
    img.src = src;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(){
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    img.src = '';
  }

  // Delegate clicks on links with .lightbox
  document.addEventListener('click', function(e){
    const a = e.target.closest('a.lightbox');
    if(!a) return;
    const href = a.getAttribute('href');
    if(!href) return;
    e.preventDefault();
    openLightbox(href);
  });

  overlay.addEventListener('click', function(e){
    if(e.target === overlay || e.target === closeBtn) closeLightbox();
  });

  document.addEventListener('keyup', function(e){
    if(e.key === 'Escape') closeLightbox();
  });
});
