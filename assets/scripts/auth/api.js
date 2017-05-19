'use strict'
const config = require('../config')
const store = require('../store.js')

const signUp = function(data) {
  console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function(data) {
  return $.ajax({
      url: config.apiOrigin + '/sign-in',
      method: 'POST',
      data
    })

    .then((response) => {
      store.userToken = response.user.token
      store.userId = response.user.id
      return store
      // store.user.id = response.user.id
    })
    .then(console.log)
}

const changePassword = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.userId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.userId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
}

const createGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
    .then((response) => {
      store.gameId = response.game.id
      return store
    })
    .then(console.log)
}
const getGamesForUser = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
}
const showGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.gameId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
}

const updateGame = function (index, value, over) {
  console.log('inside updateGame')
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.gameId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.userToken
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
    .then((response) => {
      store.gameArray = response.game.cells
    })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  createGame,
  getGamesForUser,
  showGame,
  updateGame,
  signOut
}
