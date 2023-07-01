export const generate = (numRows: number): number[][] => {
  const output = [];
  if (numRows === 1) {
    output.push([1]);
  }
  if (numRows >= 2) {
    output.push([1]);
    output.push([1, 1]);
  }

  for (let i = 2; i < numRows; i++) {
    const previousElements = output[i - 1];
    const newElements = [1];
    for (let j = 0; j < previousElements.length - 1; j++) {
      const element = previousElements[j] + previousElements[j + 1];
      newElements.push(element);
    }
    newElements.push(1);
    output.push(newElements);
  }
  return output;
};
