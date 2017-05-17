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
  const data = getFormFields(event.target)
  api.getGamesForUser(data)
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}
const onShowGamesForUser = function (event) {
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
const onGameUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showGame(data)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}
 // const onUdateGame = function (index, value, over) {
 //  api.updateGame(index, value, over)
 //    .then(ui.success)
 //    .catch(ui.failure)
 //
 // }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#game-board').on('submit', onCreateGame)
  $('#click-play').on('submit', onGetGamesForUser)
  $('#click-play').on('submit', onShowGamesForUser)
  //  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers
}
