import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const FAQItem: React.FC<{ question: string, answer: React.ReactNode }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm mb-4">
      <button
        className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-heading font-bold text-primary text-lg">{question}</span>
        {isOpen ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="p-5 border-t border-gray-100 text-text-light leading-relaxed bg-background-light animate-fade-in text-gray-700">
          {answer}
        </div>
      )}
    </div>
  );
};

const previdenciarioFaqs = [
  { q: "Qual é a diferença entre aposentadoria por tempo de contribuição e aposentadoria por idade?", a: "A aposentadoria por idade exige idade mínima (65 anos para homens e 62 para mulheres) e 15 anos de contribuição. Aposentadoria por tempo exige 35 anos de contribuição para homens e 30 para mulheres, com aplicação de regras de transição." },
  { q: "Como calcular minha aposentadoria?", a: "Geralmente é a média de 100% dos salários de contribuição desde 07/1994, com aplicação de um coeficiente dependendo do tipo de benefício e tempo de contribuição." },
  { q: "Tenho direito a aposentadoria se contribuí por pouco tempo?", a: "Para aposentadoria por idade, o tempo mínimo exigido é de 15 anos (180 meses). Se você não possui esse tempo, pode verificar enquadramento no benefício assistencial BPC/LOAS se preencher os requisitos de idade e vulnerabilidade social." },
  { q: "O que é aposentadoria por invalidez?", a: "Também conhecida como aposentadoria por incapacidade permanente, é o benefício para quem for considerado pela perícia médica do INSS sem condições de retorno a qualquer atividade laborativa." },
  { q: "Como funciona a pensão por morte?", a: "É paga aos dependentes do segurado que falecer, seja ele aposentado ou não. O valor e o tempo de duração dependem do tempo de união e da idade do dependente na data do óbito." },
  { q: "Qual é o valor mínimo de aposentadoria?", a: "No Brasil, nenhum benefício que substitua o salário de contribuição ou o rendimento do trabalho pode ser inferior a 1 salário mínimo mensal." },
  { q: "Posso trabalhar após me aposentar?", a: "Na maioria dos casos, sim. As exceções principais são aposentadoria por invalidez (retorno ao trabalho cancela o benefício) e aposentadoria especial (se continuar exercendo a mesma atividade insalubre/perigosa)." },
  { q: "O que é BPC/LOAS?", a: "É um benefício assistencial de um salário mínimo garantido a idosos com 65 anos ou mais e pessoas com deficiência, desde que comprovem renda familiar per capita inferior a 1/4 do salário mínimo, sem necessidade de contribuição ao INSS." },
  { q: "Quem tem direito ao salário maternidade?", a: "Afastados por parto, adoção ou guarda judicial. Para quem contribui individualmente (autônomas/facultativas), existe uma carência mínima de 10 meses de recolhimento antes do parto." },
  { q: "Como funciona a aposentadoria da pessoa com deficiência?", a: "Apresenta reduções favoráveis na idade mínima ou no tempo de contribuição exigido, devendo a condição e grau (leve, moderado ou grave) ser comprovada por perícia biopsicossocial do INSS." }
];

const civelFaqs = [
  { q: "O que é guarda compartilhada?", a: "Ambos os pais decidem sobre a vida do filho e dividem responsabilidades. É a regra geral atual. O filho possui uma base de moradia principal, mas convive com ambos de forma equilibrada." },
  { q: "Como funciona a divisão de bens em um divórcio?", a: "A divisão depende do regime de bens adotado no casamento. No geral, no regime de comunhão parcial (o mais comum), todos os bens adquiridos onerosamente durante o casamento são divididos em 50% para cada parte." },
  { q: "Qual é o valor da pensão alimentícia?", a: "Calculada sobre a renda de quem paga (geralmente entre 15% e 30% como base referencial) e a necessidade do filho. Não há um valor fixo fixado aleatoriamente, avalia-se a possibilidade de um e a necessidade de outro." },
  { q: "Como funciona a adoção?", a: "É um processo judicial conduzido pelas varas de infância. Exige que o adotante tenha ao menos 18 anos e diferença de 16 anos pro adotado. Após avaliações e período de convivência, consolida-se vínculo irreversível." },
  { q: "O que é união estável?", a: "É uma relação reconhecida por convivência pública, contínua e duradoura, estabelecida com o objetivo de constituição de família, e garante direitos idênticos aos do casamento." },
  { q: "Como funciona a herança?", a: "Transmissão legal de patrimônio aos herdeiros (descendentes, ascendentes, cônjuge). Exige abertura de inventário em prazo legal para partilha de bens, prestação de contas e pagamentos devidos." },
  { q: "Posso processar meu vizinho por barulho?", a: "Sim. A lei garante o direito ao sossego. Dependendo do incômodo abusivo, a solução via notificação e ação no Juizado Especial pode resultar em obrigação para o vizinho cessar o ruído com aplicação de multa." },
  { q: "Como funciona uma ação de despejo?", a: "É a via jurídica única e adequada para reaver posse do bem imobiliário locado caso o inquilino atrase pagamentos ou cometa infração contratual. Necessita via de regra de notificação e liminar avaliada pelo Juiz." },
  { q: "O que é usucapião?", a: "Aquisição de propriedade da terra ou imóvel devido à sua ocupação/posse qualificada por período ininterrupto que varia pela lei (de 5 a 15 anos) desde que sem contestação violenta de posse pelo titular." },
  { q: "Como funciona a responsabilidade civil?", a: "Nasce da violação de um dever jurídico, gerando obrigação de reparar (indenizar financeiramente) danos sofridos — sejam materiais, morais ou estéticos — provocados a uma terceira vítima." }
];

const criminalFaqs = [
  { q: "Fui acusado de um crime. O que fazer?", a: "Procure um advogado especializado AGORA. Não fale com a polícia sem advogado. Não assine nada. Exercer seu direito ao silêncio é inteligente. Cada minuto conta." },
  { q: "Posso ser condenado sem provas?", a: "Não. Você só pode ser condenado se houver prova além de dúvida razoável. Presunção de inocência é seu direito fundamental." },
  { q: "Qual é o prazo para responder a uma acusação?", a: "Após ser notificado tecnicamente (citação), o prazo legal tradicional para a defesa preliminar escrita é de 10 dias. Dependendo de ritos específicos, a janela pode ser diferente, por isso agilidade no contato com o defensor é vital." },
  { q: "Como funciona o Tribunal do Júri?", a: "Julga de forma colegiada (7 cidadãos civis, e não o juiz de togado) os casos de crimes dolosos contra a vida (homicídios consumados ou tentados). Requer da defesa uma atuação assertiva e alta retórica argumentativa de convencimento." },
  { q: "Posso ser preso antes do julgamento?", a: "As prisões precautórias (flagrante, temporária ou preventiva) ocorrem mediante justificativas gravosas de risco ou pela lei e independem do julgamento definitivo. O advogado atuará pedindo Relaxamentos ou Liberdade Provisória com rapidez impulsionável." },
  { q: "O que é habeas corpus?", a: "Recurso legal com trâmite privilegiado para questionar prisões preventivas abusivas, coação ilegal ou proteger direitos basilares de ir e vir do cidadão nos âmbitos cível/penal." },
  { q: "Qual é o custo de uma defesa criminal?", a: "Nossos orçamentos dependem fortemente da complexidade das peças, dos contatos judiciais requeridos e tempo presencial ou virtual exigido. Os valores serão demonstrados inteiramente transparentes pós-atendimento primário." },
  { q: "Posso recorrer de uma condenação?", a: "Sim. O sistema legal prevê duplos graus de jurisdição avaliativa de instâncias e Câmaras em Tribunais. Esgotamentos Recursivos, como Apelações criminais e os Superiores são garantias imutáveis." },
  { q: "O que é progressão de regime?", a: "É a possibilidade de avanço processual das determinações fechadas de restrição para penas mais brandas (semi-abertos ou regimes baseados no aberto). Condiciona-se por cálculos de prazos corridos cumpridos e pela manutenção regular em bom comportamento institucional validado pela direção da cadeia." },
  { q: "O que é livramento condicional?", a: "Direito garantido que substitui uma contenção diária contínua na cela por liberdades relativas no convívio humano (rua), em decorrência condicional em sentenças estipuladas onde se comprovou 1/3, metade ou 2/3 com reparações do mal infligido, por sentenciados monitorados regradamente sem cometer outro deslize processual de falha estipulada em Lei da Execução Penal." },
  { q: "O atendimento é 100% online?", a: "Sim. Nossas assessorias, estudos das pastas procedimentais com laudos e reuniões focais sigilosas via Vídeo são online resguardando confidencialidade com facilito logístico nos intercâmbios. Comparecemos localmente ou despachamos quando se revelam presencialidades indispensáveis para as Varas e Câmaras e Júris que compõem ritos cruciais." },
  { q: "Como envio documentos?", a: "De modo eletrônico (fotográfico e escanceando o papel original): Em nuvem fechada remetida à caixa institucional do email; pelo canal encriptado de WhatsApp Business. Rapidez fundamental da etapa digitalizada viabilizou prazos impenetráveis." },
  { q: "Meus dados estão seguros?", a: "Seguimos conformações rigorosas para com a Lei Geral de Dados com política inviolável restrita de banco blindado. O Princípio Sigiloso da Advocacia (Ato/Lei federal e Constitucional Brasileira assegura imunidade e sigilo profissional ao escritório sem divulgação inescrupulosa dos relatos e evidências do Assistido." },
  { q: "O que é presunção de inocência?", a: "Garantia Constitucional universal penal, a qual dita claramente no ordenamento pátrio que toda e qualquer autoridade obrigatoriamente julga uma pessoa Inocente na valoração de culpa plena a ser investigada. É do Órgão Policial/Ministério, restritamente, que emana a carga exigível da comprovação sem incertezas plausíveis ao invés de atrelar obrigação defensiva ao sentenciado sobre a culpa alheia de outrem que tenta expor ou denunciar como verídico em teses fracas sem fundamentação material de suporte em condenações definitivas. Na Dúvida entre Provas o Réu deve sempre absolver-se." },
  { q: "Qual é meu direito ao silêncio?", a: "Assegura ao processado manter reserva no decorrer de flagrantes policiais interrogatórios (inquéritos ou de fases investigativas ou nas delegacias) e mesmo frentes a Promotores e Magistrados (Juízes do Rito em varas estaduais cíveis/federais ou tribunais júris de julgamento em Sessões/Audiências públicas) resguardando a faculdade processualmente ilibada (livre sem uso para base probatória de culpa ou confessional contra de si inerente à natureza auto infligida). Preservando calar." }
];

const FAQ: React.FC = () => {
  const [activeTab, setActiveTab] = useState('previdenciario');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (['previdenciario', 'civel', 'criminal'].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  const currentQuestions =
    activeTab === 'previdenciario' ? previdenciarioFaqs :
      activeTab === 'civel' ? civelFaqs :
        criminalFaqs;

  return (
    <div className="bg-background-light min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-primary text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold mb-4">Perguntas Frequentes</h1>
          <p className="text-xl text-gray-200">Tire suas dúvidas sobre nossos serviços em cada área de atuação</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        {/* Abas */}
        <div className="flex flex-col md:flex-row gap-2 border-b border-gray-200 mb-8 overflow-x-auto pb-2">
          <button
            className={`px-6 py-3 font-bold whitespace-nowrap transition-colors ${activeTab === 'previdenciario' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-primary hover:bg-gray-50'}`}
            onClick={() => handleTabChange('previdenciario')}
          >
            Direito Previdenciário
          </button>
          <button
            className={`px-6 py-3 font-bold whitespace-nowrap transition-colors ${activeTab === 'civel' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-primary hover:bg-gray-50'}`}
            onClick={() => handleTabChange('civel')}
          >
            Direito Cível
          </button>
          <button
            className={`px-6 py-3 font-bold whitespace-nowrap transition-colors ${activeTab === 'criminal' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-primary hover:bg-gray-50'}`}
            onClick={() => handleTabChange('criminal')}
          >
            Direito Criminal
          </button>
        </div>

        {/* Conteúdo da Aba */}
        <div className="space-y-4 animate-fade-in" id={activeTab}>
          <h2 className="text-2xl font-heading font-bold text-primary mb-6 border-l-4 border-secondary pl-4">
            {activeTab === 'previdenciario' && 'Direito Previdenciário'}
            {activeTab === 'civel' && 'Direito Cível'}
            {activeTab === 'criminal' && 'Direito Criminal'}
          </h2>
          {currentQuestions.map((item, index) => (
            <FAQItem key={index} question={item.q} answer={item.a} />
          ))}
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="bg-white py-12 text-center border-t border-gray-100">
        <h2 className="text-2xl font-heading font-bold text-primary mb-4">Ainda tem dúvidas?</h2>
        <a
          href="https://wa.me/5585981186205?text=Olá,%20Dr.%20Vitor%20Coelho.%20Tenho%20uma%20dúvida%20e%20gostaria%20de%20conversar%20com%20você."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#B1915E] hover:bg-[#8f744a] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle size={20} />
          Fale Conosco no WhatsApp
        </a>
      </section>
    </div>
  );
};

export default FAQ;