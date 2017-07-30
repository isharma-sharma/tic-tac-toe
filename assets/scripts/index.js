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
})
$('#game').hide()
$(document).ready(function () {
  // On first load
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#game-board').hide()
  $('#change-password').hide()
  $('#show-game-panel').hide()
  $('#success').hide()
  $('#error').hide()
  $('#changePassword-btn').hide()
  $('#sign-out-btn').hide()
  // Login function
  $('#login-btn').click(function () {
    $('#sign-in').show(500)
    $('#sign-up').hide()
    $('#game-board').hide()
    $('#change-password').hide()
    $('#show-game-panel').hide()
    $('#success').hide()
    $('#error').hide()
    $('.explain').hide(500)
  })
  // sign-up function
  $('#sign-up-btn').click(function () {
    $('#sign-up').show(500)
    $('#sign-in').hide()
    $('#game-board').hide()
    $('#change-password').hide()
    $('#show-game-panel').hide()
    $('#success').hide()
    $('#error').hide()
    $('.explain').hide(500)
  })
  $('#changePassword-btn').click(function () {
    $('#sign-up').hide()
    $('#sign-in').hide()
    $('#game-board').hide()
    $('#change-password').show()
    $('#show-game-panel').hide()
    $('#success').hide()
    $('#error').hide()
  })
  $('#show-game').click(function () {
    $('#game-board').show()
    $('#success').hide()
    $('#error').hide()
    // $('#video').hide()
    // $('#get-game-by-id').hide()
    // $('#show-gamebyid').hide()
  })
  $('#get-game-by-id').click(function () {
    $('#game-board').show()
    $('#success').hide()
    $('#error').hide()
  })
  $('#sign-out-btn').click(function () {
    $('#sign-in').show()
    $('#sign-up').hide()
    $('#game-board').hide()
    $('#change-password').hide()
    $('#show-game-panel').hide()
    $('#success').hide()
    $('#error').hide()
  })
})
