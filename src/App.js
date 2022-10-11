import { PoliticianList } from './components/PoliticianList';
import { UserForm } from './components/UserForm';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1>Who&apos;s My Representative?</h1>
        <div className="tools-container">
          <PoliticianList />
          <UserForm />
        </div>
      </div>
    </div>
  );
}

export default App;
