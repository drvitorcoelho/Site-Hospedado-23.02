import React from 'react';
import {
    Shield, Clock, CheckCircle, ChevronDown, Award, Search,
    Focus, Scale, GraduationCap, Globe, UserX, Briefcase, Car,
    Monitor, Syringe, Gavel, FileCheck, Phone, FileSearch, ShieldAlert,
    MessageSquare, AlertTriangle, Lock, FileText, ChevronRight,
    Users, User
} from 'lucide-react';
import ServiceShortcuts from '../components/ServiceShortcuts';
import WhatsAppIcon from '../components/WhatsAppIcon';

const Criminal: React.FC = () => {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const getWhatsappLink = () => {
        return "https://wa.me/5585981186205?text=Olá,%20Dr.%20Vitor%20Coelho.%20Preciso%20de%20ajuda%20urgente%20em%20uma%20questão%20criminal.";
    };

    return (
        <div className="flex flex-col bg-[#f8f9fa] text-[#333] font-body">

            {/* HERO SECTION */}
            <section className="relative bg-[#1A202C] text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
                <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617721042473-67d34df79c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight drop-shadow-lg text-white max-w-3xl">
                        Sua Liberdade Merece <br />
                        <span className="text-[#B1915E]">A Melhor Defesa Técnica.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-2xl mb-10 drop-shadow-md">
                        Acusado de um crime? Sendo investigado? Você precisa de um advogado especializado agora. Defesa criminal profissional que protege seus direitos e sua liberdade. Atendimento 100% digital em todo o Brasil.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href={getWhatsappLink()} className="inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-8 rounded-md shadow-xl transition-transform hover:scale-105 text-lg uppercase tracking-wide">
                            <WhatsAppIcon className="w-6 h-6" /> Falar com Especialista
                        </a>
                        <button onClick={() => scrollToSection('navegacao')} className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-md transition-all hover:scale-105 text-lg uppercase tracking-wide">
                            Saiba Mais
                        </button>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 1: BOTÕES DE NAVEGAÇÃO RÁPIDA */}
            <section id="navegacao" className="py-12 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: <UserX size={24} />, title: "Crimes contra Pessoa", desc: "Homicídio, Lesão Corporal, Ameaça", color: "text-red-700", bg: "bg-red-50" },
                            { icon: <Briefcase size={24} />, title: "Crimes contra Patrimônio", desc: "Roubo, Furto, Estelionato", color: "text-blue-700", bg: "bg-blue-50" },
                            { icon: <Car size={24} />, title: "Crimes de Trânsito", desc: "Embriaguez, Homicídio Culposo", color: "text-yellow-700", bg: "bg-yellow-50" },
                            { icon: <Shield size={24} />, title: "Direitos do Acusado", desc: "Presunção de Inocência, Direito ao Silêncio", color: "text-green-700", bg: "bg-green-50" },
                            { icon: <Gavel size={24} />, title: "Tribunal do Júri", desc: "Defesa em Julgamentos com Jurados", color: "text-purple-700", bg: "bg-purple-50" },
                            { icon: <FileCheck size={24} />, title: "Execução Penal", desc: "Progressão de Regime, Livramento Condicional", color: "text-indigo-700", bg: "bg-indigo-50" },
                        ].map((item, i) => (
                            <div key={i} onClick={() => scrollToSection('areas')} className={`p-4 rounded-lg border border-gray-200 hover:border-gray-400 cursor-pointer transition-all flex items-center gap-4 ${item.bg}`}>
                                <div className={`${item.color}`}>{item.icon}</div>
                                <div>
                                    <h3 className="font-bold text-gray-800">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ServiceShortcuts hideCriminal />

            {/* SEÇÃO 2: O QUE É DIREITO CRIMINAL? */}
            <section className="py-16 bg-[#f8f9fa]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-heading font-bold text-primary mb-6">Você Precisa de Defesa Técnica Especializada</h2>
                    <p className="text-lg text-gray-700 mb-6 text-justify">
                        Quando você é acusado de um crime, cada decisão importa. O Estado tem recursos, investigadores e promotores. Você precisa de um advogado que conheça profundamente o sistema penal e saiba como proteger seus direitos.
                    </p>
                    <p className="text-lg text-gray-700 mb-10 text-justify">
                        Direito Criminal não é apenas conhecer a lei. É estratégia, é saber como questionar provas, é compreender o comportamento humano e a criminologia, é ter experiência em tribunal do júri. <strong>Nós oferecemos tudo isso.</strong>
                    </p>

                    <div className="bg-white p-8 rounded-xl shadow border border-gray-200 text-left">
                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                            <Scale className="text-[#B1915E]" /> Seus Direitos Fundamentais
                        </h3>
                        <p className="mb-6 text-gray-600">Independentemente da acusação, você tem direitos que não podem ser violados:</p>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {[
                                { title: "Presunção de Inocência", desc: "Você é inocente até prova em contrário" },
                                { title: "Direito ao Silêncio", desc: "Você não é obrigado a falar" },
                                { title: "Direito à Defesa Técnica", desc: "Você tem direito a um advogado especializado" },
                                { title: "Contraditório e Ampla Defesa", desc: "Você pode questionar tudo" },
                                { title: "Proibição de Provas Ilícitas", desc: "Provas ilegais não valem" }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3">
                                    <ShieldAlert className="text-[#B1915E] shrink-0 mt-1" size={20} />
                                    <div>
                                        <strong className="block text-gray-800">{item.title}</strong>
                                        <span className="text-sm text-gray-600">{item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 3: ÁREAS DE ATUAÇÃO */}
            <section id="areas" className="py-16 bg-white border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-primary">Áreas de Atuação Comum</h2>
                        <p className="text-gray-600 mt-2">Defendemos em todos os tipos de crime. Aqui estão os mais comuns:</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: <UserX size={32} />, title: "Crimes Contra a Pessoa", sub: "Homicídio, Lesão Corporal, Ameaça, Injúria, Difamação", desc: "Quando a acusação envolve violência ou agressão, precisamos questionar a versão da polícia, analisar provas, ouvir testemunhas e construir uma defesa sólida.", action: "Investigação complementar, análise de provas, defesa em juízo, recursos." },
                            { icon: <Briefcase size={32} />, title: "Crimes Contra o Patrimônio", sub: "Roubo, Furto, Estelionato, Apropriação Indébita, Receptação", desc: "Muitas acusações de roubo ou furto são baseadas em suspeita, não em prova. Questionamos identificação, analisamos câmeras, investigamos circunstâncias.", action: "Análise de evidências, investigação, defesa técnica, negociação de acordos quando apropriado." },
                            { icon: <Car size={32} />, title: "Crimes de Trânsito", sub: "Homicídio Culposo, Lesão Corporal Culposa, Embriaguez ao Volante", desc: "Acidentes de trânsito geram acusações sérias. Precisamos de análise técnica, perícia, investigação de circunstâncias.", action: "Análise técnica, perícia, defesa especializada, recursos." },
                            { icon: <Monitor size={32} />, title: "Crimes Cibernéticos", sub: "Invasão de Privacidade, Roubo de Dados, Fraude Online, Difamação Online", desc: "Crimes digitais são complexos. Precisamos de análise forense, compreensão de tecnologia e defesa especializada.", action: "Análise técnica, investigação, defesa em crimes digitais." },
                            { icon: <Syringe size={32} />, title: "Crimes de Drogas", sub: "Tráfico, Posse para Uso Pessoal, Associação para Tráfico", desc: "Acusações de drogas são sérias. Questionamos abordagens policiais, analisamos provas, investigamos circunstâncias.", action: "Investigação, análise de provas, defesa técnica, recursos." },
                            { icon: <Gavel size={32} />, title: "Tribunal do Júri", sub: "Julgamento por Cidadãos Leigos", desc: "No tribunal do júri, a defesa é diferente. Não é apenas lei, é comunicação, é saber falar com pessoas comuns, é estratégia de persuasão.", action: "Preparação de defesa oral, estratégia de comunicação, apresentação de provas, recursos." },
                            { icon: <FileCheck size={32} />, title: "Execução Penal", sub: "Progressão de Regime, Livramento Condicional, Remição de Pena", desc: "Se condenado, seus direitos continuam. Podemos requerer progressão de regime, livramento condicional, remição de pena.", action: "Acompanhamento de execução, requerimentos de progressão, proteção de direitos do preso." },
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-all hover:border-[#B1915E]">
                                <div className="text-[#B1915E] mb-4">{item.icon}</div>
                                <h3 className="font-bold text-xl text-primary mb-1">{item.title}</h3>
                                <p className="text-sm font-semibold text-gray-500 mb-3">{item.sub}</p>
                                <p className="text-sm text-gray-700 mb-4">{item.desc}</p>
                                <div className="bg-white p-3 rounded border-l-4 border-[#B1915E] text-sm text-gray-800">
                                    <strong>O que fazemos:</strong> {item.action}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEÇÃO 4: ESPECIALIDADES PROFISSIONAIS */}
            <section className="py-16 bg-[#1A202C] text-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold">Destaque de Especialidades</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: <Award className="text-[#B1915E] w-8 h-8" />, title: "Tribunal do Júri e Execução Penal", sub: "Pós-Graduação Lato Sensu", desc: "Experiência em defesa perante jurados e acompanhamento de execução de penas. Conhecimento profundo de procedimentos especiais e direitos do condenado." },
                            { icon: <Focus className="text-[#B1915E] w-8 h-8" />, title: "Psicologia Jurídica e Avaliação Psicológica", sub: "Pós-Graduação Lato Sensu", desc: "Compreensão do comportamento humano aplicada à defesa. Análise psicológica do acusado e contexto do crime. Perícia psicológica especializada." },
                            { icon: <Search className="text-[#B1915E] w-8 h-8" />, title: "Criminologia", sub: "Pós-Graduação Lato Sensu", desc: "Compreensão científica do crime. Análise criminológica para defesa. Contexto social e fatores de risco aplicados à estratégia defensiva." },
                            { icon: <Globe className="text-[#B1915E] w-8 h-8" />, title: "Direito Internacional e Ciências Jurídicas", sub: "Pós-Graduações Lato Sensu", desc: "Fundamentação legal sólida. Conhecimento de direito internacional quando aplicável. Base jurídica forte em todas as defesas." },
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl flex gap-4 items-start hover:border-[#B1915E] transition-all">
                                <div className="shrink-0 mt-1">{item.icon}</div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                                    <span className="inline-block px-2 py-1 bg-white/10 rounded text-xs text-gray-300 font-bold mb-3">{item.sub}</span>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEÇÃO 5: COMO FUNCIONA O ATENDIMENTO */}
            <section className="py-16 bg-[#f8f9fa] border-t border-gray-200">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-primary">Processo de Defesa Criminal</h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            { num: "1", title: "Contato Imediato", desc: "Você nos contacta. Respondemos rapidamente. Explicamos seus direitos e próximos passos. Sem compromisso inicial.", time: "Resposta em até 2 horas" },
                            { num: "2", title: "Análise do Caso", desc: "Analisamos a acusação, provas, investigação. Identificamos pontos fracos da acusação e estratégias de defesa.", time: "24-48 horas" },
                            { num: "3", title: "Estratégia de Defesa", desc: "Apresentamos estratégia clara: o que vamos questionar, que provas vamos investigar, qual é nosso plano.", time: "Apresentação em 3-5 dias" },
                            { num: "4", title: "Investigação e Preparação", desc: "Investigamos, coletamos provas, entrevistamos testemunhas, preparamos defesa técnica.", time: "Depende da complexidade" },
                            { num: "5", title: "Defesa em Juízo", desc: "Representamos você em todas as audiências, questionamos provas, apresentamos defesa, protegemos seus direitos.", time: "Contínuo até resolução" },
                            { num: "6", title: "Recursos se Necessário", desc: "Se condenado, preparamos recursos para instâncias superiores.", time: "Depende da decisão" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col md:flex-row bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                                <div className="bg-primary text-white w-full md:w-24 flex md:flex-col items-center justify-center p-4 gap-2">
                                    <span className="text-sm uppercase tracking-wider opacity-70">Passo</span>
                                    <span className="text-3xl font-bold">{item.num}</span>
                                </div>
                                <div className="p-6 flex-1">
                                    <h3 className="font-bold text-xl text-primary mb-2">{item.title}</h3>
                                    <p className="text-gray-600 mb-3">{item.desc}</p>
                                    <div className="inline-flex items-center gap-2 bg-gray-100 px-3 py-1 rounded text-sm text-gray-700 font-semibold">
                                        <Clock size={16} className="text-[#B1915E]" /> <strong>Tempo:</strong> {item.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEÇÃO 6: DIREITOS DO ACUSADO */}
            <section className="py-16 bg-white border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-primary">Seus Direitos Não Podem Ser Violados</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Presunção de Inocência", desc: "Você é inocente até prova em contrário. O Estado deve provar sua culpa além de dúvida razoável. Sua inocência é presumida." },
                            { title: "Direito ao Silêncio", desc: "Você não é obrigado a falar com a polícia. Você não é obrigado a responder perguntas. Exercer seu direito ao silêncio é inteligente, não é culpa." },
                            { title: "Direito à Defesa Técnica", desc: "Você tem direito a um advogado desde o primeiro momento. Você tem direito a um advogado especializado. Você tem direito a comunicação com seu advogado." },
                            { title: "Contraditório e Ampla Defesa", desc: "Você pode questionar todas as provas. Você pode apresentar sua versão. Você pode se defender oralmente. Você tem direito a ser ouvido." },
                            { title: "Proibição de Provas Ilícitas", desc: "Provas obtidas ilegalmente não podem ser usadas. Confissão coagida é ilícita. Violação de privacidade é ilícita. Provas ilegais são nulas." },
                            { title: "Devido Processo Legal", desc: "O processo deve seguir a lei rigorosamente. Violações procedimentais podem resultar em nulidade. Seus direitos processuais são protegidos." },
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                <Shield className="text-[#B1915E] mb-4" size={32} />
                                <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEÇÃO 7: PRAZOS E O QUE ESPERAR */}
            <section className="py-16 bg-[#f8f9fa] border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-4">Quanto Tempo Leva?</h2>
                    </div>

                    <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden mb-12">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-[#1A202C] text-white">
                                <tr>
                                    <th className="p-4">Etapa</th>
                                    <th className="p-4">Prazo Estimado</th>
                                    <th className="p-4">O Que Esperar</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 text-sm">
                                {[
                                    { etapa: "Inquérito Policial", prazo: "30-90 dias", esp: "Investigação da polícia" },
                                    { etapa: "Oferecimento de Denúncia", prazo: "5-10 dias", esp: "Acusação formal" },
                                    { etapa: "Recebimento de Denúncia", prazo: "5-15 dias", esp: "Juiz aceita acusação" },
                                    { etapa: "Processo em Primeira Instância", prazo: "6-24 meses", esp: "Audiências e julgamento" },
                                    { etapa: "Tribunal do Júri", prazo: "3-12 meses", esp: "Julgamento por jurados" },
                                    { etapa: "Apelação", prazo: "6-12 meses", esp: "Segunda instância" },
                                    { etapa: "Recursos Superiores", prazo: "12-36 meses", esp: "Instâncias superiores" },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="p-4 font-bold text-gray-800">{row.etapa}</td>
                                        <td className="p-4 text-[#B1915E] font-bold">{row.prazo}</td>
                                        <td className="p-4 text-gray-600">{row.esp}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="p-3 bg-gray-50 text-xs text-gray-500 text-center italic">
                            *Estimativas. Cada caso é único. Alguns são mais rápidos, outros mais demorados.
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                        <h3 className="font-bold text-2xl text-primary mb-6 text-center">O Que Você Pode Esperar</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { t: "Ser ouvido.", d: "Sua versão importa." },
                                { t: "Defesa técnica profissional.", d: "Não é amadorismo." },
                                { t: "Proteção de direitos.", d: "Nenhuma violação será tolerada." },
                                { t: "Comunicação clara.", d: "Você saberá o que está acontecendo." },
                                { t: "Estratégia.", d: "Não é apenas reação, é planejamento." },
                                { t: "Resultado.", d: "Absolvição, condenação reduzida ou melhor posição processual." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-2 items-start">
                                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                                    <p className="text-gray-700"><strong>{item.t}</strong> {item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 8: DOCUMENTOS NECESSÁRIOS */}
            <section className="py-16 bg-white border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-heading font-bold text-primary">O Que Você Precisa Trazer</h2>
                        <p className="text-gray-600 mt-2">Documentação ideal para início de análise. Não se preocupe se não tiver tudo. Ajudamos a organizar.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 border border-gray-200 rounded-xl">
                            <h3 className="font-bold text-lg text-primary mb-4 flex items-center gap-2 border-b pb-2"><User size={20} className="text-[#B1915E]" /> Documentação Pessoal</h3>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li>• RG e CPF</li>
                                <li>• Comprovante de Residência</li>
                                <li>• Certidão de Nascimento</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 border border-gray-200 rounded-xl">
                            <h3 className="font-bold text-lg text-primary mb-4 flex items-center gap-2 border-b pb-2"><FileText size={20} className="text-[#B1915E]" /> Documentação da Acusação</h3>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li>• Cópia da acusação ou denúncia</li>
                                <li>• Cópia do inquérito policial (se disponível)</li>
                                <li>• Mandado de prisão (se houver)</li>
                                <li>• Autos do processo</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 border border-gray-200 rounded-xl">
                            <h3 className="font-bold text-lg text-primary mb-4 flex items-center gap-2 border-b pb-2"><Search size={20} className="text-[#B1915E]" /> Documentação de Prova</h3>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li>• Documentos que comprovem sua versão</li>
                                <li>• Fotos ou vídeos relevantes</li>
                                <li>• Nomes de testemunhas e Laudos periciais</li>
                                <li>• Correspondência relevante</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 border border-gray-200 rounded-xl">
                            <h3 className="font-bold text-lg text-primary mb-4 flex items-center gap-2 border-b pb-2"><Briefcase size={20} className="text-[#B1915E]" /> Documentação Financeira</h3>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li>• Comprovantes de renda (se relevante)</li>
                                <li>• Documentos de propriedade (se relevante)</li>
                                <li>• Comprovantes de gastos (se relevante)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 9: PERGUNTAS FREQUENTES */}
            <section className="py-16 bg-[#f8f9fa] border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-primary mb-10 text-center">Perguntas Que Clientes Fazem</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Fui acusado de um crime. O que fazer?", a: "Procure um advogado especializado AGORA. Não fale com a polícia sem advogado. Não assine nada. Exercer seu direito ao silêncio é inteligente. Cada minuto conta." },
                            { q: "Posso ser condenado sem provas?", a: "Não. Você só pode ser condenado se houver prova além de dúvida razoável. Presunção de inocência é seu direito fundamental. Dúvida favorece você." },
                        ].map((item, i) => (
                            <details key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 group">
                                <summary className="font-bold text-primary p-5 cursor-pointer list-none flex justify-between items-center group-open:text-[#B1915E] transition-colors">
                                    {item.q}
                                    <ChevronDown className="transition-transform group-open:rotate-180 text-gray-400" size={20} />
                                </summary>
                                <div className="px-5 pb-5 text-gray-600 text-sm border-t border-gray-100 pt-4">
                                    {item.a}
                                </div>
                            </details>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <a href="/faq#criminal" className="inline-block text-[#B1915E] font-bold hover:underline py-2">
                            Ver todas as perguntas sobre Direito Criminal →
                        </a>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 10: POR QUE ESCOLHER NOSSA DEFESA CRIMINAL */}
            <section className="py-16 bg-white border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-heading font-bold mb-12 text-primary">Por Que Somos Diferentes</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { i: <Award size={40} />, t: "Especialização Profunda", d: "5 pós-graduações em Direito Criminal. Não é genérico. É especializado. Tribunal do Júri, Execução Penal, Psicologia Jurídica, Criminologia." },
                            { i: <Search size={40} />, t: "Estratégia Personalizada", d: "Cada caso é único. Não usamos fórmulas prontas. Analisamos profundamente, desenvolvemos estratégia específica para você." },
                            { i: <Focus size={40} />, t: "Experiência Comprovada", d: "Anos defendendo clientes em casos criminais. Conhecimento de tribunais, juízes, promotores. Sabe como funciona o sistema." },
                            { i: <MessageSquare size={40} />, t: "Comunicação Clara", d: "Você entende o que está acontecendo. Explicamos em linguagem clara. Sem jargão. Sem surpresas." },
                            { i: <Clock size={40} />, t: "Resposta Rápida", d: "Respondemos em até 2 horas. Emergências criminais não esperam. Precisamos estar disponíveis." },
                            { i: <Lock size={40} />, t: "Sigilo Total", d: "Sigilo profissional absoluto. Conformidade com LGPD. Seus dados são confidenciais." },
                        ].map((item, i) => (
                            <div key={i} className="px-6 py-8 border border-gray-100 rounded-xl bg-gray-50 hover:shadow-lg transition-all text-center">
                                <div className="text-[#B1915E] mb-4 flex justify-center">{item.i}</div>
                                <h3 className="text-xl font-bold text-primary mb-3">{item.t}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SEÇÃO 11: CHAMADA FINAL PARA AÇÃO */}
            <section className="py-20 bg-[#1A202C] text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl font-heading font-bold mb-6 text-[#B1915E]">Você Merece Defesa Profissional</h2>
                    <p className="text-xl text-gray-300 mb-4">
                        Não deixe sua defesa para amadores. Não deixe sua liberdade para sorte.
                    </p>
                    <p className="text-lg text-gray-400 mb-10">
                        Você merece um advogado que conhece o sistema, que sabe estratégia, que vai lutar por você.
                    </p>
                    <p className="font-bold text-white mb-8 bg-white/10 inline-block py-2 px-6 rounded-full">
                        Resposta em até 2 horas. Análise inicial sem compromisso.
                    </p>
                    <br />
                    <a
                        href={getWhatsappLink()}
                        className="inline-block bg-whatsapp hover:bg-green-600 text-white font-bold py-4 px-12 rounded-md text-lg shadow-2xl transition-transform hover:scale-105 uppercase tracking-wider"
                    >
                        Falar com Especialista Agora
                    </a>
                </div>
            </section>

            {/* CONFORMIDADE PROVIMENTO 205/2021 E OAB */}
            <div className="bg-gray-950 text-gray-500 py-6 text-center text-xs border-t border-gray-800">
                <div className="max-w-4xl mx-auto px-4 space-y-2">
                    <p><strong>Aviso (Provimento 205/2021 OAB):</strong> Este conteúdo é de caráter informativo. O escritório Vitor Coelho Advocacia atua de forma ética, não garantindo resultados processuais, não incitando litígios escolares e agindo com a máxima integridade e transparência estabelecida pelo Código de Ética e Disciplina.</p>
                    <p><strong>Registro:</strong> OAB/CE 56.789</p>
                </div>
            </div>

        </div>
    );
};

export default Criminal;
