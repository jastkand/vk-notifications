fs    = require 'fs'
path  = require 'path'
spawn = require('child_process').spawn

ROOT_PATH           = __dirname
COFFEESCRIPTS_PATH  = path.join(ROOT_PATH, '/src')
JAVASCRIPTS_PATH    = path.join(ROOT_PATH, '/build')
SASS_PATH           = path.join(ROOT_PATH, '/css/sass')
CSS_PATH            = path.join(ROOT_PATH, '/css')

log = (data)->
  console.log data.toString().replace('\n','')

coffee_available = ->
  present = false
  process.env.PATH.split(':').forEach (value, index, array)->
    present ||= path.exists("#{value}/coffee")

  present

if_coffee = (callback)->
  unless coffee_available
    console.log("Coffee Script can't be found in your $PATH.")
    console.log("Please run 'npm install coffee-script.")
    exit(-1)
  else
    callback()

runCommand = (name, args) ->
  proc =           spawn name, args
  proc.stderr.on   'data', log
  proc.stdout.on   'data', log
  proc.on          'exit', (status) ->
    process.exit(1) if status != 0

task 'build', 'Build extension code into build/', ->
  if_coffee ->
    runCommand 'sass', ['--update', "#{SASS_PATH}:#{CSS_PATH}"]
    runCommand "coffee", ["--output", JAVASCRIPTS_PATH,"--compile", COFFEESCRIPTS_PATH]

task 'watch', 'Build extension code into build/', ->
  if_coffee ->
    runCommand 'sass', ['--watch', "#{SASS_PATH}:#{CSS_PATH}"]
    runCommand "coffee", ["--output", JAVASCRIPTS_PATH,"--watch", COFFEESCRIPTS_PATH]
