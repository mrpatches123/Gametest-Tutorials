//import "./player_iteration.js"
import {world} from 'mojang-minecraft'

world.events.entityHit.subscribe(({entity,hitBlock,hitEntity}) => {
  try {
    console.warn(entity.id,(hitEntity ?? {}).id,((hitBlock ?? {}).type ?? {}).id)
  } catch (error) {
    console.warn(error, error.stack)
  }
})
