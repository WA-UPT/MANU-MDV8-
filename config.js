const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || 'Manu-MD&aN93RZCI#8gy1mFTJ5LQ5-4f7jISr_MaE9hT5Jd2zzdQ6RMorKrg', // Put your session id here ( after linked check your number and get session id it need start with Manu-MD& ) 🤍
PORT: process.env.PORT || '3000',
MONGODB: process.env.MONGODB || 'mongodb+srv://blackhostsuranga:1MnWsqv8KQhYYTZ2@cluster0.cwh6mac.mongodb.net/' // අනිවාරෙන් Mongodb Url එකක් ඕනි දන්නෙ නැත්නම් මගෙ වීඩියෝ එක බලලා හදාගන්න.🔥
};
