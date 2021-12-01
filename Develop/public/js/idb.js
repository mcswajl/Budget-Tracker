// create variable to hold db connection
let db;
// establish a connection to IndexedDB database called 'Budjet-Tracker' 
const request = indexedDB.open('dudget-tracker', 1);