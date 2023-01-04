import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <p> Hello SP404 </p> 
    <p> added a new paragraph </p> 

  </div>
`

setupCounter(document.querySelector('#counter'))
