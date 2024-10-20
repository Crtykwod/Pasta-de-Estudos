function winRound(you, opp) {
  function maxNumber(n) {
    n.sort((a, b) => a - b);
    return n[n.length - 1] + n[n.length - 2];
  }
  
  return maxNumber(you) > maxNumber(opp);
}

console.log(winRound([1, 2, 8, 4], [5, 6, 7, 8]));