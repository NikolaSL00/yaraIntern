const getShortMessages = (arr) => {
  return arr.filter((obj) => obj.message.length < 50).map((obj) => obj.message);
};

module.exports = getShortMessages;
