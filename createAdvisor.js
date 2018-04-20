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
		value: [],
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
			let totalPortfolioWorth = 0
			this.portfolio.forEach(transaction => {
				if (transaction.purchase) {
					totalPortfolioWorth += transaction.price * transaction.quantity
				} else {
					totalPortfolioWorth -= transaction.price * transaction.quantity
				}
			})
		},
		enumerable: false,
	},
	purchase: {
		value: function (stockSymbol, stockShares, stockValuation) {
			this.portfolio.push(
				{
					stockSymbol,
					stockShares,
					stockValuation,
					purchase: true
				}
			)
		},
		enumerable: false
	},
	sell: {
		value: function (stockSymbol, stockShares, stockValuation) {
			this.portfolio.push(
				{
					stockSymbol,
					stockShares,
					stockValuation,
					purchase: false
				}
			)

		},
		enumerable: false
	}
})