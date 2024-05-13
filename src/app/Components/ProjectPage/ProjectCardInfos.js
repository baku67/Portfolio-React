"use client";

import { Octokit } from "@octokit/core";
import { useState, useEffect } from "react";

export function ProjectCardInfos({ project, isHovered, token, owner, repo }) {

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
      <div className="projectCard-footer">

        <div 
          className="projectCard_infos"
          style={{transform: isHovered ? "translateY(7px)" : "translateY(0px)"}}
        >
            <h2 className="projectCard_title" style={{fontFamily: project.fontFamily, color: project.primaryColor}}>{project.name}</h2>
            <p className="projectCard_description">{project.description}</p> 
        </div>


        <div className="projectCard_footerBottom">
          <ul className="projectCard_primSkills">
              {project.primarySkill.map( (skill, index) => (
                  <li key={index} style={{backgroundColor:project.primaryColor}}>{skill}</li>
              ))}
          </ul>

          {error ? 
            <span className="NbrCommits">
              <span>Commits: </span>
              <span style={{fontSize:"0.8em", color:"#f65353"}}>API</span>
            </span>
          : 
            <span className="NbrCommits">
              <span style={{color:"var(--primary-cyan)", fontWeight:"bold"}}>{commitActivity}</span>
              <span>Commits</span>
            </span>
          }

      </div>

      </div>
    );
  }