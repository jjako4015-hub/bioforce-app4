// constants/profiles.ts
import { ProfileConfig } from '../types/bioforce';

export const PROFILES: Record<string, ProfileConfig> = {
  'demon-slayer': {
    id: 'demon-slayer',
    name: 'Demon Slayer',
    icon: '🗡️',
    ranks: [
      { level: 1, rank: 'Beginner', character: 'Tanjiro', requiredXp: 0, modelPath: '/models/characters/demon-slayer/tanjiro.glb' },
      { level: 2, rank: 'Rookie', character: 'Zenitsu', requiredXp: 500, modelPath: '/models/characters/demon-slayer/zenitsu.glb' },
      { level: 3, rank: 'Fighter', character: 'Inosuke', requiredXp: 1200, modelPath: '/models/characters/demon-slayer/inosuke.glb' },
      { level: 4, rank: 'Elite', character: 'Rengoku', requiredXp: 2200, modelPath: '/models/characters/demon-slayer/rengoku.glb' },
      { level: 5, rank: 'Hashira', character: 'Giyu', requiredXp: 3500, modelPath: '/models/characters/demon-slayer/giyu.glb' },
      { level: 6, rank: 'Legend', character: 'Yoriichi', requiredXp: 5000, modelPath: '/models/characters/demon-slayer/yoriichi.glb' }
    ]
  },
  'one-piece': {
    id: 'one-piece',
    name: 'One Piece',
    icon: '🏴‍☠️',
    ranks: [
      { level: 1, rank: 'Beginner', character: 'Usopp', requiredXp: 0, modelPath: '/models/characters/one-piece/usopp.glb' },
      { level: 2, rank: 'Rookie', character: 'Nami', requiredXp: 500, modelPath: '/models/characters/one-piece/nami.glb' },
      { level: 3, rank: 'Fighter', character: 'Sanji', requiredXp: 1200, modelPath: '/models/characters/one-piece/sanji.glb' },
      { level: 4, rank: 'Elite', character: 'Zoro', requiredXp: 2200, modelPath: '/models/characters/one-piece/zoro.glb' },
      { level: 5, rank: 'Captain', character: 'Luffy', requiredXp: 3500, modelPath: '/models/characters/one-piece/luffy.glb' },
      { level: 6, rank: 'Legend', character: 'Gear 5 Luffy', requiredXp: 5000, modelPath: '/models/characters/one-piece/gear5-luffy.glb' }
    ]
  },
  'mha': {
    id: 'mha',
    name: 'My Hero Academia',
    icon: '👊',
    ranks: [
      { level: 1, rank: 'Beginner', character: 'Deku', requiredXp: 0, modelPath: '/models/characters/mha/deku.glb' },
      { level: 2, rank: 'Rookie', character: 'Bakugo', requiredXp: 500, modelPath: '/models/characters/mha/bakugo.glb' },
      { level: 3, rank: 'Hero', character: 'Todoroki', requiredXp: 1200, modelPath: '/models/characters/mha/todoroki.glb' },
      { level: 4, rank: 'Elite', character: 'Endeavor', requiredXp: 2200, modelPath: '/models/characters/mha/endeavor.glb' },
      { level: 5, rank: 'Pro Hero', character: 'All Might', requiredXp: 3500, modelPath: '/models/characters/mha/allmight.glb' },
      { level: 6, rank: 'Legend', character: 'Deku 100%', requiredXp: 5000, modelPath: '/models/characters/mha/deku100.glb' }
    ]
  },
  'dr-stone': {
    id: 'dr-stone',
    name: 'Dr. Stone',
    icon: '🧪',
    ranks: [
      { level: 1, rank: 'Beginner', character: 'Chrome', requiredXp: 0, modelPath: '/models/characters/dr-stone/chrome.glb' },
      { level: 2, rank: 'Learner', character: 'Suika', requiredXp: 500, modelPath: '/models/characters/dr-stone/suika.glb' },
      { level: 3, rank: 'Scientist', character: 'Senku', requiredXp: 1200, modelPath: '/models/characters/dr-stone/senku.glb' },
      { level: 4, rank: 'Inventor', character: 'Kaseki', requiredXp: 2200, modelPath: '/models/characters/dr-stone/kaseki.glb' },
      { level: 5, rank: 'Genius', character: 'Senku (Genius)', requiredXp: 3500, modelPath: '/models/characters/dr-stone/senku-genius.glb' },
      { level: 6, rank: 'Science Master', character: 'Kingdom of Science', requiredXp: 5000, modelPath: '/models/characters/dr-stone/kingdom.glb' }
    ]
  },
  'marvel': {
    id: 'marvel',
    name: 'Marvel',
    icon: '🛡️',
    ranks: [
      { level: 1, rank: 'Beginner', character: 'Spider-Man', requiredXp: 0, modelPath: '/models/characters/marvel/spiderman.glb' },
      { level: 2, rank: 'Rookie', character: 'Captain America', requiredXp: 500, modelPath: '/models/characters/marvel/captain-america.glb' },
      { level: 3, rank: 'Hero', character: 'Iron Man', requiredXp: 1200, modelPath: '/models/characters/marvel/iron-man.glb' },
      { level: 4, rank: 'Elite', character: 'Thor', requiredXp: 2200, modelPath: '/models/characters/marvel/thor.glb' },
      { level: 5, rank: 'Master', character: 'Doctor Strange', requiredXp: 3500, modelPath: '/models/characters/marvel/doctor-strange.glb' },
      { level: 6, rank: 'Legend', character: 'Thanos', requiredXp: 5000, modelPath: '/models/characters/marvel/thanos.glb' }
    ]
  },
  'harry-potter': {
    id: 'harry-potter',
    name: 'Harry Potter',
    icon: '🧙',
    ranks: [
      { level: 1, rank: '1 деңгей', character: 'Hogwarts Student', requiredXp: 0, modelPath: '/models/characters/harry-potter/student.glb' },
      { level: 2, rank: '2 деңгей', character: 'Gryffindor Student', requiredXp: 400, modelPath: '/models/characters/harry-potter/gryffindor.glb' },
      { level: 3, rank: '3 деңгей', character: 'Young Wizard', requiredXp: 1000, modelPath: '/models/characters/harry-potter/young-wizard.glb' },
      { level: 4, rank: '4 деңгей', character: 'Advanced Wizard', requiredXp: 1800, modelPath: '/models/characters/harry-potter/advanced-wizard.glb' },
      { level: 5, rank: '5 деңгей', character: 'Auror', requiredXp: 2800, modelPath: '/models/characters/harry-potter/auror.glb' },
      { level: 6, rank: '6 деңгей', character: 'Dumbledore-level Wizard', requiredXp: 4000, modelPath: '/models/characters/harry-potter/dumbledore.glb' },
      { level: 7, rank: '7 деңгей', character: 'Wizard Legend', requiredXp: 5500, modelPath: '/models/characters/harry-potter/legend.glb' }
    ]
  }
};