/**
 * The bug here is because the max array size in JS is 2^32 - 1
 * Solution: batching the test set
 * 
 * NOTE: The program takes a REALLY long time to run due to the size of the arrays
 * I wonder if a form of parralism could be used here, but synching after may make this untenable
 * 
 * NOTE2: This must be ran with a higher heap size
 * node --max-old-space-size=4096 bug.js
 */
function stressTest() {
    console.time('Total Stress Test Duration');
  
    const arraySize = Math.pow(2, 32);
    const batchSize = arraySize / 2;
    let batch1 = new Array(batchSize);
    let batch2 = new Array(batchSize);

  
    console.time('Populate Array');
    const populateFunc = () => Math.floor(Math.random() * 1000);
    batch1 = batch1.map(populateFunc);
    batch2 = batch2.map(populateFunc)
    console.timeEnd('Populate Array');
  
    console.time('Sort Array');
    batch1.sort((a, b) => a - b);
    batch2.sort((a, b) => a - b);
    console.timeEnd('Sort Array');
  
    console.time('Filter Even Numbers');
    let oddBatch1Array = batch1.filter(num => num % 2 !== 0);
    let oddBatch2Array = batch2.filter(num => num % 2 !== 0);
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
