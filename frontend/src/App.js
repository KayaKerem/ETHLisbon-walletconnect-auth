import { Web3Modal } from "@web3modal/react";
import AppContent from "./AppContent";
import { Home } from "./pages/Home";
import { Linked } from "./pages/Linked";
import { Unlinked } from "./pages/Unlinked";

const config = {
  projectId: "<YOUR_PROJECT_ID>",
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "web3Modal",
  },
};

function App() {
  return (
    <>
      <Linked />
      <Web3Modal config={config} />
    </>
  );
}

export default App;
