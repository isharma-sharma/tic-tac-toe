'use strict'
const api = require('./api')
const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
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
  $('#succmsg').text('Welcome user ' + store.userId)
}

const signInFailure = (error) => {
  console.error(error)
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('Signin failed.Please input proper data')
}
const ChangepasswordSuccess = (data) => {
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('Password changed.')
}

const ChangepasswordFailure = (error) => {
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('Failed ')
}

const createGameSuccess = (data) => {
  $('#gameId').text('GAME ID:' + store.gameId)
  $('.box').text('')
  store.store.gameArray = []
  store.over = false
  $('.Winner').text('')
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('New game with id -' + store.gameId + ' created successfully.')
}

const createGamefailure = (error) => {
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('Failed - ' + error)
}

const getGameSuccess = (data) => {
  $('#gamesList').text(store.gamesList)
  $('.Winner').text('')
}

const getGameFailure = (error) => {
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('Failed - ' + error)
}

const showGameSuccess = (data) => {
  $('#gameId').text('GAME ID:' + store.gameId)
  // populate the board with the stored val
  for (let i = 0; i < 9; i++) {
    $('#' + i).text(store.store.gameArray[i])
  }
  $('.Winner').text('')
  $('#success').show()
  $('#error').hide()
  $('#succmsg').text('Loaded game Id -' + store.gameId)
}

const showGameFailure = (error) => {
  $('#success').hide()
  $('#error').show()
  $('#errmsg').text('Failed - ' + error.message)

}

const updateGameSuccess = (data) => {
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
}

const signOutFailure = (error) => {
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
