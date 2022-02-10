import { world } from "mojang-minecraft";
let loaded = false;
const overworld = World.getDimension('overworld');
let joiningPlayers = [];
world.events.playerJoin.subscribe(({player}) => {
  joiningPlayers.unshift(player);
})

function initaliseServer() {
  overworld.runCommand('scoreboard objectives add Tick dummy');
  overworld.runCommand('scoreboard players add Dummy Tick 0');
  overworld.runCommand('scoreboard objectives add TickTwo dummy');
  overworld.runCommand('scoreboard players add Dummy TickTwo 0');
  overworld.runCommand('scoreboard objectives add DisplaySetting dummy');
  overworld.runCommand('scoreboard players add Dummy DisplaySetting 0');
}

function intailisePlayer(player) {
  
}
world.events.tick.subscribe(() => {
  try {
    joiningPlayers.forEach(player => {
      try {
        player.runCommand('testfor @s');
        joiningPlayers = joiningPlayers.filter(joiningPlayer => player.nameTag !== joiningPlayer.nameTag);
        intailisePlayer(player);
        if (!loaded) { 
          initaliseServer() 
          loaded = true
        }
        
      } catch { }
      
    });
 const tick = parseInt(overworld.runCommand('scoreboard players test Dummy Tick *').statusMessage.match(/-?\d+/));
    if (tick) {
      overworld.runCommand('tittle @a actionbar Hello World!');
    }
  } catch (error) {
      conesole.warn(error, error.stack);
  }
});

World.events.tick.subscribe(({message, sender}) => {
  try {
    switch (message) {
      case 'hello':
      case 'hi':
        overworld.runCommand('say Hello, Welcome to the world');
        break;
      case 'help':
        overworld.runCommand('read the "how to play" book in spawn');
        break;
      case 'time':
        const date = (new Date()).toString();
        overworld.runCommand(`${date}`);
        break;
      default:
        break;
    }
  } catch (error) {
      conesole.warn(error, error.stack)
  }
});
