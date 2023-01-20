const db = require('./connection');
const { User, Game } = require('../models');

db.once('open', async () => {

  await Game.deleteMany();

  const games = await Game.insertMany([
    {
      name: "Crisis Core - Final Fantasy VII",
      description: "Zack Fair, a young warrior admired by the boy destined to save the world, trusted by men renowned as heroes of legend, and loved by the girl who holds the fate of the planet in her hands.",
      image: 'crisis-core.webp',
      price: 69.99,
      quantity: 10
    },
    {
      name: "Blacktail",
      description: "Become the guardian of the woods or the terror nightmares are made of in BLACKTAIL, a unique blend of intense archery combat, magic and dark storytelling set in a vibrant fairy tale world.",
      image: 'blacktail.webp',
      price: 29.99,
      quantity: 10
    },
    {
      name: "Romancing sage 3",
      description: "Once every 300 years, the Rise of Morastrum threatens the existence of our world. All born in that year are doomed to perish before its end. However, there came a time when a sole child did survive. He was using the power of death to conquer the world.",
      image: "romancing-sage-3.webp",
      price: 28.99,
      quantity: 10
    },
    {
      name: "The Witcher 3: Wild Hunt ",
      description: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.",
      image: 'the-witcher-3.jpeg',
      price: 24.99,
      quantity: 10
    },
    {
      name: "River City Girls 2",
      description: "The River City Girls are ready for round 2! When an old foe returns for revenge, Misako, Kyoko, Kunio, and Riki - joined by newcomers Marian and Provie - hit the streets for an all-new beat-'em-up adventure packed with new abilities, enemies, allies, locations, and more! ",
      image: 'river-city-girls-2.webp',
      price: 69.99,
      quantity: 10
    },
    {
      name: "Street Fighter V",
      description: "Rule the ring with Street Fighter™ V: Champion Edition, the most robust version of the acclaimed fighting game!",
      image: 'street-fighter-v.webp',
      price: 29.99,
      quantity: 10
    },
    {
      name: "Resident Evil 4",
      description: "Agent Leon S. Kennedy, one of the survivors of the incident, has been sent to rescue the president's kidnapped daughter.He tracks her to a secluded European village, where there is something terribly wrong with the locals.",
      image: 'resident-evil-4.webp',
      price: 69.99,
      quantity: 10
    },
    {
      name: "One Piece: Grand Cruise",
      description: "The famed pirate, Monkey.D.Luffy, better known as Straw Hat Luffy, and his Straw Hat Crew, are sailing across the New World in search of the next island and the next adventure that awaits them.",
      image: 'one-piece-grand-cruise.webp',
      price: 59.99,
      quantity: 10
    },
    {
      name: "Light Tracer",
      description: "If we need to describe this game in brief sentence, this game is like an evil soul living in a cute body.",
      image: 'light-tracer.webp',
      price: 14.99,
      quantity: 10
    },
    {
      name: "Hogwarts Legacy",
      description: "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books.",
      image: 'hogwarts-legacy.webp',
      price: 69.99,
      quantity: 10
    },
    {
      name: "Forspoken",
      description: "Mysteriously transported from New York City, Frey Holland finds herself trapped in the breathtaking land of Athia.",
      image: 'forspoken.webp',
      price: 69.99,
      quantity: 10
    },
    {
      name: "Dragon Ball Z",
      description: "Goku has died from the virus in his heart, and the world was destroyed by the androids. The surviving warriors, Trunks and Gohan, will fight to protect the planet.",
      image: 'dragon-ball-z.webp',
      price: 19.99,
      quantity: 10
    },
  ]);

  console.log('games seeded');

  await User.deleteMany();

  await User.create({
    username: 'HelloWorld',
    email: 'HelloWorld@email.com',
    password: 'password12345',
    orders: [
      {
        games: [games[0]._id, games[0]._id, games[1]._id]
      }
    ]
  });

  await User.create({
    username: 'test1111',
    email: 'test1111@email.com',
    password: 'password12345',
  });

  console.log('users seeded');

  process.exit();
})
