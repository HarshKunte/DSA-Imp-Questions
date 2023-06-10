function towerOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
      console.log(`Move disk 1 from rod ${source} to rod ${destination}`);
      return 1;
    }
  
    const movesA = towerOfHanoi(n - 1, source, destination, auxiliary);
    console.log(`Move disk ${n} from rod ${source} to rod ${destination}`);
    const movesB = towerOfHanoi(n - 1, auxiliary, source, destination);
  
    return movesA + 1 + movesB;
  }
  
  function solveTowerOfHanoi(n) {
    const sourceRod = 1;
    const auxiliaryRod = 2;
    const destinationRod = 3;
  
    const totalMoves = towerOfHanoi(n, sourceRod, auxiliaryRod, destinationRod);
    console.log(`Total moves: ${totalMoves}`);
  }