

const Job = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences} = job;
    return (
        <div>
            <div >
            <div className="card bg-base-100 shadow-xl">
  <figure><img src={logo} alt="logo" /></figure>
  <div className="card-body">
    <h2 className="">
     {job_title}<br></br>
    <p>{company_name}</p>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{remote_or_onsite}</div> 
      <div className="badge badge-outline">{location}</div>
    </div>
    <button className="px-10 py-2  bg-emerald-800 text-white">Show Details </button>
  </div>
</div>
            </div>
        </div>
    );
};

export default Job;