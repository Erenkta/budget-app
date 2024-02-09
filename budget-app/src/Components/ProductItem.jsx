import React from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { remove_expense } from "../redux/states/budgetSlice";

export default function ProductItem({ item }) {
  const dispatch = useDispatch()

  const onDelete = () =>{
      dispatch(remove_expense(item.id))
  }

  return (
    <div className="row product-item">
      <div className="col-md-3">{item.name}</div>
      <div className="col-md-3"></div>
      <div className="col-md-3"></div>
      <div className="col">
        <div className="d-flex justify-content-end align-items-center me-2">
          <div>
          <span> {item.cost} $</span>
          </div>
          <button
            onClick={()=>{onDelete()}}
            className="btn btn-danger btn-sm"
            style={{ padding: "5px", marginLeft: "20px" }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
