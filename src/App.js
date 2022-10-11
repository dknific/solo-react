import { PoliticianList } from './components/PoliticianList';
import { UserForm } from './components/UserForm';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <h1>Whos My Representative?</h1>
      <div className="tools-container">
        <PoliticianList />
        <UserForm />
      </div>
    </div>
  );
}

export default App;
