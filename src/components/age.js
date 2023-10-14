import {useState} from 'react';

function Age(){
    const center={
        width:"300px",
    }
    const [year, setYear]=useState('');
    const [age, setAge]=useState(null)

    const handleClick = (event)=>{
        setYear(event.target.value);
    };
    const cal=()=>{
        const dob= new Date(year);
        const currentdate= new Date();

        const age_ml = currentdate - dob;
        const age_yr = Math.floor(age_ml/(365*24*60*60*1000));
        setAge(age_yr);
    };
    const Print=()=>{
        if(age!==null){
            return(
            <h5>You are {age} years old.</h5>
        )}
    }
    return(
        <div>
            <h1 class="mt-5 mb-3">Age Calculator</h1>
            <h5>Enter your date of birth</h5>
            <input class="form-control my-2 c1" style={center} type="date" value={year} onChange={handleClick}/>
            <button class="btn btn-primary text-light my-2" onClick={cal}>Calculate Age</button>
            {Print()};
        </div>
    )
}

export default Age;