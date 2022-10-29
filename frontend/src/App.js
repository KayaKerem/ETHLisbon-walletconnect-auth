import './App.css';
import { Web3Modal } from '@web3modal/react'
import AppContent from './AppContent';
import { Home } from './pages/Home';

const config = {
  projectId: '<YOUR_PROJECT_ID>',
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'web3Modal'
  }
}

function App() {
  return (
    <>
      <Home />
      <Web3Modal config={config} />
    </>

  );
}

export default App;
