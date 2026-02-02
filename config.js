// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
  valentineName: "Mana❤️",
  pageTitle: "Will You Be My Valentine? 💝",

  floatingEmojis: {
    hearts: ["❤️", "💖", "💝", "💗", "💓"],
    bears: ["🐶", "🦜"]
  },

  questions: {
    first: {
      text: "Do you like me?",
      yesBtn: "Yes",
      noBtn: "No",
      secretAnswer: "I don't like you, I love you! ❤️"
    },

    second: {
      text: "How much do you love me?",
      startText: "This much!",
      nextBtn: "Next ❤️"
    },

    third: {
      text: "Will you be my Valentine on February 14th, 2026? 🌹",
      yesBtn: "YES! 💚",
      noBtn: "No 💔",

      // ✅ NEW: NO button phrases
      noPhrases: [
        "Are you sure? 😳",
        "You’re kidding me… 🥺",
        "Think again, dear 💞",
        "Oh no way u cant keep click this?! 😤",
        "Okay please say yesss! 😭💚"
      ],

      // ✅ NEW: YES grows each NO click (stops when phrases finish)
      yesGrowStep: 0.18,
      yesMaxScale: 2.2
    }
  },

  loveMessages: {
    extreme: "WOOOOW You love me that much?? 🥰🚀💝",
    high: "To infinity and beyond! 🚀💝",
    normal: "And beyond! 🥰"
  },

  celebration: {
    title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
    message: "Can't wait to treat you, rio and pillie rani on14t !",
    emojis: "🎁💖🐶🦜🤗💝💋❤️💕"
  },

  colors: {
    backgroundStart: "#ffafbd",
    backgroundEnd: "#ffc3a0",
    buttonBackground: "#ff6b6b",
    buttonHover: "#ff8787",
    textColor: "#ff4757"
  },

  animations: {
    floatDuration: "15s",
    floatDistance: "50px",
    bounceSpeed: "0.5s",
    heartExplosionSize: 1.5
  },

  music: {
    enabled: true,
    autoplay: true,
    musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
    startText: "🎵 Play Music",
    stopText: "🔇 Stop Music",
    volume: 0.5
  }
};
