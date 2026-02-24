import { useState } from "react";

const FormStateManagement = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="tail_div">
      <p className="font-bold">**Exercise 5: Form State Management**</p>
      <hr />
      <p>
        Create a registration form with fields for: - Name - Email - Password
        Display the form data in real-time below the form as the user types.
      </p>
      <hr />
      <p className="font-bold pb-5">Solution:</p>
      <div className="flex flex-col items-end w-[60%] gap-2">
        <div>
          <label>
            Name:
            <input
              type="text"
              className="ml-2"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="text"
              className="ml-2"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              className="ml-2"
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
          </label>
        </div>
      </div>
      <div>
        <h1 className="font-bold mt-2">Form data:</h1>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
      </div>
    </div>
  );
};

export default FormStateManagement;
