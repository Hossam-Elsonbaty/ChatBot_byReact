import 'primeicons/primeicons.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";      
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/home';
import ChannelType from '../src/components/channelType';
import ChannelInfo from '../src/components/channelInfo';
import OrgChat from '../src/components/orgChat';
import SignUp from './components/signUp';
import Login from './components/login';
import Dashboard from './components/dashboard';
import CreateBot from './components/createBot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sign-up" exact element={<SignUp />}/>
        <Route path="/create-channel" exact element={<ChannelType />}/>
        <Route path="/dashboard/:userId" exact element={<Dashboard />}>
          <Route path="create-bot/:appType" exact element={<CreateBot />}/>
        </Route>
        <Route path="/log-in" exact element={<Login />}/>
        <Route path="/create-chatbot/:appType" exact element={<OrgChat />}/>
        <Route path="create-channel/channel-details/:appType" exact element={<ChannelInfo />}/>
      </Routes>
    </Router>
  );
}

export default App;
