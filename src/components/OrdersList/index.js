import React, { useState, useEffect } from "react";
import moment from "moment";

const SORT_TYPES = {
  ASC: "ASC",
  DESC: "DESC"
};

const OrdersList = ({ orders }) => {
  const [ordersList, setOrdersList] = useState([]);
  const [currentSortType, setCurrentSortType] = useState(SORT_TYPES.ASC);

  useEffect(() => {
    setOrdersList(orders);
  }, [orders]);

  const compare = key => {
    switch (currentSortType) {
      case SORT_TYPES.ASC:
        return (a, b) => {
          if (a[key] < b[key]) return 1;
          if (a[key] > b[key]) return -1;
          return 0;
        };

      case SORT_TYPES.DESC:
        return (a, b) => {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
        };

      default:
        return (a, b) => {
          return 0;
        };
    }
  };

  const nextSortType = () => {
    switch (currentSortType) {
      case SORT_TYPES.ASC:
        setCurrentSortType(SORT_TYPES.DESC);
        break;

      case SORT_TYPES.DESC:
        setCurrentSortType(SORT_TYPES.ASC);
        break;

      default:
        setCurrentSortType(SORT_TYPES.ASC);
        break;
    }
  };

  const sortBy = key => {
    let arrayCopy = ordersList;
    arrayCopy.sort(compare(key));
    setOrdersList([...arrayCopy]);
    nextSortType();
  };

  return (
    <div className="OrdersList">
      {ordersList.length > 0 ? (
        <table className="OrdersList__table">
          <thead>
            <tr>
              <th onClick={() => sortBy("user_email")}>User email</th>
              <th onClick={() => sortBy("date")}>Date</th>
              <th onClick={() => sortBy("value")}>Value</th>
              <th onClick={() => sortBy("currency")}>Currency</th>
              <th onClick={() => sortBy("status")}>Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersList.map(order => {
              return (
                <tr key={order._id}>
                  <td>{order.user_email}</td>
                  <td>{moment(order.date).format("DD.MM.YYYY HH:mm:ss")}</td>
                  <td>{order.value}</td>
                  <td>{order.currency}</td>
                  <td>{order.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <span>No more orders</span>
      )}
    </div>
  );
};

export { OrdersList };
