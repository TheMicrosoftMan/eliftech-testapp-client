import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getOrders, uploadOrdersFile } from "./_actions/orders.actions";
import { OrdersList } from "./components/OrdersList";
import { FileUploader } from "./components/FileUploader";
import { Paging } from "./components/Paging";
import { Spinner } from "./components/Spinner";

const App = ({ orders, pending, getOrders, uploadOrdersFile }) => {
  useEffect(() => {
    const loadOrders = () => {
      getOrders(0);
    };

    loadOrders();
  }, [getOrders]);

  const sendFile = file => {
    if (file)
      uploadOrdersFile(file)
        .then(() => alert("Success"))
        .catch(err => alert(`Error:\n${err}`));
  };

  const goToPage = pageNumber => {
    getOrders(pageNumber);
  };

  return (
    <div className="App">
      {pending && <Spinner />}
      <FileUploader sendFile={sendFile} />
      <OrdersList orders={orders} />
      <Paging goToPage={goToPage} />
    </div>
  );
};

const mapDispatchToProps = {
  getOrders: getOrders,
  uploadOrdersFile: uploadOrdersFile
};

const mapStateToProps = state => {
  const { orders } = state;
  return orders;
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export { connectedApp as App };
