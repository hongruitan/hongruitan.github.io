window.onload = function () {
  function scrollToGameArea() {
    document.getElementById("game-area").scrollIntoView({ behavior: "smooth" });
  }

  document.getElementById("python-btn").addEventListener("click", function() {
    document.getElementById("game-area").innerHTML = `
      <h2>Target Practice🎯</h2>
      <p>A is to aim left. D is to aim right. SPACE is to shoot.I recommend using the keyboard but mobile is fine too.</p>
      <div style="position:relative;height:0;padding-bottom:117.6%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://arcade.makecode.com/---run?id=S55204-94687-05501-47452" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe></div>
    `;
    scrollToGameArea();
  });

  document.getElementById("js-btn").addEventListener("click", function () {
    document.getElementById("game-area").innerHTML = `
      <h2>Dunk Game🏀</h2>
      <p>Guess the word by typing letters:</p>
      <div style="position:relative;height:0;padding-bottom:117.6%;overflow:hidden;"><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://arcade.makecode.com/---run?id=S40837-71818-80103-81413" allowfullscreen="allowfullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin" frameborder="0"></iframe></div>
    `;

    scrollToGameArea();
  });
}
