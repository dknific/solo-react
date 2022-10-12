import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import PoliticianList from './components/PoliticianList';
import InfoForm from './components/InfoForm';

import { arrayOfStates, baseURL } from './Constants';
import './styles/App.scss';
import 'react-dropdown/style.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [isSenatorMode, setIsSenatorMode] = useState(false);
  const [selectedState, setSelectedState] = useState();
  const [politicianList, setPoliticianList] = useState();
  const [selectedPolitician, setSelectedPolitician] = useState();

  useEffect(() => {
    let isValid = false;
    if (selectedState) {
      isValid = true;
    }

    setFormIsValid(isValid);
  }, [selectedState]);

  function handleDropDownChange(event) {
    setSelectedState(event.value);
  }

  function handlePoliticianClick(politicianObj) {
    setSelectedPolitician(politicianObj);
  }

  async function getPoliticians() {
    if (formIsValid) {
      setIsLoading(true);
      setSelectedPolitician();
      const searchMode = isSenatorMode ? 'senators' : 'representatives';
      const apiURL = `${baseURL}/${searchMode}/${selectedState}`;
      const response = await fetch(apiURL).then(res => res.json());

      setPoliticianList(response.results);
      setIsLoading(false);
    }
  }

  function renderLoadingScreen() {
    return (
      <div className="intro-screen">
        <p>Loading results, please wait...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="app-container">
        <h1>Who&apos;s My {isSenatorMode ? ('Senator') : ('Representative')}?</h1>
        <div className="button-container">
          <div className="top-container">
            <p>Searching for</p>
            <button onClick={() => setIsSenatorMode(false)} className={isSenatorMode ? '' : 'active'}>Representatives</button>
            <button onClick={() => setIsSenatorMode(true)} className={isSenatorMode ? 'active' : ''}>Senators</button>
          </div>
          <div className="bottom-container">
            <p>from </p>
            <Dropdown options={arrayOfStates} onChange={(event) => handleDropDownChange(event)} />
            <button disabled={!formIsValid} onClick={() => getPoliticians()} className={`submit-button ${formIsValid && 'submit-valid'}`}>Search</button>
          </div>
        </div>
    {
      isLoading 
      ? (renderLoadingScreen())
      : (
        <div className="tools-container">
          <PoliticianList data={politicianList} handleClick={handlePoliticianClick} />
          <InfoForm politician={selectedPolitician} />
        </div>
      )
    }
      </div>
    </div>
  );
}

export default App;
