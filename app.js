// const age = 16;

// if(age === 18){
//     console.log("You are Eligible For Vote")
// }
// else{
//     console.log("You are not Eligble For Vote")
// }

// console.log(`This is the First node app`)


    //npm --global command , comes with node 
    //npm --version

    //local dependancy  - use it only particular project
    // npm i <packageName>
    //global dependancy - use it in any project

   // npm install -g  <packageName>

   //package.json - mainfest file(stores important info about project/package);
  //manual approach (create,package.json in the root, create the project);

  //npm init (step by step,press enter to skip)
  //npm init -y(everything by default)

  const _ = require('lodash');

  const items = [1,[2,[3,[4]]]];
  const newItems = _.flattenDeep(items);
  console.log(newItems)

    