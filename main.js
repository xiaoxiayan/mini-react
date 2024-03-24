console.log('mainjs')

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <App />
// )


// v1
const textEl =  document.createTextNode('App')
const App = document.createElement("div")
App.id = 'app'
App.appendChild(textEl)
document.querySelector("#root").append(App)



// v2


