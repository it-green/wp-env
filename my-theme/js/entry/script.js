import SweetScroll from 'sweet-scroll';

// スムースクロールを実装するための関数
function sweetScroll() {
  const scroller = new SweetScroll({
    offset: 0,
    vertical: true,
    easing: 'easeOutQuint',
    horizontal: false,
    cancellable: true,
    updateURL: false,
    preventDefault: true,
    stopPropagation: true,
  });

  scroller.update({
    trigger: 'a[href^="#"]',
    duration: 1000,
  });
}

document.addEventListener('DOMContentLoaded', () => {
  sweetScroll();
});
