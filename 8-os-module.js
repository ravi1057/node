const os = require('os');


//info about current User


const user = os.userInfo();
console.log(user);


//method returns the system uptime in seconds

console.log(`The System uptime is ${os.uptime()} seconds`)


const currentOs = {
    name : os.type(),
    release :os.release(),
    totalMem :os.totalmem(),
    freeMem :os.freemem()
}

console.log('OS Platform:', os.platform());
console.log('CPU Architecture:', os.arch());

console.log(currentOs)