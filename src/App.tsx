import {bufferText} from "@http4t/core/bodies";
import {HttpHandler} from "@http4t/core/contract";
import {requestOf} from "@http4t/core/requests";
import {useState} from 'react';
import './App.css';
import logo from './logo.svg';

function App({http}: { http: HttpHandler }) {
    const [response, setResponse] = useState("nothing");

    function something() {
        http.handle(requestOf("GET", "http://localhost:5001"))
            .then(async r => setResponse(await bufferText(r.body)))
            .catch(console.error)
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <button onClick={something}>fetch</button>
                <textarea value={response
                }/>
            </header>
        </div>
    );
}

export default App;
