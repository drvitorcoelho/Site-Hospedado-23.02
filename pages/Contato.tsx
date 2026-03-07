import React from 'react';
import { Mail, Phone, MessageCircle, CheckCircle, AlertTriangle } from 'lucide-react';

const ContactCard = ({ icon, title, content, description, btnText, link, footer }: any) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-heading font-bold text-primary mb-3">{title}</h3>
    <p className="font-bold text-xl text-text-main mb-3">{content}</p>
    <p className="text-base text-text-light mb-8">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-full transition-colors mb-6 w-full text-lg shadow-md"
    >
      {btnText}
    </a>
    <p className="text-sm text-gray-400 mt-auto">{footer}</p>
  </div>
);

const Contato: React.FC = () => {
  return (
    <div className="bg-background-light min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-primary text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary-dark via-primary to-primary/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-2">
            Especialistas em Direito Previdenciário, Cível, Saúde e Criminal.
          </p>
          <p className="text-lg md:text-xl text-gray-200">
            Estamos prontos para ouvir você. Escolha o canal de sua preferência e fale com nossa equipe.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">

        {/* CARDS DE CONTATO */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
          <ContactCard
            icon={<MessageCircle size={40} />}
            title="WhatsApp"
            content="(85) 9 8118-6205"
            description="Resposta rápida e prática. Ideal para dúvidas ágeis e agendamentos."
            btnText="Abrir WhatsApp"
            link="https://wa.me/5585981186205?text=Olá,%20Dr.%20Vitor%20Coelho.%20Gostaria%20de%20conversar%20sobre%20meu%20caso."
            footer="Atendimento online disponível"
          />
          <ContactCard
            icon={<Phone size={40} />}
            title="Telefone"
            content="(85) 9 8118-6205"
            description="Fale diretamente conosco. Ideal para um primeiro contato mais explicativo."
            btnText="Ligar Agora"
            link="tel:+5585981186205"
            footer="Segunda a Sexta: 7h - 18h"
          />
          <ContactCard
            icon={<Mail size={40} />}
            title="Email"
            content="contato@vitorcoelho.adv.br"
            description="Para assuntos formais e envio de documentação com segurança."
            btnText="Enviar Email"
            link="mailto:contato@vitorcoelho.adv.br"
            footer="Resposta em até 24 horas úteis"
          />
        </div>

        {/* INFORMAÇÕES PROFISSIONAIS E MAPA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">

          {/* Informações Profissionais */}
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-primary mb-8 border-b-2 border-secondary pb-2 inline-block">
              Informações Profissionais
            </h2>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start gap-5 hover:shadow-lg transition-all">
              <div className="bg-primary/10 p-4 rounded-full text-primary"><CheckCircle size={28} /></div>
              <div>
                <h4 className="font-bold text-primary text-xl mb-1">Inscrição OAB-CE</h4>
                <p className="text-secondary font-extrabold text-2xl mb-1">56.789</p>
                <p className="text-base text-gray-500">Você pode verificar nossa inscrição no site da OAB-CE</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start gap-5 hover:shadow-lg transition-all">
              <div className="bg-primary/10 p-4 rounded-full text-primary"><CheckCircle size={28} /></div>
              <div>
                <h4 className="font-bold text-primary text-xl mb-1">Horário de Atendimento</h4>
                <p className="text-gray-700 text-lg font-semibold mb-1">Segunda a Sexta: 7h - 18h</p>
                <p className="text-base text-gray-500">Atendimento via WhatsApp conforme disponibilidade</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start gap-5 hover:shadow-lg transition-all">
              <div className="bg-primary/10 p-4 rounded-full text-primary"><CheckCircle size={28} /></div>
              <div>
                <h4 className="font-bold text-primary text-xl mb-1">Tempo de Resposta</h4>
                <p className="text-gray-700 text-lg font-semibold mb-1">Até 24 horas úteis</p>
                <p className="text-base text-gray-500">Comprometimento em não deixar o cliente aguardando</p>
              </div>
            </div>
          </div>

          {/* Aviso de Segurança */}
          <div className="flex flex-col justify-center">
            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-secondary shadow-md h-full flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <AlertTriangle size={28} />
                Seus Dados Estão Seguros
              </h4>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As informações compartilhadas em nossos canais de atendimento são estritamente confidenciais e protegidas.
              </p>
              <ul className="text-lg text-gray-700 space-y-3">
                <li className="flex items-center gap-2"><CheckCircle size={20} className="text-secondary" /> Criptografia de Ponta a Ponta</li>
                <li className="flex items-center gap-2"><CheckCircle size={20} className="text-secondary" /> Sigilo Profissional (Código de Ética OAB)</li>
                <li className="flex items-center gap-2"><CheckCircle size={20} className="text-secondary" /> Acesso Restrito à Equipe Jurídica</li>
                <li className="flex items-center gap-2"><CheckCircle size={20} className="text-secondary" /> Total Conformidade com a LGPD</li>
              </ul>
            </div>
          </div>

        </div>

        {/* CTA FINAL */}
        <div className="mt-24 text-center bg-white p-12 rounded-3xl shadow-xl border border-gray-100 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Pronto para Resolver seu Caso?</h2>
          <p className="text-xl text-text-light mb-10 max-w-2xl mx-auto">
            Nossa equipe especializada está à disposição. Entre em contato para agendar uma consulta inicial e conhecer as melhores alternativas jurídicas para você.
          </p>
          <a
            href="https://wa.me/5585981186205?text=Olá,%20Dr.%20Vitor%20Coelho.%20Gostaria%20de%20conversar%20sobre%20meu%20caso."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#B1915E] hover:bg-[#8f744a] text-white font-bold py-5 px-12 rounded-full shadow-lg transform transition hover:scale-105 uppercase tracking-wide text-lg"
          >
            <MessageCircle size={24} />
            Agendar Consulta
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contato;