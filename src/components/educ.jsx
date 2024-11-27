import { useState } from 'react';

export default function Education() {
    const [submitted, changeSubmitted] = useState(false);
    const [uni, setUni] = useState('');
    const [degree, setDegree] = useState('');
    const [timeline, setTimeline] = useState('');

    function handleSubmit() {
        changeSubmitted(!submitted);
    }

    return (
        <>
        <h2>Education</h2>
        {submitted ? (
            <div>
                <div>{uni}</div>
                <div>{degree}</div>
                <div>{timeline}</div>
                <button onClick={handleSubmit}>Edit</button>
            </div>
        ) :
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }}>
            <div>
                <label htmlFor="uni">University: </label>
                <input type="text" placeholder="University" value={uni} onChange={e => setUni(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="degree">Degree: </label>
                <input type="text" placeholder="Degree" value={degree} onChange={e => setDegree(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="dates">Dates of study: </label>
                <input type="text" placeholder="Dates of study" value={timeline} onChange={e => setTimeline(e.target.value)}/>
            </div>

            <button type="submit">Submit</button>

        </form>
        }
        </>
    )
}