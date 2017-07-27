'use strict'
// const api = require('./api')
const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
  $('.form-control').val('')
  $('#sign-up').hide()
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('signUpSuccess please signIn to play')
}

const signUpFailure = (error) => {
  console.error(error)
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('Signup failed.Please input proper data')
}
const signInSuccess = (data) => {
  $('#show-game-panel').show()
  $('#sign-in').hide()
  $('#userId').text(store.userId)
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('Welcome  ' + store.email + ' Your User Id Is- ' + store.userId)
  $('.form-control').val('')
  $('#changePassword-btn').show()
  $('#sign-out-btn').show()
  $('#login-btn').hide()
  $('#sign-up-btn').hide()
}

const signInFailure = (error) => {
  console.log(error)
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('Signin failed.Please input proper data')
}
const ChangepasswordSuccess = (data) => {
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('Password changed.')
  $('.form-control').val('')
}

const ChangepasswordFailure = (error) => {
  console.error(error)
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('change-password Failed!Please input proper data')
  $('.form-control').val('')
}

const createGameSuccess = (data) => {
  $('.form-control').val('')
  $('#gameId').text('GAME ID:' + store.gameId)
  $('.box').text('')
  store.store.gameArray = []
  store.over = false
  $('.Winner').text('')
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('New game with id -' + store.gameId + ' created successfully.')
  console.log('updateGameSuccess')
  $('.box').css('pointer-events', 'auto')
  store.player = 'x'
}

const createGamefailure = (error) => {
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('Failed - ' + error)
}

const getGameSuccess = (data) => {
  $('.form-control').val('')
  $('#gamesList').text(store.gamesList)
  $('.Winner').text('')
}

const getGameFailure = (error) => {
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('Failed - ' + error)
}

const showGameSuccess = (data) => {
  $('.form-control').val('')
  $('#gameId').text('GAME ID:' + store.gameId)
  // populate the board with the stored val
  for (let i = 0; i < 9; i++) {
    $('#' + i).text(store.store.gameArray[i])
  }
  $('.Winner').text('')
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('Loaded game Id -' + store.gameId)
  c
}

const showGameFailure = (error) => {
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('Failed - ' + error.message)
}

const updateGameSuccess = (data) => {
  $('.form-control').val('')
  console.log('the winner')
  if (store.player === 'x') {
    store.player = 'o'
    console.log(store.player)
  } else {
    store.player = 'x'
  }
  store.winner()
}

const updateGameFailure = (error) => {
  console.error(error)
}

const signOutSuccess = (data) => {
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#game-board').hide()
  $('#change-password').hide()
  $('#show-game-panel').hide()
  console.log('on signOutSuccess')
  $('.form-control').val('')
}

const signOutFailure = (error) => {
  console.log(error)
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('Failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  ChangepasswordSuccess,
  ChangepasswordFailure,
  createGameSuccess,
  createGamefailure,
  getGameSuccess,
  getGameFailure,
  showGameSuccess,
  showGameFailure,
  updateGameSuccess,
  updateGameFailure,
  signOutSuccess,
  signOutFailure
}
