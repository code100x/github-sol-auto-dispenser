import React, { useState, useEffect } from 'react';

function PullRequestList() {
  const [pullRequests, setPullRequests] = useState([]);

  useEffect(() => {

    const mockPullRequests = [
      { id: 1, title: 'Fix bug in login component', author: 'user1' },
      { id: 2, title: 'Add new feature for dashboard', author: 'user2' },
      { id: 3, title: 'Refactor code to improve performance', author: 'user3' },
    ];
    setPullRequests(mockPullRequests);
  }, []);

  return (
    <div className="pull-request-list">
      <h2>Open Pull Requests</h2>
      <ul>
        {pullRequests.map((pr) => (
          <li key={pr.id}>
            <h3>{pr.title}</h3>
            <p>Author: {pr.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PullRequestList;