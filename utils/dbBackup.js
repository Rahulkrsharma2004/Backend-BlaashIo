const { exec } = require('child_process');
const path = require('path');
const pool = require('../db');

const restoreBackup = (backupFilePath) => {
  const command = `pg_restore --verbose --clean --no-acl --no-owner -h ${process.env.DB_HOST} -U ${process.env.DB_USER} -d ${process.env.DB_NAME} ${backupFilePath}`;
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error restoring database: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }
    console.log(`Database restored: ${stdout}`);
  });
};

module.exports = { restoreBackup };
