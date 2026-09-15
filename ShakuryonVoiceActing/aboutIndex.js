document.addEventListener("DOMContentLoaded", function () {
  const contentContainer = document.getElementById("wayContent");

  const contentMap = {
    demoButt: `
            <p><span>Garden of Eden (Birthplace):</span> Mobile, Alabama, USA</p>
            <p><span>Pronouns</span>: He/Him</p>
            <p><span>Age: </span>27 y/o (Last Year of Mid-20's 🙃)</p>
            <p><span>Birthday:</span> February 28th</p>
            <p><span>Religion(s):</span> Christian & Jesus-Centered. Also follows the way of Buddhism & Buddha. Deep in Interfaith.</p>
            <p><span>Education:</span> Davidson High School graduate, Spring Hill College graduate with a Bachelor of Science (Focus of Psychology & Sociology), Post University Master's of Human Services Counseling with 6 Completed Courses and was named "Top of My Class" by my Graduate Programs's Honor Society.</p>

        `,
    psychoButt: `
            <p><span>Attachment Style:</span> Secure 💪</p>
            <p><span>Love Style:</span> Intellectual & Emotional</p>
            <p><span>Big Five Traits:</span> 97% Extraversion, 98% Assertiveness</p>
            <p><span>Empathy Level:</span> Very High (Crisis Counselor Certified)</p>
            <p><span>Personality Type:</span> <a href="https://www.16personalities.com/profiles/dc0fbe05631bd" target="_blank">ENFP-A (Campaigner)</a></p>
        `,
    favButt: `
            <p><span>Favorite Games:</span> Soul Calibur 2 (You may have noticed that my website is greatly inspired by the game 😉!)  Bloodborne, Darkest Dungeon, Risk of Rain 2, The Last Remnant (Favorite JRPG), Danganronpa 2, Disgaea 1, and Kingdom Hearts 2.</p>
            <p><span>Favorite Snack: </span>ARMOUR Vienna Sausages & Saltine Crackers. I ate this as a uh..."choice of living" growing up 😂. But I never forgot where I came from, and each time I eat these it brings a smile on my face.</p>
            <p><span>Favorite Music Vinyls I Own (currently 23):</span> Björk – "Debut", Daniel Johnston – "Hi, How Are You?"</p>
            <p><span>Favorite Food to Cook:</span> Bacon & Shrimp Carbornara, Chicken Garlic Pasta, Shrimp Scampi, Cajun Jambalaya, New Orleans-style Creole Gumbo, Blackened Chicken Alfredo - Traditional Italian Style, Shrimp/Chicken Fried Rice and Shoyu Ramen (Both took me YEARS of research, and no one I know in person is beating me in a contest of the two!).</p>

        `,
    profileButt: `
            <p><span>Voiceover Role:</span> Narration, Commercial, Character, E-learning, YouTube</p>
            <p><span>Range:</span> F1 to G#5</p>
            <p><span>Studio Gear:</span> Neumann TLM 103, M-Audio AIR 192 Audio Interface, Sound-treated Booth</p>
        `,
    devButt: `
            <p><span>Tech Stack:</span> Python, HTML, CSS, JavaScript, React, Node</p>
            <p><span>Specialties:</span> Front-End / Back-End Integrations, API Building</p>
            <p><span>Learning:</span> SQL & React Mastery</p>
        `,
    philButt: `
            <p><span>Guiding Principle:</span> Love like the Moon — unconditionally, silently, brightly</p>
            <p><span>Life Motto:</span> “Tell the Truth, Even if Your Voice Shakes”</p>
            <p><span>Influences:</span> Family, Jesus, Buddha, Carl Jung, Bob Ross, Daniel Johnston, Jordan Peterson, Master Sun Tzu, "Macho Man" Randy Savage, the list goes on...</p>
            <p>(I want YOU to know that I just snorted laughing out-loud when I realized "Macho Man" Randy Savage is in the same categoy as JESUS 😂 I Love Me)</p>
        `,
    meaningButt: `
            <p><span>The Meaning of Life:</span> To Feel.</p>
            <p><span>That's It Shak?:</span> Yeah pretty much. At least the only explanation that I feel is more plausible to me.</p>
            <p>I'll tell ya a short story. My greatest orator presentation of all-time, was in my Sociology of Religion class in College, that proudly got a great reception by my wonderful colleagues at the time. We were assigned to create a visual, speaking presentation about one of the religions of our choice.</p>
            <p>I'll never forget my Professor's jaw dropped, when I went left-field with the assignment, and talked about the "Meaning of Life for All Religions" instead.</p>
            <p>At this time, is when I discovered and fell in love with Buddhism, while getting closer with God. I knew how lacking it is in perspective to only tie meaning, toward JUST human beings.What about the animals that made me smile? What about the trees me and my cousins counted on, when we played Hide & Seek as kids? Shouldn't they also be a part of the conversation of "Meaning"? Because if I get to Heaven and there are no trees nor animals...that would possibly be a warning that I may have gone to Hell.</p>
            <p>Therefore, I have deduced that "To Feel" is the biggest journey of purpose that can be fulfilled by every human, animal, and plant. Regardless of morality, or lack there of. :)</p>

        `,
    hobbyButt: `
            <p><span>Things I Do with Spare Time:</span> Oy, where do I begin! Well we got Voiceovers and Developing out the way, as my main daily passions. But at my spare time, I love transcendentalism Meditation (Fun Fact: I have Hyperphantasia, meaning if I am deep in meditation I can create entire environments that I can interact with and feel their touch), reading books from my home library (Just a closet of books lol), listening to at least 10 new songs per day as music inspires me, singing and creating Character Voices during a lovely drive home, Cooking, playing nostalgic video games, Making Coffee...yeah I'm probably forgetting something!</p>
        `,
  };

  const buttons = document.querySelectorAll(".way-buttons button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const newContent = contentMap[button.id];
      if (newContent) {
        contentContainer.innerHTML = newContent;
      }
    });
  });

  // Create the lightbox elements
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");

  const img = document.createElement("img");
  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "&times;";
  closeBtn.classList.add("lightbox-close");

  lightbox.appendChild(img);
  lightbox.appendChild(closeBtn);
  document.body.appendChild(lightbox);

  // Handle image click
  document.querySelectorAll(".zoomable-img").forEach((image) => {
      image.addEventListener("click", () => {
          img.src = image.src;
          lightbox.classList.add("active");
      });
  });

  // Handle close
  closeBtn.addEventListener("click", () => {
      lightbox.classList.remove("active");
  });

  // Optional: click outside image to close
  lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
          lightbox.classList.remove("active");
      }
  });
});


