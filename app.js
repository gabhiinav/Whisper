var text = [
  [
    "I'm just tired, that's all.",
    "Don't worry about me.",
    "Everything's okay.",
    "I'm good.",
    "I'm fine, really. Just a little overwhelmed.",
    "It's just one of those days.",
    "I need help.",
  ],
  [
    "Everything is awful.",
    "Every day feels like a battle I can't win.",
    "I can't escape this darkness.",
    "I'm invisible to everyone's care and attention.",
    "Everyone is friendly with each other, but not with me.",
    "My life feels like a meaningless void.",
    "Everything is so pointless.",
    "I am nothing.",
    "I don't think anyone will ever truly understand me.",
    "I can't do this any longer.",
    "I can't even remember when this all started.",
    "I can't stand feeling like this.",
    "I can't talk with anybody about this.",
    "I don't have any energy left.",
    "I don't want anyone to see me this way.",
    "I feel like giving up.",
    "I feel like I'm drowning.",
    "I'm silently begging for help, but no one seems to notice.",
    "I feel so alone.",
    "I despise who I've become.",
    "I hate myself.",
    "I hate my life.",
    "I hate myself.",
    "I have no one.",
    "I have no one to share my struggles with.",
    "I have nobody to talk to.",
    "I have to get up each morning and put on a show.",
    "Behind my smile, I'm a shattered mess on the inside.",
    "The thought of ending it all consumes my mind.",
    "I know nobody will ever understand me.",
    "I mean nothing to them.",
    "I need help.",
    "I need to vent.",
    "I only have friends when they need something from me.",
    "I want to die.",
    "I can't escape the feeling that I'm a disgrace.",
    "I'm a failure.",
    "I'm convinced that I'm a complete and utter loser.",
    "I'm digging myself deeper into the pit of depression.",
    "I'm in constant pain.",
    "I'm losing hope each day.",
    "I'm miserable.",
    "I'm not fine.",
    "I'm not okay.",
    "I'm so confused.",
    "I'm hopeless.",
    "I'm so scared.",
    "I'm tired of pretending.",
    "I'm so weak.",
    "I'm tired of feeling this way.",
    "I'm ugly.",
    "I'm unfriendly, and nobody likes me.",
    "I'm weak.",
    "It feels like nothing matters anymore.",
    "It hurts to feel this way.",
    "I'm a wreck inside.",
    "It's just terrible.",
    "It's just horrible.",
    "It's so hard.",
    "Can't find my way out.",
    "My life is meaningless.",
    "So-called 'friends' only reach out when they need something.",
    "My family probably hates me.",
    "Nobody understands.",
    "Alone in a crowded room.",
    "No light at the end.",
    "Silently falling apart.",
    "Nothing fills the void.",
    "Wishing for a reset button",
    "There is so much heartache.",
    "When did it all go wrong?",
    "Why me?",
    "Will it ever get better?",
  ],
];

var message = function () {
    var span = document.createElement("span"),
      speed = Math.ceil(Math.random() * 4);

    if (Math.random() < 0.01) {
      span.appendChild(
        document.createTextNode(
          text[0][Math.floor(Math.random() * text[0].length)]
        )
      );
      span.className = "fake";
    } else
      span.appendChild(
        document.createTextNode(
          text[1][Math.floor(Math.random() * text[1].length)]
        )
      );
    document.body.appendChild(span);

    span.style.left = document.body.clientWidth + "px";
    span.style.top =
      Math.floor(
        Math.random() * (document.body.clientHeight - span.clientHeight)
      ) + "px";
    spans[speed].push(span);

    setTimeout(
      function () {
        requestAnimationFrame(message);
      },

      ((Math.random() * span.clientHeight) / document.body.clientHeight) * 50000
    );
  },
  scroll = function () {
    requestAnimationFrame(scroll);

    for (var speed = 1; speed < spans.length; speed++) {
      for (var x = 0; x < spans[speed].length; x++) {
        var left = parseInt(spans[speed][x].style.left, 10) - speed;
        spans[speed][x].style.left = left + "px";

        if (left == -1 * spans[speed][x].clientWidth) {
          document.body.removeChild(spans[speed][x]);

          for (y = x; y < spans[speed].length - 1; y++)
            spans[speed][y] = spans[speed][y + 1];
          spans[speed].pop();

          if (x < spans[speed].length - 1) x--;
        }
      }
    }
  },
  spans = [null, [], [], [], []];

message();
scroll();
