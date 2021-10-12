import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState("");
    const [ageValue, setAgeValue] = React.useState(0);
    const [remarkValue, setRemarkValue] = React.useState("");
    const [newsletterChecked, setNewsletterChecked] = React.useState(false);

  return (
    <div className="form-div">
      <form>
          <fieldset className="data-set">
              <legend>Gegevens</legend>
              <label htmlFor="name-input">Naam:
                  <input
                      type="text"
                      id="name-input"
                      value={nameValue}
                      onChange={(e) => setNameValue(e.target.value)}
                  />
              </label>
              <label htmlFor="age-input">Leeftijd:
                  <input
                      type="number"
                      id="age-input"
                      value={ageValue}
                      onChange={(e) => setAgeValue(e.target.value)}
                  />
              </label>
          </fieldset>
          <fieldset className="review-set">
              <legend>Jouw Review</legend>
              <label htmlFor="remark-input">Opmerkingen:</label>
              <textarea
                  id="remark-input"
                  placeholder="Wat vond je van het recept?"
                  value={remarkValue}
                  onChange={(e) => setRemarkValue(e.target.value)}
              >
              </textarea>
              <label htmlFor="newsletter-check">
                  <input
                      type="checkbox"
                      id="newsletter-check"
                      checked={newsletterChecked}
                      onClick={() => setNewsletterChecked(!newsletterChecked)}
                  />
                  Ik schrijf me in voor de nieuwsbrief
              </label>
              <button
                  type="submit"
              >
                  Versturen
              </button>
          </fieldset>


      </form>
    </div>
  );
}

export default App;
