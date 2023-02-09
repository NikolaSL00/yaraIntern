// jsonArr = [
//   {
//     country: "Canada",
//     email: "karl@gmail.com",
//     favouriteFood: "pasta",
//     name: "Karl",
//     phone: "08824529674",
//     position: "HR",
//     favouriteMusic: "POP",
//   },

//   {
//     country: "Bulgaria",
//     email: "peter@gmail.com",
//     favouriteFood: "musaka",
//     name: "Peter",
//     phone: "08884539674",
//     position: "developer",
//   },

//   {
//     country: "India",
//     email: "shyamjaiswal@gmail.com",
//     favouriteFood: "pizza",
//     name: "Shyam",
//     phone: "08884529674",
//     position: "manager",
//     salary: "10000",
//   },
// ];

export default function uniqueFieldsSet(jsonArr) {
  const uniqueHeaders = new Set();

  for (let obj of jsonArr) {
    for (const [key, _] of Object.entries(obj)) {
      uniqueHeaders.add(key);
    }
  }

  return uniqueHeaders;
}
