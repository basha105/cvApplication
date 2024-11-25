import { useState } from 'react';

export default function WorkExperience() {
    const [submitted, changeSubmitted] = useState(false);
    const [jobTitle, changeJobTitle] = useState('');
    const [companyName, changeCompanyName] = useState('');
    const [jobDesc, changejobDesc] = useState('');    

    function handleSubmit() {
        changeSubmitted(!submitted);
    }

    return (
        <>
        <h2>Work Experience</h2>
        {submitted ? (
            <div>
                <div>{companyName}</div>
                <div>{jobTitle}</div>
                <div>{jobDesc}</div>
                <button onClick={handleSubmit}>Edit</button>
            </div>
        ) :
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }}>

            <div>
                <label htmlFor="company">Company: </label>
                <input type="text" placeholder="Company" value={companyName} onChange={(e) => changeCompanyName(e.target.value)}/>
            </div>
        
            <div>
                <label htmlFor="jobTitle">Job title: </label>
                <input type="text" placeholder="Job title" value={jobTitle} onChange={(e) => changeJobTitle(e.target.value)}/>
            </div>

            <div>
                <div>Job Description:</div>
                <textarea placeholder="Describe your position..." value={jobDesc} onChange={(e) =>changejobDesc(e.target.value)} cols="30" rows="10"></textarea>
            </div>

           <button type="submit">Submit</button>

        
        </form>}
        </>
    )

}