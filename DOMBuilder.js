const contentHook = document.getElementById('contentHook')
const fragment = document.createDocumentFragment()

let coHeading = h1(philBookchef.company, 'h1')
let philHeading = h3('Lead Financial Advisor: ' + philBookchef.name)
let specHeading = h3('Specializing in ' + philBookchef.specialty)

appendinator(fragment, coHeading)
appendinator(fragment, philHeading)
appendinator(fragment, specHeading)
appendinator(contentHook, fragment)
