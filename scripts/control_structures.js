import { World, Commands } from "mojang-minecraft";
let loaded = false;
World.events.tick.subscribe(() => {
  try {
    const dimension = World.getDimension('overworld');
    if (!loaded) {
      Commands.run('scoreboard objectives add Tick dummy', dimension);
      Commands.run('scoreboard players add Dummy Tick 0', dimension);
      Commands.run('scoreboard objectives add TickTwo dummy', dimension);
      Commands.run('scoreboard players add Dummy TickTwo 0', dimension);
      loaded = true
    } const tick = parseInt(Commands.run('scoreboard players test Dummy Tick *', dimension).statusMessage.match(/-?\d+/));
    if (tick) {
      Commands.run('tittle @a actionbar Hello World!', dimension);
    } 
    
  } catch (error) {
      conesole.warn(error, error.stack)
  }
});
