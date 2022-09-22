import { useState, useEffect } from "react";
import "./all-countries.scss";
import "./searcher.scss";
// import Searcher from "./../seacher/Searcher";

const AllCountries = () => {
  const [dataCountry, setDataCountry] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchingData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();

      setDataCountry(data);
      // console.log(data);
    };
    fetchingData();
  }, []);

  const PreviewCard = () => {
    return dataCountry
      .filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (
          val.name.official.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      })
      .map((country) => (
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
    <div>
      <div className="searcher">
        <label>
          <i className="fa-solid fa-magnifying-glass icon-searcher"></i>
          <input
            type="text"
            className="input-searcher"
            placeholder="Search for a country..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </label>
      </div>

      <div className="preview-container">
        <PreviewCard />
      </div>
    </div>
  );
};

export default AllCountries;
