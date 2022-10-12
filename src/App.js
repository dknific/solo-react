import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import PoliticianList from './components/PoliticianList';
import UserForm from './components/UserForm';
import { arrayOfStates } from './arrayOfStates';

import './styles/App.scss';
import 'react-dropdown/style.css';

const baseURL = 'http://localhost:4000';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [isSenatorMode, setIsSenatorMode] = useState(false);
  const [selectedState, setSelectedState] = useState();
  const [politicianList, setPoliticianList] = useState([]);

  useEffect(() => {
    validateForm();
  }, [selectedState]);

  function handleDropDownChange(event) {
    setSelectedState(event.value);
  }

  function validateForm() {
    let isValid = false;
    if (selectedState) {
      isValid = true;
    }

    setFormIsValid(isValid);
  }

  async function getPoliticians() {
    if (formIsValid) {
      console.log('running');
      setIsLoading(true);
      const searchMode = isSenatorMode ? 'senators' : 'representatives';
      const apiURL = `${baseURL}/${searchMode}/${selectedState}`;
      const response = await fetch(apiURL).then(res => res.json());

      setPoliticianList(response.results);
      setIsLoading(false);
    }
  }

  return (
    <div className="App">
      <div className="app-container">
        <h1>Who&apos;s My {isSenatorMode ? ('Senator') : ('Representative')}?</h1>
        <div className="button-container">
            <p>Searching for</p>
            <button onClick={() => setIsSenatorMode(false)} className={isSenatorMode ? '' : 'active'}>Representatives</button>
            <button onClick={() => setIsSenatorMode(true)} className={isSenatorMode ? 'active' : ''}>Senators</button>
            <p>from</p>
            <Dropdown options={arrayOfStates} onChange={(event) => handleDropDownChange(event)} />
            <button onClick={() => getPoliticians()}>Search</button>
        </div>
        <div className="tools-container">
          <PoliticianList data={politicianList} showSenators={isSenatorMode} />
          <UserForm />
        </div>
      </div>
    </div>
  );
}

export default App;
