import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

import "./country-detailed.scss";

const CountryDetailed = () => {
  const { code } = useParams();
  const [dataCountry, setDataCountry] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fetchingData = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
      const data = await res.json();
      
      setDataCountry(data);
    };
    fetchingData();
  }, [location]);

  return ( 

    dataCountry.map((country, key) => (
      <div key={key} className="country-detailed">
        <div className="back-link-content">
          <Link className="back-link" to="/">
            <i className="fa-solid fa-arrow-left"></i> Back
          </Link>
        </div>

        <div className="countryDetails-container">
          <div className="img-content">
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.official}`}
            />
          </div>

          <div className="informations-container">
            <h1 className="country-name">{country.name.official}</h1>

            <div className="descritive-information">
              <h5>
                Common Name: <span>{country.name.common}</span>
              </h5>
              <h5>
                Population:{" "}
                <span>{country.population.toLocaleString().toString()}</span>
              </h5>
              <h5>
                Region <span>{country.region}</span>
              </h5>
              <h5>
                Sub Region:{" "}
                <span>
                  {country.subregion == null
                    ? "Not exist sub region"
                    : country.subregion}
                </span>
              </h5>
              <h5>
                Capital:{" "}
                <span>
                  {country.capital == null
                    ? "Not exist capital"
                    : country.capital}
                </span>
              </h5>
              <h5>
                Top Level Domain: <span>{country.tld[0]}</span>
              </h5>
              <h5>
                Currencies:{" "}
                {country.currencies == null ? (
                  <span>Not exist currencies</span>
                ) : (
                  Object.values(country.currencies).map((x, key) => (
                    <span key={key}>{x.name}</span>
                  ))
                )}
              </h5>
              <h5>
                Languages:{" "}
                {country.languages == null ? (
                  <span>Not exist Languages</span>
                ) : (
                  Object.values(country.languages).map((x, key) => (
                    <span className="language" key={key}>
                      {x}{" "}
                    </span>
                  ))
                )}
              </h5>
            </div>

            <div className="border-Countries-content">
              <h5>Borders Countries: </h5>
              <div className="contries-container">
                {country.borders === undefined ? (
                  <span className="not-border">Not Borders</span>
                ) : (
                  country.borders.map((x, key) => (
                    <Link
                      className="link-border"
                      to={`/country/${x}`}
                      key={key}
                    >
                      {x}
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))

   )
};

export default CountryDetailed;
