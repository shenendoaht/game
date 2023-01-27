const enemies = {
  Dummy1: { name: "Dummy 1", hp: 8, str: 2, def: 3, ab: 1, alive: true },
  Dummy2: { name: "Dummy 2", hp: 10, str: 4, def: 3, ab: 2, alive: true },
  Dummy3: { name: "Dummy 3", hp: 15, str: 4, def: 3, ab: 2, alive: true },
  Orc: {
    name: "Orc",
    hp: 20,
    str: 5,
    def: 5,
    ab: 3,
    alive: true,
    chat: [
      "Imma enjoy this!!",
      "I hope you stretched today!",
      "Are you ready?!",
      "I don't plan ta go easy on ya...",
    ],
    hits: [
      "Oy, watch it!!",
      "That does it!!",
      "That wasn't very nice...",
      "Why you little -",
    ],
    miss: [
      "Ha! I like that!",
      "You're alright, not great, but alright.",
      "Oho, don't get cocky",
    ],
    dodge: [
      "You cheeky bugger!",
      "Try that again!!",
      "Oooh, tiny dancer!",
      "I'll get you next time!",
    ],
    taunt: [
      "Now you're in it!",
      "I'm letting the blood stay on the blade from this one",
      "Had enough yet?",
      "You thought you could do this.",
    ],
  },
  Goblin: {
    name: "Goblin",
    hp: 25,
    str: 10,
    def: 6,
    ab: 5,
    alive: true,
    chat: [
      "How'd you make it this far?!",
      "Imma turn you into fish food!",
      "That was lucky!",
      "You'll make a nice trophy!",
    ],
    hits: [
      "I don't like that!!",
      "Now I'm angry!!",
      "@#^$@&!!",
      "I let you hit me!",
    ],
    miss: [
      "You'll hafta try harder!!",
      "That was nearly nifty.",
      "You squirmy lil bugger.",
      "That was close!",
    ],
    dodge: [
      "Hold still!",
      "You little--",
      "**bawk bawk**",
      "C'mere and take your beating!!",
    ],
    taunt: [
      "Hope you brought a band-aid!!",
      "I knew you couldn't do it",
      "**laughing** that was too good.",
      "Stings don't it?",
    ],
  },
  Bandit: {
    name: "Bandit",
    hp: 25,
    str: 10,
    def: 6,
    ab: 5,
    alive: true,
    chat: [
      "And now for your REAL challenge!",
      "You've done alright, hope you're ready for this!",
      "I don't need no stinking trophy!",
      "No more wins for you!",
    ],
    hits: [
      "Not my fingers!!",
      "Jeez, that was unnecessary...",
      "Oooof....Alright.",
      "Why can't we be friends?",
    ],
    dodge: ["Almost!", "You're quicker than I expected.", "Nice parry!"],
    miss: [
      "Sorry mate, but a fights a fight.",
      "You're gonna want to put a lil ointment on that..",
      "Just give in already!",
      "Can I have your stuff if I win?",
    ],
    taunt: [
      "Ha ha! I've never lost!",
      "Didn't I warn you?",
      "Getting tired yet?",
      "You may as well quit while you have your head!",
    ],
  },
  Thief: {
    name: "Thief",
    hp: 25,
    str: 10,
    def: 6,
    ab: 10,
    alive: true,
    chat: [
      "Lovely weather for a walk, innit?",
      "'Scuse me, but I've got to rob ya.",
      "You look like the fancy type!",
      "I'm just gonna... 'borrow' it...",
    ],
    hits: [
      "Think you're quick?",
      "Alight already!",
      "I see you've done this before...",
      "I wasn't gonna hurt ya, honest!",
    ],
    dodge: ["Ha ha! Distraction!", "Nice pockets...", "You dropped something."],
    miss: [
      "I'll take that.",
      "What are you gonna do?",
      "Gee, you might not be cut out for this....",
      "How do you 'spect to get anywhere in this world?",
    ],
    taunt: [
      "Annnd a-one for me.",
      "Jeez, are you even trying?",
      "**YOINK**",
      "And another for me...",
    ],
  },
  Troll: {
    name: "Troll",
    hp: 30,
    str: 15,
    def: 7,
    ab: 5,
    alive: true,
    chat: [
      "Ooooh, a peoples!",
      "You gots to pay the troll-toll!",
      "Who goes there?",
      "What's your favorite color?",
    ],
    hits: [
      "Don't hurt me pleazze...",
      "If I say Uncle will ya leave me alone?",
      "Waaaaaaaahhhhhh, that's sharp.",
      "I'm gonna tell muh bruthor aboot ya!",
    ],
    dodge: [
      "Hey, that was good!",
      "Errrgh, I was tryin' ta hit you!",
      "Gah, slow down will ya?",
    ],
    miss: [
      "Squishy!!",
      "Can I keep you?!",
      "Ya make for a decent training dummy",
      "POP! Goes the warrior!",
    ],
    taunt: [
      "You alright?",
      "Sorry...",
      "Be careful! I'm not going easy!",
      "I'll make this quick!",
    ],
  },
  GuardOne: {
    name: "Guard One",
    hp: 20,
    str: 10,
    def: 7,
    ab: 5,
    alive: true,
    chat: [
      "Nice armor, pipsqueak.",
      "Is that even a real sword?",
      "**laughing** You're serious?",
      "Get on with it!",
    ],
    hits: [
      "You shouldn' a done that.",
      "You're just making it worse for yourself!",
      "Just give it back!",
      "What did you think would happen?",
    ],
    dodge: [
      "Grrrr!",
      "You're gonna get it!",
      "I can smell your fear...",
      "Try that again!",
    ],
    miss: [
      "Surrender!",
      "You're pretty tough, I'll give ya that...",
      "Final chance to walk away...",
      "M'lady is sure to be pleased with this.",
    ],
    taunt: [
      "Mwah-ha-ha- None can beat me!",
      "Is that the best you can do?",
      "I'll save some flowers for your grave..",
      "Have you any idea who I am?",
    ],
  },
  GuardTwo: {
    name: "Guard Two",
    hp: 20,
    str: 10,
    def: 7,
    ab: 5,
    alive: true,
    chat: [
      "You'll pay for that!",
      "Ready or not, here I come!",
      "Just try and get past me!",
      "Feeling lucky, punk?",
    ],
    hits: [
      "I've had it with you!",
      "That's fine, wenches dig scars.",
      "How bout we just go get some ale instead?",
      "It doesn't end with me, child.",
    ],
    dodge: [
      "Clever move.",
      "That'll do, kid, that'll do.",
      "What's all this then?",
      "How'd you do that?",
    ],
    miss: [
      "Any last words, runt?",
      "Go on, cry home to your ma!!",
      "Looks like you come all this way for nuthin.",
      "You gonna do something or just stand there and bleed?",
    ],
    taunt: [
      "Haha! Thought you were tough, eh?",
      "Can't best me.",
      "You're running out of time!",
      "Put some ice on it!",
    ],
  },
  Witch: {
    name: "Witch",
    hp: 30,
    str: 15,
    def: 15,
    ab: 8,
    alive: true,
    chat: [
      "You'll pay for your thievery!",
      "Give my potion back!!",
      "Did you not see the sign?!",
      "There's no escape!",
    ],
    hits: [
      "Ouch! You brat!",
      "Curse you!!",
      "What is this vile magic you wield?",
      "Noooo, it can't be!!",
    ],
    miss: [
      "Every lil fighter like you is just the same!",
      "You'll make such a nice throw-rug!!",
      "I'm gonna stuff you and hang you on my wall!!!",
      "You're weak.",
    ],
    dodge: [
      "You wretched creature!",
      "I'm gonna make sugary-tarts out of you!!",
      "I'll get you my precious!!",
      "Wheeeeee! Isn't this fun?!",
    ],
    taunt: ["So puny!", "Beg for mercy!!", "**cackling** ", "Any last words?"],
  },
  InvaderOne: {
    name: "Invader-One",
    hp: 40,
    str: 20,
    def: 10,
    ab: 7,
    chat: [
      "Never again!",
      "Who trained you?",
      "Take it easy!!",
      "That'll be the last time that happens!",
    ],
    hits: [
      "Never again!",
      "Who trained you?",
      "Take it easy!!",
      "That'll be the last time that happens!",
    ],
    dodge: [
      "Say your prayers.",
      "Did the Village People send you?",
      "Look at the little toughness!",
      "Well played, chump, well played.",
    ],
    miss: [
      "Nice sword, think I'll take it!",
      "Awww, did I scratch you?",
      "Watch you don't bleed on my armor!",
      "There's no stopping us!",
    ],
    taunt: [
      "Never again!",
      "Who trained you?",
      "Take it easy!!",
      "That'll be the last time that happens!",
    ],
    alive: true,
  },
  InvaderTwo: {
    name: "Invader-Two",
    hp: 40,
    str: 20,
    def: 10,
    ab: 7,
    chat: [
      "Never again!",
      "Who trained you?",
      "Take it easy!!",
      "That'll be the last time that happens!",
    ],
    hits: [
      "Hey this armor is brand new!",
      "Who put you up to this?",
      "Tis but a scratch!",
      "Cut that out!",
    ],
    dodge: [
      "I can go on all day!",
      "Try that again!",
      "I can smell your fear...",
      "Getting nervous?",
    ],
    miss: [
      "No one expects the Small-ish Inquisition!",
      "I've got you now!!",
      "Hope you've picked out a coffin!",
      "Give up yet?",
    ],
    taunt: [
      "Never again!",
      "Who trained you?",
      "Take it easy!!",
      "That'll be the last time that happens!",
    ],
    alive: true,
  },
  Golem: {
    name: "Golem",
    hp: 40,
    str: 20,
    def: 10,
    ab: 7,
    alive: true,
    hits: [
      "You're going to regret that!!",
      "**shrieks**",
      "You won't defeat me...",
      "You vile thing!",
    ],
    blocks: [
      "This isn't over",
      "We're only getting started...",
      "Quit dancing and hit me.",
    ],
    miss: [
      "Don't worry, I'll give you a nice burial...",
      "That's gonna leave a mark...",
      "The power is mine, you cannot win.",
      "I can nearly taste my victory.",
    ],
  },
  Minotaur: {
    name: "Minotaur",
    hp: 60,
    str: 30,
    def: 15,
    ab: 7,
    alive: true,
    hits: [
      "**SNORTS** RAAARRRR!!!",
      "What the--",
      "Oh so it's like that, eh?",
      "How did that happen?",
    ],
    blocks: [
      "You're a bit tougher than the others...",
      "Feisty lil pipsqueak!!",
      "Hold still damn you!",
    ],
    miss: [
      "Yes, take that!!",
      "Aww, did I scratch you?",
      "This is where you die.",
      "Don't struggle, it'll only make it worse.",
    ],
  },
  Gladiator: {
    name: "Gladiator",
    hp: 60,
    str: 30,
    def: 15,
    ab: 9,
    alive: true,
    hits: [
      "I'll see you in Elysium!!",
      "If you strike me down I shall become more powerful....",
      "Wait, not like this!",
      "Gahhhhhhhh!!!",
    ],
    blocks: [
      "Good one!",
      "I like a good challenge!",
      "I'll get you next time...",
    ],
    miss: [
      "Are you not entertained?",
      "Only a fool would challenge me!",
      "I've won already, can't you see?",
      "Such a violent sport, this.",
    ],
  },
  Knight: { name: "Knight", hp: 80, str: 40, def: 20, ab: 10, alive: true },
  Berserker: {
    name: "Berserker",
    hp: 80,
    str: 40,
    def: 20,
    ab: 10,
    alive: true,
    hits: [
      "You can have my sword when you pry it from my cold dead gauntlet.",
      "The sun got in my eyes!",
      "I'm not dead yet!",
      "Cut that out!!",
    ],
    blocks: [
      "En garde!!",
      "Skrell-neck",
      "My love for you is like a truck BERSERKER!",
      "I am undefeatable!",
    ],
    miss: [
      "**METAL FACE**",
      "You're not even trying!",
      "Yeeesh, I almost feel bad about this...",
      "Maybe you should try a different game?",
    ],
  },
  Guardian: {
    name: "Guardian",
    hp: 100,
    str: 50,
    def: 20,
    ab: 10,
    alive: true,
    hits: [
      "Please don't strike me, friend.",
      "This barbarism won't stand.",
      "These were my nice robes...",
      "What did I do to wrong thee, friend?",
    ],
    blocks: [
      "We need not quarrell, friend.",
      "Who taught you?",
      "This is getting us nowhere.",
    ],
    miss: [
      "You brought this upon yourself.",
      "This could have been avoided.",
      "It only gets worse from here...",
      "So much for the nice way.",
    ],
  },
  Giant: {
    name: "Giant",
    hp: 120,
    str: 60,
    def: 40,
    ab: 20,
    alive: true,
    hits: [
      "Fee-fi-fo-floop, when you hit me it make's me have to poop. ",
      "Fi-fomo-fugly-fee, go chase yourself up a tree ",
      "Frickle-frackle-fiddle-fix, like your sword you're a little prick",
      "Fee-fush-fo-fam, that made an ouch-y on my hand.",
    ],
    blocks: [
      "Fee-fi-fo-fiddle, I'm gonna tear you down the middle!",
      "Fee-fi-fo-farm, I'm gonna rip off both your arms",
      "Fee-frum-fiddle-fi, I'm gonna squish you",
    ],
    miss: [
      "Fee-Fi-Fo-Fum, I'll try to make this painless, chum.",
      "Fee-fumble-frisky-fore, I kinda thought you'd hit me more.",
      "Fee-fop-fogo-floo, you have a sword and I do too! ",
      "Fee-frizbee-forty-flan, I smell the blood of whatever nationality-gendered-person you consider yourself",
    ],
  },
};
export { enemies };