import { useEffect, useState } from "react";
import Job from "../../Job/Job";



const Features = () => {
    const [jobs, setJobs] = useState([]);

    useEffect( ()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[]);

    return (
        <div className="mt-12 max-w-screen-xl mx-auto ml-6">
             <div className="text-center">

           <h1 className="text-3xl">Feature section</h1>
          <h1>Data: {jobs.length}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque perspiciatis cumque, tempore nemo similique.</p>
           </div>
           <div className="grid grid-cols-3 gap-3  mt-12">
            {
                jobs.map((job) =><Job key={job.id} job={job}></Job>)
            }
           </div>
        </div>
    );
};

export default Features;