function loadUsers(userIds, load, done) {
  let users = [];

  for (let i = 0; i < userIds.length; i++) {
    if (users.length === userIds.length) done(users);
    load(userIds[i], (user) => {
      if (user) users.push(user);
    });
  }
}

module.exports = loadUsers;
