
const createDistribution = (weights, size) => {
    const distribution = [];
    const sum = weights.reduce((a, b) => a + b);
    const quant = size / sum;
  	for (let i = 0; i < weights.length; ++i) {
      	const limit = quant * weights[i];
      	for (let j = 0; j < limit; ++j) {
          	distribution.push(i);
        }
    }
  	return distribution;
};

const randomIndex = (distribution) => {
  	const index = Math.floor(distribution.length * Math.random());  // random index
    return distribution[index];  
};

const randomItem = (array, distribution) => {
    const index = randomIndex(distribution);
    return array[index];
};
