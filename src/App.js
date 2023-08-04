
import './App.css';
import NewYoutubeform from './components/NewYoutubeForm';
import Youtubeform from './components/Youtubeform';
import FormWithManuallyTriggeringValidation from './components/FormWithManuallyTriggeringValidation';
import NewYoutubeform2 from './components/newYoutubeForm2';
import DisablingButton from './components/DisablingButton';
import { styled } from 'styled-components';
import LoadingsavedData from './components/LoadingsavedData';
import RestFormdata from './components/ResetFormData';

function App() {
  return (
    <Container>
      {/* <Youtubeform/> */}
      {/* <NewYoutubeform/> */}
      <NewYoutubeform2/>
     <FormWithManuallyTriggeringValidation/>
     <DisablingButton/>
     <LoadingsavedData/>
     <RestFormdata/>
    </Container>
  );
}

export default App;

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
/* align-items: center; */
flex-wrap: wrap;
gap: 1rem;
background-color: #e6a4a4;
`
flex-wrap: wrap;
gap: 1rem;
background-color: #e6a4a4;
`
