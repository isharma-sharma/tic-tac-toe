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
  $('.show-game').click(function () {
    $('#game').show()
  })
})
// $('.chnpwd').hide()
// $(document).ready(function () {
//   $('..chpwd').click(function () {
//     $('.chnpwd').show()
//   })
// })
// $(() => {
//   $('#welcome-modal').modal({
//     keyboard: false,
//     backdrop: 'static'
//   })
//   $('.chng-pswd"').hide()
//   $('.log-out').hide()
// })
