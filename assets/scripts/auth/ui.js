'use strict'
const store = require('../store')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}
const signInSuccess = (data) => {
  console.log(data)
}

const signInFailure = (error) => {
  console.error(error)
}
const ChangepasswordSuccess = (data) => {
  console.log(data)
  alert('password changed')
}

const ChangepasswordFailure = (error) => {
  console.error(error)
}

const createGameSuccess = (data) => {
  $('#gameId').text('GAME ID:' + store.gameId)
}

const createGamefailure = (error) => {
  console.error(error)
}

const getGameSuccess = (data) => {
  console.log(data)
}

const getGameFailure = (error) => {
  console.error(error)
}

const showGameSuccess = (data) => {
  console.log(data)
}

const showGameFailure = (error) => {
  console.error(error)
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
  console.log('on signOutSuccess')
}

const signOutFailure = (error) => {
  console.error(error)
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
