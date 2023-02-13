const ghost = document.querySelector('.ghost');

document.addEventListener('mousemove', (event) => {
  ghost.style.left = event.clientX + 'px';
  ghost.style.top = event.clientY + 'px';
});

const typingText = document.getElementById('typing-text');
      const text = "Oh fantastic, ghost mode is activated. I'm sure my friends and followers will be over the moon that they can no longer stalk my every move. I can finally go back to living a life of mystery and intrigue, just like the spy I've always dreamed of being. This is truly a dream come true.";
      let index = 0;

      function type() {
        if (index < text.length) {
          typingText.innerHTML += text.charAt(index);
          index++;
          setTimeout(type, 50);
        }
      }

      type();