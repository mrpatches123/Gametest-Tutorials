import { World, Commands } from "mojang-minecraft";
let loaded = false;
const dimension = World.getDimension('overworld');
World.events.tick.subscribe(() => {
  try {
    if (!loaded) {
      Commands.run('scoreboard objectives add Tick dummy', dimension);
      Commands.run('scoreboard players add Dummy Tick 0', dimension);
      Commands.run('scoreboard objectives add TickTwo dummy', dimension);
      Commands.run('scoreboard players add Dummy TickTwo 0', dimension);
      Commands.run('scoreboard objectives add DisplaySetting dummy', dimension);
      Commands.run('scoreboard players add Dummy DisplaySetting 0', dimension);
      loaded = true
    } const tick = parseInt(Commands.run('scoreboard players test Dummy Tick *', dimension).statusMessage.match(/-?\d+/));
    if (tick) {
      Commands.run('tittle @a actionbar Hello World!', dimension);
    }
  } catch (error) {
      conesole.warn(error, error.stack)
  }
});

World.events.tick.subscribe(msg => {
  try {
    message = msg.message;
    switch (message) {
      case 'hello':
      case 'hi':
        Commands.run('say Hello, Welcome to the world', dimension);
        break;
      case 'help':
        Commands.run('read the "how to play" book in spawn', dimension);
        break;
      case 'time':
        const date = new Date().toString()
        Commands.run(`${date}`, dimension);
        break;
      default:
        break;
    }
  } catch (error) {
      conesole.warn(error, error.stack)
  }
});
