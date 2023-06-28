var deckRevealedIncreasing = function(deck) {
    const n = deck.length;
  deck.sort((a, b) => a - b);

  const queue = [];
  for (let i = n - 1; i >= 0; i--) {
    if (i === n - 1) {
      queue.unshift(deck[i]);
    } else {
      const lastCard = queue.pop();
      queue.unshift(deck[i], lastCard);
    }
  }

  return queue;
};