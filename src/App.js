import React from 'react';
import './App.css';

function App() {
    const [newsletterChecked, setNewsletterChecked] = React.useState(false);

    const [state, setState] = React.useState({
        fullName: "",
        age: "",
        review: ""
    });

    function handleChange(e) {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }

    function handleSubmit(e) {
        console.log(state.fullName);
        console.log(state.age);
        console.log(state.review);
        console.log(newsletterChecked);
        e.preventDefault();
    }

    function checkValues() {
        return !state.fullName || state.age <= 0 || !state.review;
    }

    return (
    <div className="form-div">
        <form onSubmit={(e) => handleSubmit(e)}>
            <fieldset className="data-set">
                <legend>Gegevens</legend>
                <label htmlFor="name-input">Naam:
                    <input
                      type="text"
                      id="name-input"
                      name="fullName"
                      value={state.fullName}
                      onChange={handleChange}
                    />
                </label>
                <label htmlFor="age-input">Leeftijd:
                    <input
                      type="number"
                      id="age-input"
                      name="age"
                      value={state.age}
                      onChange={handleChange}
                    />
                </label>
            </fieldset>
            <fieldset className="review-set">
                <legend>Jouw Review</legend>
                <label htmlFor="remark-input">Opmerkingen:</label>
                <textarea
                  id="remark-input"
                  name="review"
                  placeholder="Wat vond je van het recept?"
                  value={state.review}
                  onChange={handleChange}
                >
                </textarea>
                <label htmlFor="newsletter-check">
                    <input
                        type="checkbox"
                        id="newsletter-check"
                        checked={newsletterChecked}
                        onChange={() => setNewsletterChecked(!newsletterChecked)}
                />
                    Ik schrijf me in voor de nieuwsbrief
                </label>
                <button
                    type="submit"
                    disabled={checkValues()}
                >
                    Versturen
                </button>
            </fieldset>
        </form>
    </div>
    );
}

export default App;
