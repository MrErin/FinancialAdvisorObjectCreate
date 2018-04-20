//code from class. This satisfies initial requirements

const FinancialAdvisor = Object.create(null, {
	company: {
		value: 'Stratton Oakmont',
		writeable: true,
		enumerable: true
	}, 
	specialty: {
		value: 'Commodities',
		writeable: true,
		enumerable: true
	}, 
	name: {
		value: 'Chaz Vanderbilt',
		enumerable: true
	},
	portfolio: {
		value: []
	},
	worth: {
		value: function() {
			this.portfolio.reduce(
				(currentTotal, nextValue) => {
					if(transaction.purchase) {
						currentTotal += nextValue.price * nextValue.quantity
					} else {
						currentTotal -= nextValue.price * nextValue.quantity
					}
					return currentTotal
				}, 0
			)
            
			// let totalPortfolioWorth = 0
			// this.portfolio.forEach(
			// 	transaction => {
			// 		if (transaction.purchase) {
			// 			totalPortfolioWorth += transaction.price * transaction.quantity
			// 		} else {
			// 			totalPortfolioWorth -= transaction.price * transaction.quantity
			// 		}
			// 	}
			// )
			// return totalPortfolioWorth
		}
	},
	purchase: {
		value: function (ticker, quantity, price) {
			this.portfolio.push(
				{
					ticker,
					quantity,
					price,
					purchase: true
				}
			)
		}
	},
	sell: {
		value: function (ticker, quantity, price) {
			this.portfolio.push(
				{
					ticker,
					quantity,
					price,
					purchase: false
				}
			)

		}
	}
})

// put the below into components.js

const fragment = document.createDocumentFragment()

const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`


for (let key in FinancialAdvisor) {
	fragment.appendChild(section(
		`${capitalize(key)}: ${FinancialAdvisor[key]}`, ''
	))

}

const tickers = {}

FinancialAdvisor.portfolio.forEach(transaction => {
	if(!(transaction.ticker in tickers)){
		tickers[transaction.ticker] = transaction.price * transaction.quantity


	} else {
		if (transaction.purchase) {
			tickers[transaction.ticker] += transaction.price * transaction.quantity
		} else {
			tickers[transaction.ticker] -= transaction.price * transaction.quantity
		}
	}
})

for (const stock in tickers) {
	const currStock = tickers[stock]

	fragment.appendChild(div(
		`I own ${stock} and it is currently worth $${currStock.toFixed(2)}`,
		'card'
	))
}

document.querySelector('#contentHook').appendChild(fragment)


const componentFactory = (type, contents, classes) => {
	const component = document.createElement(type)
	component.textContent = contents
	component.classList = classes

	return component
}

const h1 = (...params) => componentFactory('h1', ...params)
const section = (...params) => componentFactory('section', ...params)
const div = (...params) => componentFactory('div', ...params)
const p = (...params) => componentFactory('p', ...params)
const article = (...params) => componentFactory('article', ...params)

const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`



