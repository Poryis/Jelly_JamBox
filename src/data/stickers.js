// Sticker definitions for the Jellybones Sticker Book.
// All stickers are driven by in-app events; 100% local (localStorage).

export const STICKER_CATEGORIES = [
  { id: 'characters', label: 'Meet the Band' },
  { id: 'instruments', label: 'Instruments' },
  { id: 'bells', label: 'Jellybells' },
  { id: 'songs', label: 'Song Champion' },
  { id: 'achievements', label: 'Achievements' },
];

export const STICKERS = [
  // ---- Characters ----
  { id: 'char_finn',      name: 'Finn',            category: 'characters', icon: `${process.env.PUBLIC_URL}/assets/characters/finn-danger.png`,     color: '#FF3B30', hint: 'Meet Finn on the home page' },
  { id: 'char_charlie',   name: 'Charlie',         category: 'characters', icon: `${process.env.PUBLIC_URL}/assets/characters/charlie-polliwog.png`, color: '#34A853', hint: 'Meet Charlie on the home page' },
  { id: 'char_chunk',     name: 'Chunk',           category: 'characters', icon: `${process.env.PUBLIC_URL}/assets/characters/chunk.png`,           color: '#9B59B6', hint: 'Meet Chunk on the home page' },
  { id: 'char_jazzy',     name: 'Jazzy',           category: 'characters', icon: `${process.env.PUBLIC_URL}/assets/characters/jazzy.png`,           color: '#FF9500', hint: 'Meet Jazzy on the home page' },
  { id: 'char_doctor',    name: 'Dr. Jellybone',   category: 'characters', icon: `${process.env.PUBLIC_URL}/assets/characters/dr-jellybone.png`,   color: '#4285F4', hint: 'Meet Dr. Jellybone on the home page' },
  { id: 'char_loustew',   name: 'Lou & Stew',      category: 'characters', icon: `${process.env.PUBLIC_URL}/assets/characters/lou-stew.png`,        color: '#AF52DE', hint: 'Meet Lou & Stew on the home page' },

  // ---- Instruments ----
  { id: 'inst_bells',     name: 'Jelly Bells',     category: 'instruments', icon: `${process.env.PUBLIC_URL}/assets/bells/C 1.png`,                color: '#FF3B30', hint: 'Play the Jelly Bells in Free Play' },
  { id: 'inst_xylo',      name: 'Xylophone',       category: 'instruments', icon: `${process.env.PUBLIC_URL}/assets/bells/G 1.png`,                color: '#34A853', hint: 'Play the Xylophone in Free Play' },
  { id: 'inst_piano',     name: 'Piano',           category: 'instruments', icon: `${process.env.PUBLIC_URL}/assets/bells/A 1.png`,                color: '#4285F4', hint: 'Play the Piano in Free Play' },
  { id: 'inst_drums',     name: 'Drum Kit',        category: 'instruments', icon: `${process.env.PUBLIC_URL}/assets/drums/Snare 1.png`,            color: '#E74C3C', hint: 'Play the Drums in Free Play' },

  // ---- Jellybells ----
  { id: 'bell_C',         name: 'Do',              category: 'bells', icon: `${process.env.PUBLIC_URL}/assets/bells/C 2.png`,            color: '#FF3B30', hint: 'Play Do (key 1)' },
  { id: 'bell_D',         name: 'Re',              category: 'bells', icon: `${process.env.PUBLIC_URL}/assets/bells/D 2.png`,            color: '#FF9500', hint: 'Play Re (key 2)' },
  { id: 'bell_E',         name: 'Mi',              category: 'bells', icon: `${process.env.PUBLIC_URL}/assets/bells/E 2.png`,            color: '#FFCC00', hint: 'Play Mi (key 3)' },
  { id: 'bell_F',         name: 'Fa',              category: 'bells', icon: `${process.env.PUBLIC_URL}/assets/bells/F 2.png`,            color: '#4CD964', hint: 'Play Fa (key 4)' },
  { id: 'bell_G',         name: 'So',              category: 'bells', icon: `${process.env.PUBLIC_URL}/assets/bells/G 2.png`,            color: '#34A853', hint: 'Play So (key 5)' },
  { id: 'bell_A',         name: 'La',              category: 'bells', icon: `${process.env.PUBLIC_URL}/assets/bells/A 2.png`,            color: '#4285F4', hint: 'Play La (key 6)' },
  { id: 'bell_B',         name: 'Ti',              category: 'bells', icon: `${process.env.PUBLIC_URL}/assets/bells/B 2.png`,            color: '#AF52DE', hint: 'Play Ti (key 7)' },
  { id: 'bell_HC',        name: 'High Do',         category: 'bells', icon: `${process.env.PUBLIC_URL}/assets/bells/C 2.png`,            color: '#FF2D55', hint: 'Play High Do (key 8)' },

  // ---- Songs ----
  { id: 'song_twinkle',        name: 'Twinkle Twinkle',   category: 'songs', icon: `${process.env.PUBLIC_URL}/assets/bells/C 1.png`,   color: '#FFCC00', hint: 'Complete Twinkle Twinkle' },
  { id: 'song_mary',           name: 'Mary Had a Lamb',   category: 'songs', icon: `${process.env.PUBLIC_URL}/assets/bells/E 1.png`,   color: '#4CD964', hint: 'Complete Mary Had a Lamb' },
  { id: 'song_hot_cross',      name: 'Hot Cross Buns',    category: 'songs', icon: `${process.env.PUBLIC_URL}/assets/bells/E 1.png`,   color: '#FF9500', hint: 'Complete Hot Cross Buns' },
  { id: 'song_row_boat',       name: 'Row Your Boat',     category: 'songs', icon: `${process.env.PUBLIC_URL}/assets/bells/G 1.png`,   color: '#34A853', hint: 'Complete Row Your Boat' },
  { id: 'song_old_macdonald',  name: 'Old MacDonald',     category: 'songs', icon: `${process.env.PUBLIC_URL}/assets/bells/A 1.png`,   color: '#4285F4', hint: 'Complete Old MacDonald' },
  { id: 'song_jingle_bells',   name: 'Jingle Bells',      category: 'songs', icon: `${process.env.PUBLIC_URL}/assets/bells/B 1.png`,   color: '#AF52DE', hint: 'Complete Jingle Bells' },
  { id: 'song_ode_joy',        name: 'Ode to Joy',        category: 'songs', icon: `${process.env.PUBLIC_URL}/assets/bells/E 1.png`,   color: '#FFCC00', hint: 'Complete Ode to Joy' },
  { id: 'song_happy_birthday', name: 'Happy Birthday',    category: 'songs', icon: `${process.env.PUBLIC_URL}/assets/bells/G 1.png`,   color: '#FF3B30', hint: 'Complete Happy Birthday' },
  { id: 'song_when_saints',    name: 'When the Saints',   category: 'songs', icon: `${process.env.PUBLIC_URL}/assets/bells/C 1.png`,   color: '#FF9500', hint: 'Complete When the Saints' },
  { id: 'song_amazing_grace',  name: 'Amazing Grace',     category: 'songs', icon: `${process.env.PUBLIC_URL}/assets/bells/F 1.png`,   color: '#4CD964', hint: 'Complete Amazing Grace' },
  { id: 'song_london_bridge',  name: 'London Bridge',     category: 'songs', icon: `${process.env.PUBLIC_URL}/assets/bells/G 1.png`,   color: '#4285F4', hint: 'Complete London Bridge' },
  { id: 'song_itsy_bitsy',     name: 'Itsy Bitsy Spider', category: 'songs', icon: `${process.env.PUBLIC_URL}/assets/bells/D 1.png`,   color: '#AF52DE', hint: 'Complete Itsy Bitsy Spider' },

  // ---- Achievements ----
  { id: 'ach_first_note',    name: 'First Note!',        category: 'achievements', icon: `${process.env.PUBLIC_URL}/assets/characters/finn-danger.png`,     color: '#FFCC00', hint: 'Play your very first note' },
  { id: 'ach_one_kid_band',  name: 'One-Kid Band',       category: 'achievements', icon: `${process.env.PUBLIC_URL}/assets/characters/chunk.png`,           color: '#9B59B6', hint: 'Play all 4 instruments in Free Play' },
  { id: 'ach_streak_10',     name: 'Streak of 10!',      category: 'achievements', icon: `${process.env.PUBLIC_URL}/assets/characters/jazzy.png`,           color: '#FF9500', hint: 'Hit 10 notes in a row' },
  { id: 'ach_streak_25',     name: 'Streak of 25!',      category: 'achievements', icon: `${process.env.PUBLIC_URL}/assets/characters/jazzy.png`,           color: '#FF3B30', hint: 'Hit 25 notes in a row' },
  { id: 'ach_simon_5',       name: 'Super Ear',          category: 'achievements', icon: `${process.env.PUBLIC_URL}/assets/characters/dr-jellybone.png`,     color: '#4285F4', hint: 'Beat level 5 in Simon Says' },
  { id: 'ach_ear_trainer',   name: 'Golden Ears',        category: 'achievements', icon: `${process.env.PUBLIC_URL}/assets/characters/dr-jellybone.png`,     color: '#FFCC00', hint: 'Score 5 correct in Ear Trainer' },
  { id: 'ach_beat_maker',    name: 'Beat Maker',         category: 'achievements', icon: `${process.env.PUBLIC_URL}/assets/characters/chunk.png`,           color: '#E74C3C', hint: 'Play a loop in Loop Studio' },
  { id: 'ach_song_5',        name: 'Song Collector',     category: 'achievements', icon: `${process.env.PUBLIC_URL}/assets/characters/charlie-polliwog.png`, color: '#34A853', hint: 'Complete 5 songs in Rhythm Game' },
  { id: 'ach_fact_finder',   name: 'Fact Finder',        category: 'achievements', icon: `${process.env.PUBLIC_URL}/assets/characters/dr-jellybone.png`,     color: '#AF52DE', hint: 'Learn 10 music facts on the home page' },
];

export const STICKER_MAP = Object.fromEntries(STICKERS.map(s => [s.id, s]));