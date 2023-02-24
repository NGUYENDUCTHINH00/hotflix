import ContentAdmin from "./ContentAdmin";
import "./admin.css";
import React from "react";

function Admin() {
  return (
    <>
      <div className='top'>
        <img src='http://hotflix.volkovdesign.com/admin/img/logo.svg' alt='' />
        <h2 className='dashboard'>Dashboard</h2>
        <button className='btn-addItem'> ADD ITEM</button>
      </div>
      <ContentAdmin />
    </>
  );
}

export default Admin;
