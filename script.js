window.onload = function () {
  function scrollToGameArea() {
    document.getElementById("python-btn").addEventListener("click", function() {
      document.getElementById("game-area").innerHTML = `
        <h2>Target Practice🎯</h2>
        <p>A is to aim left. D is to aim right. SPACE is to shoot.</p>
        <div style="position:relative;height:0;padding-bottom:117.6%;overflow:hidden;">
          <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" 
            src="https://arcade.makecode.com/---run?id=S55204-94687-05501-47452" 
            allowfullscreen="allowfullscreen" 
            sandbox="allow-popups allow-forms allow-scripts allow-same-origin" 
            frameborder="0">
          </iframe>
        </div>
      `;
      scrollToGameArea();
    });

    document.getElementById("js-btn").addEventListener("click", function () {
      document.getElementById("game-area").innerHTML = `
        <h2>Dunk Game🏀</h2>
        <p>Guess the word by typing letters:</p>
        <div style="position:relative;height:0;padding-bottom:117.6%;overflow:hidden;">
          <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" 
            src="https://arcade.makecode.com/---run?id=S40837-71818-80103-81413" 
            allowfullscreen="allowfullscreen" 
            sandbox="allow-popups allow-forms allow-scripts allow-same-origin" 
            frameborder="0">
          </iframe>
        </div>
      `;
      scrollToGameArea();
    });
    document.getElementById("game-area").scrollIntoView({ behavior: "smooth" });
  }

  const usedFortunes = new Set();
  const fortunes = [
    "A great opportunity is just around the corner. 🌟🎯🚀💥✨",
    "You will soon meet someone who will change your life. ✨🤝🔮🌱💖",
    "Your hard work will soon pay off in unexpected ways. 💪💼🎉🔥🌟",
    "An exciting adventure is waiting for you. 🏞️✈️🌍🌟🎒",
    "Success is on its way, just keep going! 🏆🔥🚀🎯💪",
    "Good things come to those who wait. ⏳🍀🌱🌼🌟",
    "A surprising twist will lead to your victory. 🎲🎉💥🏆✨",
    "The next step you take will lead to greatness. 🏅🎯🌟🚀💪",
    "Prepare yourself for a moment of brilliance! 💡⚡✨🎯🌟",
    "A dream you’ve had will soon come true. 🌙✨🎆🚀💭",
    "You will find balance in a time of chaos. ⚖️🌪️🌈💥🌟",
    "Your creativity will open new doors. 🎨🗝️✨🌍🚪",
    "A new friendship will bring joy into your life. 👫💖🌟🤝🎉",
    "Your future is bright—don't doubt your path. 🌞🌟🌈🚀💫",
    "Great things are headed your way; stay patient. ⏳💖🌠🔥🌟",
    "An unexpected gift will bring happiness. 🎁😊🌟💝🎉",
    "Now is the perfect time to take a leap of faith. 🦋🌍🚀✨💫",
    "The answers you seek are closer than you think. 🔍🧠💡🔮🎯",
    "You will soon discover a hidden talent. 🎶🎨🌟🔥💡",
    "A positive change is coming to your life. 🌱💫🍀🌟🎉",
    "A wonderful opportunity is just around the corner. 🌟🚪🎉💫🗝️",
    "Be ready for a surprising twist in your journey. 🔄✨🎭🌠🎢",
    "Your kindness will come back to you tenfold. 💖🌻🤝🎁🌈",
    "Success is within your reach—keep going! 🏆🚀📈💪🌟",
    "Expect the unexpected—good things are on the way. 🎁🌟🎉🚀🌈",
    "A chance encounter will lead to something amazing. 👀💥✨🤝🌍",
    "You will discover new strength within yourself. 💪🔥🌱💫🛤️",
    "A new adventure will take you to places you've never dreamed of. ✈️🌍🏞️🛶🌟",
    "Your dreams are closer to becoming reality. 🌙💭🚀🌠✨",
    "A journey filled with laughter and joy awaits you. 🚶‍♂️😂🎉🌅💖"
  ];

  function getUniqueFortune() {
    if (usedFortunes.size === fortunes.length) {
      usedFortunes.clear(); // reset if all used
    }
    let fortune;
    do {
      fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    } while (usedFortunes.has(fortune));
    usedFortunes.add(fortune);
    return fortune;
  }

  document.getElementById("surprise-btn").addEventListener("click", function () {
    const fortune = getUniqueFortune();
    document.getElementById("game-area").innerHTML = `
      <h2>🔮Here is your fortune!🥠</h2>
      <p class="fortune-animated">${fortune}</p>
    `;
    scrollToGameArea();
  });
}
