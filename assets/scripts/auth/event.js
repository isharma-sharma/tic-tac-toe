'use strict'
const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)

    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGamefailure)
}
const onGetGamesForUser = function (event) {
  event.preventDefault()
  //const data = getFormFields(event.target)
  api.getGamesForUser()
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}
const onShowGamesForUser = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showGame(data)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}
// const onSignOut = function(event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.signOut()
//     .then(() => {
//       delete store.user
//       //  startNewGame()
//       return store
//     })
//     .then(ui.signOutSuccess)
//     .catch(ui.signOutFailure)
// }
// const onGameUpdate = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.showGame(data)
//     .then(ui.showGameSuccess)
//     .catch(ui.showGameFailure)
// }
// let i = 0
// if (store.gameArray[i] % 2 === 0) {
//   store.player = 'x'
// } else {
//   i++
// }

const gameOver = function () {
  if (store.gameArray[0] + store.gameArray[1] + store.gameArray[2] === 'xxx' || store.gameArray[2] + store.gameArray[5] + store.gameArray[8] === 'xxx' || store.gameArray[6] + store.gameArray[7] + store.gameArray[8] === 'xxx' || store.gameArray[0] + store.gameArray[3] + store.gameArray[6] === 'xxx') {
    store.over = true
  } else if (store.gameArray[0] + store.gameArray[4] + store.gameArray[8] === 'xxx' || store.gameArray[6] + store.gameArray[4] + store.gameArray[2] === 'xxx' || store.gameArray[1] + store.gameArray[4] + store.gameArray[7] === 'xxx') {
    store.over = true
  } else if (store.gameArray[0] + store.gameArray[1] + store.gameArray[2] === 'ooo' || store.gameArray[2] + store.gameArray[5] + store.gameArray[8] === 'ooo' || store.gameArray[6] + store.gameArray[7] + store.gameArray[8] === 'ooo') {
    store.over = true
  } else if (store.gameArray[0] + store.gameArray[3] + store.gameArray[6] === 'ooo' || store.gameArray[0] && store.gameArray[4] && store.gameArray[8] === 'ooo' || store.gameArray[6] + store.gameArray[4] + store.gameArray[2] === 'ooo' || store.gameArray[1] + store.gameArray[4] + store.gameArray[7] === 'ooo') {
    store.over = true
  } else if (store.gameArray[0] + store.gameArray[1] + store.gameArray[2] === 'oox' || store.gameArray[0] + store.gameArray[1] + store.gameArray[2] === 'xox' || store.gameArray[0] + store.gameArray[1] + store.gameArray[2] === 'oxo') {
    store.over = true
  } else if (store.gameArray[0] + store.gameArray[1] + store.gameArray[2] === 'xxo') {
    store.over = true
  }
}
let index
let over

const onUdateGame = function (event) {
  event.preventDefault()

  let value
  if (store.player === 'x') {
    value = 'x'
  } else {
    value = 'o'
  }

  $(event.target).text(value)
  api.updateGame(index, value, over)
    .then(ui.updateGamesuccess)
    .catch(ui.updateGamefailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#game-board').on('submit', onCreateGame)
  $('#get-all-game').on('submit', onGetGamesForUser)
  $('#show-game-id').on('submit', onShowGamesForUser)
  $('.box').on('click', onUdateGame)
  //  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
