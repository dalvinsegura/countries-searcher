import { useState, useEffect } from "react";
import "./all-countries.scss";

const AllCountries = () => {
  const [dataCountry, setDataCountry] = useState([]);

  useEffect(() => {
    const fetchingData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();

      setDataCountry(data);
      console.log(data);
    };
    fetchingData();
  }, []);

  const PreviewCard = () => {
    return dataCountry.map((country) => (
      <div key={country.name.official} className="preview-card">
        <div className="img-container">
          <img src={country.flags.png} alt="a" />
        </div>

        <div className="preview-text-content">
          <h3>{country.name.official}</h3>

          <h5 className="country-details">
            Population:{" "}
            <span className="values">
              {country.population.toLocaleString()}
            </span>
          </h5>
          <h5 className="country-details">
            Region: <span className="values">{country.region}</span>
          </h5>
          <h5 className="country-details">
            Capital: <span className="values">{country.capital}</span>
          </h5>
        </div>
      </div>
    ));
  };

  return (
    <div className="preview-container">
      <PreviewCard />
    </div>
  );
};

export default AllCountries;
