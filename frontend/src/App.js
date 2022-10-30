import { Web3Modal } from "@web3modal/react";
import { Home } from "./pages/Home";
import { Linked } from "./pages/Linked";
import { Unlinked } from "./pages/Unlinked";

const config = {
  projectId: "f85efbeb3a348e5c7af1718be592eae8",
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "web3Modal",
  },
};

function App() {
  return (
    <>
      <Home />
      <Web3Modal config={config} />
    </>
  );
}

export default App;
