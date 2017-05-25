'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
const authEvents = require('./auth/event.js')

$(() => {
  authEvents.addHandlers()
  // $('.box').on('dbclicK', function () {
  //   alert('this square is selected')
  // })
})
$('#game').hide()
$(document).ready(function () {
  // On first load
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#game-board').hide()
  $('#change-password').hide()
  // Login function
  $('#login-btn').click(function () {
    $('#sign-in').show()
    $('#sign-up').hide()
    $('#game-board').hide()
    $('#change-password').hide()
  })
  // sign-up function
  $('#sign-up-btn').click(function () {
    $('#sign-up').show()
    $('#sign-in').hide()
    $('#game-board').hide()
    $('#change-password').hide()
  })
  $('#changePassword-btn').click(function () {
    $('#sign-up').hide()
    $('#sign-in').hide()
    $('#game-board').hide()
    $('#change-password').show()
  })
  $('#show-game').click(function () {
    $('#game-board').show()
  })
})
