export const vQuotes = {
  initial: {
    id: 0,
    lines: [
      "hello my name is v"
    ],
  },
  unlock: {
    id: 1,
    lines: [
      "hi",
      "what took you so long",
      "oh well",
      "idc really",
    ],
  },
  realityEnter: {
    id: 2,
    lines: [
      "ba",
    ],
  },
  realityComplete: {
    id: 3,
    lines: [
      "ae ligature",
    ],
  },
  achievement1: {
    id: 4,
    requirement: () => V.spaceTheorems >= 1,
    lines: [
      "e",
      "that took you a while",
      "i wonder why",
    ],
  },
  achievement6: {
    id: 5,
    requirement: () => V.spaceTheorems >= 6,
    lines: [
      "it's only one",
      "idrc",
    ],
  },
  hex1: {
    id: 6,
    requirement: () => player.celestials.v.runUnlocks.filter(a => a === 6).length >= 1,
    lines: [
      "truly a gray moment",
      "is there a reason to cheer",
    ],
  },
  achievement12: {
    id: 7,
    requirement: () => effarig.relicshards >= 1e30,
    lines: [
      "Ning thinking king in irving, wings in birding. Is liking birding. Is lying king. Is ling birding. I is liking birding and lying king. Is a misspelling of 'king in birding, I am interested in birding. I am not a king or lying. I like birding and am interested in it. It is not a lie.",
    ],
  },
  achievement24: {
    id: 8,
    requirement: () => V.spaceTheorems >= 24,
    lines: [
      "go get the 9th dimension instead",
    ],
  },
  hex3: {
    id: 9,
    requirement: () => player.celestials.v.runUnlocks.filter(a => a === 6).length >= 3,
    lines: [
      "at least you can hop in on on",
    ],
  },
  allAchievements: {
    id: 10,
    requirement: () => V.spaceTheorems >= 36,
    lines: [
      "rip",
    ],
  }
};
