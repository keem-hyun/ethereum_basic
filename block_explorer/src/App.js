import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";

import "./App.css";

// TODO: README를 참고해서 Alchemy 메인넷 API 키를 환경변수로 설정해주세요.
const settings = {
  apiKey: 'FYWmvYrrAd7NfCMZKrj1Dy8QDRK_SLYG',
  network: Network.ETH_MAINNET,
};

// Alchemy SDK는 여러 가지 패키지를 담고 있는 라이브러리입니다.
// (참고: https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [accountBalance, setAccountBalance] = useState();

  useEffect(() => {
    // 가장 최근에 생성된 블록 번호를 조회하는 API입니다. 
    // (참고: https://docs.alchemy.com/reference/sdk-getblocknumber)
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  });

  async function getAccountBalance() {
    try {
      const address = await alchemy.core.resolveName("vitalik.eth");
      const balance = await alchemy.core.getBalance(address, "latest");
      setAccountBalance(balance.toString());
    } catch (error) {
      console.error("Error resolving ENS name or getting balance:", error);
    }
  }

  // TODO: README를 참고하여 자유롭게 페이지를 구성해주세요.
  return (
    <div className="App">
      <h1>블록 익스플로러 만들기</h1>
      <div>
        <strong>Latest Block Number:</strong> {blockNumber}
      </div>
      <div>
        <button onClick={getAccountBalance}>vitalik 잔액 조회</button>
        {accountBalance && (
          <div>
            <strong>Vitalik Account Balance:</strong> {accountBalance}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
