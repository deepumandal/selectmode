
import './App.css';
import Figma from './componenet/Figma';
import { MyProvider } from './context/Themecon';
function App() {
  return (
    
      <MyProvider>
      <Figma/>
      </MyProvider>
  );
}

export default App;
