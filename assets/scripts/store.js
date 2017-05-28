'use strict'
let player = 'x'
const store = {
  gameArray: ['', '', '', '', '', '', '', '', '']

}
const winner = () => {
  console.log('checking winner and store is ', store)
  console.log('executed')

  // Check for horizontal X matches
  if (
    store.gameArray[0] + store.gameArray[1] + store.gameArray[2] === 'xxx' ||
    store.gameArray[2] + store.gameArray[5] + store.gameArray[8] === 'xxx' ||
    store.gameArray[6] + store.gameArray[7] + store.gameArray[8] === 'xxx' ||
    store.gameArray[0] + store.gameArray[3] + store.gameArray[6] === 'xxx') {
    console.log('anything1')
    console.log(store.gameArray + ' ')
    store.over = true
    $('.Winner').text('X won!')
    $('.box').css('pointer-events', 'none')

  // Check for diaganol X matches
  } else if (
    store.gameArray[0] + store.gameArray[4] + store.gameArray[8] === 'xxx' ||
    store.gameArray[3] + store.gameArray[4] + store.gameArray[5] === 'xxx' ||
    store.gameArray[6] + store.gameArray[4] + store.gameArray[2] === 'xxx' ||
    store.gameArray[1] + store.gameArray[4] + store.gameArray[7] === 'xxx') {
    console.log('anything2')
    console.log(store.gameArray + ' ')
    store.over = true
    $('.Winner').text('X won!')
    $('.box').css('pointer-events', 'none')

  // Check for vertical matches
  } else if (
    store.gameArray[0] + store.gameArray[1] + store.gameArray[2] === 'ooo' ||
    store.gameArray[2] + store.gameArray[5] + store.gameArray[8] === 'ooo' ||
    store.gameArray[3] + store.gameArray[4] + store.gameArray[5] === 'ooo' ||
    store.gameArray[6] + store.gameArray[7] + store.gameArray[8] === 'ooo') {
    console.log('anything3')
    console.log(store.gameArray + ' ')
    store.over = true
    $('.Winner').text('O won!')
    $('.box').css('pointer-events', 'none')
  } else if (
    store.gameArray[0] + store.gameArray[3] + store.gameArray[6] === 'ooo' ||
    store.gameArray[0] + store.gameArray[4] + store.gameArray[8] === 'ooo' ||
    store.gameArray[6] + store.gameArray[4] + store.gameArray[2] === 'ooo' ||
    store.gameArray[1] + store.gameArray[4] + store.gameArray[7] === 'ooo') {
    console.log('anything4')
    console.log(store.gameArray + ' ')
    store.over = true
    $('.Winner').text('O won!')
    $('.box').css('pointer-events', 'none')
  } else {
    console.log('anything5')
    store.over = false
    $('.Winner').text('NOBODY won!')
    // $('.box').css('pointer-events', 'none')
  }
}
module.exports = {store,
  winner,
  player}
