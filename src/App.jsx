/* File: App.jsx located in RootFolder/src/ */
import { useState, useEffect } from "react";

function App() {
  // State to hold array type data
  const [countryList, setCountryList] = useState([]);

  // State for selected input value
  const [InputData, setInputData] = useState({
    userCountry: ""
  });

  // fetching or initializing array data
  useEffect(() => {
    // In real projects, this could be an API call
    const countries = ["Pakistan", "India", "USA", "United Kingdom", "Canada", "Australia"];
    setCountryList(countries);
  }, []);

  // Handle select change
  const onChangeInputData = (event) => {
    setInputData({ ...InputData, [event.target.name]: event.target.value });
  };

  // Handle form submit
  const handleForm = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
    console.log("User Country:", InputData.userCountry);
  };

  return (
    <div>
      <h2>Select Country</h2>

      <form onSubmit={handleForm}>
        <select
          name="userCountry"
          id="userCountry"
          value={InputData.userCountry}
          onChange={onChangeInputData}
        >
          <option value="">Select your country</option>

          {/* Dynamically render options */}
          {countryList.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;