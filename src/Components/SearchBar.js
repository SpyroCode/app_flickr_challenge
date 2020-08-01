import React, { useState } from "react";
import { connect } from "react-redux";

import { fetchImages } from "../actions";

const SearchBar = (props) => {
  const [Term, setTerm] = useState("");

  const onInputChange = (text) => {
    setTerm(text);
  };

  return (
    <center>
      <div className="ui action input" style={{ marginTop: 16 }}>
        <input
          type="text"
          placeholder="Search images..."
          value={Term}
          onChange={(event) => onInputChange(event.target.value)}
        />
        <button className="ui button" onClick={() => props.fetchImages(Term)}>
          Search
        </button>
      </div>
    </center>
  );
};

// export default SearchBar;

export default connect(null,{fetchImages})(SearchBar)
