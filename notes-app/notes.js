const fs = require("fs")
const { log, log_err, log_warn } = require("./utils/logs")

const  getList = async () => {
   log(await loadNotes())
}

const  readNote =  (title) => {
   loadNotes().then((notes) => {
      debugger
      const found = notes.find( (note) =>  note.title === title )
     
      if(found){
         log(found)
      }
      else{
         log_err(`title ${title} is not found`)
      }
      debugger
   })
}

const addNote = (title, body) => {

   loadNotes().then((notes) => {


      const duplicateNotes = notes.find( (note) =>  note.title === title )

      if (!duplicateNotes) {
         saveNotes([...notes, { title, body }]);
      } else {

         log_err("title is already exist")
      }


   }).catch((err) => {
      saveNotes([{ title, body }])
   })
}


const removeNote = (title) => {
   log("removeNote", title)
   loadNotes().then((notes) => {


      const filteredNotes = notes.filter( (note) => note.title !== title)

      if (filteredNotes.length !== notes.length) {
         saveNotes(filteredNotes);
         log(`title [${title}] is removed successfully`)
      } else {

         log_err(`title [${title}] is not exist`)
      }


   }).catch((err) => {
     // saveNotes([{ title, body }])
     log_err(err)
   })
}


const saveNotes = (notes) => {

   log("saveNotes = ", notes)

   return new Promise((resolve, reject) => {
      const jsonNotes = JSON.stringify(notes)
      fs.writeFile("json/notes.json", jsonNotes, (err) => {
         if (err) reject(err)
         //log("file is written")
      })
   })
}

const loadNotes = () => {
   return new Promise((resolve, reject) => {
      fs.readFile("json/notes.json", (err, data) => {

         if (err) return reject(err)
         return resolve(JSON.parse(data.toString()))
      })
   })

}


module.exports = {
   getList,
   addNote,
   removeNote,
   readNote
}