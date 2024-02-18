const ages = [19, 22, 19, 24, 20, 25, 21, 24, 25, 24];

// 1. Sort the array and find the min and max age
const sortedAges = ages.slice().sort((a, b) => a - b);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];

// 2. Find the median age
const middleIndex = Math.floor(sortedAges.length / 2);
const medianAge =
  sortedAges.length % 2 === 0
    ? (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2
    : sortedAges[middleIndex];

// 3. Find the average age
const sumAges = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sumAges / ages.length;

// 4. Find the range of the ages
const ageRange = maxAge - minAge;

// 5. Compare the value of (min - average) and (max - average), use abs() method
const minDifference = Math.abs(minAge - averageAge);
const maxDifference = Math.abs(maxAge - averageAge);

// Display the results
console.log('Sorted Ages:', sortedAges);
console.log('Min Age:', minAge);
console.log('Max Age:', maxAge);
console.log('Median Age:', medianAge);
console.log('Average Age:', averageAge);
console.log('Age Range:', ageRange);
console.log('Min Difference:', minDifference);
console.log('Max Difference:', maxDifference);