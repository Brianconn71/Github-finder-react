import React, { useState, useContext } from "react";
import githubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";


// Functional Component
const Search = () => {
  const GithubContext = useContext(githubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('')


//   () => is the same as using this.bind()
  const onSubmit = (e) => {
    e.preventDefault();
    if(text === '') {
        alertContext.setAlert('Please enter some text', 'light');
    } else {
      GithubContext.searchUsers(text);
        setText('')
    }
  }

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {GithubContext.users.length > 0 && (
          <button 
          className="btn btn-light btn-block"
          onClick={GithubContext.clearUsers}>Clear</button>
      )}
    </div>
  );
}

export default Search;
