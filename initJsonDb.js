/* This script generates db.json for local development. */
const fs = require('fs');
fs.copyFile('./db.base.json', './db.json', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('Mock data generated');
  }
});
