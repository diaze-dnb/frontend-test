import React, { useState } from "react";
import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Modal } from "./components/modal/modal";
import { Form } from "./components/form/form";
import { Header } from "./components/header/header";
import { Item } from "./components/item/item";

function App() {
  const [modalClose, setModalClose] = useState<boolean>(false);
  return (
    <div>
      <Header onClickFunction={() => setModalClose(true)} />
      <div className={styles.app}>
        <Modal
          open={modalClose}
          onClose={() => setModalClose(!modalClose)}
          showButtonClose={true}
          // isContainer={true}
        >
          <Form readonly={false} />
        </Modal>
        <Item
          imageURL={
            "https://kredfeed-assets.s3.amazonaws.com/images/businessman.jpg"
          }
          name="Tabla"
          onClickUpdate={() => setModalClose(true)}
          price={120}
          code={"HA123KS345LC4"}
        />
        <Item
          imageURL={
            "https://kredfeed-assets.s3.amazonaws.com/images/businessman.jpg"
          }
          name="Tabla"
          onClickUpdate={() => console.log("update")}
          price={120}
          code={"HA123KS345LC4"}
        />{" "}
        <Item
          imageURL={
            "https://kredfeed-assets.s3.amazonaws.com/images/businessman.jpg"
          }
          name="Tabla"
          onClickUpdate={() => console.log("update")}
          price={120}
          code={"HA123KS345LC4"}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div>modal</div>} />
            <Route path="/hi" element={<div>hi</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
