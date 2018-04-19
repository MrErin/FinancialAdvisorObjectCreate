const philBookchef = Object.create({}, {
	company: {
		value: 'Totally Legit Financial Services',
		enumerable: true,
		writeable: true
	},
	specialty: {
		value: 'Completely 100% on the up-and-up financial transactions that are legal',
		enumerable: true,
		writeable: true
	},
	name: {
		value: 'Phil Bookchef',
		enumerable: true,
		writeable: false
	},
	portfolio: {
		value: {
			stockSymbol: {
				value: 'APPL',
				enumerable: true,
				writable: true
			},
			stockShares: {
				value: 152,
				enumerable: true,
				writable: true
			},
			stockValuation: {
				value: 30400,
				enumerable: true,
				writable: true
			}
		},
		enumerable: true,
		writeable: true
	},
	officialWorth: {
		value: 0.17,
		enumerable: true,
		writeable: false
	},
	actualWorth: {
		value: function () {
			const add = (total, num) => {
				return total + num
			}
			return this.portfolio.reduce(add, 0)
		},
		enumerable: false,
	},
	purchase: {
		value: function (symbol, quantity, valuation) {
            

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