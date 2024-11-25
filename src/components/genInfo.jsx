import '../styles/genInfo.css';
import { useState } from 'react';

export default function GeneralInfo() {

    const [submitted, changeSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function handleSubmit() {
        changeSubmitted(!submitted);
    }
    
    return (
        <>
        <h2>General Information</h2>

        {submitted ? (
            <div>
                <div>{name}</div>
                <div>{email}</div>
                <div>{phone}</div>
                <button onClick={handleSubmit}>Edit</button>
            </div>
        ) : 
        
        <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <div>
                    <label for="fullname">Full name: </label>
                    <input type="text" id="fullname" name="fullname"placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                </div>

                <div>
                    <label for="email">Email: </label>
                    <input type="text" id="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label for="phone">Phone Number: </label>
                    <input type="tel" id="phone" name="phone" placeholder = "000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone} onChange={e => setPhone(e.target.value)}/>
                </div>

                <button type="submit">Submit</button>
            </form> }  
        </>
    )
}




