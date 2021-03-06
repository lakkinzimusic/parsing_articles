let Writer = require('../utils/Writer');
let DB = require('../utils/DB');

let writer = new Writer();
let db = new DB();


async function CLEAN_DB() {
    await db.clean_db_file();
    await writer.removeLibraryFolder();
    process.exit(22)
}


module.exports = CLEAN_DB;