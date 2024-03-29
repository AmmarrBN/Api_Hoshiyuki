import { v4 as uuidv4 } from 'uuid';
import fs from "fs"
import { generateRandomText } from '../lib/func.js';

#//const data = fs.readFileSync('nama_file.json', 'utf8');
const prem = JSON.parse(fs.readFileSync('./src/database/prem.json'));

async function addUser(email) {
    try {
        const a = prem.includes(email);
        const b = a ? limit.prem : limit.free
        const c = db.data.users[email]

        if (typeof c !== 'object') db.data.users[email] = {}

        if (c) {
            if (!('id' in c)) c.id = uuidv4()
            if (!('apikey' in c)) c.apikey = generateRandomText(8);
            if (!('limit' in c)) c.limit = b
        } else db.data.users[email] = {
            id: uuidv4(),
            apikey: generateRandomText(8),
            limit: b
        }
    } catch (err) {
        console.log(err);
    }
}

export {
    addUser
}
