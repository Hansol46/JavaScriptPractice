// import MyLog, {COLOR, compute} from './module'       
// то что экспортируется по дефолту, можно давать любое имя
import * as Module from './module'

// compute(1, 2)
// console.log(COLOR)
// MyLog.log()

Module.default.log()