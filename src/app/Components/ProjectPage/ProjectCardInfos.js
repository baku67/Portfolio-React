"use client";

import { Octokit } from "@octokit/core";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";



export function ProjectCardInfos({ project, isHovered, token, owner, repo, isMobile }) {

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

        <div className="projectCard_footerBottom">
          <ul className="projectCard_primSkills">
              {project.primarySkill.map( (skill, index) => (
                  <li key={index} style={{backgroundColor:project.primaryColor}}>{skill}</li>
              ))}
          </ul>


          {error ? 

            <div className="NbrCommits">
              <span>Commits: </span>
              <span style={{fontSize:"0.8em", color:"#f65353"}}>API</span>
            </div>
          : 

            <div className="NbrCommits">

              <span className="nbrCommitsNbr" style={{color:"var(--primary-cyan)", fontWeight:"bold"}}>{commitActivity}</span>

              {isMobile && (
                <FontAwesomeIcon icon={faGitAlt} className="faCommitsMobile" style={{ color: project.primaryColor }} />
              )}

              {!isMobile && (
                <span>Commits</span>
              )}

            </div>
          }

        </div>

      </div>

    );
  }