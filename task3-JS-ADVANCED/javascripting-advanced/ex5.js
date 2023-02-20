const checkUsersValid = (goodUsers) => {
  return (checkUsers) => {
    return checkUsers.every((checked) =>
      goodUsers.some((valid) => valid.id === checked.id)
    );
  };
};
module.exports = checkUsersValid;
