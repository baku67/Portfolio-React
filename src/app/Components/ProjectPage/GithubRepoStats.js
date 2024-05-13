"use client";

import { Octokit } from "@octokit/core";
import { useState, useEffect } from "react";

export function GithubRepoStats({ token, owner, repo }) {

    const octokit = new Octokit({ auth: token });
    const [commitActivity, setCommitActivity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    async function fetchCommitActivity() {
      try {
        const response = await octokit.request('GET /repos/{owner}/{repo}/stats/contributors', {
          owner,
          repo,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });

        setCommitActivity(response.data[0].total);
        // console.log(response.data);

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      fetchCommitActivity();
      console.log("REFETCH API GITHUB");
    }, [owner, repo, token]);
    // Reload/resend que lorsque un de ces props change
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      console.log("Error: " + error.message);
    }
  
    return (
      <div>
          {error ? 
            <span>Commits: <span style={{fontSize:"0.8em", color:"#f65353"}}>Erreur API exceeds (voir console)</span></span>
           : 
            <span className="NbrCommits"><span style={{color:"var(--primary-cyan)", fontWeight:"bold"}}>{commitActivity}</span> Commits</span>
          }
      </div>
    );
  }