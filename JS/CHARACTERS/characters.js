const characters = {
  Beggar: {
    name: "Beggar",
    quotes: [
      "Please, may I have a smore?",
      "Alms, alms....",
      "Can you spare a coin for a vet'ren?",
      "Give to the gladiator recovery fund?",
      "Do I hear gold in your pockets?",
    ],
    thanks: [
      "Bless you...",
      "Thank you!",
      "Well that'll do I s'pose...",
      "Oh glory be!",
      "I won't spend it all at once!",
    ],
    reject: [
      "Is that so?",
      "Don't be a stingy skunk!",
      "You mis'ble bunk...",
      "I just wanted a coin!!",
      "Hmmphh.",
    ],
    gp: 0,
  },
  Monk: {
    name: "Monk",
    quotes: [
      "Rest is an excellent way to replenish your HP.",
      "A keen eye leaves no table unturned.",
      "Everything in moderation - especially the local mead!",
      "He who fights and runs away, can run away another day.",
      "Beware a wolf wearing sheep's wool...",
      "Even wise-men play the fool...",
    ],
  },
  Maid: {
    name: "Old Maid",
    quotes: [
      "I'm afraid I've lost my purse, I do hope no one picks it up....",
      "The forest isn't too scary, but beware the Witch's hut!",
      "Children often throw coins into the fountain...",
      "Did you know there's an island nearby?",
      "My son is a brave warrior.",
    ],
  },
  Soldier: {
    descrip: "Red Armored Character",
    name: "NOT Fighter",
    chat: [
      "I like swords!",
      "Welcome to the scary forest!",
      "Hey that was pretty good!",
    ],
    yes: ["I like swords!"],
    no: ["Well that's too bad.", "Then we're not friends.", "How dare you?"],
    hint: [
      "Explore everywhere!",
      "To beat the Giant takes some kind of magic...",
      "There's a temple atop the mountain.",
      "You earn gold for every match you win!",
      "Watch out for ambushes and traps!",
    ],
    yesCount: 0,
  },
  Shopkeep: {
    name: "Shopkeep",
    welcome: [
      "Hiya, welcome to muh shoppe",
      "Don' mind the mess, someone run off with muh broom!",
      "Durrned beggar hit me with a rock yesterday!",
      "Been to seen my brother at the armory?",
    ],
    quotes: [
      "If you don't got's it, we does!",
      "Whatchya in the market for?",
      "How can I help ya?",
      "Durrned beggar hit me with a rock yesterday!",
    ],
    thanks: [
      "That'll do ya nicely!",
      "You sure you know how to use that?",
      "Welp, coins is as coins does...",
      "That's the last of 'em!",
    ],
    reject: [
      "'Fraid not there, bub",
      "Why not spring for something cheaper?",
      "You sure are a stubborn one ain't ya?",
      "You can't afford that!",
    ],
    threat: [
      "Are you trying to insult me?",
      "No.",
      "If you keep this up, I'll kick you's out...",
      ".......",
    ],
    sales: [
      "Well what have we here?",
      "That's not too bad.",
      "You're not just pickin these off the street are ya?",
      "Say, where'd you find this one?",
    ],
    impress: [
      "You're getting the hang of this.",
      "Jeez kid, that's summat else...",
      "How. Just, how.",
      "**sniffles** I knew you were special the first time I laid my good eye on you...",
    ],
  },
  Armorer: {
    name: "Armorer",
    welcome: [
      "Can I help you?",
      "Watch your step!",
      "Hurry up, I've got to arm fighters at the battledome!!",
      "You seen my brother at the shop?",
    ],
    quotes: [
      "You can't wear out our wares.",
      "Weapons, armor...what more do you need?",
      "Don't get no blood on my goods.",
      "You been to the training quad yet?",
    ],
    thanks: [
      "Can you even lift that?",
      "That's bigger than you are!",
      "Think you're ready for the battledome?",
      "You're not a postal worker are you?",
    ],
    reject: [
      "Why don't you try this crap at my brother's shop.",
      "Are you cruel or ignorant?",
      "Nope.",
      "Need a few more coins.",
    ],
    threat: [
      "How dare you.",
      "Are you $%$%#^ kidding me?",
      "Try it again and I'll hit you with something bigger...",
      "Do you even know what that's worth?",
    ],
  },
  Bartender: { name: "Tavern Maid", quotes: ["", ""] },
  Drunk: { name: "Ol' Man Staggers", quotes: ["", ""] },
  Fisher: { name: "Fisher", quotes: ["", ""] },
  Merchant: { name: "Merchant", quotes: ["", ""] },
  Captain: {
    name: "Cap'n Crumbly",
    quotes: [
      "Just sit right back and you'll hear a tale...",
      "You can call me Ishmael",
      "It was the best of tides, it was the worst of tides",
      "Why is the rum gone?",
    ],
    threats: [
      "So we got a revolutionary, eh?!",
      "That was a wanton criminal!!!",
      "Have you any idea what you've done?",
      "Well matey, this is where you get off...",
    ],
  },
  Boatswain: {
    name: "Boatswain",
    quotes: [
      "We've never been lost at sea, but there's always a first time...",
      "I think I left my sea-legs on shore...",
      "Of course it's flat, I've seen the edge!!",
      "Why does everything smell like fish?",
    ],
  },
  Prisoner: {
    name: "Prisoner",
    quotes: [
      "Pssst, get me out of here!",
      "You wouldn't happen to have a spare key would ya?",
      "How would ya like to do me a favor?",
      "Are we there yet?",
    ],
    thanks: [
      "Oh bless you... Oh bless you!",
      "I thought for sure I was a gonner",
      "Oh miraculous day!",
      "Whoopee! I'm going to Vegas baby!",
    ],
    pleads: [
      "You can't just leave me... ",
      "Wait, please",
      "I beg of you, reconsider!",
    ],
    isFree: false,
  },
  Constable: {
    name: "Constable",
    quotes: [
      "I'll pay 75 coins per invader killed! Are you up for the challenge?",
      "So here's the deal, you kill an invader - you get 75 coins.",
      "Invaders are massing in the village outskirts! We've a large reward for whoever defeats them!",
      "Come see me when you've rid our village of the Invaders!",
    ],
    success: [
      "Wowie, I didn't think you'd actually do it...",
      "As promised, here ya go!",
      "You really did us a solid!!",
      "When you come back we'll throw you a party!",
    ],
    fear: [
      "You're not scared are ya?",
      "You don't like gold?",
      "You didn't look like the nervous type but ah well...",
      "I don't have time for games.",
      "Are you up for the challenge?",
    ],
    items: [{}],
  },
  Elder: {
    name: "Village Elder",
    quotes: [
      "Those invaders are a terrible nuisance",
      "Are you our brave young warrior?",
      "Please help us but do be careful!",
      "You must hurry!",
    ],
    gifts: [
      "Oh thank goodness, please, take this!",
      "This was my grandchild's... Please accept it with my thanks!",
      "Oh happy day! Please have this token of our appreciation!",
      "I know it is not much, but please have this!",
    ],
  },
  Shepherd: { name: "Shepherd", quotes: ["", ""], items: [{}] },
  GreatMonk: { name: "Hu", quotes: ["", ""], items: [] },
  Demon: {
    name: "Shiny Demon",
    quotes: [
      "Oooooh, I'm the deeeemon, ya'll!",
      "Imma fixin' to turn the heat up in this biyatch!",
      "Ooooohwee this reminds me of Miami in August!",
      "Lemme tell ya'll bout the time I went down to Georgia wid my cuzzind!!",
    ],
  },
  Lawyer: {
    name: "Karen DeVille",
    quotes: [
      "Hoooo-ah,somebody get me a bourbon.",
      "I can tell you're not in the best of places",
      "Need representation? Look no further than the Law Practices of DeVille (Esq) & Co.",
      "Say, you couldn't spot me a couple coins for the metro could ya?",
    ],
    hrsBilled: 0,
  },
  Crab: {
    name: "Crab-Man",
    quotes: [
      "The trouble with boats is how they floats.",
      "Where ya been?",
      "Where ya tryin ta get to?",
      "Ever get sand in your shell?",
    ],
  },
};

export { characters };
