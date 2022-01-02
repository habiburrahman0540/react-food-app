
import {Fragment, useState} from "react";
import Header from "./Components/Layout/Header/Header"
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart"

function App() {
  const [modalOpen,setModalOpen] = useState(false)
  const openMadalHandler =()=>{
    setModalOpen(true)
  }
  const closeMadalHandler =()=>{
    setModalOpen(false)
  }
  return (
    <Fragment>
      {modalOpen && <Cart closeModal={closeMadalHandler}/>}
        <Header openModal={openMadalHandler}/>
        <main>
          <Meals/>
        </main>
    </Fragment>
  );
}

export default App;
