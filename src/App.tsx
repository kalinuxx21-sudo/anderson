import { useState } from 'react'
import { ArrowRight, BarChart3, Check, ChevronDown, Clock3, Code2, Globe2, Menu, MessageCircle, Palette, Rocket, ShieldCheck, Sparkles, Star, X } from 'lucide-react'

const services = [
  ['Sites profissionais', 'Páginas rápidas, responsivas e pensadas para transformar visitantes em oportunidades.', Globe2],
  ['Design & identidade', 'Visual moderno e consistente para sua marca transmitir confiança desde o primeiro contato.', Palette],
  ['Estratégia digital', 'Estrutura, conteúdo e chamadas para ação organizados para apoiar seus objetivos comerciais.', BarChart3],
  ['Automação & tecnologia', 'Integrações e soluções digitais para reduzir tarefas manuais e ganhar eficiência.', Code2],
] as const

const faqs = [
  ['Quanto tempo leva para criar um projeto?', 'O prazo depende do escopo. Depois de entender suas necessidades, definimos as etapas e uma previsão de entrega clara.'],
  ['Posso solicitar alterações?', 'Sim. O projeto é desenvolvido de forma estruturada para facilitar ajustes de conteúdo, layout e funcionalidades.'],
  ['O site funciona no celular?', 'Sim. A experiência é responsiva e pensada para funcionar bem em diferentes tamanhos de tela.'],
  ['Vocês cuidam da publicação?', 'Sim. Podemos orientar ou executar a publicação, domínio, hospedagem e demais configurações necessárias.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <header className="header"><div className="container nav-wrap">
      <a className="brand" href="#inicio" onClick={closeMenu}><span className="brand-mark"><Sparkles size={18}/></span><span>Anderson<span className="brand-dot">.</span></span></a>
      <button className="menu-toggle" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <a href="#servicos" onClick={closeMenu}>Serviços</a><a href="#beneficios" onClick={closeMenu}>Benefícios</a><a href="#processo" onClick={closeMenu}>Como funciona</a><a href="#faq" onClick={closeMenu}>FAQ</a><a className="nav-cta" href="#contato" onClick={closeMenu}>Falar comigo <ArrowRight size={16}/></a>
      </nav>
    </div></header>

    <main>
      <section className="hero" id="inicio"><div className="hero-glow glow-one"/><div className="hero-glow glow-two"/><div className="container hero-grid">
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot"/> Soluções digitais sob medida</div>
          <h1>Seu negócio merece uma presença digital <span>que gera oportunidades.</span></h1>
          <p className="hero-text">Crio sites, experiências digitais e soluções profissionais para empresas que querem apresentar melhor o que fazem e transformar atenção em novos clientes.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contato">Quero meu projeto <ArrowRight size={18}/></a><a className="button button-secondary" href="#servicos">Ver serviços</a></div>
          <div className="hero-trust"><div className="avatar-stack"><span>A</span><span>J</span><span>M</span><span>+</span></div><div><strong>Projetos pensados para negócios reais</strong><small>Atendimento próximo e comunicação simples</small></div></div>
        </div>
        <div className="hero-visual"><div className="dashboard-card"><div className="card-top"><span className="mini-logo"><Sparkles size={14}/></span><span>Seu próximo projeto</span><span className="status">● Online</span></div><div className="metric-label">Presença digital</div><div className="metric-value">+<span>resultados</span></div><div className="chart"><i/><i/><i/><i/><i/><i/><i/></div><div className="chart-footer"><span>● Estratégia</span><span>Projeto personalizado</span></div></div><div className="floating-card floating-check"><span><Check size={16}/></span><div><strong>Feito para você</strong><small>Design + tecnologia</small></div></div><div className="floating-card floating-time"><Clock3 size={19}/><div><strong>Agilidade</strong><small>Processo organizado</small></div></div></div>
      </div></section>

      <section className="logos-strip"><div className="container logos-inner"><span>ESTRATÉGIA</span><span>DESIGN</span><span>TECNOLOGIA</span><span>PERFORMANCE</span><span>RESULTADOS</span></div></section>

      <section className="section" id="servicos"><div className="container"><div className="section-heading"><div><p className="section-kicker">O que eu faço</p><h2>Soluções que unem <em>criatividade</em> e resultado.</h2></div><p>Do primeiro rascunho à publicação, cada projeto é pensado para comunicar valor, gerar confiança e facilitar o próximo passo do seu cliente.</p></div><div className="services-grid">
        {services.map(([title,text,Icon], index) => <article className="service-card" key={title}><span className="service-number">0{index+1}</span><div className="icon-box"><Icon size={24}/></div><h3>{title}</h3><p>{text}</p><a href="#contato">Saiba mais <ArrowRight size={15}/></a></article>)}
      </div></div></section>

      <section className="section benefits-section" id="beneficios"><div className="container benefits-grid"><div className="benefit-visual"><div className="benefit-orb"><Rocket size={54}/></div><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="benefit-tag tag-one"><ShieldCheck size={17}/> Seguro & profissional</div><div className="benefit-tag tag-two"><BarChart3 size={17}/> Foco em crescimento</div></div><div className="benefit-copy"><p className="section-kicker">Por que investir</p><h2>Não é só sobre ter um site. É sobre <em>ser lembrado.</em></h2><p>Uma boa presença digital ajuda seu negócio a passar credibilidade, explicar seu valor e criar um caminho claro para quem quer comprar de você.</p><ul>{['Layout adaptado para celular, tablet e computador','Estrutura pensada para conversão e geração de contatos','Código organizado e preparado para evolução','Boas práticas de performance e SEO técnico'].map(x=><li key={x}><span><Check size={15}/></span>{x}</li>)}</ul><a className="text-link" href="#contato">Vamos conversar sobre seu projeto <ArrowRight size={17}/></a></div></div></section>

      <section className="section process-section" id="processo"><div className="container"><div className="center-heading"><p className="section-kicker">Como funciona</p><h2>Do briefing ao <em>resultado.</em></h2><p>Um processo simples para você acompanhar o projeto sem complicação.</p></div><div className="process-grid">{[['01','Conversa inicial','Entendemos seu negócio, objetivos, público e o que precisa ser resolvido.'],['02','Estratégia & criação','Definimos a estrutura e criamos uma experiência visual alinhada à sua marca.'],['03','Desenvolvimento','Transformamos o projeto em uma solução rápida, responsiva e funcional.'],['04','Entrega & evolução','Publicamos, ajustamos os detalhes e deixamos tudo pronto para crescer.']].map(([num,title,text])=><div className="process-step" key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

      <section className="section testimonial-section"><div className="container testimonial-card"><div className="quote-mark">“</div><div><div className="stars">{[1,2,3,4,5].map(i=><Star key={i} size={17} fill="currentColor"/>)}</div><blockquote>“Precisávamos apresentar nosso serviço de uma forma mais profissional. O novo projeto deixou nossa comunicação muito mais clara e trouxe uma experiência que combina com a nossa marca.”</blockquote><div className="person"><span className="person-avatar">M</span><div><strong>Mariana Oliveira</strong><small>Empreendedora</small></div></div></div></div></section>

      <section className="section faq-section" id="faq"><div className="container faq-grid"><div><p className="section-kicker">Perguntas frequentes</p><h2>Ainda ficou alguma <em>dúvida?</em></h2><p>Se sua pergunta não estiver aqui, fale comigo e eu explico o projeto sem compromisso.</p><a className="button button-secondary" href="#contato">Fazer uma pergunta <MessageCircle size={17}/></a></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${openFaq===i?'faq-open':''}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown size={19}/></button><div className="faq-answer"><p>{a}</p></div></div>)}</div></div></section>

      <section className="contact-section" id="contato"><div className="container contact-card"><div><p className="section-kicker">Pronto para começar?</p><h2>Vamos transformar sua ideia em um projeto <em>de verdade.</em></h2><p>Conte um pouco sobre seu negócio e o que você precisa. A primeira conversa é para entender o cenário e encontrar o melhor caminho.</p></div><div className="contact-actions"><a className="button button-light" href="mailto:contato@seusite.com">Enviar mensagem <ArrowRight size={18}/></a><span>Ou agende uma conversa pelo WhatsApp</span><a className="whatsapp-link" href="mailto:contato@seusite.com?subject=Quero%20falar%20sobre%20um%20projeto"><MessageCircle size={18}/> WhatsApp</a></div></div></section>
    </main>

    <footer className="footer"><div className="container footer-inner"><a className="brand" href="#inicio"><span className="brand-mark"><Sparkles size={18}/></span><span>Anderson<span className="brand-dot">.</span></span></a><p>© {new Date().getFullYear()} Anderson. Soluções digitais para negócios.</p><div><a href="#servicos">Serviços</a><a href="#contato">Contato</a></div></div></footer>
  </div>
}

export default App
