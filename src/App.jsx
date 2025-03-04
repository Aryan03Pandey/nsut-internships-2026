import React from 'react';
import jobData from './assets/data.json'; 
import "./App.css"

const JobCard = ({ job }) => {
  return (
      <div className='card'>
        {
          Object.keys(job).map(key => (
            <div className='infoRow' key={key}>
              <p>{key}:</p>
              <p>{JSON.stringify(job[key])}</p>
            </div>
          ))
        }
      </div>
  );
};

const JobOpportunities = () => {

  const handleDownload = () => {
    // Create a blob with the JSON data
    const jsonString = JSON.stringify(jobData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'nust_internships_2026.json';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{
      paddingInline: "20px",
    }}>
      <h1 style={{textAlign: "center"}}>NSUT Internship Opportunities - 2026 Batch</h1>
      <h4>Click Below to Download the complete JSON file</h4>
      <button
        onClick={handleDownload}
      >Download</button>

      <p>If you wish to analyze the data using AI tools or by yourself, the json file could come handy.</p>

      <div 
        style={{
          marginTop: "10px",
          display: "flex",
          gap: "20px",
          flexDirection: "column"
        }}
      >
        {jobData.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobOpportunities;