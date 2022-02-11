import { world} from "mojang-minecraft";
const overworld = World.getDimension('overworld');
World.events.tick.subscribe(() => {
  try {
    
    try {
      overworld.runCommand('scoreboard players set Dummy CommandTest 2');
    } catch {
      overworld.runCommand'scoreboard objectives add CommandTest dummy');
      overworld.runCommand'scoreboard players set Dummy CommandTest 2');
    }
    const commandTest = parseInt(overworld.runCommand('scoreboard players test Dummy CommandTest *').statusMessage.match(/-?\d+/));
    const commandTestA = parseInt(overworld.runCommand('scoreboard players set Dummy CommandTest 3').statusMessage.match(/-?\d+$/));
    const playerCount = [...world.getPlayers()].length;
    const players = world.getPlayers();
    for (let player of players) {
      player.runCommand(`title @s actionbar ${commandTest} - ${commandTestA} - ${playerCount}`);
    }
  } catch (error) {
      console.warn(error, error.stack);
  }
});
