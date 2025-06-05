import { data } from './transactions.js'

//TODO: 1. Vyfiltrovat transkacie podla to ci obsahuju amount, createdAt (timestamp) , customerName a state sa rovna canceled
// 2. Sortovat transkacie podla timeStampu od najnovych po nastarsie
// 3. Zoskupit transkaie podla roku

const canceledTransactions = (transactions) => {
  return transactions
    .filter(data => 
      data.state === 'canceled' &&
      data.createdAt &&
      data.customerName && 
      data.amount
    )
    .sort((a, b) => b.createdAt - a.createdAt)
    .reduce((acc, item) => {
      const year = item.year
      
      if (!acc[year]) {
        acc[year] = []
      }

      acc[year].push(item)

      return acc
  }, {})
}

console.log(canceledTransactions(data))