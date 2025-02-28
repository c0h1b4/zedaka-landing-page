import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-200 pointer-events-none top-1/2 md:mt-24 lg:mt-0" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 right-0 w-px h-20 p-px m-auto transform translate-y-1/2 bg-gray-900"></div>

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          {/* <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2">How Simple works</h2>
            <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
          </div> */}

          {/* Items */}
          <div className="grid items-start max-w-sm gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 mb-2 -mt-1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="text-blue-600 fill-current" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="text-blue-300 stroke-current" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="text-white stroke-current" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="text-blue-300 stroke-current" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="text-white stroke-current" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg>
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">Voluntariado</h4>
              <p className="text-center text-gray-600">Envolva os funcionários com oportunidades relevantes de voluntariado presenciais, on-line e baseadas em habilidades</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 mb-2 -mt-1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="text-blue-600 fill-current" width="64" height="64" rx="32" />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle className="text-white stroke-current" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
                    <path className="text-white stroke-current" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
                    <path className="text-blue-300 stroke-current" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
                  </g>
                </g>
              </svg>
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">Lifelong giving</h4>
              <p className="text-center text-gray-600">Maximize seu impacto entre os funcionários por meio de programas de doação via folha de pagamento e vale doações</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 mb-2 -mt-1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="text-blue-600 fill-current" width="64" height="64" rx="32" />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path className="text-blue-300 stroke-current" d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207" />
                    <path className="text-white stroke-current" d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285" />
                  </g>
                </g>
              </svg>
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">Micro-ações</h4>
              <p className="text-center text-gray-600">Incentive sua equipe a construir hábitos positivos com desafios que promovam sustentabilidade, bem-estar e inclusão.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 mb-2 -mt-1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="text-blue-600 fill-current" width="64" height="64" rx="32" />
                  <g transform="translate(22.857 19.429)" strokeWidth="2">
                    <path className="text-white stroke-current" strokeLinecap="square" d="M12.571 4.571V0H0v25.143h12.571V20.57" />
                    <path className="text-white stroke-current" d="M16 12.571h8" />
                    <path className="text-white stroke-current" strokeLinecap="square" d="M19.429 8L24 12.571l-4.571 4.572" />
                    <circle className="text-blue-300 stroke-current" strokeLinecap="square" cx="12.571" cy="12.571" r="3.429" />
                  </g>
                </g>
              </svg>              
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">Grupo de afinidade</h4>
              <p className="text-center text-gray-600">Reuna e capacite pessoas interessadas por temas e causas centrais estimulando o trabalho em equipe e conexões genuínas</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 mb-2 -mt-1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="text-blue-600 fill-current" width="64" height="64" rx="32" />
                  <g strokeLinecap="square" strokeWidth="2">
                    <path className="text-white stroke-current" d="M20.571 20.571h13.714v17.143H20.571z" />
                    <path className="text-blue-300 stroke-current" d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58" />
                  </g>
                </g>
              </svg>
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">Subsidios</h4>
              <p className="text-center text-gray-600">Receba indicações e sugestões sobre sua estratégia de investimento social potencializando seu impacto com maior eficiência</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 mb-2 -mt-1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="text-blue-600 fill-current" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="text-white stroke-current" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
                    <path className="text-white stroke-current" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
                    <path className="text-white stroke-current" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
                    <path className="text-blue-300 stroke-current" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
                  </g>
                </g>
              </svg>
              <h4 className="mb-1 text-xl font-bold leading-snug tracking-tight">Doações de clientes</h4>
              <p className="text-center text-gray-600">Crie engajamento e fidelidade à marca integrando doações em qualquer interação com o cliente, com nossa API</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
