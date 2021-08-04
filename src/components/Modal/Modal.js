import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import "./Modal.css";

toast.success({
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

const Modal = (props) => {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const notify = () => toast.success("Data Saved SuccessFully!");

  const validateFields = () => {
    var validation = "";

    if (itemName === "") {
      validation = "Please enter valid name.";
    } else if (description === "") {
      validation = "Please enter valid description.";
    } else if (amount === "") {
      validation = "Please enter Price.";
    } else if (date === "") {
      validation = "Please enter Date.";
    }

    return validation;
  };

  const saveData = () => {
    const validation = validateFields();
    if (validation == "") {
      props.getData({
        itemName: itemName,
        description: description,
        amount: amount,
        date: new Date(date),
      });
      _clearData();
      notify();
      swal("Data Saved Successfully! ", " ", "success");
      props.close();
    } else {
      alert(validation);
    }
  };
  const _clearData = () => {
    setItemName("");
    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
    <>
      <div
        className="modal-wrapper"
        style={{
          transform: props.show ? "translateY(-5vh)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
          height: props.show ? "auto" : "0",
        }}
      >
        <div className="modal-header">
          <p>Add Expense</p>
          <span onClick={props.close} className="close-modal-btn">
            x
          </span>
        </div>
        <div className="modal-content">
          <div className="modal-body">
            <form action="">
              <div className="main-div-input">
                <div className="modal-div-label">
                  <label className="modal-label">Item Name:</label>
                </div>
                <div className="modal-div-input">
                  <input
                    className="modal-input"
                    type="text"
                    autoFocus={true}
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    placeholder="Enter Item Name"
                  />
                </div>

                <div className="modal-div-label">
                  <label className="modal-label">Description:</label>
                </div>
                <div className="modal-div-input">
                  <textarea
                    className="modal-input"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter Item Description"
                    name="description"
                  ></textarea>
                </div>

                <div className="modal-div-label">
                  <label className="modal-label">Amount:</label>
                </div>
                <div className="modal-div-input">
                  <input
                    className="modal-input"
                    type="number"
                    min="0"
                    pattern="[0-9]+"
                    title="Valid price"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter Item Amount"
                  />
                </div>

                <div className="modal-div-label">
                  <label className="modal-label">Date:</label>
                </div>
                <div className="modal-div-input">
                  <input
                    className="modal-input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                  />
                </div>
              </div>

              <div className="modal-div-btn">
                <button className="saveResult" onClick={saveData} type="button">
                  Save Result
                </button>
                <button
                  onClick={props.close}
                  className="cancelButton"
                  type="button"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
          {/* <div className="modal-footer">
           
          </div> */}
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Modal;
