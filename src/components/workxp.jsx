import { useState } from 'react';

export default function WorkExperience() {
    const [submitted, changeSubmitted] = useState(false);
    
    function handleSubmit() {
        changeSubmitted(!submitted);
    }

    return (
        <>
        {submitted ? (
            <div>
                <div>Insert info here</div>
                <button onClick={handleSubmit}></button>

            </div>
        )}
        </>
    )

}