const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
      break;
    case "get":
      const oneContact = await contacts.getById(id);
      return console.log(oneContact);
      break;
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
      break;
    case "remove":
      const deleteBook = await contacts.deleteById(id);
      return console.log(deleteBook);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);

invokeAction(argv);
