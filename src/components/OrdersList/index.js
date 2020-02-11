import React, { useState } from "react";
import moment from "moment";

const SORT_TYPES = {
  UP: {
    type: "UP",
    fn: (a, b) => {
      return a.value - b.value;
    }
  },
  DOWN: {
    type: "DOWN",
    fn: (a, b) => {
      return b.value - a.value;
    }
  },
  DEFAULT: {
    type: "DEFAULT",
    fn: (a, b) => a
  }
};

const OrdersList = ({ orders }) => {
  const [valueSorting, setValueSorting] = useState(SORT_TYPES.DEFAULT.type);

  const sortChange = () => {
    let nextSort;

    if (valueSorting === SORT_TYPES.DOWN.type) nextSort = SORT_TYPES.UP.type;
    else if (valueSorting === SORT_TYPES.UP.type)
      nextSort = SORT_TYPES.DEFAULT.type;
    else if (valueSorting === SORT_TYPES.DEFAULT.type)
      nextSort = SORT_TYPES.DOWN.type;

    setValueSorting(nextSort);
  };

  return (
    <div className="OrdersList">
      {orders.length > 0 ? (
        <table className="OrdersList__table">
          <thead>
            <tr>
              <th>User email</th>
              <th>Date</th>
              <th onClick={sortChange}>Value {valueSorting}</th>
              <th>Currency</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[...orders].sort(SORT_TYPES[valueSorting].fn).map(order => (
              <tr key={order._id}>
                <td>{order.user_email}</td>
                <td>{moment(order.date).format("DD.MM.YYYY HH:mm:ss")}</td>
                <td>{order.value}</td>
                <td>{order.currency}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <span>No more orders</span>
      )}
    </div>
  );
};

export { OrdersList };
