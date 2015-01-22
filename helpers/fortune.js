module.exports = function() {
  var fortunes = [
    "Reality is that which, when you stop believing in it, doesn't go away",
    "Those who believe in astrology are living in houses with foundations of Silly Putty.",
    "Drinking is not a spectator sport.",
    "If God had really intended men to fly, he'd make it easier to get to the airport.",
    "I don't want to be young again, I just don't want to get any older."
  ];
  var x = Math.floor(Math.random() * fortunes.length);
  return fortunes[x];
};
