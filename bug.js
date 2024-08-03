/**
 * The bug here is because the max array size in JS is 2^32 - 1
 * Solution: batching the test set
 */
function stressTest() {
    console.time('Total Stress Test Duration');
  
    const arraySize = Math.pow(2, 32);
    const batchLen = arraySize / 2;
    let batchArray1 = new Array(batchLen).fill(0);
    let batchArray2 = new Array(batchLen).fill(0);
  
    console.time('Populate Array');
    const populateFunc = () => Math.floor(Math.random() * 1000);
    batchArray1 = batchArray1.map(populateFunc);
    batchArray2 = batchArray2.map(populateFunc)
    console.timeEnd('Populate Array');
  
    console.time('Sort Array');
    batchArray1.sort((a, b) => a - b);
    batchArray2.sort((a, b) => a - b);
    console.timeEnd('Sort Array');
  
    console.time('Filter Even Numbers');
    const oddBatch1Array = oddBatch1Array.filter(num => num % 2 !== 0);
    const oddBatch2Array = oddBatch2Array.filter(num => num % 2 !== 0);
    console.timeEnd('Filter Even Numbers');
  
    console.time('Square Numbers');
    const squaredBatch1Array = oddBatch1Array.map(num => num * num);
    const squaredBatch2Array = oddBatch2Array.map(num => num * num);
    console.timeEnd('Square Numbers');
  
    console.time('Sum of Numbers');
    const batch1Sum = squaredBatch1Array.reduce((acc, num) => acc + num, 0);
    const batch2Sum = squaredBatch2Array.reduce((acc, num) => acc + num, 0);
    console.timeEnd('Sum of Numbers');
  
    console.timeEnd('Total Stress Test Duration');
  }
  
  stressTest();