import Card from '../../Components/Card/Card';

const Portfolio = () => {
  return (
    <>
      <div className='container'>
        <div className='h-[25vh] flex flex-col justify-end items-center'>
          <h2 className='text-4xl text-slate-700 font-bold '>
            PORTFOLIO COMPONENT
          </h2>
          <div className='my-4 relative after:absolute after:w-[100px] after:h-1 after:bg-slate-700 after:top-1/2 after:left-16 before:absolute before:w-[100px] before:h-1 before:bg-slate-700 before:top-1/2 before:right-10'>
            <i className='fa-solid fa-star text-slate-700 text-lg absolute left-1/2 top-1/2 -translate-y-1/2'></i>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-10 my-10  min-h-[60vh] md:grid-cols-2 lg:grid-cols-3'>
          <Card/>
          <Card/>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
