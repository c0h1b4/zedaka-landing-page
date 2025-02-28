import React, { useState } from 'react';
import Modal from '../utils/Modal';

import Purpose from '../images/purpose.png';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute bottom-0 transform -translate-x-1/2 pointer-events-none left-1/2" aria-hidden="true">
        
      </div>

      <div className="max-w-6xl px-4 mx-auto sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1 className="mb-4 text-5xl font-extrabold tracking-tighter md:text-[48px] leading-tighter" data-aos="zoom-y-out">Seu propósito corporativo em uma plataforma</h1>
            <div className="max-w-3xl mx-auto">
              <p className="mb-8 text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">A única solução de software completa que beneficia a todos. Funcionários. Clientes. Organizações sem fins lucrativos. Sociedade. E o seu negócio.</p>
              {/* <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="w-full mb-4 text-white bg-blue-600 btn hover:bg-blue-700 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div>
                <div>
                  <a className="w-full text-white bg-gray-900 btn hover:bg-gray-800 sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div> */}
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="mx-auto" src={Purpose} width="768" height="432" alt="Hero" />
              </div>
              {/* <button className="absolute flex items-center p-4 font-medium transform -translate-y-1/2 bg-white rounded-full shadow-lg top-full group" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} aria-controls="modal">
                <svg className="flex-shrink-0 w-6 h-6 text-gray-400 fill-current group-hover:text-blue-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg>
                <span className="ml-3">Watch the full video (2 min)</span>
              </button> */}
            </div>

            {/* Modal */}
            {/* <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
              </div>
            </Modal> */}

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;