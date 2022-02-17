//import "./player_iteration.js"
import {world} from 'mojang_minecraft'

world.events.entityHit.subscribe(({entity,hitBlock,hitEntity}) => {
  console.warn(entity.id,(hitEntity ?? {}).id,((hitBlock ?? {}).type ?? {}).id)
})
