/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categorySums = {}
  transactions.forEach(transaction => {
    const { category, price } = transaction
    // console.log(category)
    if (!categorySums[category]) {
      categorySums[category] = 0
    }
    categorySums[category] += price
  });
  // console.log(categorySums)

  let categories = []
  categories = Object.keys(categorySums).map(category =>{
    return {
      category : category,
      totalSpent : categorySums[category]
    }
  })

  return categories ;
}



let ans = calculateTotalSpentByCategory([        
  {
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
},
{
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'grocerry',
  itemName: 'Pizza',
}
])

console.log(ans)

module.exports = calculateTotalSpentByCategory;
