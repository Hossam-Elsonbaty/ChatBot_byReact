import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";      
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/home';
import ChannelType from '../src/components/channelType';
import ChannelInfo from '../src/components/channelInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/create-channel" exact element={<ChannelType />}/>
        <Route path="create-channel/channel-details" exact element={<ChannelInfo />}/>
      </Routes>
    </Router>
  );
}

export default App;
