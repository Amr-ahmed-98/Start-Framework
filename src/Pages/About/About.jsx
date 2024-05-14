const About = () => {
  return (
    <>
      <div className='min-h-[95vh] bg-torquaze-color'>
        <div className='min-h-[95vh] flex flex-col justify-center items-center'>
          <div className='flex flex-col'>
            <h2 className='text-white text-4xl font-bold'>ABOUT COMPONENT</h2>
            <div className='my-4 relative after:absolute after:w-[100px] after:h-1 after:bg-white after:top-1/2 after:left-16 before:absolute before:w-[100px] before:h-1 before:bg-white before:top-1/2 before:right-10 '>
              <i className='fa-solid fa-star text-white text-lg absolute left-1/2 top-1/2 -translate-y-1/2'></i>
            </div>
          </div>
         <div className="container">
         <div className="grid  text-white mt-5 grid-cols-1 gap-5 text-start md:grid-cols-2">
            <div>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default About;
