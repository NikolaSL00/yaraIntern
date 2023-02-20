// function getDependencies(tree) {
//   let arr = [];

//   if ("dependencies" in tree) {
//     let keys = Object.keys(tree.dependencies);

//     for (let i = 0; i < keys.length; i++) {
//       arr = [...arr, ...getDependencies(tree.dependencies[keys[i]])];
//       let string = `${keys[i]}@${tree.dependencies[keys[i]].version}`;
//       arr.push(string);
//     }
//   }

//   return arr;
// }

function getDependencies(tree) {
  if (tree && tree.dependencies) {
    let dependencies = tree.dependencies;
    let ans = [];
    Object.keys(dependencies).forEach((key) => {
      var moduleName = `${key}@${dependencies[key].version}`;
      ans = ans.concat([moduleName], getDependencies(dependencies[key]));
    });
    return ans.filter((elmt, idx, arr) => arr.indexOf(elmt) === idx).sort();
  }

  return [];
}

let loremIpsum = {
  name: "lorem-ipsum",
  version: "0.1.1",
  dependencies: {
    optimist: {
      version: "0.3.7",
      dependencies: {
        wordwrap: {
          version: "0.0.2",
        },
      },
    },
    inflection: {
      version: "1.2.6",
    },
  },
};

const res = getDependencies(loremIpsum); // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]
module.exports = getDependencies;
