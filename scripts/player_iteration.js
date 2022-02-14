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
  {
    name:'shop',
    from: [[3, 64, 3],[10,69,3]],
    to: ['~5','~10','~5']
  }
];
function QueryTopSolid({location:{x,y,z},dimension}) {
  
  Array.from(Array(384),(value,i) => { if (!dimension.getBlock(new BlockLocation(x,i-64,z)).isEmpty) { return true} } )
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
    let players = world.getPlayers().filter(player => !joiningPlayers.some(join => join.nameTag === player.nameTag));
    for (let player of players) {
      const {name, location, velocity} = player;
      const {x,y,z} = location
      const {x: xv,y: yv,z: zv} = velocity
      player.runCommand(`title @s ${name}, ${floor(location.x)}, ${floor(y)}, ${floor(z)}, ${floor(x)}, ${hypot(xv,yv,zv)}`)
      teleports.forEach(({name,to,from}) => {
        if(typeof from[0] === array) {
          from[0].forEach((coord,i) => from[0][i] = (coord === '#') ? floor([x,y,z][i]) : floor(coord))  
          from[1].forEach((coord,i) => from[0][i] = (coord === '#') ? floor([x,y,z][i]) : floor(coord))
          to.forEach((coord,i) => to[i] = (coord.includes('*') &&  coord.includes('~'))? floor([x,y,z][i] + Number(coord.replace(/[\*~]/g,''))) : (coord.includes('~')) ? [x,y,z][i] + Number(coord.replace(/[\*~]/g,''))  : (coord === '#') ? )
          if ( (x >= (x >= from[0][0] &&  x <= from[1][0]) && (y >= from[0][1] &&  y <= from[1][1]) && (z >= from[0][1] &&  z <= from[1][1]) ) {
            player.teleport(new location())    
          }
        }
          
      })
      
    }
  } catch (error) {
      console.warn(error, error.stack);
  }
});
