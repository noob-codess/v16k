const ghost = document.querySelector('.ghost');

document.addEventListener('mousemove', (event) => {
  ghost.style.left = event.clientX + 'px';
  ghost.style.top = event.clientY + 'px';
});

const typingText = document.getElementById('typing-text');
      const text = "Ghost Mode Activated !!!";
      let index = 0;

      function type() {
        if (index < text.length) {
          typingText.innerHTML += text.charAt(index);
          index++;
          setTimeout(type, 50);
        }
      }

      type();