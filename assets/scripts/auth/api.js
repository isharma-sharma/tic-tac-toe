'use strict'
const config = require('../config')
const store = require('../store.js')

const signUp = function (data) {
  console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })

    .then((response) => {
      store.userToken = response.user.token
      store.userId = response.user.id
      store.email = response.user.email
      return store
      // store.user.id = response.user.id
    })
    .then(console.log)
}

const changePassword = function (data) {
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
  }).then((response) => {
    for (let g in response.games) {
      store.gamesList.push(response.games[g].id)
    }
    console.log(store)
  })
}
const showGame = function (game) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + game.gameId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.userToken
    }
  })
    .then((response) => {
      console.log('Get response -' + response)
      store.gameId = response.game.id
      store.store.gameArray = response.game.cells
      console.log('after response - ' + store)
    })
}

const updateGame = function (index, value, over) {
  console.log('inside updateGame index is ', value)
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
      console.log(response)
      console.log(index)

      store.store.gameArray[index] = response.game.cells[index]
      console.log(store)
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
