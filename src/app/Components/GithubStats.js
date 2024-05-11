// *** DÉSACTIVÉ

import { Octokit } from "@octokit/core";
import { useState, useEffect } from "react";

export function GithubStats({ token, owner, repo }) {

    const octokit = new Octokit({ auth: token });
    const [commitActivity, setCommitActivity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    async function fetchCommitActivity() {
      try {
        const response = await octokit.request('GET /repos/{owner}/{repo}/stats/commit_activity', {
          owner,
          repo,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });

        setCommitActivity(response.data);
        console.log(response.data);

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      fetchCommitActivity();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
      <div>
        {/* Render commit activity data here */}

        
      </div>
    );
  }