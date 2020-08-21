const map = new Map (
    [ ['a', 1]]
)

console.log(map.get('a'))               // 1
map.set('b', 2).set(NaN, 'number').set(42, 'demo')
console.log(map.get(NaN))               // number 
// map.clear()
console.log(map)
console.log(map.has(43))                // false, проверяет есть ли данный ключ
map.delete('b')
console.log(map)