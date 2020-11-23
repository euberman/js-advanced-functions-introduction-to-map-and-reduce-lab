function mapToNegativize(sourceArray){
  return sourceArray.map(item => (-1) *item);
};

function mapToNoChange(sourceArray){
  return sourceArray.map(item => item);
};

function mapToDouble(sourceArray){
  return sourceArray.map(item => item * 2);
};

function mapToSquare(sourceArray){
  return sourceArray.map(item => item ** 2);
};
// ================================
function reduceToTotal(sourceArray, startingPoint=0){
  return sourceArray.reduce((total, item) => total + item, startingPoint);
};

function reduceToAllTrue(sourceArray){
  return sourceArray.reduce((total, item) => !item, 0);
};

function reduceToAnyTrue(sourceArray){
  return sourceArray.reduce((total, item) => item, 0);
};
