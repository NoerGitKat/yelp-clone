import React from "react";

const ListRow = ({ name, location, price_range, rating }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{location}</td>
      <td>{"$".repeat(price_range)}</td>
      <td>{rating}</td>
      <td>
        <button className="btn btn-warning">Update</button>
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default ListRow;
