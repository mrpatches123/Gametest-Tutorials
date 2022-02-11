import { world } from "mojang-minecraft";

const overworld = World.getDimension('overworld');

let loaded = false;
let joiningPlayers = [];
world.events.playerJoin.subscribe(({player}) => {
  joiningPlayers.unshift(player);
})

function initaliseServer() {
  
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
  } catch (error) {
      console.warn(error, error.stack);
  }
});
