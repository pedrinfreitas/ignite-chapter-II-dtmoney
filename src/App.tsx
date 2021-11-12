import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);

  // function clickOpenNewTransactionModal() {
  //   setIsNewTransactionModal(true);
  // }

  // function clickCloseNewTransactionModal() {
  //   setIsNewTransactionModal(false);
  // }

  function clickNewTransactionModal() {
    setIsNewTransactionModal(!isNewTransactionModal);
  }


  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={clickNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModal}
        onRequestClose={clickNewTransactionModal}
      />

    </TransactionsProvider>
  );
};
