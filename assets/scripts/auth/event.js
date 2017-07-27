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
    .then(api.getGamesForUser)
    .then(ui.getGameSuccess)
    .catch(ui.signInFailure)
    .catch(ui.getGameFailure)
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
  // const data = getFormFields(event.target)
  api.getGamesForUser()
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

const reset = function () {
  $('.box').text('')
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
   .catch(ui.signOutFailure)
}

let over

const onUpdateGame = function (event) {
  event.preventDefault()

  let value
  console.log('is handler working')
  if ($(event.target).text() === '') {
    console.log('I m here')
    if (store.player === 'x') {
      value = 'x'
    } else {
      value = 'o'
    }
    $('.event.target').css('pointer-events', 'none')
  }
  const index = event.target.id
  $(event.target).text(value, index)
  console.log('i m inside updateGame', value)
  api.updateGame(index, value, over)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGamefailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#show-game').on('click', onCreateGame)
  $('#get-all-game').on('submit', onGetGamesForUser)
  $('#show-game-id').on('submit', onShowGamesForUser)
  $('.box').on('click', onUpdateGame)
  $('#sign-out-btn').on('click', onSignOut)
  $('.reset').on('click', reset)
}

module.exports = {
  addHandlers
}
