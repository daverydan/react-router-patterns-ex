import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ColorForm = ({ addColor }) => {
  const INITIAL_STATE = { name: "", hex: "#000000" };
  const history = useHistory();
  const [form, setForm] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    for (const property in form) {
      if (form[property] === "") return;
    }
    addColor(form);
    history.push("/colors");
  };
  return (
    <div
      className="ColorForm container"
      style={{ maxWidth: "320px", width: "100%" }}
    >
      <button onClick={() => history.goBack()} className="btn btn-danger my-3">
        Cancel
      </button>
      <h1>New Color</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="color name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="color"
            name="hex"
            id="hex"
            className="form-control"
            value={form.hex}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Add Color
        </button>
      </form>
    </div>
  );
};

export default ColorForm;
