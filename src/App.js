import React, {useState} from "react";
import './App.css';

function App() {
    const [bananaCounter, setBananaCounter] = useState(0);
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);
    const [voornaam, setVoornaam] = useState('');
    const [achternaam, setAchternaam] = useState('');
    const [leeftijd, setLeeftijd] = useState('');
    const [postcode, setPostcode] = useState('');
    const [opmerking, setOpmerking] = useState('');
    const [clicked, toggleClicked] = useState(false);
    const [bezorgmoment, setBezorgmoment] = useState('');
    const [bezorgfrequentie, setBezorgfrequentie] = useState('');

    function handleReset() {
        setBananaCounter(0);
        setStrawberryCounter(0);
        setAppleCounter(0);
        setKiwiCounter(0);
    }

    function handleSubmit(e) {
        console.log({bananaCounter}, {strawberryCounter}, {appleCounter}, {kiwiCounter}, {voornaam}, {achternaam}, {leeftijd}, {postcode}, {bezorgfrequentie}, {bezorgmoment}, {opmerking});
        e.preventDefault();
    }

    return (<>
            <h1>Fruitmand bezorgservice</h1>
            <p>Bananen</p>
            <button
                type="button"
                onClick={() => setBananaCounter(bananaCounter - 1)}
                disabled={bananaCounter === 0}
            >-
            </button>
            {bananaCounter}
            <button
                type="button"
                onClick={() => setBananaCounter(bananaCounter + 1)}
            >+
            </button>
            <p>Aardbeien</p>
            <button
                type="button"
                onClick={() => setStrawberryCounter(strawberryCounter - 1)}
                disabled={strawberryCounter === 0}
            >-
            </button>
            {strawberryCounter}
            <button
                type="button"
                onClick={() => setStrawberryCounter(strawberryCounter + 1)}
            >+
            </button>
            <p>Appels</p>
            <button
                type="button"
                onClick={() => setAppleCounter(appleCounter - 1)}
                disabled={appleCounter === 0}
            >-
            </button>
            {appleCounter}
            <button
                type="button"
                onClick={() => setAppleCounter(appleCounter + 1)}
            >+
            </button>
            <p>Kiwi's</p>
            <button
                type="button"
                onClick={() => setKiwiCounter(kiwiCounter - 1)}
                disabled={kiwiCounter === 0}
            >-
            </button>
            {kiwiCounter}
            <button
                type="button"
                onClick={() => setKiwiCounter(kiwiCounter + 1)}
            >+
            </button>
            <button
                type="button"
                onClick={(handleReset)}
            >Reset
            </button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="voornaam">Voornaam</label>
                <input
                    type="text"
                    id="voornaam"
                    value={voornaam}
                    onChange={(e) => setVoornaam(e.target.value)}/>
                <label htmlFor="achternaam">Achternaam</label>
                <input
                    type="text"
                    id="achternaam"
                    value={achternaam}
                    onChange={(e) => setAchternaam(e.target.value)}/>
                <label htmlFor="leeftijd">Leeftijd</label>
                <input
                    type="number"
                    id="leeftijd"
                    placeholder="0"
                    value={leeftijd}
                    onChange={(e) => setLeeftijd(e.target.value)}/>
                <label htmlFor="postcode">Postcode</label>
                <input
                    type="text"
                    id="postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                />
                <label htmlFor="bezorgfrequentie">Bezorgfrequentie</label>
                <select
                    name="bezorgfrequentie"
                    id="bezorgfrequentie"
                    onChange={(e) => {
                        const selectedBezorgfrequentie = e.target.value;
                        setBezorgfrequentie(selectedBezorgfrequentie);
                    }}>                }>
                    <option
                        value="wekelijks">Iedere week</option>
                    <option
                        value="tweewekelijks">Om de week</option>
                    <option
                        value="maandelijks">Iedere maand</option>
                </select>
                <span>
                    <input
                        type="radio"
                        name="bezorgmoment"
                        id="overdag"
                        value="overdag"
                        checked={bezorgmoment === "overdag"}
                        onChange={(e) => setBezorgmoment(e.target.value)}
                    />
                    <label htmlFor="overdag">Overdag</label>
                    <input
                        type="radio"
                        name="bezorgmoment"
                        id="avond"
                        value="avond"
                        checked={bezorgmoment === "avond"}
                        onChange={(e) => setBezorgmoment(e.target.value)}
                    />
                    <label htmlFor="avond">'s Avonds</label>
                </span>
                <label htmlFor="opmerking">Opmerking</label>
                <textarea
                    id="opmerking"
                    rows="10"
                    cols="30"
                    value={opmerking}
                    onChange={(e) => setOpmerking(e.target.value)}></textarea>
                <span>
                    <input
                        type="checkbox"
                        id="voorwaarden"
                        onClick={toggleClicked}/>
                    <label htmlFor="voorwaarden">Ik ga akkoord met de voorwaarden</label>
                </span>
                <button
                    type="submit"
                    disabled={!clicked}
                >Verzend
                </button>
            </form>
        </>);
}

export default App;
