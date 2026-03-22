const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');

let mx = 0, my = 0;
let rx = 0, ry = 0;

// Le point suit la souris instantanément
document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

// Le ring suit avec un léger délai
function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
}
animRing();