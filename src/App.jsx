import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    problemDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the server
      await axios.post("http://localhost:3001/SendEmail", formData);
      toast.success("✅Email Sent Sucessfully");
      setFormData({ name: "", email: "", mobile: "", problemDescription: "" });
    } catch (error) {
      console.log("yaha se nhi gya bbai ");
      console.error("Error sending email:", error);
      toast.error("Email Not sent 😔");
    }
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="bg-1"></div>
      <div className="bg-2"></div>
      <div className="floating-form">
        <div className="Company-info">
          <img src={logo} alt="Company's Logo" />
        </div>
        <div className="User-input">
          <form onSubmit={handleSubmit}>
            <div className="form-row-1">
              <label htmlFor="name" className="Nam">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-row-2">
              <label htmlFor="email" className="Ema">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="mobile" className="mob">
                Mobile Number:
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="form-row-3">
              <label htmlFor="problemDescription" className="des">
                Describe your problem:
              </label>
              <textarea
                id="problemDescription"
                name="problemDescription"
                rows="7"
                value={formData.problemDescription}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-row-4">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
