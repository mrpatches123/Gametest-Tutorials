import { world } from "mojang-minecraft";

const overworld = World.getDimension('overworld');
const {floor, hypot} = Math

let loaded = false;
let joiningPlayers = [];
world.events.playerJoin.subscribe(({player}) => {
  joiningPlayers.unshift(player);
})

function initaliseServer() {
  
}

function intailisePlayer(player) {
  
}

//key: # = to its topSoild or in a 'from' it doesn't check that axis, ~ = reletive (commands like), ~* = center relitive, 773 = number
//dimesion defalut for the teleport will be overword
const teleports = [
  {
    name:'spawn',
    from: [0, '#', 0],
    to: [4,'#',80]
  },
  {
    name:'place',
    from: [3, '#', 3],
    to: ['~5','~10','~5']
  }
];
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
    let players = world.getPlayers().filter(player => !joiningPlayers.some(join => join.nameTag === player.nameTag));
    for (let player of players) {
      const {name, location, velocity} = player;
      const {x,y,z} = location
      const {x: xv,y: yv,z: zv} = velocity
      player.runCommand(`title @s ${name}, ${floor(location.x)}, ${floor(y)}, ${floor(z)}, ${floor(x)}, ${hypot(xv,yv,zv)}`)
      teleports.forEach({name,to,form})
      
    }
  } catch (error) {
      console.warn(error, error.stack);
  }
});
