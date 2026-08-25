// Catálogo de Estabelecimentos Credenciados — CISLAGOS
// Modalidades: "com_agenda" | "sem_agenda" | "solicitacao" | "misto"

const ESTABELECIMENTOS = [
{
  id: 1, nome: "Consultório Odontológico Alan Guilherme Pianetti Junior",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua João de Camargo", numero:"209", bairro:"Santa Rita", cidade:"Alfenas", uf:"MG", cep:"37132-000"}],
  profissionais: [{nome:"Alan Guilherme Pianetti Junior", especialidade:"Cirurgião Dentista"}]
},
{
  id: 2, nome: "Audioclik",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Rua Martins Alfenas", numero:"2406", bairro:"Santa Rita", cidade:"Alfenas", uf:"MG", cep:"37132-018"}],
  profissionais: [{nome:"Miriam da Silva Riuto Dias", especialidade:"Fonoaudióloga"}]
},
{
  id: 3, nome: "Dra. Ana Azevedo",
  modalidade: "misto",
  modalidadeDetalhe: "Audiometria e imitanciometria: Com agenda. Demais procedimentos: Por solicitação.",
  enderecos: [
    {label:"Clínica Salutar", logradouro:"Rua Santa Bárbara", numero:"60", bairro:"São Benedito", cidade:"Alpinópolis", uf:"MG", cep:"37940-000"},
    {label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"},
    {label:"Clínica Neurovida Desenvolvimento", logradouro:"Rua Doutor Bernardino Vieira", numero:"625", bairro:"Centro", cidade:"Passos", uf:"MG", cep:"37900-060"}
  ],
  profissionais: [{nome:"Ana Azevedo Faria", especialidade:"Fonoaudióloga"}]
},
{
  id: 4, nome: "Dr. Berg Benicio Oliveira Baldansi",
  modalidade: "com_agenda",
  enderecos: [{label:"COTT - Clínica de Ortopedia e Traumatologia de Três Pontas", logradouro:"Avenida Prefeito Nilson Vilela", numero:"880", complemento:"Sala 06", bairro:"Santana", cidade:"Três Pontas", uf:"MG", cep:"37187-060"}],
  profissionais: [{nome:"Berg Benicio Oliveira Baldansi", especialidade:"Ortopedista e Traumatologista"}]
},
{
  id: 5, nome: "BP Saúde (D-Rádio)",
  modalidade: "solicitacao",
  enderecos: [
    {label:"Unidade Hospital Regional", logradouro:"Avenida Rui Barbosa", numero:"158", bairro:"Centro", cidade:"Varginha", uf:"MG", cep:"37002-140"},
    {label:"Unidade Hospital de Varginha", logradouro:"Avenida Antonieta Esper Kallas", numero:"299", bairro:"Parque Mariela", cidade:"Varginha", uf:"MG", cep:"37030-100"},
    {label:"Unidade Santa Casa de Três Pontas", logradouro:"Rua Benjamin da Silva Campos", numero:"101", bairro:"Ouro Verde", cidade:"Três Pontas", uf:"MG", cep:"37191-146"}
  ],
  profissionais: [{nome:"Helio de Almeida Nascimento Junior", especialidade:"Radiologia e Diagnóstico por Imagem"}]
},
{
  id: 6, nome: "Cardiocenter",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Avenida Gentil Reis", numero:"50", bairro:"Vila Verde", cidade:"Varginha", uf:"MG", cep:"37012-010"}],
  profissionais: [{nome:"Cassius Frederico Martins Pereira", especialidade:"Cardiologista"}]
},
{
  id: 7, nome: "Cardiofit Centro de Reabilitação Cardiovascular",
  modalidade: "com_agenda",
  enderecos: [
    {label:"Cardiofit", logradouro:"Rua João Paulino Damasceno", numero:"903", complemento:"Térreo, Consultório 7", bairro:"Santa Rita", cidade:"Alfenas", uf:"MG", cep:"37132-004"},
    {label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}
  ],
  profissionais: [{nome:"Luiz Felipe Ferreira Cruvinel", especialidade:"Cardiologista"}]
},
{
  id: 8, nome: "Gastroproct",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Rua Barão da Boa Esperança", numero:"646", bairro:"Antônio de Brito Mendonça", cidade:"Três Pontas", uf:"MG", cep:"37189-140"}],
  profissionais: [{nome:"Claudio Marcio de Carvalho Silva", especialidade:"Gastroenterologista"}]
},
{
  id: 9, nome: "Santa Casa de Alfenas",
  modalidade: "misto",
  modalidadeDetalhe: "Colonoscopia, endoscopia, mamografia, tomografia, urodinâmica, ultrassonografia, consulta em nefrologia, cirurgia pediátrica e tratamento da dor: Com agenda. Procedimentos laboratoriais: Sem agenda. Demais procedimentos: Por solicitação.",
  enderecos: [{label:"", logradouro:"Rua Martins Alfenas", numero:"1616", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-081"}],
  profissionais: [
    {nome:"Americo Nannetti Junior", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Angelo Cezar Barbosa Alvarenga", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Carlos Marcelo de Barros", especialidade:"Anestesiologista"},
    {nome:"Fernanda Marina Guimaraes de Matos Terra", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Glaycon Baeta Lopes", especialidade:"Cirurgião Pediátrico"},
    {nome:"Gustavo Diniz Quirino", especialidade:"Cirurgião do Aparelho Digestivo / Gastroenterologista"},
    {nome:"Heraldo Carlos Pereira", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Isabel Cristina de Oliveira Bordin", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Joaquim Carlos de Avila Terra", especialidade:"Coloproctologista / Endoscopia"},
    {nome:"Lyliane Bottrel Pimentel", especialidade:"Patologista Clínico / Medicina Laboratorial"},
    {nome:"Marcelo Costa Fleury", especialidade:"Gastroenterologista / Endoscopia"},
    {nome:"Maria Cristina Mesquita Rebouças Quirino", especialidade:"Clínica / Oxigenioterapia"},
    {nome:"Millena Pompeu Magalhaes", especialidade:"Ginecologista e Obstetra"},
    {nome:"Raphael Augusto Penzim de Miranda Gomes", especialidade:"Endocrinologista e Metabologista"},
    {nome:"Tatiane Mitbanno da Costa Leite", especialidade:"Nefrologista"}
  ]
},
{
  id: 10, nome: "Dr. Ermelindo Matinatti",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Ermelindo Matinatti", especialidade:"Ortopedista"}]
},
{
  id: 11, nome: "CIARC",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Ministro Salgado Filho", numero:"189", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-041"}],
  profissionais: [
    {nome:"Carla Patricia Teixeira", especialidade:"Acupuntura"},
    {nome:"Daiana Neves Silva Schelk", especialidade:"Psicopedagoga"},
    {nome:"Debora Ferreira Pessoa", especialidade:"Nutricionista"},
    {nome:"Dulcineia de Avila", especialidade:"Fonoaudióloga"},
    {nome:"Jackeline Batista", especialidade:"Neuropsicólogo"},
    {nome:"Janaina Marques", especialidade:"Psicopedagoga"},
    {nome:"Jessica Lemes Luciano", especialidade:"Fisioterapeuta"},
    {nome:"Kelly Maria Pereira Dias", especialidade:"Fisioterapeuta"},
    {nome:"Lorenna Oliveira Santos", especialidade:"Psicólogo"},
    {nome:"Lucas Gabriel Ribeiro", especialidade:"Neurologista"},
    {nome:"Nayara Aparecida Martins", especialidade:"Psicóloga"}
  ]
},
{
  id: 12, nome: "Citylab",
  modalidade: "sem_agenda",
  enderecos: [{label:"", logradouro:"Rua Coronel Pedro Correa", numero:"763", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-087"}],
  profissionais: [
    {nome:"Amanda de Araujo Zazeri", especialidade:"Biomédica"},
    {nome:"Lyliane Bottrel Pimentel", especialidade:"Patologista Clínica / Medicina Laboratorial"}
  ]
},
{
  id: 13, nome: "CIV - Centro de Infusão de Varginha",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Praça Pio XII", numero:"35", complemento:"Sala 05", bairro:"Jardim Petrópolis", cidade:"Varginha", uf:"MG", cep:"37006-725"}],
  profissionais: [{nome:"Maria Lucia Alvares de Azevedo Bahr", especialidade:"Reumatologista"}]
},
{
  id: 14, nome: "Clínica Bellagio",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Jose Jacinto Ribeiro", numero:"198", bairro:"São Benedito", cidade:"Alpinópolis", uf:"MG", cep:"37940-000"}],
  profissionais: [{nome:"Antonio Carlos de Faria Filho", especialidade:"Ginecologista e Obstetra"}]
},
{
  id: 15, nome: "Endogastro",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Dona Zica", numero:"132", bairro:"Vila Pinto", cidade:"Varginha", uf:"MG", cep:"37010-570"}],
  profissionais: [{nome:"Carlo Eugenio Paula de Luca", especialidade:"Gastroenterologista / Endoscopia"}]
},
{
  id: 16, nome: "Clínica de Otorrinolaringologia Anaklaudia",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Anaklaudia Teixeira Carvalho", especialidade:"Otorrinolaringologista"}]
},
{
  id: 17, nome: "Clínica Derma Corpus",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Claudio de Lelis Filgueiras de Souza", especialidade:"Dermatologista"}]
},
{
  id: 18, nome: "Clínica Médica Dra. Maria Alice Celani",
  modalidade: "com_agenda",
  enderecos: [
    {label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"},
    {label:"Climed", logradouro:"Avenida Dona Floriana", numero:"102", complemento:"Sala 08", bairro:"Centro", cidade:"Guaxupé", uf:"MG", cep:"37834-308"}
  ],
  profissionais: [{nome:"Maria Alice Celani", especialidade:"Cardiologista"}]
},
{
  id: 19, nome: "CMR Diagnósticos por Imagem",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Dr. Gutemberg de Carvalho", numero:"10", bairro:"Jdm. Mediterranee", cidade:"São Sebastião do Paraíso", uf:"MG", cep:"37953-212"}],
  profissionais: [{nome:"Rodrigo de Oliveira Wilman", especialidade:"Radiologia e Diagnóstico por Imagem"}]
},
{
  id: 20, nome: "Consultório Dr. Bruno Ricardo Ferreira",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Avenida Gentil Reis", numero:"50", bairro:"Vila Verde", cidade:"Varginha", uf:"MG", cep:"37012-010"}],
  profissionais: [{nome:"Bruno Ricardo Ferreira", especialidade:"Gastroenterologista / Endoscopia"}]
},
{
  id: 21, nome: "Consultórios Dr. Antonio de Padua",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Rua Isaias Alves Ferreira", numero:"100", bairro:"Centro", cidade:"Areado", uf:"MG", cep:"37140-000"}],
  profissionais: [{nome:"Antonio de Padua Oliveira Miri", especialidade:"Cardiologista"}]
},
{
  id: 22, nome: "Corpus Pouso Alegre",
  modalidade: "solicitacao",
  enderecos: [{label:"Clínica Corpus Unidade Pouso Alegre", logradouro:"Rua Ciomara Amaral de Paula", numero:"222", complemento:"Pav. 1", bairro:"Alfredo Custódio de Paula", cidade:"Pouso Alegre", uf:"MG", cep:"37553-073"}],
  profissionais: [{nome:"Gustavo Pagliarini Pacheco", especialidade:"Radiologia e Diagnóstico por Imagem"}]
},
{
  id: 23, nome: "Corpus PET-CT Pouso Alegre",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Ciomara Amaral de Paula", numero:"140", complemento:"Subsolo 2", bairro:"Doutor Jose Alfredo de Paula", cidade:"Pouso Alegre", uf:"MG", cep:"37553-006"}],
  profissionais: [{nome:"Erico Luis Camacho", especialidade:"Medicina Nuclear"}]
},
{
  id: 24, nome: "Corpus Tomografia Alfenas",
  modalidade: "solicitacao",
  enderecos: [{label:"Clínica Corpus Unidade Alfenas", logradouro:"Rua Adolfo Engel", numero:"19", complemento:"Sala 175", bairro:"Loteamento Siqueira", cidade:"Alfenas", uf:"MG", cep:"37133-613"}],
  profissionais: [{nome:"Raphael Monteiro Ferreira de Oliveira", especialidade:"Radiologia e Diagnóstico por Imagem"}]
},
{
  id: 25, nome: "Dimen Poços de Caldas",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Victor Marchesi", numero:"99", bairro:"Loteamento Vila Flora II", cidade:"Poços de Caldas", uf:"MG", cep:"37700-393"}],
  profissionais: [{nome:"Elison Alves Granjeiro", especialidade:"Medicina Nuclear"}]
},
{
  id: 26, nome: "Elucida Imagem e Saúde",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Rua Coronel Pedro Correa", numero:"273", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Luiz Gustavo Lima de Oliveira", especialidade:"Radiologia e Diagnóstico por Imagem"}]
},
{
  id: 27, nome: "Endomed",
  modalidade: "misto",
  modalidadeDetalhe: "Colonoscopia, endoscopia e consulta em reumatologia: Com agenda. Demais procedimentos: Por solicitação.",
  enderecos: [{label:"", logradouro:"Praça Jose de Rezende Paiva", numero:"177", bairro:"Centro", cidade:"Varginha", uf:"MG", cep:"37002-030"}],
  profissionais: [
    {nome:"Lidiane Maiolini", especialidade:"Reumatologista"},
    {nome:"Rogerio Maiolini", especialidade:"Gastroenterologista / Endoscopia"}
  ]
},
{
  id: 28, nome: "Dr. Rodrigo Ragognete",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Rodrigo Martins Ragognete", especialidade:"Otorrinolaringologista"}]
},
{
  id: 29, nome: "Laboratório Famasul",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Avenida Padre Jose Nasser", numero:"135", complemento:"Sala 2", bairro:"Centro", cidade:"Fama", uf:"MG", cep:"37144-000"}],
  profissionais: [{nome:"Ana Luiza Silverio Cordeiro", especialidade:"Biomédica"}]
},
{
  id: 30, nome: "Hospital Universitário Alzira Velano (HUAV)",
  modalidade: "misto",
  modalidadeDetalhe: "Endoscopia e colonoscopia: Com agenda. Demais procedimentos: Por solicitação.",
  enderecos: [{label:"", logradouro:"Rua Geraldo Freitas da Costa", numero:"120", complemento:"Bloco 1", bairro:"Cruz Preta", cidade:"Alfenas", uf:"MG", cep:"37132-202"}],
  profissionais: [
    {nome:"Bianca Ferreira Bianco", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Heraldo Carlos Pereira", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"José Ademar Baldim", especialidade:"Coloproctologista"},
    {nome:"Luccas Diniz e Garcia", especialidade:"Gastroenterologista / Endoscopia"},
    {nome:"Luiz Carlos de Andrade", especialidade:"Cirurgião Digestivo / Gastroenterologista / Endoscopia"}
  ]
},
{
  id: 31, nome: "Dra. Francielle Leismann",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Francielle Regina Leismann", especialidade:"Dermatologista"}]
},
{
  id: 32, nome: "Dra. Gisele Neves Martins",
  modalidade: "com_agenda",
  enderecos: [{label:"Consultório Dra. Gisele Neves", logradouro:"Rua Artur Xavier Pedroso", numero:"428", complemento:"Loja 17, Pav. 1", bairro:"Centro", cidade:"Machado", uf:"MG", cep:"37750-000"}],
  profissionais: [{nome:"Gisele Neves Martins", especialidade:"Dermatologista"}]
},
{
  id: 33, nome: "Holhos Minas Oftalmologia",
  modalidade: "misto",
  modalidadeDetalhe: "Consulta oftalmológica: Com agenda ou por solicitação. Demais procedimentos: Por solicitação.",
  enderecos: [
    {label:"Unidade Alfenas", logradouro:"Rua Coronel Pedro Correa", numero:"651", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"},
    {label:"Unidade Varginha", logradouro:"Avenida Rui Barbosa", numero:"158", complemento:"Unidade Centro Médico", bairro:"Centro", cidade:"Varginha", uf:"MG", cep:"37002-140"}
  ],
  profissionais: [
    {nome:"Alex Reis Ferreira", especialidade:"Oftalmologista"},
    {nome:"Fabio Naoki Hino", especialidade:"Oftalmologista"}
  ]
},
{
  id: 34, nome: "Hospital de Olhos de Varginha",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Praça Henrique Batista", numero:"10", bairro:"Vila Pinto", cidade:"Varginha", uf:"MG", cep:"37010-690"}],
  profissionais: [
    {nome:"Alex Reis Ferreira", especialidade:"Oftalmologista"},
    {nome:"Jael Patricia Santos Soares", especialidade:"Oftalmologista"},
    {nome:"Marcelo Pinto Gomes", especialidade:"Oftalmologista"},
    {nome:"Sergio Mendes Ferreira", especialidade:"Oftalmologista"}
  ]
},
{
  id: 35, nome: "Fundação Hospitalar de Paraguaçu (FHOP)",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Padre Piccinini", numero:"528", bairro:"Centro", cidade:"Paraguaçu", uf:"MG", cep:"37120-000"}],
  profissionais: [
    {nome:"Breno de Souza Pedro Santana", especialidade:"Cirurgião Dentista / Traumatologista Bucomaxilofacial"},
    {nome:"Ciro José Ordones Delfraro", especialidade:"Oftalmologista"},
    {nome:"Deborah Cristina Marques Brito", especialidade:"Anestesiologista"},
    {nome:"Felipe Marzullo Cabral", especialidade:"Oftalmologista"}
  ]
},
{
  id: 37, nome: "Santa Casa de Misericórdia de São Sebastião do Paraíso",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Praça Comendador João Pio de Figueiredo Westin", numero:"92", bairro:"Mocoquinha", cidade:"São Sebastião do Paraíso", uf:"MG", cep:"37957-148"}],
  profissionais: [{nome:"Flavio Bernardes Goncalves", especialidade:"Anestesiologista"}]
},
{
  id: 38, nome: "Hospital Regional do Sul de Minas",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Avenida Rui Barbosa", numero:"158", bairro:"Centro", cidade:"Varginha", uf:"MG", cep:"37002-140"}],
  profissionais: [
    {nome:"Gustavo Eugenio Martins Marinho", especialidade:"Anestesiologista / Cardiologista / Cardiologista Intervencionista / Radiologia e Diagnóstico por Imagem"},
    {nome:"Marcelo Biscaro Carvalho", especialidade:"Anestesiologista / Cardiologista / Cardiologista Intervencionista / Radiologia e Diagnóstico por Imagem"}
  ]
},
{
  id: 40, nome: "Consultório Dr. Eduardo Magalhaes",
  modalidade: "com_agenda",
  enderecos: [{label:"Humana Cardiologia", logradouro:"Rua Adolfo Engel", numero:"22", complemento:"Sala 01", bairro:"Loteamento Siqueira", cidade:"Alfenas", uf:"MG", cep:"37133-613"}],
  profissionais: [{nome:"Eduardo Magalhaes Fernandes", especialidade:"Cardiologista"}]
},
{
  id: 41, nome: "Innovare Diagnósticos",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Rua Bias Fortes", numero:"610", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-085"}],
  profissionais: [
    {nome:"Paula Miranda Orsi Del Bianco", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Thyago Silva Grigorio", especialidade:"Vascular"}
  ]
},
{
  id: 42, nome: "Inspire",
  modalidade: "misto",
  modalidadeDetalhe: "Consulta, DLCO, espirometria e pletismografia: Com agenda. Polissonografia: Por solicitação.",
  enderecos: [{label:"Clínica Inspire", logradouro:"Rua João Paulino Damasceno", numero:"1314", bairro:"Jardim Tropical", cidade:"Alfenas", uf:"MG", cep:"37133-602"}],
  profissionais: [{nome:"Katia Rejane Rodrigues Leal", especialidade:"Pneumologista"}]
},
{
  id: 43, nome: "Instituto de Imagem da Mama",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Benjamin da Silva Campos", numero:"165", bairro:"Ouro Verde", cidade:"Três Pontas", uf:"MG", cep:"37191-146"}],
  profissionais: [{nome:"Silvio Cesar da Silva", especialidade:"Mastologista"}]
},
{
  id: 45, nome: "Instituto Donato de Oftalmologia",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Avenida Gentil Messias-Kitate", numero:"270", bairro:"Vila Cruz", cidade:"Poços de Caldas", uf:"MG", cep:"37701-528"}],
  profissionais: [
    {nome:"Adilson Vilas Boas Junior", especialidade:"Oftalmologista"},
    {nome:"Alexandre Martins Braz", especialidade:"Oftalmologista"},
    {nome:"Ana Lucia Moreira", especialidade:"Oftalmologista"},
    {nome:"Ana Paula Donato Engel", especialidade:"Oftalmologista"},
    {nome:"Bruno Guimaraes Donato", especialidade:"Oftalmologista"},
    {nome:"Eduardo Rezende Donato", especialidade:"Oftalmologista"},
    {nome:"Fernanda Tanaka Iasbeck Gonçalves", especialidade:"Oftalmologista"},
    {nome:"Geraldo das Neves Filho", especialidade:"Oftalmologista"},
    {nome:"Geraldo Lustosa Neves", especialidade:"Oftalmologista"},
    {nome:"Gustavo de Paiva Castro", especialidade:"Oftalmologista"},
    {nome:"Helio Ferreira Grosso Junior", especialidade:"Oftalmologista"},
    {nome:"Henrique Corrêa Aterje", especialidade:"Oftalmologista"},
    {nome:"Isabela Barbosa Morgan de Aguiar Leonardo", especialidade:"Oftalmologista"},
    {nome:"Izabele Catarine de Oliveira Bertacchini", especialidade:"Oftalmologista"},
    {nome:"Mansur Paulo Abou Saab", especialidade:"Oftalmologista"},
    {nome:"Maria Cecilia Ribeiro Bazilli", especialidade:"Oftalmologista"},
    {nome:"Mário Abdalla Saad Neto", especialidade:"Oftalmologista"},
    {nome:"Mayco Custódio dos Reis", especialidade:"Oftalmologista"},
    {nome:"Natalia Fechus Monteiro", especialidade:"Oftalmologista"},
    {nome:"Paulo Roberto Fernandes Macedo", especialidade:"Oftalmologista"},
    {nome:"Rafael Garcia Fernandes Nogueira", especialidade:"Oftalmologista"},
    {nome:"Rafael Machado Borges", especialidade:"Oftalmologista"},
    {nome:"Ricardo Gomes Braga de Magalhães", especialidade:"Oftalmologista"},
    {nome:"Rodrigo Donato Costa", especialidade:"Oftalmologista"},
    {nome:"Soraya de Lacerda Ferreira", especialidade:"Oftalmologista"}
  ]
},
{
  id: 46, nome: "Dra. Juliana Marilia",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Juliana Marilia Pereira de Oliveira", especialidade:"Cardiologista"}]
},
{
  id: 47, nome: "Laboratório Furquim",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua João Paulino Damasceno", numero:"927", bairro:"Santa Rita", cidade:"Alfenas", uf:"MG", cep:"37132-004"}],
  profissionais: [{nome:"Lais Morais Furquim", especialidade:"Farmacêutica Analista Clínica"}]
},
{
  id: 48, nome: "Life Med",
  modalidade: "com_agenda",
  enderecos: [
    {label:"", logradouro:"Rua Bias Fortes", numero:"616", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-085"},
    {label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}
  ],
  profissionais: [
    {nome:"Diogo Oliveira Chaves", especialidade:"Gastroenterologista"},
    {nome:"Octacilio Felicio Junior", especialidade:"Gastroenterologista"}
  ]
},
{
  id: 49, nome: "Dra. Ana Carolina",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Ana Carolina Silva Santos", especialidade:"Cardiologista"}]
},
{
  id: 50, nome: "Dr. Rubens Bittencourt",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Rubens Bittencourt", especialidade:"Ortopedista"}]
},
{
  id: 51, nome: "Magnus Alfenas",
  modalidade: "misto",
  modalidadeDetalhe: "Ressonância magnética noturna: Com agenda. Demais procedimentos: Por solicitação.",
  enderecos: [{label:"Clínica", logradouro:"Rua Martins Alfenas", numero:"2760", bairro:"Loteamento Siqueira", cidade:"Alfenas", uf:"MG", cep:"37133-616"}],
  profissionais: [
    {nome:"Daniel Almeida da Silva", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Edson Minoru Nakano", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Felipe de Oliveira Mejias", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Fernando Costa Brockes", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Guilherme Carlos da Silva", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Luis Gustavo Silveira Almeida", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Paulo Lourenço Menicucci Silva", especialidade:"Radiologia e Diagnóstico por Imagem"}
  ]
},
{
  id: 52, nome: "Magnus Varginha",
  modalidade: "solicitacao",
  enderecos: [{label:"Clínica", logradouro:"Alameda Olívio Bregalda", numero:"595", bairro:"Santa Luiza", cidade:"Varginha", uf:"MG", cep:"37062-680"}],
  profissionais: [
    {nome:"Felipe de Oliveira Mejias", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Gabriel Ademar Reis", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Paulo Lourenço Menicucci Silva", especialidade:"Radiologia e Diagnóstico por Imagem"}
  ]
},
{
  id: 53, nome: "Magsul Três Corações",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Tenente Clovis Neder", numero:"333", bairro:"Alto Pero", cidade:"Três Corações", uf:"MG", cep:"37410-001"}],
  profissionais: [{nome:"Flavio Siqueira Junqueira", especialidade:"Radiologia e Diagnóstico por Imagem"}]
},
{
  id: 54, nome: "Magsul Pouso Alegre",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Adriano de Freitas Cardoso", numero:"30", bairro:"Fatima III", cidade:"Pouso Alegre", uf:"MG", cep:"37555-002"}],
  profissionais: [{nome:"Flavio Siqueira Junqueira", especialidade:"Radiologia e Diagnóstico por Imagem"}]
},
{
  id: 55, nome: "Menegate Oftalmologia",
  modalidade: "solicitacao",
  enderecos: [
    {label:"Unidade Passos", logradouro:"Avenida Arouca", numero:"940", bairro:"Centro", cidade:"Passos", uf:"MG", cep:"37900-152"},
    {label:"Unidade Carmo do Rio Claro", logradouro:"Avenida Rondon Pacheco", numero:"300", bairro:"Centro", cidade:"Carmo do Rio Claro", uf:"MG", cep:"37150-000"}
  ],
  profissionais: [{nome:"Wesley Menegate Ferreira de Faria", especialidade:"Oftalmologista"}]
},
{
  id: 56, nome: "Magsul Medicina Nuclear",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Adriano de Freitas Cardoso", numero:"30", complemento:"1", bairro:"Fatima III", cidade:"Pouso Alegre", uf:"MG", cep:"37550-001"}],
  profissionais: [{nome:"Erico Luis Camacho", especialidade:"Medicina Nuclear"}]
},
{
  id: 57, nome: "MRI Diagnósticos",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Travessa Belo Horizonte", numero:"43", complemento:"Sala 04", bairro:"Belo Horizonte", cidade:"Passos", uf:"MG", cep:"37900-022"}],
  profissionais: [
    {nome:"Gesse Antonio Barrios de Jesus", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Humberto Franca Ferreira", especialidade:"Radiologista Intervencionista"}
  ]
},
{
  id: 58, nome: "Dr. Luiz Carlos Pereira Silva",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Luiz Carlos Pereira Silva", especialidade:"Neurologista"}]
},
{
  id: 59, nome: "O2 Hiperbárica Pouso Alegre",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Persano Tavares Galvao", numero:"50", complemento:"Quadra 08, Lote 007", bairro:"Fatima III", cidade:"Pouso Alegre", uf:"MG", cep:"37555-012"}],
  profissionais: [{nome:"Gustavo Pagliarini Pacheco", especialidade:"Radiologia e Diagnóstico por Imagem"}]
},
{
  id: 60, nome: "Olhar Oftalmologia",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Jose Francisco de Castro", numero:"436", complemento:"Letra A", bairro:"Lagoinha", cidade:"São Sebastião do Paraíso", uf:"MG", cep:"37957-003"}],
  profissionais: [{nome:"Fernando Silva Moura", especialidade:"Oftalmologista"}]
},
{
  id: 61, nome: "Dr. Pedro Sant'Anna",
  modalidade: "com_agenda",
  enderecos: [{label:"Amb. Dr. Plínio", logradouro:"Praça Fausto Monteiro", numero:"347", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-031"}],
  profissionais: [{nome:"Pedro Henrique Oliveira Sant'Anna", especialidade:"Otorrinolaringologista"}]
},
{
  id: 62, nome: "Evolve Especialidades Pediátricas",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Avenida Comendador Francisco Avelino Maia", numero:"1740", bairro:"Santa Casa", cidade:"Passos", uf:"MG", cep:"37904-017"}],
  profissionais: [{nome:"Fabiana da Silva Freire", especialidade:"Cardiologista"}]
},
{
  id: 63, nome: "Dr. José Fernando Cordova",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"José Fernando Cordova Cepeda", especialidade:"Neurologista"}]
},
{
  id: 64, nome: "Prevenir Guaxupé",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Rua 13 de Maio", numero:"89", complemento:"Sala 5, 6, 7", bairro:"Centro", cidade:"Guaxupé", uf:"MG", cep:"37800-000"}],
  profissionais: [
    {nome:"Anderlei Tessarolo Degering", especialidade:"Pneumologista"},
    {nome:"Gisela de Almeida Palos Batista", especialidade:"Fonoaudióloga"}
  ]
},
{
  id: 65, nome: "Pronto-Lab",
  modalidade: "sem_agenda",
  enderecos: [{label:"", logradouro:"Rua Belmiro Bueno de Almeida", numero:"505", bairro:"Centro", cidade:"Campo do Meio", uf:"MG", cep:"37165-000"}],
  profissionais: [{nome:"Marisa Silveira Bueno Souza", especialidade:"Farmacêutica Analista Clínica"}]
},
{
  id: 66, nome: "Dr. Ricardo Barbosa",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Ricardo Barbosa de Oliveira", especialidade:"Radiologia e Diagnóstico por Imagem"}]
},
{
  id: 68, nome: "Dra. Isabela Tiburcio",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Isabela Tiburcio Cabral", especialidade:"Geriatra"}]
},
{
  id: 69, nome: "TIPP Med",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [],
  observacao: "Prestador ainda não enviou a relação de profissionais de saúde."
},
{
  id: 70, nome: "Tomo Centro Médico e Diagnóstico de Machado",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Avenida Santa Cruz", numero:"244", bairro:"Centro", cidade:"Machado", uf:"MG", cep:"37750-000"}],
  profissionais: [{nome:"Marco Aurelio Abrahao Dias", especialidade:"Radiologia e Diagnóstico por Imagem"}]
},
{
  id: 71, nome: "Ultrassom Ideal",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Argentina", numero:"70", bairro:"Vila Pinto", cidade:"Varginha", uf:"MG", cep:"37010-640"}],
  profissionais: [{nome:"Gabriela Surita Garcez Guimarães", especialidade:"Radiologia e Diagnóstico por Imagem"}]
},
{
  id: 72, nome: "Universidade Federal de Alfenas (UNIFAL)",
  modalidade: "com_agenda",
  enderecos: [{label:"Clínica de Especialidades Médicas - UNIFAL-MG", logradouro:"Avenida Jovino Fernandes Salles", numero:"2600", complemento:"Prédio J", bairro:"Santa Clara", cidade:"Alfenas", uf:"MG", cep:"37133-840"}],
  profissionais: [
    {nome:"Alex Sandro Leao", especialidade:"Mastologista"},
    {nome:"Aline Chagas Prado", especialidade:"Endocrinologista e Metabologista"},
    {nome:"Carla Cristina dos Santos Campos", especialidade:"Dermatologista"},
    {nome:"Edvaldo Jose Rodrigues Cardoso", especialidade:"Neurologista"},
    {nome:"Felipe Marzullo Cabral", especialidade:"Oftalmologista"},
    {nome:"Henrique Amancio Ferreira", especialidade:"Neurologista"},
    {nome:"Iara Baldim Rabelo Gomes", especialidade:"Hematologista"},
    {nome:"Isabella Bezerra Freitas", especialidade:"Otorrinolaringologista"},
    {nome:"Lays Fernandes Mesquita", especialidade:"Reumatologista"},
    {nome:"Maria Olivia Ferreira Gouvea", especialidade:"Pneumologista"},
    {nome:"Marina Bernardes Lourenco Passos", especialidade:"Pediatra"},
    {nome:"Mirian Monteiro Castilho da Silveira", especialidade:"Pneumologista"},
    {nome:"Pollyanna de Cassia Bezerra Florencio Carvalho", especialidade:"Vascular"},
    {nome:"Ricardo Zenun Franco", especialidade:"Ortopedista e Traumatologista"},
    {nome:"Robson Eugênio da Silva", especialidade:"Nefrologista"},
    {nome:"Rodrigo de Almeida Ferreira", especialidade:"Ortopedista e Traumatologista"},
    {nome:"Thiago de Souza Carvalho", especialidade:"Vascular"}
  ]
},
{
  id: 73, nome: "Urogyn",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Rua Adolfo Engel", numero:"22", complemento:"Consultório 2", bairro:"Loteamento Siqueira", cidade:"Alfenas", uf:"MG", cep:"37133-613"}],
  profissionais: [{nome:"Hugo Bernardes Filho", especialidade:"Urologista"}]
},
{
  id: 74, nome: "Clínica Dr. Alipio",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Rua João Paulino Damasceno", numero:"1381", complemento:"Sala 1", bairro:"Jardim Tropical", cidade:"Alfenas", uf:"MG", cep:"37133-602"}],
  profissionais: [{nome:"Alipio Jacintho Pereira Thiers Vieira", especialidade:"Urologista"}]
},
{
  id: 75, nome: "Analises - Carvalho e Rosa Laboratório",
  modalidade: "sem_agenda",
  enderecos: [{label:"", logradouro:"Rua Gabriel Moura Leite", numero:"26", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-095"}],
  profissionais: [],
  observacao: "Profissionais de saúde ainda não informados."
},
{
  id: 76, nome: "Associação Instituto de Preservação e Desenvolvimento - IPD",
  modalidade: "sem_agenda",
  enderecos: [{label:"", logradouro:"Avenida Princesa do Sul", numero:"1900", bairro:"Rezende", cidade:"Varginha", uf:"MG", cep:"37062-442"}],
  profissionais: [
    {nome:"Eliane Felicione Jardim", especialidade:"Farmacêutica Analista Clínico"},
    {nome:"João Baptista Macuco Janini", especialidade:"Médico Anatomopatologista / Citopatologista / Patologista Clínico / Medicina Laboratorial"}
  ]
},
{
  id: 77, nome: "Lab. de Analises Clinicas Santa Monica e Lab. Alfenas",
  modalidade: "sem_agenda",
  enderecos: [{label:"", logradouro:"Rua Martins Alfenas", numero:"1648", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37132-018"}],
  profissionais: [
    {nome:"Amanda de Araujo Zazeri", especialidade:"Biomédico"},
    {nome:"Natalia Anastaci de Souza Barbosa", especialidade:"Farmacêutico"}
  ]
},
{
  id: 78, nome: "Única Hospital Dia",
  modalidade: "solicitacao",
  enderecos: [
    {label:"Única Hospital Dia", logradouro:"Rua João Paulino Damasceno", numero:"1828", bairro:"Residencial Euroville", cidade:"Alfenas", uf:"MG", cep:"37133-660"},
    {label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}
  ],
  profissionais: [
    {nome:"Flavio Assumpção Zambelli Loyola", especialidade:"Especialidade não informada"},
    {nome:"Paulo Eduardo Rocha", especialidade:"Especialidade não informada"},
    {nome:"Paulo Vilela Neto", especialidade:"Especialidade não informada"},
    {nome:"Ricardo Cordeiro Leite", especialidade:"Especialidade não informada"}
  ]
}
];
