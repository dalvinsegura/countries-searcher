import "./searcher.scss";

const Searcher = () => {
  return (
    <div className="searcher">
      <label>
        <i className="fa-solid fa-magnifying-glass icon-searcher"></i>
        <input
          type="text"
          className="input-searcher"
          placeholder="Search for a country..."
        />
      </label>
    </div>
  );
};

export default Searcher;
