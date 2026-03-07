import React from 'react';
import { Link } from 'react-router-dom';
import { getCitiesByState, getStates } from '../config/cities-config';

const CityTestPage: React.FC = () => {
  const states = getStates();

  return (
    <div className="flex flex-col min-h-screen bg-background-light">
      <div className="container mx-auto px-4 py-16">
        {/* Título */}
        <h1 className="text-4xl font-bold text-[#1D2731] mb-4">
           Página de Teste - Cidades
        </h1>
        
        {/* Subtítulo */}
        <p className="text-lg text-gray-600 mb-12">
          Clique em qualquer cidade para testar a página
        </p>

        {/* Estados e Cidades */}
        {states.map((state) => {
          const cities = getCitiesByState(state).sort((a, b) => 
            a.name.localeCompare(b.name)
          );

          return (
            <div key={state} className="mb-12">
              {/* Título do Estado */}
              <h2 className="text-2xl font-bold text-[#B1915E] mb-4">
                {state} ({cities.length} cidades)
              </h2>

              {/* Lista de Cidades */}
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cities.map((city) => (
                  <li key={city.id}>
                    <Link
                      to={`/advogado-${city.id}`}
                      className="block p-4 bg-[#DAD5CA] hover:bg-[#B1915E] hover:text-white transition-colors rounded-md font-medium text-[#1D2731]"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Separador */}
              <hr className="my-8 border-[#DAD5CA]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CityTestPage;
