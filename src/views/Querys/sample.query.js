import React from "react";

import { useQuery } from "react-query";

const SampleQuery = () => {
  const { isLoading, error, data } = useQuery("repoData", async () => {
    const res = await fetch(
      "https://api.github.com/repos/tannerlinsley/react-query"
    );
    return res.json();
  });
  return (
    <div className="App">
      <h1>React Query example with star wars API</h1>
      {error && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <strong>
            <span role="img" des>
              👀
            </span>{" "}
            {data.subscribers_count}
          </strong>
          <strong>
            <span role="img">✨</span> {data.stargazers_count}
          </strong>
          <strong>
            <span role="img">🍴</span> {data.forks_count}
          </strong>
        </div>
      )}
    </div>
  );
};

export default SampleQuery;
