
import './App.css';
import NewYoutubeform from './components/NewYoutubeForm';
import Youtubeform from './components/Youtubeform';
import FormWithManuallyTriggeringValidation from './components/FormWithManuallyTriggeringValidation';
import NewYoutubeform2 from './components/newYoutubeForm2';

function App() {
  return (
    <div className="App">
      {/* <Youtubeform/> */}
      {/* <NewYoutubeform/> */}
      {/* <NewYoutubeform2/> */}
     <FormWithManuallyTriggeringValidation/>
    </div>
  );
}

export default App;
