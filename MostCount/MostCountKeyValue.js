const optimizedDuplicates = (arr) => {
    const map = {};
  
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
  
      if (map[value] === undefined) {
        map[value] = 1;
      }
      else {
        map[value]++;
      }
    }
  
    let mostValue;
    let mostCount = 0;
  
    for (const value in map) {
      if (map[value] > mostCount) {
        mostCount = map[value];
        mostValue = value;
      }
    }
  
    return `${mostValue} appeared ${mostCount} times.`;
  };

  module.exports = { optimizedDuplicates };