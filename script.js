document.addEventListener('DOMContentLoaded', function() {
    const slidesData = [
        {
            title: 'Histórico',
            content: 'I1-O Alto de Pinheiros: Localizado na zona oeste da Cidade de Sao Paulo<br>2-Pinheiros considerado o bairro mais antigo da Metropole;<br>3-Surgiu como loteamento da Cia City, iniciado em 1925;terras Leiloadas, Cia City (1913) ;sujeitas a enchentes períodicas do Rio Pinheiros;<br>4-Ao Norte do Parque Villa-Lobos, é um bairro residencial de classe media alta. Embora não seja uma fonte direta de problemas ambientais, pode ter influência indireta no trafego e na qualidade de ar da região.<br>5-Exemplo: urbanismo europeu (largas avenidas e suas diagonais)<br>6-Principais problemas:<br>(A) Poluição do Ar;<br>(B) Poluiçao Sonora;<br>(C) Pressão Urbana;<br>(D) Impactos de Visitação;<br>(E) Inundaçao e enchentes periodicas;<br>Parque temático musical (moderno e Contemporâneo)',
            image: 'image59.jpg',
            category: 'historico'
        },

        {
            title: 'Histórico',
            content: 'I1-O Alto de Pinheiros: Localizado na zona oeste da Cidade de Sao Paulo<br>2-Pinheiros considerado o bairro mais antigo da Metropole;<br>3-Surgiu como loteamento da Cia City, iniciado em 1925;terras Leiloadas, Cia City (1913) ;sujeitas a enchentes períodicas do Rio Pinheiros;<br>4-Ao Norte do Parque Villa-Lobos, é um bairro residencial de classe media alta. Embora não seja uma fonte direta de problemas ambientais, pode ter influência indireta no trafego e na qualidade de ar da região.<br>5-Exemplo: urbanismo europeu (largas avenidas e suas diagonais)<br>6-Principais problemas:<br>(A) Poluição do Ar;<br>(B) Poluiçao Sonora;<br>(C) Pressão Urbana;<br>(D) Impactos de Visitação;<br>(E) Inundaçao e enchentes periodicas;<br>Parque temático musical (moderno e Contemporâneo)',
            image: 'image3.png',
            category: 'historico'
        },

        {
            title: 'Histórico',
            content: 'I1-O Alto de Pinheiros: Localizado na zona oeste da Cidade de Sao Paulo<br>2-Pinheiros considerado o bairro mais antigo da Metropole;<br>3-Surgiu como loteamento da Cia City, iniciado em 1925;terras Leiloadas, Cia City (1913) ;sujeitas a enchentes períodicas do Rio Pinheiros;<br>4-Ao Norte do Parque Villa-Lobos, é um bairro residencial de classe media alta. Embora não seja uma fonte direta de problemas ambientais, pode ter influência indireta no trafego e na qualidade de ar da região.<br>5-Exemplo: urbanismo europeu (largas avenidas e suas diagonais)<br>6-Principais problemas:<br>(A) Poluição do Ar;<br>(B) Poluiçao Sonora;<br>(C) Pressão Urbana;<br>(D) Impactos de Visitação;<br>(E) Inundaçao e enchentes periodicas;<br>Parque temático musical (moderno e Contemporâneo)',
            image: 'image4.png',
            category: 'historico'
        },

        {
            title: 'Histórico',
            content: 'I1-O Alto de Pinheiros: Localizado na zona oeste da Cidade de Sao Paulo<br>2-Pinheiros considerado o bairro mais antigo da Metropole;<br>3-Surgiu como loteamento da Cia City, iniciado em 1925;terras Leiloadas, Cia City (1913) ;sujeitas a enchentes períodicas do Rio Pinheiros;<br>4-Ao Norte do Parque Villa-Lobos, é um bairro residencial de classe media alta. Embora não seja uma fonte direta de problemas ambientais, pode ter influência indireta no trafego e na qualidade de ar da região.<br>5-Exemplo: urbanismo europeu (largas avenidas e suas diagonais)<br>6-Principais problemas:<br>(A) Poluição do Ar;<br>(B) Poluiçao Sonora;<br>(C) Pressão Urbana;<br>(D) Impactos de Visitação;<br>(E) Inundaçao e enchentes periodicas;<br>Parque temático musical (moderno e Contemporâneo)',
            image: 'image5.png',
            category: 'historico'
        },

        {
            title: 'Histórico',
            content: 'I1-O Alto de Pinheiros: Localizado na zona oeste da Cidade de Sao Paulo<br>2-Pinheiros considerado o bairro mais antigo da Metropole;<br>3-Surgiu como loteamento da Cia City, iniciado em 1925;terras Leiloadas, Cia City (1913) ;sujeitas a enchentes períodicas do Rio Pinheiros;<br>4-Ao Norte do Parque Villa-Lobos, é um bairro residencial de classe media alta. Embora não seja uma fonte direta de problemas ambientais, pode ter influência indireta no trafego e na qualidade de ar da região.<br>5-Exemplo: urbanismo europeu (largas avenidas e suas diagonais)<br>6-Principais problemas:<br>(A) Poluição do Ar;<br>(B) Poluiçao Sonora;<br>(C) Pressão Urbana;<br>(D) Impactos de Visitação;<br>(E) Inundaçao e enchentes periodicas;<br>Parque temático musical (moderno e Contemporâneo)',
            image: 'image6.png',
            category: 'historico'
        },


        {
            title: 'Slide 2',
            content: '',
            image: 'image37.png',
            
            category: 'historico'
        },
        {
            title: 'Estratégias de mitigação',
            content: '',
            image: 'image62.png',
            category: 'infraestrutura'
        },
        {
            title: 'Estratégias de mitigação',
            content: '',
            image: 'image63.png',
            category: 'infraestrutura'
        },

         {
            title: 'Estratégias de mitigação',
            content: '',
            image: 'image64.png',
            category: 'infraestrutura'
        },

         {
            title: 'Estratégias de mitigação',
            content: '',
            image: 'image65.png',
            category: 'infraestrutura'
        },

         {
            title: 'Estratégias de mitigação',
            content: '',
            image: 'image66.png',
            category: 'infraestrutura'
        },
        
        {
            title: 'OBJETIVOS:',
            content: '1-Analisar a aplicação de cidades inteligentes em Alto de Pinheiros;<br>2-Avaliar os indicadores socioeconômicos e ambientais;<br>3-Discutir Vantagens e desvantagens;<br>4-Exemplificar com iniciativas na RMSP (Região Metropolitana de Sâo Paulo)<br>Fonte:<https://isotecconsultoria.com.br/indicadores-ambientais/><br>Figura:<https://explodingtopics.com/new>.Acesso 11/7/2024-Exploding topiics.com',
            image: 'image7.png',
            category: 'objetivos'
        },

        {
            title: 'OBJETIVOS:',
            content: '1-Analisar a aplicação de cidades inteligentes em Alto de Pinheiros;<br>2-Avaliar os indicadores socioeconômicos e ambientais;<br>3-Discutir Vantagens e desvantagens;<br>4-Exemplificar com iniciativas na RMSP (Região Metropolitana de Sâo Paulo)<br>Fonte:<https://isotecconsultoria.com.br/indicadores-ambientais/><br>Figura:<https://explodingtopics.com/new>.Acesso 11/7/2024-Exploding topiics.com',
            image: 'image8.png',
            category: 'objetivos'
        },
        {
            title: 'Hipótese:',
            content: 'Como o conceito de cidades inteligentes vem sendo aplicado como uma pratica para o gerenciamento dos serviços de infraestrutura urbanos no bairro alto pinheiros em São Paulo.<br>Os indicadores socioeconomicos dos mapas,graficos e textos; considerando os indicadores: infraestrutura,agua,energia,saude,alimento,segurança, educaçao, lazer e cultura, e os impactos ambientais e socioambientais no parque Villa-Lobos<br>fonte:<https://commons.wikimedia.org/wiki/File:Objetivos_1.png><br>Ihttps://commons.wikimedia.org/wiki/File:Contribuci%C3%B3n_de_los_geoparques_UNESCO_a_los_Objetivos_de_desarrollo_sostenible_de_la_ONU.pngo',
            image: 'image9.png',
            category: 'objetivos'
        },

        {
            title: 'Hipótese:',
            content: 'Como o conceito de cidades inteligentes vem sendo aplicado como uma pratica para o gerenciamento dos serviços de infraestrutura urbanos no bairro alto pinheiros em São Paulo.<br>Os indicadores socioeconomicos dos mapas,graficos e textos; considerando os indicadores: infraestrutura,agua,energia,saude,alimento,segurança, educaçao, lazer e cultura, e os impactos ambientais e socioambientais no parque Villa-Lobos<br>fonte:<https://commons.wikimedia.org/wiki/File:Objetivos_1.png><br>Ihttps://commons.wikimedia.org/wiki/File:Contribuci%C3%B3n_de_los_geoparques_UNESCO_a_los_Objetivos_de_desarrollo_sostenible_de_la_ONU.pngo',
            image: 'image10.png',
            category: 'objetivos'
        },
        {
            title: 'Indicadores socioeconômicos da região de Alto de Pinheiros',
            content: 'Fonte de dados:<br>1-Mapas,gráficos e textos prefeitura,ibge,FIPE;<br>2-Plano Diretor de São Paulo;<br>3-Censo demográfico 2020 IBGE',
            image: 'image11.png',
            category: 'objetivos'
        },

        {
            title: 'Indicadores socioeconômicos da região de Alto de Pinheiros',
            content: 'Fonte de dados:<br>1-Mapas,gráficos e textos prefeitura,ibge,FIPE;<br>2-Plano Diretor de São Paulo;<br>3-Censo demográfico 2020 IBGE',
            image: 'image12.png',
            category: 'objetivos'
        },

        {
            title: 'Indicadores socioeconômicos da região de Alto de Pinheiros',
            content: 'Fonte de dados:<br>1-Mapas,gráficos e textos prefeitura,ibge,FIPE;<br>2-Plano Diretor de São Paulo;<br>3-Censo demográfico 2020 IBGE',
            image: 'image13.png',
            category: 'objetivos'
        },

        {
            title: 'Indicadores socioeconômicos da região de Alto de Pinheiros',
            content: 'Fonte de dados:<br>1-Mapas,gráficos e textos prefeitura,ibge,FIPE;<br>2-Plano Diretor de São Paulo;<br>3-Censo demográfico 2020 IBGE',
            image: 'image15.png',
            category: 'objetivos'
        },
        {
            title: 'Cidades Inteligentes ',
            content: '<Ihttps://geoaplicacao.wordpress.com/2019/04/29/indicadores-sociais-suas-funcoes-e-os-exemplos-do-brasil-e-santa-catarina/><br>Fonte:<https://pedroejoaoeditores.com.br/produto/os-indicadores-socioambientais-da-regiao-metropolitana-de-sao-paulo/>',
            image: 'image16.png',
            category: 'objetivos'
        },
        {
            title: 'SMART CITIES-Cidades Inteligentes',
            content: '',
            image: 'image57.png',
            category: 'infraestrutura'
        },
        {
            title: 'SMART CITIES-Cidades Esponja',
            content: 'Problemas que podem ser solucionados:<br>1-Enchentes ;<br>2-mudanças de Temperatura;<br>3-Qualidade do Ar<br>4-funções de infraestrutura Verdes:<br>a-purificaçao;<br>b-retenção;<br>c-detençao;<br>d-condução;<br>e-infiltraçao.<br>A infraestrutura verde é uma solução que contribui para o plano dos 17 objetivos de desenvolvimento sustentável (ODS) desenvolvido pela ONU<br>Fonte:<https://blog.exati.com.br/infraestrutura-verde-e-quais-sao-seus-beneficios/>',
            image: 'image18.png',
            category: 'infraestrutura'
        },
        {
            title: 'Infraestrutura Verdes',
            content: 'Problemas que podem ser solucionados:<br>1-Enchentes ;<br>2-mudanças de Temperatura;<br>3-Qualidade do Ar<br>4-funções de infraestrutura Verdes:<br>a-purificaçao;<br>b-retenção;<br>c-detençao;<br>d-condução;<br>e-infiltraçao.<br>A infraestrutura verde é uma solução que contribui para o plano dos 17 objetivos de desenvolvimento sustentável (ODS) desenvolvido pela ONU<br>Fonte:<https://blog.exati.com.br/infraestrutura-verde-e-quais-sao-seus-beneficios/>',
            image: 'image20.png',
            category: 'infraestrutura'
        },
        {
            title: 'Planejamento Urbano e Gestão Ambiental',
            content: 'Relação entre planejamento urbano e sustentabilidade:<br>1-Planejamento Urbano e Gestão Ambiental<br>Relação:<br>Planejamento estratégico para sustentabilidade.<br>Exemplo: Zonas de Desenvolvimento Sustentável;<br>2-Plano Diretor de São Paulo:<br>Promoção de desenvolvimento equilibrado.<br>Diretrizes para infraestrutura, habitação e mobilidade.<br>Fonte:<https://www.wribrasil.org.br/noticias/solucoes-baseadas-na-natureza-para-adaptacao-em-cidades-o-que-sao-e-por-que-implementa-laso>',
            image: 'image21.png',
            category: 'infraestrutura'
        },
        {
            title: 'Plano Diretor de São Paulo',
            content: 'Objetivos e diretrizes principais<br>Fonte:<Https://www.behance.net/gallery/23780335/Infografias-e-ilustracoes-Revista-Apartes>',
            image: 'image22.png',
            category: 'infraestrutura'
        },
        {
            title: 'Plano de Mudanças Climáticas',
            content: '1-Estratégias para mitigação e adaptação as mudanças climáticas<br>Fonte:<https://sinergiaengenharia.com.br/noticias/mudancas-climaticas-a-urgencia-de-agir-agora/>.Acesso em02/07/24',
            image: 'image23.png',
            category: 'infraestrutura'
        },
        {
            title: 'DISCUSSÃO',
            content: 'Infraestrutura:<br>1-Exemplos e impactos<br>2-Vantagens e Desvantagens<br>Fonte:<https://infraroi.com.br/2019/03/15/infraestrutura-verde-azul-pode-ser-a-solucao-para-enchentes-em-sao-paulo/><br>Fonte:<https://www.ecodebate.com.br/2020/04/20/infraestrutura-verde-um-caminho-para-a-sustentabilidade-hidrica/>',
            image: 'image15.png',
            category: 'infraestrutura'
        },
        {
            title: 'INFRAESTRUTURA VERDE PELO MUNDO',
            content: 'Infraestrutura:<br>Iniciativa: Implementação de sensores inteligentes para monitoramento do tráfego e otimização de semáforos.<br>Vantagem: Redução de congestionamentos e melhoria na fluidez do trânsito, promovendo um transporte mais eficiente.<br>Desvantagem: Alto custo inicial de implementação e necessidade de manutenção constante.<br>fONTE:<https://urbanismoemeioambiente.fortaleza.ce.gov.br/images/urbanismo-e-meio-ambiente/forclima/infraestrutura_verde_como_instrumento_de_resiliencia_urbana_no_municipio_de_fortaleza.pdf><br>Figura:<https://jornal.usp.br/artigos/a-perda-da-resiliencia-urbana-e-as-inundacoes-e-alagamentos-no-bairro-de-pinheiros/>',
            image: 'image24.png',
            category: 'infraestrutura'
        },

        {
            title: 'Noticia sobre Infraestrutura Verde 1',
            content: '',
            image: 'image30.png',
            category: 'historico'
        },

        {
            title: 'INFRAESTRUTURA VERDE PELO MUNDO',
            content: 'Infraestrutura:<br>Iniciativa: Implementação de sensores inteligentes para monitoramento do tráfego e otimização de semáforos.<br>Vantagem: Redução de congestionamentos e melhoria na fluidez do trânsito, promovendo um transporte mais eficiente.<br>Desvantagem: Alto custo inicial de implementação e necessidade de manutenção constante.<br>fONTE:<https://urbanismoemeioambiente.fortaleza.ce.gov.br/images/urbanismo-e-meio-ambiente/forclima/infraestrutura_verde_como_instrumento_de_resiliencia_urbana_no_municipio_de_fortaleza.pdf><br>Figura:<https://jornal.usp.br/artigos/a-perda-da-resiliencia-urbana-e-as-inundacoes-e-alagamentos-no-bairro-de-pinheiros/>',
            image: 'image26.png',
            category: 'infraestrutura'
        },

        {
            title: 'Aplicações:',
            content: 'A-Blockchain; Banco de Dados que facilita o compartilhamento de informações dentro da rede numa empresa;<br>B-Realidade aumentada(RA): a RA combina elementos virtuais com o ambiente fisico,permitindo a sobreposição de informações digitais sobre o mundo real.<br>C-Inteligência Artificial (IA): desenvolvimento de sistemas computacionais que podem executar tarefas normalmente que exigiriam inteligência humana.<br>IFigura:<https://itforum.com.br/pinheiros-e-o-novo-polo-tecnologico-de-sao-paulo-revela-pesquisa/>',
            image: 'image29.png',
            category: 'tecnologia'
        },

        {
            title: 'Noticia sobre Tecnologia 1',
            content: '',
            image: 'image31.png',
            category: 'historico'
        },

        {
            title: 'AGUA:',
            content: '1-Sistemas de Monitoramento e Gestão;<br>2-Vantagens e desvantagens;<br>Iniciativa: Sistema de monitoramento inteligente do consumo de água e detecção de vazamentos.<br>Vantagem: Redução de desperdício de água e melhoria na gestão de recursos hídricos.<br>Desvantagem: Dependência de tecnologia avançada e potencial vulnerabilidade a ataques cibernéticos.<br>Fonte:<https://pxhere.com/pt/photo/1410062><br>Figura:<https://infraroi.com.br/2018/07/26/conheca-os-10-problemas-urbanos-de-sao-paulo/><br>Enchentes: Na capital paulista, as chuvas continuam provocando mortes, inundações e deslizamentos. O alagamento de corredores importantes de escoamento de veículos, como as marginais Pinheiros e Tietê, também provoca caos no trânsito e são grandes problemas urbanos. A resiliência a riscos naturais e criados pela humanidade também faz parte da Nova Agenda Urbana do Programa da ONU para Assentamentos Humanos (ONU-Habitat)',
            image: 'image33.png',
            category: 'tecnologia'
        },

        {
            title: 'Noticia sobre Inundaçao 1',
            content: '',
            image: 'image34.png',
            category: 'historico'
        },

        {
            title: 'ENERGIA:',
            content: '1-Redes inteligentes e fontes renováveis;<br>2-Vantagens e desvantagens;<br>Iniciativa: Uso de redes elétricas inteligentes (smart grids) para gestão eficiente de energia.<br>Vantagem: Otimização do consumo energético e integração de fontes de energia renovável.<br>Desvantagem: Necessidade de investimento significativo em infraestrutura e tecnologia.<br>Fonte:<https://transformadoresuniao.com.br/qual-a-importancia-da-energia-solar/><br>Fonte:<https://cplen.iee.usp.br/o-que-nao-se-ve-impactos-indiretos-do-setor-energetico-para-a-qualidade-de-vida-no-brasil/><br>Fonte:<https://tede2.pucgoias.edu.br/bitstream/tede/3112/1/LARISSA%20MACHADO%20ELIAS.pdf>',
            image: 'image35.png',
            category: 'tecnologia'
        },

        {
            title: 'Graficos sobre distribuiçao de Energia ',
            content: '',
            image: 'image36.png',
            category: 'historico'
        },

        {
            title: 'SAUDE',
            content: '1-Telemedicina e monitoramento remoto;<br>2-Vantagens e desvantagens;<br>Iniciativa: Implementação de sistemas de telemedicina e monitoramento remoto de pacientes.<br>Vantagem: Acesso a cuidados de saúde de forma mais rápida e eficiente, especialmente em áreas remotas.<br>Desvantagem: Requer uma infraestrutura robusta de telecomunicações e pode enfrentar resistência inicial de usuários.<br>Fonte:<https://pxhere.com/pt/photo/1576251><br>Fonte:<https://drlucasminig.com/blog/telemedicina-en-espana/>',
            image: 'image38.png',
            category: 'tecnologia'
        },

        {
            title: 'Noticia sobre Saude 1',
            content: '',
            image: 'image39.png',
            category: 'historico'
        },

        {
            title: 'Noticia sobre Saude 2',
            content: '',
            image: 'image40.png',
            category: 'historico'
        },

        {
            title: 'ALIMENTO',
            content: '1-Agricultura urbana e inteligente;<br>2-Vantagens e desvantagens<br>Iniciativa: Agricultura urbana inteligente utilizando sensores e automação.<br>Vantagem: Produção local de alimentos frescos, redução de custos de transporte e menor impacto ambiental.<br>Desvantagem: Espaço limitado em áreas urbanas e necessidade de conhecimento técnico especializado.<br>Fonte:<https://commons.wikimedia.org/wiki/File:Alimentos.jpg><br>Figura:<https://jornal.usp.br/ciencias/hortas-comunitarias-resistem-a-urbanizacao-na-maior-metropole-do-brasil/><br>figura:<https://tvbrasil.ebc.com.br/caminhos-da-reportagem/2019/04/agricultura-urbana>',
            image: 'image42.png',
            category: 'tecnologia'
        },

        {
            title: 'Noticia sobre Hortas Urbanas 1',
            content: '',
            image: 'image43.png',
            category: 'historico'
        },

        {
            title: 'Noticia sobre Hortas Urbanas 2',
            content: '',
            image: 'image44.png',
            category: 'historico'
        },

        {
            title: 'SEGURANCA',
            content: '1-Vigilância inteligente e reconhecimento facial;<br>2-Vantagens e desvantagens<br>SEGURANCA PUBLICA<br>Iniciativa: Sistemas de vigilância por câmeras inteligentes com reconhecimento facial e análise de padrões de comportamento.<br>Vantagem: Aumento da segurança pública e prevenção de crimes.<br>Desvantagem: Questões relacionadas à privacidade e potencial abuso de vigilância<br>Fonte:<https://pxhere.com/pt/photo/636445><br>Fonte:<https://pxhere.com/pt/photo/636445>',
            image: 'image46.png',
            category: 'tecnologia'
        },

        {
            title: 'Noticia sobre Segurança 1',
            content: '',
            image: 'image45.png',
            category: 'historico'
        },

        {
            title: 'Noticia sobre Segurança 2',
            content: '',
            image: 'image47.png',
            category: 'historico'
        },

        {
            title: 'EDUCAÇÃO',
            content: '1-Plataformas online e IA na educação;<br>2-Vantagens e desvantagens<br>Iniciativa: Plataformas de aprendizado online e uso de inteligência artificial para personalização do ensino.<br>Vantagem: Acesso a recursos educacionais de alta qualidade e adaptação ao ritmo de aprendizado dos alunos.<br>Desvantagem: Desigualdade no acesso à tecnologia e necessidade de treinamento para professores.<br>Fonte:<https://blog.portabilis.com.br/educacao-publica/><br>Figura:<https://www1.folha.uol.com.br/educacao/2023/12/pisa-mostra-efeitos-da-pandemia-mas-marasmo-da-educacao-no-brasil-e-persistente.shtml>',
            image: 'image49.png',
            category: 'tecnologia'
        },

        {
            title: 'Noticia sobre Educação 1',
            content: '',
            image: 'image50.png',
            category: 'historico'
        },

        {
            title: 'Noticia sobre Educação 2',
            content: '',
            image: 'image51.png',
            category: 'historico'
        },

        {
            title: 'LAZER e CULTURA',
            content: '1-Monitoramento Ambiental no Parque Villa-Lobos;<br>2-Vantagens e desvantagens;<br>Iniciativa: Aplicativos móveis para promover eventos culturais e facilitar o acesso a espaços de lazer.<br>Vantagem: Maior participação da comunidade e promoção da cultura local.<br>Desvantagem: Dependência de smartphones e possível exclusão digital de certos grupos.<br>Fonte:<https://licere.com.br/2020/06/18/voce-ja-pensou-nos-conteudos-culturais-do-lazer/><br>Fonte:<https://g1.globo.com/jornal-nacional/noticia/2019/12/10/pesquisa-do-ibge-mostra-como-e-desigual-o-acesso-a-cultura-e-ao-lazer.ghtml>',
            image: 'image52.png',
            category: 'tecnologia'
        },

        {
            title: 'Noticia sobre Cultura 1',
            content: '',
            image: 'image53.png',
            category: 'historico'
        },

        {
            title: 'Noticia sobre Cultura 2',
            content: '',
            image: 'image54.png',
            category: 'historico'
        },


        {
            title: 'Impactos Ambientais e Socioambientais no Parque Villa-Lobos',
            content: 'Iniciativa: Monitoramento ambiental do parque utilizando drones e sensores para gestão da biodiversidade.<br>Vantagem: Melhoria na conservação ambiental e gestão de recursos naturais.<br>Desvantagem: Custo elevado e necessidade de pessoal qualificado para operar e manter os sistemas.',
            image: 'image55.png',
            category: 'tecnologia'
        },
        {
            title: 'Conclusão',
            content: 'Conclusões Gerais:<br>1-Beneficios da implementação de cidades inteligentes;<br>2-Desafios e áreas de melhoria;<br>3-Com base nas iniciativas apresentadas, podemos ver que o conceito de cidades inteligentes tem sido aplicado de diversas maneiras na região metropolitana de São Paulo, incluindo o bairro Alto de Pinheiros. As vantagens incluem melhorias significativas na eficiência dos serviços urbanos, na sustentabilidade ambiental e na qualidade de vida dos moradores. No entanto, existem desvantagens, como altos custos de implementação, questões de privacidade e desigualdade no acesso à tecnologia.<br>4-Observaçao:Os dados fornecidos nos documentos anexados ajudam a contextualizar essas iniciativas dentro do plano diretor da cidade, demonstrando a complexidade e a necessidade de uma abordagem integrada para o desenvolvimento de cidades inteligentes.',
            image: 'image61.jpg',
            category: 'conclusao'
        },
        {
            title: 'CONSIDERAÇÕES FINAIS:',
            content: '1-Necessidade de uma abordagem integrada e inclusiva;<br>2-Importância de uma abordagem integrada:<br>2.1-Inclusão social e sustentabilidade<br>2.2-Planejamento urbano holístico.<br>Fonte:<https://editoraappris.com.br/produto/uma-visao-holistica-para-a-mobilidade-urbana/><br>Fonte:<https://somoscidade.com.br/2021/06/urbanistas-revelam-os-diferenciais-de-um-masterplan-desenvolvido-para-comunidades-planejadas-bem-sucedidas/>',
            image: 'image56.png',
            category: 'conclusao'
        },
        {
            title: 'Bibliografia:',
            content: 'Referencias:<br>1-Documentos Prefeitura;<br>2-Plano Diretor de São Paulo;<br>3- Censo Demografico IBGE 2020.<br>4-Plano de Mudanças Climáticas',
            image: 'image58.jpg',
            category: 'conclusao'
        },
        {
            title: 'Slide ',
            content: '',
            image: 'image59.jpg',
            category: 'conclusao'
        }
    ];

    const slidesContainer = document.getElementById('slides-container');
    const loading = document.getElementById('loading');
    const filterButtons = document.getElementById('filter-buttons');
    const scrollTopBtn = document.getElementById('scrollTop');

    // Create cards
    function createCards(slides) {
        slidesContainer.innerHTML = '';
        
        slides.forEach((slide, index) => {
            const card = document.createElement('div');
            card.classList.add('card', 'm-2');
            card.setAttribute('data-category', slide.category);

            let imageHtml = '';
            if (slide.image) {
                imageHtml = `<img src="images/${slide.image}" class="card-img-top" alt="${slide.title}" loading="lazy">`;
            }

            card.innerHTML = `
                ${imageHtml}
                <div class="card-body">
                    <h5 class="card-title">
                        <i class="fas fa-${getCategoryIcon(slide.category)} me-2"></i>
                        ${slide.title}
                    </h5>
                    <p class="card-text">${slide.content}</p>
                </div>
            `;
            
            // Add staggered animation delay
            card.style.animationDelay = `${index * 0.1}s`;
            
            slidesContainer.appendChild(card);
        });
    }

    // Get icon for category
    function getCategoryIcon(category) {
        const icons = {
            'historico': 'history',
            'objetivos': 'bullseye',
            'infraestrutura': 'building',
            'tecnologia': 'microchip',
            'conclusao': 'check-circle'
        };
        return icons[category] || 'circle';
    }

    // Filter functionality
    function setupFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                if (filter === 'all') {
                    createCards(slidesData);
                } else {
                    const filteredSlides = slidesData.filter(slide => slide.category === filter);
                    createCards(filteredSlides);
                }
            });
        });
    }

    // Scroll to top functionality
    function setupScrollToTop() {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scrolling for navigation links
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Initialize everything
    setTimeout(() => {
        loading.style.display = 'none';
        filterButtons.style.display = 'block';
        createCards(slidesData);
        setupFilters();
        setupScrollToTop();
        setupSmoothScrolling();
    }, 1500);
});




