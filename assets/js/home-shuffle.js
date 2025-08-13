/* Karıştır ve DOM’a geri yaz */
document.addEventListener('DOMContentLoaded', () => {
  const list   = document.getElementById('post-list');
  const cards  = Array.from(list.children);   // <article>’lar
  if (!cards.length) return;

  /* Fisher-Yates shuffle */
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  /* Sıfırla ve yeniden ekle */
  list.innerHTML = '';
  cards.forEach(c => list.appendChild(c));
});
