import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const stylereq = require.context("./style", true, /.*\.(css|scss)/)
stylereq.keys().forEach(function(key) {
  stylereq(key)
})

const jsreq = require.context("./javascript", true, /.*\.(js|vue)/)
jsreq.keys().forEach(function(key) {
  jsreq(key)
})
