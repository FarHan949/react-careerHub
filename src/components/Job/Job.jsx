

const Job = ({job}) => {

  const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes"  className="w-44"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p className="text-left">{company_name}</p>
          <div className="text-left">
            <button className="px-5 py-2 mr-4 font-extrabold border rounded border-[#22d3ee] text-[#22d3ee]">{remote_or_onsite}</button>
            <button className="px-5 py-2 mr-4 font-extrabold border rounded border-[#22d3ee] text-[#22d3ee]">{job_type}</button>
          </div>
          <div className="card-actions">
            <button className="btn bg-[#22d3ee] hover:bg-cyan-300">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Job;