import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'


const MyOverview = () => {
  return (

    <div className='w-full max-w-4/5 ml-[40px] lg:mt-12 flex flex-col lg:flex-row-reverse gap-8 items-start text-left'>
      
      <div className='w-full flex flex-col gap-4'>
        <h5 className='my-8 font-medium text-teal-700'>My experience</h5>
        <p className='font-extralight text-slate-700 text-lg'>
          I'm a Product Designer with +5 years.<br/>IT full-time self-taught.<br/>Worked with dev, 
          ops and customer care and growth teams in health, wellness, telecom, engineering and environmental industries.
          <br/>I've been speaker and course instructor to government departments, academy and ONG's.
        </p>
        <p className='font-extralight text-slate-700 text-lg'>
          I'm working to improve the quality of life for LATAM people.
        </p>
        <p className='font-extralight text-slate-700 text-lg'>
          I'm convinced that throw
          health, finance, education and environment industries merged with technology is one of the best ways
          to reach it.  
        </p>
      </div>

      <div div className='hidden w-full flex-col lg:max-w-[190px] gap-4'>
        <h5 className='y8 font-medium text-teal-700'>Product Design</h5>
        <ul>
          <li className='font-extralight text-slate-700 text-lg'>Product Design</li>
          <li className='font-extralight text-slate-700 text-lg'>UX Design</li>
          <li className='font-extralight text-slate-700 text-lg'>UX Strategy</li>
          <li className='font-extralight text-slate-700 text-lg'>Design System</li>
        </ul>
      </div>

      <div className='w-full flex flex-col lg:max-w-[190px] gap-4'>
        <h5 className='my-8 font-medium text-teal-700'>Expertise</h5>
        <ul>
          <li className='font-extralight text-slate-700 text-lg'>Product Design</li>
          <li className='font-extralight text-slate-700 text-lg'>UX Design</li>
          <li className='font-extralight text-slate-700 text-lg'>UX Strategy</li>
          <li className='font-extralight text-slate-700 text-lg'>Design System</li>
        </ul>
      </div>

    </div>

  );
};

export default MyOverview;