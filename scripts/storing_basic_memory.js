import { World, Commands } from "mojang-minecraft";

World.events.tick.subscribe(() => {
  try {
    try {
      Commands.run('scoreboard players set @s CommandTest 2');
    } catch {
      Commands.run('scoreboard objectives add CommandTest dummy');
      Commands.run('scoreboard players set @s CommandTest 2');
    }
  } catch (error) {
      conesole.warn(error, error.stack)
  }
});
