const financialAdvisor = (company, specialty, name, portfolio, officalWorth) => Object.create({}, {
	company: {
		value: company,
		enumerable: true,
		writeable: true
	},
	specialty: {
		value: specialty,
		enumerable: true,
		writeable: true
	},
	name: {
		value: name,
		enumerable: true,
		writeable: false
	},
	portfolio: {
		value: portfolio,
		enumerable: false,
		writeable: true
	},
	officialWorth: {
		value: officalWorth,
		enumerable: true,
		writeable: false
	},
	actualWorth: {
		value: function() {
			const add = (total, num) => {
				return total + num
			}
			return this.portfolio.reduce(add,0)
		},
		enumerable: false,
	},
	purchase: {
		value: function (quantity, price) {
			const buyWorth = ((quantity * price) * -1)
			this.portfolio.push(buyWorth)
		},
		enumerable: false
	},
	sell: {
		value: function (quantity, price) {
			const sellWorth = quantity * price
			this.portfolio.push(sellWorth)
			//need to find a way to pull the stock ticker out of the portfolio array

		},
		enumerable: false
	}
})

const philBookchef = financialAdvisor('Totally Legit Financial Services', 'Completely 100% on the up-and-up financial transactions that are legal', 'Phil Bookchef', [1000], 0.17)