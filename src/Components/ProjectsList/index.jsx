import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'


const ProjectsList = () => {
  return (

    <div className="w-auto max-w-3/5 ml-[40px] lg:ml-[260px] mb-5 flex flex-col items-start text-left">
      <h5 className="mb-12 mt-20 font-black text-teal-700">Design</h5>
      <ul className='w-full'>
        <li className='w-1/1 flex flex-row items-center px-0 py-4 text-lg font-bold rounded-lg bg-white group cursor-pointer'>
          <span className=' hidden group-hover:block mr-3'><ArrowRightCircleIcon className="size-5 text-slate-400" /></span>
          <p className='text-4xl text-slate-700'>Planes personales de salud - App</p>
        </li>
        <li className='w-1/1 flex flex-row items-center px-0 py-4 text-lg font-bold rounded-lg bg-white group cursor-pointer'>
          <span className=' hidden group-hover:block mr-3'><ArrowRightCircleIcon className="size-5 text-slate-400" /></span>
          <p className='text-4xl text-slate-700'>Planes personales de salud - App</p>
        </li>
        <li className='w-1/1 flex flex-row items-center px-0 py-4 text-lg font-bold rounded-lg bg-white group cursor-pointer'>
          <span className=' hidden group-hover:block mr-3'><ArrowRightCircleIcon className="size-5 text-slate-400" /></span>
          <p className='text-4xl text-slate-700'>Planes personales de salud - App</p>
        </li>
      </ul>
    </div>

  );
};

export default ProjectsList;