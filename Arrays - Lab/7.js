function identicalOrEqual(arr1, arr2) {
  let sumArr1 = 0;
  for (let i = 0; i < arr1.length; i++) {
      arr1[i] = Number(arr1[i]);
      num1 = arr1[i];

      sumArr1 += arr1[i];

      for (let k = 0; k < arr2.length; k++) {
          arr2[k] = Number(arr2[k]);
          num2 = arr2[k]
      }
  }
  if (num1 !== num2) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
  } else {
      console.log(`Arrays are identical. Sum: ${sumArr1}`)
  }
}
  identicalOrEqual(['1','2','3','4','5'], ['1','2','4','4','5'])