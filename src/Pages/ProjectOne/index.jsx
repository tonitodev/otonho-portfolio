import { ChatBubbleBottomCenterTextIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import Header from '../../Components/Header';

function ProjectOne () {
  return (
    
    <>

    <Header />

    <div className='w-3/5 min-w-2xl lg:min-w-3xl max-w-4xl m-auto'>

        <h1 className='w-full my-20 font-medium text-teal-700'>My Health - Personal Health Plan</h1>
        <p className='w-full my-20 font-medium text-2xl text-slate-700'>
          Encourage Mexican employees to enroll in a personalized healthcare plan with lab tests and medical monitoring.
        </p>

        <img            
            src="https://tonito.dev/assets/projectsImages/MyHealth.webp"
            alt="Descripción"
            className="w-full h-auto object-cover"
        />

        <div className='flex flex-row w-auto min-w-2xl gap-10 md:gap-20'>

            <div className='w-2/5 mx-auto my-12 flex flex-col gap-1 items-start'>

                <p className='text-2xl font-extralight text-gray-600 w-full mt-8 mb-2 pt-4 border-t-1 border-slate-600'>Role:</p>
                <p className="text-2xl font-semibold text-gray-600">Product Designer</p>

                <p className='text-2xl font-extralight text-gray-600 w-full mt-10 mb-2 pt-4 border-t-1 border-slate-600'>Contribution:</p>
                <ul>
                  <li className="text-2xl font-semibold text-gray-600">UX Research</li>
                  <li className="text-2xl font-semibold text-gray-600">UX/UI</li>
                  <li className="text-2xl font-semibold text-gray-600">Architecture of information</li>
                </ul>
            </div>

            <div className='w-3/5 mx-auto mt-24 flex flex-col gap-8 items-center'>

                 <p className="text-2xl font-extralight text-gray-600">
                   Esta es una breve descripción de la card. Explica de qué trata y añade más contexto.
                 </p>


            </div>



        </div>

    </div>



    
    
    </>
  );
};


export default ProjectOne