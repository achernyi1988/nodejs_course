const { log, log_err, log_warn } = require("./utils/logs")
const yargs = require("yargs")
const notes = require("./notes")

yargs.command({
   command: "add",
   describe: "Add a new note",
   builder: {
      title: {
         describe: "Note's title",
         demandOption: true,
         type: 'string'
      },
      body: {
         describe: "Note's Body",
         demandOption: true,
         type: 'string'
      }
   },
   handler: (argv) => {
      // log("Title:", argv.title)
      // log("Body:", argv.body)

      notes.addNote(argv.title, argv.body)

   }
})

yargs.command({
   command: "remove",
   describe: "Remove a new note",
   builder: {
      title: {
         describe: "Note's title",
         demandOption: true,
         type: 'string'
      }
   },
   handler: (argv) => notes.removeNote(argv.title)

})

yargs.command({
   command: "list",
   describe: "list notes",
   handler: () => notes.getList()
})

yargs.command({
   command: "read",
   describe: "read notes",
   builder: {
      title: {
         describe: "Note's title",
         demandOption: true,
         type: 'string'
      }
   },
   handler: (argv) => notes.readNote(argv.title)
})


yargs.parse()
//console.log(yargs.argv)

//log(  `this is  ${array} my style ${temp}`)

// log(  "this is ",array.join(), "my style" , temp, "hi there", temp2 )

// log_warn(  "this is ",array.join(), "my style" , temp, "hi there", temp2 )
// log_err(  "this is ",array.join(), "my style" , temp, "hi there", temp2 )