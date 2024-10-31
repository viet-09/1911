function showMoreWishes() {
    const moreWishes = document.getElementById('more-wishes');
    if (moreWishes.classList.contains('hidden')) {
      moreWishes.classList.remove('hidden');
    } else {
      moreWishes.classList.add('hidden');
    }
  }
  