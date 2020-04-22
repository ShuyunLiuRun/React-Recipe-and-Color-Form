import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Menu from './Menu'
import data from './data'
import * as serviceWorker from './serviceWorker';
import AddColorForm from './AddColorForm'


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Menu recipes={data} />

    {/* test on add color  */}
    <div className="addNewColor">
        <AddColorForm onNewColor={(title,color) => {
            console.log(`you have choosen ${title} and ${color} color`)
            // render(){return (<p>${title} - ${color}</p>);}
        }}/>

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
