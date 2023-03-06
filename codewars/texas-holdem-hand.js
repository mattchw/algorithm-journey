/**
 * Texas Hold'em is a Poker variant in which each player is given two "hole cards". Players then proceed to make a series of bets while five "community cards" are dealt. If there are more than one player remaining when the betting stops, a showdown takes place in which players reveal their cards. Each player makes the best poker hand possible using five of the seven available cards (community cards + the player's hole cards).
 * 
 * Possible hands are, in descending order of value:
 * 1. Straight-flush (five consecutive ranks of the same suit). Higher rank is better.
 * 2. Four-of-a-kind (four cards with the same rank). Tiebreaker is first the rank, then the rank of the remaining card.
 * 3. Full house (three cards with the same rank, two with another). Tiebreaker is first the rank of the three cards, then rank of the pair.
 * 4. Flush (five cards of the same suit). Higher ranks are better, compared from high to low rank.
 * 5. Straight (five consecutive ranks). Higher rank is better.
 * 6. Three-of-a-kind (three cards of the same rank). Tiebreaker is first the rank of the three cards, then the highest other rank, then the second highest other rank.
 * 7. Two pair (two cards of the same rank, two cards of another rank). Tiebreaker is first the rank of the high pair, then the rank of the low pair and then the rank of the remaining card.
 * 8. Pair (two cards of the same rank). Tiebreaker is first the rank of the two cards, then the three other ranks.
 * 9. Nothing. Tiebreaker is the rank of the cards from high to low.
 * 
 * Given hole cards and community cards, complete the function hand to return the type of hand (as written above, you can ignore case) and a list of ranks in decreasing order of significance, to use for comparison against other hands of the same type, of the best possible hand.
 * hand(["A:♠", "A♦"], ["J♣", "5♥", "10♥", "2♥", "3♦"])
 * // ...should return {type: "pair", ranks: ["A", "J", "10", "5"]}
 * hand(["A♠", "K♦"], ["J♥", "5♥", "10♥", "Q♥", "3♥"])
 * // ...should return {type: "flush", ranks: ["Q", "J", "10", "5", "3"]}

 * 
 * return {type: 'Straight-flush', ranks: ['A', 'K', 'Q', 'J', 'T']}
 */
function hand(holeCards, communityCards) {
  const allCards = [...holeCards, ...communityCards].map(toCard);
  for (let f of [checkStraightFlush, checkFourIfAKind, checkFullHouse, checkFlush, checkStraight, checkThreeOfAKind, checkTwoPair, checkPair, checkNothing]) {
    const r = f(allCards);
    if (r) return r;
  }
}

const faceCardsToValues = { 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
function toCard(c) {
  return {
    value: (/[0-9]+/.test(c.slice(0, -1))) ? parseInt(c.slice(0, -1)) : faceCardsToValues[c.slice(0, -1)],
    suit: c.slice(-1)
  }
}
const valuesToFaceCards = ['', '', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
function checkNothing(arr) {
  return {
    type: 'nothing',
    ranks: arr.map(e => e.value).sort((a, b) => b - a).slice(0, 5).map(e => valuesToFaceCards[e])
  };
}
function checkPair(arr) {
  const pairs = arr.filter((e, i, a) => a.findIndex(e2 => e2.value === e.value) !== i);
  if (pairs.length === 0) return false;
  const pair = pairs[0];
  return {
    type: 'pair',
    ranks: [pair.value, ...arr.filter(e => e.value !== pair.value).map(e => e.value).sort((a, b) => b - a).slice(0, 3)].map(e => valuesToFaceCards[e])
  };
}
function checkTwoPair(arr) {
  const pairs = arr.sort((a, b) => b.value - a.value).filter((e, i, a) => a.findIndex(e2 => e2.value === e.value) !== i);
  if (pairs.length < 2) return false;
  const pair1 = pairs[0];
  const pair2 = pairs[1];
  return {
    type: 'two pair',
    ranks: [pair1.value, pair2.value, ...arr.filter(e => e.value !== pair1.value && e.value !== pair2.value).map(e => e.value).sort((a, b) => b - a).slice(0, 1)].map(e => valuesToFaceCards[e])
  };
}
function checkThreeOfAKind(arr) {
  const threes = arr.filter((e, i, a) => a.findIndex(e2 => e2.value === e.value) === i && a.filter(e2 => e2.value === e.value).length === 3);
  if (threes.length === 0) return false;
  const three = threes[0];
  return {
    type: 'three-of-a-kind',
    ranks: [three.value, ...arr.filter(e => e.value !== three.value).map(e => e.value).sort((a, b) => b - a).slice(0, 2)].map(e => valuesToFaceCards[e])
  };
}
function checkStraight(arr) {
  const values = [... new Set(arr.map(e => e.value).sort((a, b) => b - a))]
  for (let i = 0; i < values.length - 4; i++) {
    if (values[i] - 1 === values[i + 1] && values[i + 1] - 1 === values[i + 2] && values[i + 2] - 1 === values[i + 3] && values[i + 3] - 1 === values[i + 4]) {
      return {
        type: 'straight',
        ranks: [values[i], values[i + 1], values[i + 2], values[i + 3], values[i + 4]].map(e => valuesToFaceCards[e])
      };
    }
  }
  return false;
}
function checkFlush(arr) {
  for (let suit of ['♠', '♣', '♥', '♦']) {
    const flush = arr.filter(e => e.suit === suit);
    if (flush.length >= 5) {
      return {
        type: 'flush',
        ranks: flush.map(e => e.value).sort((a, b) => b - a).slice(0, 5).map(e => valuesToFaceCards[e])
      };
    }
  }
}
function checkFullHouse(arr) {
  const threes = arr.filter((e, i, a) => a.findIndex(e2 => e2.value === e.value) === i && a.filter(e2 => e2.value === e.value).length === 3);
  if (threes.length === 0) return false;
  const three = threes[0];
  const twos = arr.filter((e, i, a) => a.findIndex(e2 => e2.value === e.value) === i && a.filter(e2 => e2.value === e.value).length === 2 && e.value !== three.value);
  if (twos.length === 0) return false;
  return {
    type: 'full house',
    ranks: [three.value, twos[0].value].map(e => valuesToFaceCards[e])
  };
}
function checkFourIfAKind(arr) {
  const fours = arr.filter((e, i, a) => a.findIndex(e2 => e2.value === e.value) === i && a.filter(e2 => e2.value === e.value).length === 4);
  if (fours.length === 0) return false;
  const four = fours[0];
  return {
    type: 'four-of-a-kind',
    ranks: [four.value, ...arr.filter(e => e.value !== four.value).map(e => e.value).sort((a, b) => b - a).slice(0, 1)].map(e => valuesToFaceCards[e])
  };
}
function checkStraightFlush(arr) {
  const suits = {};
  for (let card of arr) {
    if (!suits[card.suit]) suits[card.suit] = [];
    suits[card.suit].push(card);
  }
  for (let suit of Object.keys(suits)) {
    const values = [... new Set(suits[suit].map(e => e.value).sort((a, b) => b - a))]
    for (let i = 0; i < values.length - 4; i++) {
      if (values[i] - 1 === values[i + 1] && values[i + 1] - 1 === values[i + 2] && values[i + 2] - 1 === values[i + 3] && values[i + 3] - 1 === values[i + 4]) {
        return {
          type: 'straight-flush',
          ranks: [values[i], values[i + 1], values[i + 2], values[i + 3], values[i + 4]].map(e => valuesToFaceCards[e])
        };
      }
    }
  }
  return false;
}
