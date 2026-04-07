// ----------------------
// SCORE TRACKER
// ----------------------
let scores = {
  diamond: 0,
  star: 0,
  triangle: 0,
  square: 0
};

// ----------------------
// QUESTION BANK (15)
// ----------------------
const questions = [
  {
    question: "There are fewer tools than villagers available for the harvest work that needs to be completed.",
    answers: [
      {
        text: "Share the tools",
        effects: { square: 1, star: 1 }
      },
      {
        text: "Create a rotation so everyone gets a turn",
        effects: { square: 1, triangle: 1 }
      },
      {
        text: "Discuss how the tools can be distributed efficiently",
        effects: { triangle: 2, star: -1, square: -1 }
      }
    ]
  },
  {
    question: "For the day, your team lead asks you to fill in and guide the agenda for the day.",
    answers: [
      {
        text: "Organize and create tasks based on people’s strength",
        effects: { diamond: 1, star: 1 }
      },
      {
        text: "Listen to everyone’s ideas/wants and adapt from there",
        effects: { square: 1, triangle: -1, diamond: 1 }
      }
    ]
  },
  {
  question: "One of your teammates arrive very late to a  harvesting session that is already almost completed by the team.",
  answers: [
    {
      text: "Explain to them what has already been done",
      effects: { square: 1 }
    },
    {
      text: "Give them a new task to keep them busy",
      effects: { square: -1, triangle: -1, diamond: 1, star: 1 }
    }
  ]
  },
  {
  question: "While working together to repair the irrigation system, one of the channels collapses and water starts to flow in the wrong direction.",
  answers: [
    {
      text: "Take a step back and reassess the situation",
      effects: { triangle: -1, star: 1 }
    },
    {
      text: "Adapt to the situation and stick to your original goal",
      effects: { square: -1, triangle: -1 }
    },
    {
      text: "Ask the team for ideas and improvise as you go",
      effects: { triangle: 1, star: -1 }
    }
  ]
  },
  {
  question: "Two villagers argue over who should have the tractor.",
  answers: [
    {
      text: "Let them figure it out on their own",
      effects: { diamond: -1 }
    },
    {
      text: "Divert their attention and make them laugh",
      effects: { square: 1, triangle: -1 }
    },
    {
      text: "Be the mediator and offer a suggestion for resulotion",
      effects: { square: 1 }
    },
    {
      text: "Take the tractor for yourself",
      effects: { star: 1 }
    }
  ]
  },
  {
  question: "Just as you arrive at the festival, your team sends word that there’s still important work that needs to be finished.",
  answers: [
    {
      text: "Take a quick look but plan to respond later",
      effects: { triangle: -1 }
    },
    {
      text: "Respond to the note but continue attending your event",
      effects: { triangle: -1 }
    },
    {
      text: "Leave to go to work with them in person right away",
      effects: { triangle: -1, star: 1 }
    }
  ]
  },
  {
  question: "You’re organizing rows of herbs but your helpers are getting distracted and moving slowly through their tasks.",
  answers: [
    {
      text: "Gently remind them to work on their tasks",
      effects: { diamond: 1, square: -1 }
    },
    {
      text: "Let them have fun and trust productivity will follow",
      effects: { diamond: -1, square: 1 }
    },
    {
      text: "Approach based on the vibe and get them back to work",
      effects: { triangle: -1, star: -1 }
    }
  ]
  },
  {
  question: "Rules say not to cross marked paths to protect delicate plants, however, a teammate gets their foot stuck outside the paths.",
  answers: [
    {
      text: "Go and help them yourself",
      effects: { star: 1, square: -1 }
    },
    {
      text: "Call for external help",
      effects: { star: 1, triangle: -1 }
    },
    {
      text: "Consult your friends before taking any action",
      effects: { triangle: 1, star: -1, diamond: 1 }
    }
  ]
  },
  {
  question: "You have an important planting meeting coming up, but a teammate delivers a message that they won’t be able to make it at the last minute.",
  answers: [
    {
      text: "Reschedule for when all the members are available",
      effects: { star: -1, square: 1 }
    },
    {
      text: "Have a meeting but scribe a letter of notes  for them",
      effects: { square: -1, triangle: 1 }
    },
    {
      text: "Try to reschedule it for a time when they are available",
      effects: { square: 1, star: -1 }
    }
  ]
  },
  {
  question: "As you’re monitoring the water system at night, the flow of water stops. Without it the surrounding crops could quickly wither.",
  answers: [
    {
      text: "Start strategically thinking of solutions to fix it on your own",
      effects: { star: -1, triangle: 1 }
    },
    {
      text: "Wait for the morning shift to figure it out the next day.",
      effects: { star: -1 }
    },
    {
      text: "Try to make the water flow through trial and error",
      effects: { square: -1, star: 1, triangle: -1 }
    },
    {
      text: "Go to anyone available nearby and ask for help",
      effects: { triangle: -1, star: 1 }
    }
  ]
  },
  {
  question: "Two villagers strongly disagree on the best way to rebuild the damaged bridge and they ask you for your opinion.",
  answers: [
    {
      text: "Tell them to leave you out of it",
      effects: { diamond: 1, star: 1 }
    },
    {
      text: "Ask both to pitch their strategies to you",
      effects: { square: -1, star: -1, triangle: -1, diamond: -1 }
    },
    {
      text: "Suggest them to compromise ",
      effects: { square: 1, diamond: 1, triangle: -1 }
    },
    {
      text: "Give a new strategy idea  that marries two of their ideas",
      effects: { triangle: 1, diamond: 1, square: 1 }
    }
  ]
  },
  {
  question: "On the boat, another villager openly criticizes your safety precautions in front of everyone.",
  answers: [
    {
      text: "Jot down their feedback to refine the rules later",
      effects: { star: -1, triangle: 1, diamond: -1 }
    },
    {
      text: "Give a reasonable explanation for the precautions taken",
      effects: { star: 1, diamond: 1 }
    },
    {
      text: "Smile and nod",
      effects: { star: 1 }
    }
  ]
  }
];

// ----------------------
// SHUFFLE FUNCTION
// ----------------------
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

let shuffledQuestions = shuffle([...questions]);
let currentQuestionIndex = 0;

// ----------------------
// SHOW QUESTION
// ----------------------
function showQuestion() {
  const q = shuffledQuestions[currentQuestionIndex];

  document.getElementById("question").textContent = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;

    btn.onclick = () => selectAnswer(answer.effects);

    answersDiv.appendChild(btn);
  });
}

// ----------------------
// HANDLE ANSWER
// ----------------------
function selectAnswer(effects) {
  for (let type in effects) {
    scores[type] += effects[type];
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    const result = calculateArchetype(scores);
    showResult(result);
  }
}

// ----------------------
// CALCULATE ARCHETYPE
// ----------------------
function calculateArchetype(scores) {

  // DRIVER (high star + diamond, low others)
  if (
    scores.star > 0 &&
    scores.diamond > 0 &&
    scores.triangle <= 0 &&
    scores.square <= 0
  ) {
    return "driver";
  }

  // SUPPORTER (high triangle + square, low others)
  if (
    scores.triangle > 0 &&
    scores.square > 0 &&
    scores.star <= 0 &&
    scores.diamond <= 0
  ) {
    return "supporter";
  }

  // MOTIVATOR (high star + diamond + square)
  if (
    scores.star > 0 &&
    scores.diamond > 0 &&
    scores.square > 0
  ) {
    return "motivator";
  }

  // STRATEGIST (balanced but triangle strong)
  if (
    scores.triangle > 0 &&
    scores.diamond > 0 &&
    scores.star > 0
  ) {
    return "strategist";
  }
  // Fallback (if nothing matches)
  return "supporter";
}

function retakeQuiz() {
  location.reload();
}

function saveImage() {
  const img = document.getElementById("result-image");

  const link = document.createElement("a");
  link.href = img.src;
  link.download = "my-archetype.png";

  link.click();
}

// ----------------------
// SHOW RESULT
// ----------------------
function showResult(result) {
  const archetypes = {
    driver: {
      title: "The Driver",
      img: "images/drivercard.png"
    },
    strategist: {
      title: "The Strategist",
      img: "images/strategistcard.png"
    },
    motivator: {
      title: "The Motivator",
      img: "images/motivatorcard.png"
    },
    supporter: {
      title: "The Supporter",
      img: "images/supportercard.png"
    },
    balanced: {
      title: "Balanced Soul",
      img: "images/balanced.png"
    }
  };

  const chosen = archetypes[result];

  document.getElementById("quiz").innerHTML = `
    <div class="result-screen">
      <img id="result-image" src="${chosen.img}" alt="Result">

      <div class="result-buttons">
        <button onclick="saveImage()">Save Image</button>
        <button onclick="retakeQuiz()">Retake Quiz</button>
      </div>
    </div>
  `;
}

// ----------------------
// START QUIZ
// ----------------------
showQuestion();
