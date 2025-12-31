document.addEventListener("DOMContentLoaded", function() {

    function preloader() {
        setTimeout(showPage, 5000);
    }

    preloader();

    function showPage() {

        let pl = document.getElementById('preloader');
        pl.classList.add('preloader-hidden');

    }
    
    document.querySelector('.main-pfp').addEventListener('click', function() {
      const frames = document.querySelectorAll('.frame');
      frames.forEach((frame) => {
        frame.classList.toggle('animate-scribble');
      });
        });


    document.querySelectorAll(".audio-player").forEach((player) => {
        const audio = player.querySelector("audio");
        const playBtn = player.querySelector(".play-btn");
        const progressBar = player.querySelector(".progress-bar");

        if (!audio || !playBtn || !progressBar) {
            console.error("Missing elements in the audio player", player);
            return; // Skip this player if essential elements are missing
        }
    
        playBtn.addEventListener("click", function () {
            if (!audio) {
                console.error('No audio element found in this player!');
                return
            }

            if (audio.paused) {
                // Pause all other audio players before playing this one
                document.querySelectorAll("audio").forEach((a) => {
                    if (a !== audio) {
                        a.pause();
                        a.parentElement.querySelector(".play-btn").textContent = "▶";
                    }
                });
                audio.play();
                playBtn.textContent = "⏸";
            } 
            
            else {
                audio.pause();
                playBtn.textContent = "▶";
            }
        });
    
        audio.addEventListener("timeupdate", function () {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = progress + "%";
        });
    
        audio.addEventListener("ended", function () {
            playBtn.textContent = "▶"; // Reset button when audio ends
        });
    });

    let navbar = document.getElementById('nav-bar-section');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.position = 'fixed';
            navbar.style.top = "0";
            navbar.style.width = "100%";
        } else {
            navbar.style.position = 'sticky';
        }
    });
    
  const track = document.querySelector('.review-track');
  const cards = document.querySelectorAll('.review-card');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const visibleCards = 3;
  let currentIndex = 0;

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 32; // card width + gap (2rem = 32px)
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - visibleCards) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);

    
});
