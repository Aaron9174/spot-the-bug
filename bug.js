
function stressTest() {
    console.time('Total Stress Test Duration');
  
    const arraySize = Math.pow(2, 32);
    let largeArray = new Array(arraySize).fill(0);
  
    console.time('Populate Array');
    largeArray = largeArray.map(() => Math.floor(Math.random() * 1000));
    console.timeEnd('Populate Array');
  
    console.time('Sort Array');
    largeArray.sort((a, b) => a - b);
    console.timeEnd('Sort Array');
  
    console.time('Filter Even Numbers');
    const oddArray = largeArray.filter(num => num % 2 !== 0);
    console.timeEnd('Filter Even Numbers');
  
    console.time('Square Numbers');
    const squaredArray = oddArray.map(num => num * num);
    console.timeEnd('Square Numbers');
  
    console.time('Sum of Numbers');
    const sum = squaredArray.reduce((acc, num) => acc + num, 0);
    console.timeEnd('Sum of Numbers');
  
    console.timeEnd('Total Stress Test Duration');
  }
  
  stressTest();