import { useEffect, useState } from "react";
import { ethers } from "ethers";
import deauthabi from "../deauthabi.json";

export const useLockContract = () => {
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const _contract = new ethers.Contract(
      "0xd8e795d1e3F2Ac2Cc70fb21821f2019a777e2f9f",
      deauthabi.abi,
      provider
    );
    setContract(_contract);
  }, []);

  return contract;
};
