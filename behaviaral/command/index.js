const conductor = require('./conductor')

// Commands
const { ExitCommand, CreateCommand } = require('./commands')

// This module lets us read command from the console
const { createInterface } = require('readline')
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

// We let a user to execute a command to create some file or to exit
console.log('create <fileName> <text> | history | undo | redo | exit')
rl.prompt()

// According to user command there are different actions
rl.on('line', input => {
  const [ commandText, ...remaining ] = input.split(' ')
  const [ fileName, ...fileText ] = remaining
  const text = fileText.join(' ')

  switch (commandText) {
    case 'history' :
      conductor.printHistory()
      break

    case 'undo' :
      conductor.undo()
      break

    case 'redo' :
      conductor.redo()
      break

    case 'exit':
      conductor.run(new ExitCommand())
      break

    case 'create' :
      conductor.run(new CreateCommand(fileName, text))
      break

    default :
      console.log(`${commandText} command not found!`)
  }

  rl.prompt()
})
