import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import './app.scss'

function App() {
    const [state,setState] = useState({
        'name':'',
        'email':'',
        'msg':''
    })

    const handleChange = (event) => {
        const {name,value} = event.target;
        setState(
            {
                ...state,
                [name]:event.target.value
            }
        )
    }
    return (
        <div>
            <h4>Angajeaza-ma</h4>
            <p>Scrie-mi cateva date despre cum vrei sa arate proiectul tau!</p>
            <form action="/action_page.php" onSubmit={(e)=>{
                e.preventDefault();
                console.log("Message sent  to", Object.values(state).join(" "))
            }}>
                <div><label htmlFor="fname">Nume:</label>
                    <input type="text" id="name" name="name" value={state.name} onChange={handleChange}/></div>
                <div><label htmlFor="lname">Email:</label>
                    <input type="email" id="email" name="email" value={state.email}  onChange={handleChange}/></div>
                <div><label htmlFor="lname">Message:</label>
                    <textarea id="msg" name="msg"  onChange={handleChange} value={state.msg}></textarea></div>
                <div><input type="submit" value="Submit"/></div>
            </form>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('contact'))
