import { ChatBubbleBottomCenterTextIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import Header from '../../Components/Header';

function Work () {
  return (

    
    <>

    <Header />

    <div className='w-3/5 min-w-2xl lg:min-w-3xl max-w-4xl m-auto'>

        <div className='flex flex-row w-auto min-w-2xl gap-10 md:gap-20'>

            <div className='w-3/5 mx-auto mt-12 flex flex-col gap-8 items-center'>

                  <h5 className='w-full my-8 font-medium text-teal-700'>Main projects</h5>

                  <div className="w-full flex bg-white shadow-lg rounded-xl overflow-hidden">
                  {/* Imagen */}
                      <img
                        src="https://tonito.dev/assets/tonitoDev_Antonio-Vargas-Avila.png"
                        alt="Descripción"
                        className="w-32 h-32 object-cover"
                      />

                      {/* Contenido */}
                      <div className="p-4 flex flex-col justify-center group cursor-pointer">
                        <div className='w-full flex flex-row items-center justify-between align-middle'>
                          <h4 className="text-lg font-semibold text-gray-800">Título de la Card</h4>
                          <ArrowRightCircleIcon className="hidden group-hover:block mr-3 size-5 text-slate-400" />
                        </div>
                        <p className="text-gray-600 text-sm mt-2">
                          Esta es una breve descripción de la card. Explica de qué trata y añade más contexto.
                        </p>
                      </div>
                  </div>

                  <div className="w-full flex bg-white shadow-lg rounded-xl overflow-hidden">
                  {/* Imagen */}
                      <img
                        src="https://tonito.dev/assets/tonitoDev_Antonio-Vargas-Avila.png"
                        alt="Descripción"
                        className="w-32 h-32 object-cover"
                      />

                      {/* Contenido */}
                      <div className="p-4 flex flex-col justify-center group cursor-pointer">
                        <div className='w-full flex flex-row items-center justify-between align-middle'>
                          <h4 className="text-lg font-semibold text-gray-800">Título de la Card</h4>
                          <ArrowRightCircleIcon className="hidden group-hover:block mr-3 size-5 text-slate-400" />
                        </div>
                        <p className="text-gray-600 text-sm mt-2">
                          Esta es una breve descripción de la card. Explica de qué trata y añade más contexto.
                        </p>
                      </div>
                  </div>

                  <div className="w-full flex bg-white shadow-lg rounded-xl overflow-hidden">
                  {/* Imagen */}
                      <img
                        src="https://tonito.dev/assets/tonitoDev_Antonio-Vargas-Avila.png"
                        alt="Descripción"
                        className="w-32 h-32 object-cover"
                      />

                      {/* Contenido */}
                      <div className="p-4 flex flex-col justify-center group cursor-pointer">
                        <div className='w-full flex flex-row items-center justify-between align-middle'>
                          <h4 className="text-lg font-semibold text-gray-800">Título de la Card</h4>
                          <ArrowRightCircleIcon className="hidden group-hover:block mr-3 size-5 text-slate-400" />
                        </div>
                        <p className="text-gray-600 text-sm mt-2">
                          Esta es una breve descripción de la card. Explica de qué trata y añade más contexto.
                        </p>
                      </div>
                  </div>

            </div>

            <div className='w-2/5 mx-auto mt-12 flex flex-col gap-8 items-center'>

                  <h5 className='w-full my-8 font-medium text-teal-700'>Other projects</h5>

                  <div className="w-full flex bg-white shadow-lg rounded-xl overflow-hidden">
                  {/* Imagen */}
                      <ChatBubbleBottomCenterTextIcon className="w-6 h-6 mx-4 mt-4 mr-3 size-5 text-slate-400" />

                      {/* Contenido */}
                      <div className="p-4 flex flex-col justify-center group cursor-pointer">
                        <div className='w-full flex flex-row items-center justify-between align-middle'>
                          <p className="text-lg font-semibold text-gray-800">WelbeCare</p>
                        </div>
                        <p className="text-gray-600 text-sm mt-2">
                          Mobile Experience 'My health' <br/>+30% lab exams convertion rate
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                          Information Architecture - Searching Studies<br/>+50% success rate
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                        New feature - Specialist onboarding <br/>3x reduce onboarding period
                        </p>

                      </div>
                  </div>

                  <div className="w-full flex bg-white shadow-lg rounded-xl overflow-hidden">
                  {/* Imagen */}
                      <ChatBubbleBottomCenterTextIcon className="w-6 h-6 mx-4 mt-4 mr-3 size-5 text-slate-400" />

                      {/* Contenido */}
                      <div className="p-4 flex flex-col justify-center group cursor-pointer">
                        <div className='w-full flex flex-row items-center justify-between align-middle'>
                          <p className="text-lg font-semibold text-gray-800">TotalPlay</p>
                        </div>
                        <p className="text-gray-600 text-sm mt-2">
                          Design System Management <br/>Operational KPI and management journey 
                        </p>

                      </div>
                  </div>


                  <div className="w-full flex bg-white shadow-lg rounded-xl overflow-hidden">
                  {/* Imagen */}
                  <ChatBubbleBottomCenterTextIcon className="w-6 h-6 mx-4 mt-4 mr-3 size-5 text-slate-400" />

                      {/* Contenido */}
                      <div className="p-4 flex flex-col justify-center">
                        <div className='w-full flex flex-row items-center justify-between align-middle'>
                          <p className="text-lg font-semibold text-gray-800">Blog entries</p>
                        </div>
                        <a href='https://www.linkedin.com/pulse/como-ser-feliz-en-tu-trabajo-luis-antonio-vargas-avila'
                           className=" text-md mt-2 cursor-pointer text-teal-700">
                              Como ser feliz en tu trabajo 
                        </a>
                        <a href='https://www.linkedin.com/pulse/como-ser-feliz-en-tu-trabajo-luis-antonio-vargas-avila'
                           target='_blank'
                           className=" text-md mt-2 cursor-pointer text-teal-700">
                              Guía para dar y recibir Feedback 
                        </a>
                        <a href='https://www.linkedin.com/pulse/como-ser-feliz-en-tu-trabajo-luis-antonio-vargas-avila'
                           target='_blank'
                           className=" text-md mt-2 cursor-pointer text-teal-700">
                              Cheat-sheet design hands-off
                        </a>
{/*                         <a href='https://www.linkedin.com/pulse/como-ser-feliz-en-tu-trabajo-luis-antonio-vargas-avila'
                           target='_blank'
                           className=" text-md mt-2 cursor-pointer text-teal-700">
                              Cheat-sheet product design hands-off documentation 
                        </a> */}

                      </div>
                  </div>


            </div>

        </div>

    </div>



    
    
    </>
  );
};


export default Work