const componentFactory = (type, contents, classes) => {
	const component = document.createElement(type)
	component.textContent = contents
	component.classList = classes
	return component
}

const h1 = (...params) => componentFactory('h1', ...params)
const h3 = (...params) => componentFactory('h3', ...params)
const h4 = (...params) => componentFactory('h4', ...params)
const div = (...params) => componentFactory('div', ...params)