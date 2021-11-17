import { World, Commands } from "mojang-minecraft";
World.events.tick.subscribe(() => {
  try {
    const dimension = World.getDimension('overworld');
    try {
      Commands.run('scoreboard players set Dummy CommandTest 2', dimension);
    } catch {
      Commands.run('scoreboard objectives add CommandTest dummy', dimension);
      Commands.run('scoreboard players set Dummy CommandTest 2', dimension);
    }
    const commandTest = parseInt(Commands.run('scoreboard players test Dummy CommandTest *', dimension).statusMessage.match(/-?\d+/));
    const commandTestA = parseInt(Commands.run(`scoreboard players set Dummy CommandTest 3`, dimension).statusMessage.match(/-?\d+$/));
    const playerCount = World.getPlayers().length;
    Commands.run(`title @a actionbar ${commandTest} - ${commandTestA} - ${playerCount}`, dimension);
  } catch (error) {
      console.warn(error, error.stack);
  }
});
