// Catálogo de Estabelecimentos Credenciados — CISLAGOS
// Modalidades: "com_agenda" | "sem_agenda" | "solicitacao" | "misto"

const ESTABELECIMENTOS = [
{
  id: 1, nome: "Consultório Odontológico Alan Guilherme Pianetti Junior",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua João de Camargo", numero:"209", bairro:"Santa Rita", cidade:"Alfenas", uf:"MG", cep:"37132-000"}],
  profissionais: [{nome:"Alan Guilherme Pianetti Junior", especialidade:"Cirurgião Dentista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 2, nome: "Audioclik",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Rua Martins Alfenas", numero:"2406", bairro:"Santa Rita", cidade:"Alfenas", uf:"MG", cep:"37132-018"}],
  profissionais: [{nome:"Miriam da Silva Riuto Dias", especialidade:"Fonoaudióloga"}],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "Audiometria",
      texto: `O importante é passar pelo médico para avaliar se é necessário fazer a lavagem do ouvido antes do exame.`
    },
  ],
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
  profissionais: [{nome:"Ana Azevedo Faria", especialidade:"Fonoaudióloga"}],
  preparoStatus: "pendente",
  preparos: [],
},
{
  id: 4, nome: "Dr. Berg Benicio Oliveira Baldansi",
  modalidade: "com_agenda",
  enderecos: [{label:"COTT - Clínica de Ortopedia e Traumatologia de Três Pontas", logradouro:"Avenida Prefeito Nilson Vilela", numero:"880", complemento:"Sala 06", bairro:"Santana", cidade:"Três Pontas", uf:"MG", cep:"37187-060"}],
  profissionais: [{nome:"Berg Benicio Oliveira Baldansi", especialidade:"Ortopedista e Traumatologista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 5, nome: "BP Saúde (D-Rádio)",
  modalidade: "solicitacao",
  enderecos: [
    {label:"Unidade Hospital Regional", logradouro:"Avenida Rui Barbosa", numero:"158", bairro:"Centro", cidade:"Varginha", uf:"MG", cep:"37002-140"},
    {label:"Unidade Hospital de Varginha", logradouro:"Avenida Antonieta Esper Kallas", numero:"299", bairro:"Parque Mariela", cidade:"Varginha", uf:"MG", cep:"37030-100"},
    {label:"Unidade Santa Casa de Três Pontas", logradouro:"Rua Benjamin da Silva Campos", numero:"101", bairro:"Ouro Verde", cidade:"Três Pontas", uf:"MG", cep:"37191-146"}
  ],
  profissionais: [{nome:"Helio de Almeida Nascimento Junior", especialidade:"Radiologia e Diagnóstico por Imagem"}],
  preparoStatus: "pendente",
  preparos: [],
},
{
  id: 6, nome: "Cardiocenter",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Avenida Gentil Reis", numero:"50", bairro:"Vila Verde", cidade:"Varginha", uf:"MG", cep:"37012-010"}],
  profissionais: [{nome:"Cassius Frederico Martins Pereira", especialidade:"Cardiologista"}],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "Eco Fetal",
      texto: `- Trazer pedido médico, guia da Cislagos e documento pessoal.
- Trazer anotado: peso, altura e medicamentos de uso contínuo.
- Trazer último ultrassom.
- Trazer exames anteriores.`
    },
    {
      procedimento: "Eco Pediátrico",
      texto: `- Não esquecer pedido médico, documento de identidade com foto, CPF e guia da Cislagos.
- Trazer exames anteriores.`
    },
  ],
},
{
  id: 7, nome: "Cardiofit Centro de Reabilitação Cardiovascular",
  modalidade: "com_agenda",
  enderecos: [
    {label:"Cardiofit", logradouro:"Rua João Paulino Damasceno", numero:"903", complemento:"Térreo, Consultório 7", bairro:"Santa Rita", cidade:"Alfenas", uf:"MG", cep:"37132-004"},
    {label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}
  ],
  profissionais: [{nome:"Luiz Felipe Ferreira Cruvinel", especialidade:"Cardiologista"}],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "Holter 24h – Monitorização do Ritmo Cardíaco",
      texto: `Antes do exame:
- Tome banho antes da instalação do aparelho, pois não será possível tomar banho durante o exame.
- Não utilize cremes, óleos ou loções na região do tórax no dia do exame.
- Caso possua pelos nas regiões torácica e abdominal, recomenda-se a remoção antes do exame, para facilitar a fixação dos eletrodos.
- Use roupas confortáveis e de fácil manuseio, preferencialmente camisa e calça.
- Informe previamente caso possua alergia ou sensibilidade a adesivos.
- Informe ao profissional todos os medicamentos que estiver utilizando.

Durante o exame:
- O aparelho realizará o registro contínuo do ritmo cardíaco durante 24 horas.
- Não molhe, retire ou manipule os fios e eletrodos.
- Durante o sono, dê preferência à posição de costas, sempre que possível.
- Evite exercícios físicos intensos durante o período de monitorização.
- Mantenha suas atividades habituais, salvo orientações específicas da equipe responsável.

Após o exame:
- Retorne ao local indicado no horário orientado para a retirada do aparelho.
- O registro será analisado e o laudo encaminhado ao seu médico para avaliação.`
    },
    {
      procedimento: "Teste Ergométrico (Teste de Esforço Convencional)",
      texto: `No dia anterior:
- Não consumir álcool.
- Evite café, chá preto e refrigerantes com cafeína.
- Depile o peito, se necessário.

No dia do exame:
- Evite comidas pesadas nas 2-3 horas anteriores. Pode fazer lanche leve.
- Use roupas confortáveis e tênis.
- Leve sua garrafinha de água.

Sobre os medicamentos:
- Não interrompa nenhum medicamento, exceto com orientação médica.
- Leve uma lista atualizada dos seus remédios.

Durante o teste:
- O esforço será aumentado progressivamente até o cansaço.
- Avise se sentir dor, tontura ou falta de ar.`
    },
    {
      procedimento: "MAPA – Monitorização Ambulatorial da Pressão Arterial",
      texto: `Antes do exame:
- Tome banho, pois não será possível tomar banho durante o uso do aparelho.
- Use roupas confortáveis, preferencialmente com mangas curtas.
- Caso haja pelos nas regiões torácica e abdominal, recomenda-se a remoção previamente.
- Evite esforços físicos intensos no dia do exame.

Durante o exame:
- O aparelho medirá a pressão arterial automaticamente: a cada 15-30 minutos durante o dia e a cada 30-60 minutos durante a noite.
- Mantenha o braço imóvel e relaxado durante as medições.
- Não molhe, retire ou manipule o aparelho.
- Durma normalmente, evitando deitar sobre o braço que estiver com o aparelho.

Após o exame:
- Retorne ao local indicado no horário agendado para a retirada do aparelho.
- O laudo será posteriormente avaliado pelo médico responsável.`
    },
  ],
},
{
  id: 8, nome: "Gastroproct",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Rua Barão da Boa Esperança", numero:"646", bairro:"Antônio de Brito Mendonça", cidade:"Três Pontas", uf:"MG", cep:"37189-140"}],
  profissionais: [{nome:"Claudio Marcio de Carvalho Silva", especialidade:"Gastroenterologista"}],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "Colonoscopia (Dr. Cláudio Márcio de Carvalho Silva - CRM MG 36906)",
      texto: `Dia anterior ao exame:
- Evitar alimentos com resíduos: leite, iogurtes, frutas, sementes (laranja, tangerina, manga, uva), folhosos (alface, agrião, couve...). Alimentação leve.
- Tomar pelo menos 2 litros de água (hidratar-se bem). Gatorade/água de coco.
- Tomar 3 comprimidos de Dulcolax às 20h.

Dia do exame:
- Iniciar o preparo 6 horas antes do horário agendado.
- Tomar 1 comprimido de 10mg de bromoprida ou dramim. Em seguida, 3 comprimidos de Dulcolax.
- Diluir 2 frascos de Imolac ou Lactitol de 200ml cada em 1 litro de água; tomar 1 copo a cada 15 min.
- A diarreia começa logo após a medicação; as últimas evacuações ficam líquidas, sem resíduos e de cor clara.
- Uso de bolsa de colostomia: fazer limpeza do reto com Phosfoenema 2 horas antes do exame.
- Permanecer em jejum até o horário do exame (pode tomar um pouco de água).
- Vir com acompanhante maior de 18 anos, que não poderá dirigir após o exame.
- Trazer pedido médico, termo preenchido (menores de 12 a 18 anos também precisam do termo preenchido pelo responsável) e lista de medicamentos em uso.
- Pacientes em uso de medicação para diabetes/hipertensão devem tomá-la somente após o exame; suspender anticoagulantes por 7 dias.
- Uso de Mounjaro: suspender por 15 dias antes do exame.
- Trazer exames anteriores e pedido médico do exame.

Caso não possa comparecer, avisar pelos telefones (35) 3661-2809 / (35) 99936-6354.`
    },
  ],
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
  ],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "Urodinâmica (mulheres adultas)",
      texto: `- Chegar ao Ambulatório Central da Santa Casa de Alfenas (Rua Duque de Caxias, 1574, Centro) às 07h para realizar a ficha.
- Levar exame recente (no máximo 20 dias): Urina I + Urocultura com antibiograma.
- Chegar com a bexiga cheia de urina.
- Não estar menstruada.`
    },
    {
      procedimento: "Colonoscopia — período da manhã",
      texto: `Protocolo Imolac®/Duphalac®. Entrar em contato com a clínica ANTES do preparo caso use bolsa de colostomia/ileostomia, tenha prisão de ventre importante, seja diabético, use anticoagulantes, tenha doença cardíaca, marca-passo, ou esteja grávida.
Avaliação cardiológica obrigatória para pacientes com 75 anos ou mais e cardiopatas.

Ante-véspera: alimentação leve o dia todo (permitidos: arroz, macarrão, ovos, peixe, pão francês, torradas, bolacha água e sal; evitar: leite e derivados, verduras, folhas, integrais, milho, linhaça, chia, granola, uva, goiaba, tomate, frutas com sementes, alimentos escuros).
Às 18h: 2 comprimidos de Bisacodil (ou laxante habitual). Manter boa hidratação. Medicações de uso contínuo podem ser tomadas normalmente.

Véspera: alimentação leve, refeições leves até 19h. Às 19h15: antiemético (Plasil, Dramin ou Ondansetrona) 1 comprimido.
Às 20h: diluir 200ml de Duphalac®/Imolac® em 200ml de água filtrada + 1 frasco de Dimeticona; beber tudo. Em seguida, ingerir 2 litros de líquidos claros (água, água de coco, Gatorade®, gelatina clara, chá, sucos claros coados — evitar vermelhos/roxos/leite). É esperada diarreia; em caso de vômito, aguardar 30 min e reiniciar.

Medicações de uso contínuo: manter normalmente (com pouca água); diabéticos devem suspender a medicação no dia do exame ou consultar a clínica.
Jejum de sólidos até o exame; água permitida até 2h antes.
Preparo adequado: últimas evacuações com líquido claro/amarelo-claro, sem resíduos sólidos.

No dia do exame: vir com acompanhante maior de 18 anos, documento, CPF, cartão do convênio, Cartão Nacional de Saúde (CNS), pedido médico, autorização do convênio, exames anteriores de colonoscopia e o questionário preenchido. Não dirigir nem operar máquinas após o exame.`
    },
    {
      procedimento: "Colonoscopia — período da tarde",
      texto: `Mesmo protocolo Imolac®/Duphalac® da manhã, com horários ajustados:

Véspera: alimentação leve o dia todo. Às 18h: 2 comprimidos de Bisacodil (ou laxante habitual). Manter boa hidratação.

Dia do exame: às 6h, café da manhã leve (meio pão francês ou 4 bolachas água e sal, com chá ou suco coado, sem leite). Às 6h30, antiemético (Plasil, Dramin ou Ondansetrona) 1 comprimido. Às 7h, diluir 200ml de Imolac®/Duphalac® em 200ml de água filtrada + 1 frasco de Dimeticona; beber tudo, seguido de 2 litros de líquidos claros. É esperada diarreia.

Medicações de uso contínuo: manter normalmente; diabéticos suspendem no dia do exame ou consultam a clínica.
Jejum de sólidos até o exame; água permitida até 2h antes.

No dia do exame: vir com acompanhante maior de 18 anos, documento, CPF, cartão do convênio, CNS, pedido médico, autorização do convênio, exames anteriores e questionário preenchido.`
    },
    {
      procedimento: "Questionário para Endoscopia / Colonoscopia / Broncoscopia",
      texto: `Formulário do Centro de Endoscopia de Alfenas (CEA) a ser preenchido e assinado pelo paciente ou responsável antes do exame, com dados pessoais, histórico de saúde, medicações em uso, alergias, próteses, cirurgias prévias e detalhes do preparo realizado.
Contato: (35) 3292-4485 — Rua Martins Alfenas, 1.608, Centro, Alfenas.`
    },
    {
      procedimento: "Ultrassom de Mamas",
      texto: `- Obrigatório trazer mamografia recente (até 1 ano) para pacientes acima de 40 anos.
- Trazer ultrassom anterior, se houver.`
    },
    {
      procedimento: "Ultrassom de Abdome Total",
      texto: `- Na noite anterior, tomar 80 gotas de Luftal.
- Comparecer em jejum de 8 horas.
- Trazer exames anteriores.
- Bexiga cheia.`
    },
    {
      procedimento: "Ultrassom de Rins e Vias Urinárias / Próstata",
      texto: `- Na noite anterior, tomar 80 gotas de Luftal.
- Bexiga cheia.`
    },
    {
      procedimento: "Ultrassom Transvaginal",
      texto: `- Trazer exames anteriores.
- Bexiga cheia.`
    },
    {
      procedimento: "Ultrassom de Abdome Total (exame à tarde)",
      texto: `- Café da manhã somente com chá e bolachas, seguido de 80 gotas de Luftal.
- Se houver intestino preso, tomar 2 comprimidos de Dulcolax pela manhã.
- Permanecer em jejum até o horário do exame.
- Vir com bexiga cheia e trazer exames anteriores.`
    },
    {
      procedimento: "Endoscopia",
      texto: `Obrigatório trazer o Cartão Nacional de Saúde.
- Jejum absoluto de 8 horas (água permitida até 4 horas antes do horário do pedido). Trazer suas medicações.
- Vir acompanhado — paciente sem acompanhante não realizará o exame.
- Pode trazer um lanche para depois do exame. Não dirigir após o exame.
Cada exame dura em média 15 minutos. Menores de 18 anos não realizam EDA.`
    },
    {
      procedimento: "Tomografia",
      texto: `- Trazer exames anteriores (RX, ultrassom, tomografia e/ou ressonância) feitos em outro serviço — os realizados na própria Santa Casa não precisam ser levados.
- Pacientes com 60 anos ou mais, ou com problemas renais, devem apresentar exame de creatinina dos últimos 30 dias.
- Apresentar pedido médico original, documento de identificação e Cartão Nacional de Saúde (CNS).
- Exame com contraste: pacientes em uso de Glifage®, Metformina® ou Galvus Met® devem suspender por 48 horas após o exame.
- Jejum de 4 horas para alimentos (água permitida em quantidade moderada).
- Medicação contínua não precisa ser suspensa.`
    },
    {
      procedimento: "Ressonância Magnética",
      texto: `- Trazer exames anteriores (RX, ultrassom, tomografia e/ou ressonância) de outros serviços — os feitos na própria Santa Casa não precisam ser levados, exceto RM de mama (levar mamografia ou ultrassom de mama anterior).
- Pacientes com 60 anos ou mais, ou com problemas renais, devem apresentar exame de creatinina dos últimos 30 dias.
- Apresentar pedido médico original, documento de identificação e CNS.
- Medicação contínua pode ser mantida normalmente.
- Não usar joias, relógios, piercings ou objetos metálicos. Vestir roupas confortáveis, sem zíper ou metais.
- Jejum de 4 horas para alimentos; água permitida em quantidade moderada.`
    },
  ],
},
{
  id: 10, nome: "Dr. Ermelindo Matinatti",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Ermelindo Matinatti", especialidade:"Ortopedista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
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
  ],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 12, nome: "Citylab",
  modalidade: "sem_agenda",
  enderecos: [{label:"", logradouro:"Rua Coronel Pedro Correa", numero:"763", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-087"}],
  profissionais: [
    {nome:"Amanda de Araujo Zazeri", especialidade:"Biomédica"},
    {nome:"Lyliane Bottrel Pimentel", especialidade:"Patologista Clínica / Medicina Laboratorial"}
  ],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 13, nome: "CIV - Centro de Infusão de Varginha",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Praça Pio XII", numero:"35", complemento:"Sala 05", bairro:"Jardim Petrópolis", cidade:"Varginha", uf:"MG", cep:"37006-725"}],
  profissionais: [{nome:"Maria Lucia Alvares de Azevedo Bahr", especialidade:"Reumatologista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 14, nome: "Clínica Bellagio",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Jose Jacinto Ribeiro", numero:"198", bairro:"São Benedito", cidade:"Alpinópolis", uf:"MG", cep:"37940-000"}],
  profissionais: [{nome:"Antonio Carlos de Faria Filho", especialidade:"Ginecologista e Obstetra"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 15, nome: "Endogastro",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Dona Zica", numero:"132", bairro:"Vila Pinto", cidade:"Varginha", uf:"MG", cep:"37010-570"}],
  profissionais: [{nome:"Carlo Eugenio Paula de Luca", especialidade:"Gastroenterologista / Endoscopia"}],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "Colonoscopia (Preparo Lactulose) — manhã",
      texto: `Durante o preparo, o paciente deve se movimentar para melhor efeito.

Sobre medicamentos: no dia do exame, remédios para diabetes e pressão alta devem ser tomados somente após o exame. Suspender anticoagulantes/antiagregantes (AAS, Marevan, Plavix, Somalgim, Marcomar, Coumadim, Clopidogrel, Pradaxa, Cilostazol, Xarelto) com autorização do médico prescritor. Demais medicações, tomar normalmente.

3 dias antes: não ingerir verduras, alimentos vermelhos, sementes, cereais integrais, carne vermelha, refrigerante, leite e derivados, mamão, maracujá, laranja, tangerina, melão, goiaba. Permitido: arroz, feijão, frango, peixe, ovo, legumes, pão, biscoito, bolacha, sucos, café.

Véspera: café da manhã e almoço normais; após o almoço, apenas dieta líquida (sucos claros, água de coco, chás, gelatina) e sopa batida e coada até 18h. Beber bastante líquido.
- 12h: 3 comprimidos de Bisacodil/Dulcolax.
- 18h: 1 comprimido de Nautex (evitar enjoo).
- 19h: diluir 3 frascos de Lactulose sem sabor (120ml) + 800ml de água + 1 frasco de simeticona + 3 limões coados; tomar 1 copo a cada 15 min, em 1 hora.
- Após o preparo, somente água até 6h antes do exame — depois, jejum absoluto.
- Bolsa de colostomia: usar 1 frasco de Phosfo Enema às 6h do dia do exame, via retal.

Informações importantes:
- Os exames particulares não cobrem procedimentos terapêuticos (Polipectomia, Mucosectomia) — valores pagos após a realização, se houver.
- Devido à anestesia, não é possível dirigir nem operar máquinas/objetos cortantes durante todo o dia após o exame.
- Biópsias/pólipos são enviados ao laboratório de patologia; resultado retirado no local em cerca de 10 dias.
- Não é permitido realizar o exame sem acompanhante maior de 18 anos.
- Não usar esmaltes nas mãos. Não trazer joias, relógios, celular, carteira ou bolsas.
- Vestir roupa e calçado fáceis de tirar (camiseta, bermuda, chinelo).
- Exames pelo Unimed: trazer guia autorizada e carteirinha.
- Trazer documento de identidade do paciente e acompanhante, pedido do exame e resultados anteriores de colonoscopia, se houver.
- Para desmarcar, avisar com pelo menos 3 dias de antecedência.
Rua Dona Zica, 130/132, Vila Pinto — Tel.: (35) 3222-1255 / 98832-2745 (consulta) / 98832-2746 (exame).`
    },
    {
      procedimento: "Colonoscopia (Preparo Lactulose) — tarde",
      texto: `Durante o preparo, o paciente deve se movimentar para melhor efeito.

Mesmas orientações de medicamentos do preparo da manhã.

3 dias antes: não ingerir verduras de folhas escuras, alimentos vermelhos, goiaba, cereais integrais, carne vermelha, laranjas. Permitido: arroz, frango, peixe, ovo, legumes, pão, biscoito, bolacha, sucos, café.

Véspera: café da manhã e almoço normais; após o almoço, dieta líquida até 23h. Hidratar-se bem. Às 18h: 3 comprimidos de Bisacodil/Dulcolax.

Dia do exame:
- 5h: 1 comprimido de Nautex.
- 6h: diluir 3 frascos de Lactulose sem sabor (120ml) + 800ml de água + 1 frasco de simeticona + 3 limões coados; tomar 1 copo a cada 15 min.
- Após o preparo, somente água até 6h antes do exame — depois, jejum absoluto.
- Bolsa de colostomia: 1 frasco de Phosfo Enema 3h antes do exame, via retal.

Informações importantes:
- Os exames particulares não cobrem procedimentos terapêuticos (Polipectomia, Mucosectomia) — valores pagos após a realização, se houver.
- Devido à anestesia, não é possível dirigir nem operar máquinas/objetos cortantes durante todo o dia após o exame.
- Biópsias/pólipos são enviados ao laboratório de patologia; resultado retirado no local em cerca de 10 dias.
- Não é permitido realizar o exame sem acompanhante maior de 18 anos.
- Não usar esmaltes nas mãos. Não trazer joias, relógios, celular, carteira ou bolsas.
- Vestir roupa e calçado fáceis de tirar (camiseta, bermuda, chinelo).
- Exames pelo Unimed: trazer guia autorizada e carteirinha.
- Trazer documento de identidade do paciente e acompanhante, pedido do exame e resultados anteriores de colonoscopia, se houver.
- Para desmarcar, avisar com pelo menos 3 dias de antecedência.
Rua Dona Zica, 130/132, Vila Pinto — Tel.: (35) 3222-1255 / 98832-2745 (consulta) / 98832-2746 (exame).`
    },
    {
      procedimento: "Retossigmoidoscopia Flexível — manhã",
      texto: `- Alimentação até 22h da véspera; depois, jejum absoluto até o horário agendado.
- 3 horas antes do exame: aplicar 2 Fhosfo Enema via retal.
- 1 hora antes do exame: aplicar 2 Fhosfo Enema via retal.
- Vir acompanhado.
- Alternativa (se não encontrar o medicamento): Clister Glicerinado 500ml via retal, 3h e 1h antes do exame.`
    },
    {
      procedimento: "Retossigmoidoscopia Flexível — tarde",
      texto: `- Café da manhã leve, seguido de jejum absoluto de 6 horas.
- 3 horas antes do exame: aplicar 2 Fhosfo Enema via retal.
- 1 hora antes do exame: aplicar 2 Fhosfo Enema via retal.
- Vir acompanhado.
- Alternativa: Clister Glicerinado 500ml via retal, 3h e 1h antes do exame.`
    },
    {
      procedimento: "Colonoscopia (Intestino Preso) — manhã",
      texto: `Durante o preparo, o paciente deve se movimentar para melhor efeito. Mesmas orientações de medicamentos do preparo padrão.

3 dias antes: mesma restrição alimentar do preparo padrão de manhã.

Véspera: café da manhã e almoço normais; dieta líquida até 19h. Hidratar-se bem.
- Tomar 1 sachê de Picoprep às 12h e outro às 17h30 (diluir em 150ml de água, mexer 3 min, tomar morno).
- Após o Picoprep das 17h30, ingerir 1,5 litro de líquidos claros nas 2 horas seguintes.
- 16h: 1 comprimido de Nautex.
- 20h30: diluir 3 frascos de Lactulose sem sabor (120ml) + 800ml de água + 1 frasco de simeticona + 3 limões coados; tomar 1 copo a cada 15 min, em 1 hora.
- Após o preparo, somente água até 6h antes do exame.
- Bolsa de colostomia: 1 frasco de Phosfo Enema 3h antes do exame, via retal.

Informações importantes:
- Os exames particulares não cobrem procedimentos terapêuticos (Polipectomia, Mucosectomia) — valores pagos após a realização, se houver.
- Devido à anestesia, não é possível dirigir nem operar máquinas/objetos cortantes durante todo o dia após o exame.
- Biópsias/pólipos são enviados ao laboratório de patologia; resultado retirado no local em cerca de 10 dias.
- Não é permitido realizar o exame sem acompanhante maior de 18 anos.
- Não usar esmaltes nas mãos. Não trazer joias, relógios, celular, carteira ou bolsas.
- Vestir roupa e calçado fáceis de tirar (camiseta, bermuda, chinelo).
- Exames pelo Unimed: trazer guia autorizada e carteirinha.
- Trazer documento de identidade do paciente e acompanhante, pedido do exame e resultados anteriores de colonoscopia, se houver.
- Para desmarcar, avisar com pelo menos 3 dias de antecedência.
Rua Dona Zica, 130/132, Vila Pinto — Tel.: (35) 3222-1255 / 98832-2745 (consulta) / 98832-2746 (exame).`
    },
    {
      procedimento: "Colonoscopia (Intestino Preso) — tarde",
      texto: `Durante o preparo, o paciente deve se movimentar para melhor efeito. Mesmas orientações de medicamentos do preparo padrão.

3 dias antes: mesma restrição alimentar do preparo padrão de tarde.

Véspera: café da manhã e almoço normais; dieta líquida até 22h. Hidratar-se bem.
- Tomar 1 sachê de Picoprep às 8h e outro às 19h (diluir em 150ml de água, mexer 3 min, tomar morno).
- Após o Picoprep das 19h, ingerir 1,5 litro de líquidos claros nas 2 horas seguintes.

Dia do exame:
- 5h: 1 comprimido de Nautex.
- 6h: diluir 3 frascos de Lactulose sem sabor (120ml) + 800ml de água + 1 frasco de simeticona + 3 limões coados; tomar 1 copo a cada 15 min.
- Após o preparo, somente água até 6h antes do exame.
- Bolsa de colostomia: 1 frasco de Phosfo Enema 3h antes do exame, via retal.

Informações importantes:
- Os exames particulares não cobrem procedimentos terapêuticos (Polipectomia, Mucosectomia) — valores pagos após a realização, se houver.
- Devido à anestesia, não é possível dirigir nem operar máquinas/objetos cortantes durante todo o dia após o exame.
- Biópsias/pólipos são enviados ao laboratório de patologia; resultado retirado no local em cerca de 10 dias.
- Não é permitido realizar o exame sem acompanhante maior de 18 anos.
- Não usar esmaltes nas mãos. Não trazer joias, relógios, celular, carteira ou bolsas.
- Vestir roupa e calçado fáceis de tirar (camiseta, bermuda, chinelo).
- Exames pelo Unimed: trazer guia autorizada e carteirinha.
- Trazer documento de identidade do paciente e acompanhante, pedido do exame e resultados anteriores de colonoscopia, se houver.
- Para desmarcar, avisar com pelo menos 3 dias de antecedência.
Rua Dona Zica, 130/132, Vila Pinto — Tel.: (35) 3222-1255 / 98832-2745 (consulta) / 98832-2746 (exame).`
    },
    {
      procedimento: "Colonoscopia (Preparo Manitol) — manhã",
      texto: `Durante o preparo, o paciente deve se movimentar para melhor efeito. Mesmas orientações de medicamentos do preparo padrão.

Véspera: proibidos todos os alimentos com fibra vegetal, frutas, verduras e legumes.
Permitido — café da manhã: chá, café, suco claro, biscoitos, gatorade, água de coco, pão, geleia, mel, manteiga.
Almoço até 11h: presunto, ovos, carne, peixe, arroz. Após o almoço, apenas dieta líquida restrita (sopa batida e coada de legumes claros, sem feijão).
- 13h: 15g de Sulfato de Magnésio (ou Salamargo) em água. 15h: mais 15g.
- Ingerir líquidos em grande quantidade durante o preparo.
- Jantar até 17h30: sopa batida e coada ou macarrão/fubá.
- 18h30: diluir 750ml de Manitol 20% + 250ml de suco de cor amarela (1 litro total); tomar 1 copo a cada 15 min até terminar.
- Após o Manitol, somente água até 6h antes do exame — depois, jejum absoluto.
- Náuseas/vômitos: Nautex 8mg, 1 comprimido sublingual de 12/12h.
- Bolsa de colostomia: 1 frasco de Phosfo Enema 3h antes do exame, via retal.

Informações importantes:
- Os exames particulares não cobrem procedimentos terapêuticos (Polipectomia, Mucosectomia) — valores pagos após a realização, se houver.
- Devido à anestesia, não é possível dirigir nem operar máquinas/objetos cortantes durante todo o dia após o exame.
- Biópsias/pólipos são enviados ao laboratório de patologia; resultado retirado no local em cerca de 10 dias.
- Não é permitido realizar o exame sem acompanhante maior de 18 anos.
- Não usar esmaltes nas mãos. Não trazer joias, relógios, celular, carteira ou bolsas.
- Vestir roupa e calçado fáceis de tirar (camiseta, bermuda, chinelo).
- Exames pelo Unimed: trazer guia autorizada e carteirinha.
- Trazer documento de identidade do paciente e acompanhante, pedido do exame e resultados anteriores de colonoscopia, se houver.
- Para desmarcar, avisar com pelo menos 3 dias de antecedência.
Rua Dona Zica, 130/132, Vila Pinto — Tel.: (35) 3222-1255 / 98832-2745 (consulta) / 98832-2746 (exame).`
    },
    {
      procedimento: "Colonoscopia (Preparo Manitol) — tarde",
      texto: `Durante o preparo, o paciente deve se movimentar para melhor efeito. Mesmas orientações de medicamentos do preparo padrão.

Véspera: proibidos todos os alimentos com fibra vegetal, frutas, verduras e legumes.
Café da manhã e almoço até 12h liberados (presunto, ovos, carne, peixe, arroz). Após o almoço, dieta líquida restrita. Jantar até 18h: sopa batida e coada.
- 19h: 15g de Sulfato de Magnésio (ou Salamargo). 21h: mais 15g.
- Ingerir líquidos em grande quantidade.

Dia do exame — começar às 5h30:
- Diluir 750ml de Manitol 20% + 250ml de suco de cor amarela (1 litro); tomar 1 copo a cada 15 min, em no máximo 1 hora.
- Após o Manitol, jejum absoluto inclusive de água até o exame.
- Náuseas/vômitos: Nautex 4mg, 1 comprimido sublingual de 12/12h.
- Bolsa de colostomia: 1 frasco de Phosfo Enema 3h antes do exame, via retal.

Informações importantes:
- Os exames particulares não cobrem procedimentos terapêuticos (Polipectomia, Mucosectomia) — valores pagos após a realização, se houver.
- Devido à anestesia, não é possível dirigir nem operar máquinas/objetos cortantes durante todo o dia após o exame.
- Biópsias/pólipos são enviados ao laboratório de patologia; resultado retirado no local em cerca de 10 dias.
- Não é permitido realizar o exame sem acompanhante maior de 18 anos.
- Não usar esmaltes nas mãos. Não trazer joias, relógios, celular, carteira ou bolsas.
- Vestir roupa e calçado fáceis de tirar (camiseta, bermuda, chinelo).
- Exames pelo Unimed: trazer guia autorizada e carteirinha.
- Trazer documento de identidade do paciente e acompanhante, pedido do exame e resultados anteriores de colonoscopia, se houver.
- Para desmarcar, avisar com pelo menos 3 dias de antecedência.
Rua Dona Zica, 130/132, Vila Pinto — Tel.: (35) 3222-1255 / 98832-2745 (consulta) / 98832-2746 (exame).`
    },
    {
      procedimento: "Colonoscopia (Intestino Preso Otimizado) — manhã",
      texto: `Durante o preparo, o paciente deve se movimentar para melhor efeito. Mesmas orientações de medicamentos do preparo padrão.

3 dias antes: mesma restrição alimentar do preparo padrão de manhã.
2 dias antes: 1 sachê de Picoprep às 7h, 12h e 17h30.

Véspera: café da manhã e almoço normais; dieta líquida até 19h.
- 1 sachê de Picoprep às 11h, 15h e 19h.
- Após o Picoprep das 15h, ingerir 1,5 litro de líquidos claros nas 2 horas seguintes.
- 10h e 16h: 1 comprimido de Nautex.
- 20h30: diluir 3 frascos de Lactulose sem sabor (120ml) + 800ml de água + 1 frasco de simeticona + 3 limões coados; 1 copo a cada 15 min, em 1 hora.
- Após o preparo, somente água até 6h antes do exame.
- Bolsa de colostomia: 1 frasco de Phosfo Enema 3h antes do exame, via retal.

Informações importantes:
- Os exames particulares não cobrem procedimentos terapêuticos (Polipectomia, Mucosectomia) — valores pagos após a realização, se houver.
- Devido à anestesia, não é possível dirigir nem operar máquinas/objetos cortantes durante todo o dia após o exame.
- Biópsias/pólipos são enviados ao laboratório de patologia; resultado retirado no local em cerca de 10 dias.
- Não é permitido realizar o exame sem acompanhante maior de 18 anos.
- Não usar esmaltes nas mãos. Não trazer joias, relógios, celular, carteira ou bolsas.
- Vestir roupa e calçado fáceis de tirar (camiseta, bermuda, chinelo).
- Exames pelo Unimed: trazer guia autorizada e carteirinha.
- Trazer documento de identidade do paciente e acompanhante, pedido do exame e resultados anteriores de colonoscopia, se houver.
- Para desmarcar, avisar com pelo menos 3 dias de antecedência.
Rua Dona Zica, 130/132, Vila Pinto — Tel.: (35) 3222-1255 / 98832-2745 (consulta) / 98832-2746 (exame).`
    },
    {
      procedimento: "Colonoscopia (Intestino Preso Otimizado) — tarde",
      texto: `Durante o preparo, o paciente deve se movimentar para melhor efeito. Mesmas orientações de medicamentos do preparo padrão.

3 dias antes: mesma restrição alimentar do preparo padrão de tarde.
2 dias antes: 1 sachê de Picoprep às 7h, 12h e 17h30.

Véspera: café da manhã e almoço normais; dieta líquida até 22h.
- 1 sachê de Picoprep às 8h, 16h e 19h.
- Após o Picoprep das 19h, ingerir 1,5 litro de líquidos claros nas 2 horas seguintes.

Dia do exame:
- 5h: 1 comprimido de Nautex.
- 6h: diluir 3 frascos de Lactulose sem sabor (120ml) + 800ml de água + 1 frasco de simeticona + 3 limões coados; 1 copo a cada 15 min.
- Após o preparo, somente água até 6h antes do exame.
- Bolsa de colostomia: 1 frasco de Phosfo Enema 3h antes do exame, via retal.

Informações importantes:
- Os exames particulares não cobrem procedimentos terapêuticos (Polipectomia, Mucosectomia) — valores pagos após a realização, se houver.
- Devido à anestesia, não é possível dirigir nem operar máquinas/objetos cortantes durante todo o dia após o exame.
- Biópsias/pólipos são enviados ao laboratório de patologia; resultado retirado no local em cerca de 10 dias.
- Não é permitido realizar o exame sem acompanhante maior de 18 anos.
- Não usar esmaltes nas mãos. Não trazer joias, relógios, celular, carteira ou bolsas.
- Vestir roupa e calçado fáceis de tirar (camiseta, bermuda, chinelo).
- Exames pelo Unimed: trazer guia autorizada e carteirinha.
- Trazer documento de identidade do paciente e acompanhante, pedido do exame e resultados anteriores de colonoscopia, se houver.
- Para desmarcar, avisar com pelo menos 3 dias de antecedência.
Rua Dona Zica, 130/132, Vila Pinto — Tel.: (35) 3222-1255 / 98832-2745 (consulta) / 98832-2746 (exame).`
    },
  ],
},
{
  id: 16, nome: "Clínica de Otorrinolaringologia Anaklaudia",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Anaklaudia Teixeira Carvalho", especialidade:"Otorrinolaringologista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 17, nome: "Clínica Derma Corpus",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Claudio de Lelis Filgueiras de Souza", especialidade:"Dermatologista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 18, nome: "Clínica Médica Dra. Maria Alice Celani",
  modalidade: "com_agenda",
  enderecos: [
    {label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"},
    {label:"Climed", logradouro:"Avenida Dona Floriana", numero:"102", complemento:"Sala 08", bairro:"Centro", cidade:"Guaxupé", uf:"MG", cep:"37834-308"}
  ],
  profissionais: [{nome:"Maria Alice Celani", especialidade:"Cardiologista"}],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "Teste Ergométrico",
      texto: `- Evitar café preto, chocolate ou qualquer alimento com cafeína.
- Não é necessário jejum.
- Homens: fazer depilação peitoral.`
    },
    {
      procedimento: "Holter",
      texto: `- Vir de banho tomado, pois só será possível tomar banho novamente no dia seguinte.
- Mulheres: não vir de vestido.
- Homens: fazer depilação peitoral.`
    },
  ],
},
{
  id: 19, nome: "CMR Diagnósticos por Imagem",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Dr. Gutemberg de Carvalho", numero:"10", bairro:"Jdm. Mediterranee", cidade:"São Sebastião do Paraíso", uf:"MG", cep:"37953-212"}],
  profissionais: [{nome:"Rodrigo de Oliveira Wilman", especialidade:"Radiologia e Diagnóstico por Imagem"}],
  preparoStatus: "pendente",
  preparos: [],
},
{
  id: 20, nome: "Consultório Dr. Bruno Ricardo Ferreira",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Avenida Gentil Reis", numero:"50", bairro:"Vila Verde", cidade:"Varginha", uf:"MG", cep:"37012-010"}],
  profissionais: [{nome:"Bruno Ricardo Ferreira", especialidade:"Gastroenterologista / Endoscopia"}],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "Endoscopia",
      texto: `- Jejum de 8 horas (inclusive de água) para garantir o estômago vazio.
- Última refeição deve ser leve; evitar álcool nas 24h anteriores.
- Trazer uma toalha de rosto.
- Tomar 40 gotas de Simeticona antes de sair de casa.
- Chegar com 20 minutos de antecedência.
- Sugestão: trazer um lanche leve para depois do exame.`
    },
  ],
},
{
  id: 21, nome: "Consultórios Dr. Antonio de Padua",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Rua Isaias Alves Ferreira", numero:"100", bairro:"Centro", cidade:"Areado", uf:"MG", cep:"37140-000"}],
  profissionais: [{nome:"Antonio de Padua Oliveira Miri", especialidade:"Cardiologista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 22, nome: "Corpus Pouso Alegre",
  modalidade: "solicitacao",
  enderecos: [{label:"Clínica Corpus Unidade Pouso Alegre", logradouro:"Rua Ciomara Amaral de Paula", numero:"222", complemento:"Pav. 1", bairro:"Alfredo Custódio de Paula", cidade:"Pouso Alegre", uf:"MG", cep:"37553-073"}],
  profissionais: [{nome:"Gustavo Pagliarini Pacheco", especialidade:"Radiologia e Diagnóstico por Imagem"}],
  preparoStatus: "pendente",
  preparos: [],
},
{
  id: 23, nome: "Corpus PET-CT Pouso Alegre",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Ciomara Amaral de Paula", numero:"140", complemento:"Subsolo 2", bairro:"Doutor Jose Alfredo de Paula", cidade:"Pouso Alegre", uf:"MG", cep:"37553-006"}],
  profissionais: [{nome:"Erico Luis Camacho", especialidade:"Medicina Nuclear"}],
  preparoStatus: "pendente",
  preparos: [],
},
{
  id: 24, nome: "Corpus Tomografia Alfenas",
  modalidade: "solicitacao",
  enderecos: [{label:"Clínica Corpus Unidade Alfenas", logradouro:"Rua Adolfo Engel", numero:"19", complemento:"Sala 175", bairro:"Loteamento Siqueira", cidade:"Alfenas", uf:"MG", cep:"37133-613"}],
  profissionais: [{nome:"Raphael Monteiro Ferreira de Oliveira", especialidade:"Radiologia e Diagnóstico por Imagem"}],
  preparoStatus: "pendente",
  preparos: [],
},
{
  id: 25, nome: "Dimen Poços de Caldas",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Victor Marchesi", numero:"99", bairro:"Loteamento Vila Flora II", cidade:"Poços de Caldas", uf:"MG", cep:"37700-393"}],
  profissionais: [{nome:"Elison Alves Granjeiro", especialidade:"Medicina Nuclear"}],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "Cintilografia de Perfusão Miocárdica",
      texto: `- Não é necessário jejum; alimentação leve no dia do exame.
- Exame à tarde: fazer refeição leve e de fácil digestão antes.
- Suspender cafeína (café, chocolate, chá-mate/preto/verde, Coca-cola, Pepsi, Guaraná) e álcool por no mínimo 12h antes.
- Banho: esfregar bem o peito com sabão, sem cremes. Homens: tricotomia (depilação) do tórax. Mulheres: evitar sutiã com arco de metal.
- Trazer roupa para esforço físico: agasalho esportivo, short/bermuda, tênis, toalha de rosto (mulheres: top).
- Evitar atividade física moderada/intensa na véspera.
- Evitar em caso de dor torácica ou falta de ar nas últimas 24h.
- Não fumar (inclusive eletrônico) no dia do exame.
- Remover objetos metálicos do tórax (correntes, próteses, moedas etc.).
- Descansar bem na noite anterior.
- Trazer exames cardiológicos recentes (cateterismo, teste ergométrico, ecocardiograma).
- Confirmar presença no dia anterior.
- Duração média de 4 a 6 horas — reservar o dia todo. Realizado em 1 ou 2 etapas (repouso e esforço), no mesmo dia ou em dias diferentes.
- Alguns medicamentos devem ser suspensos antes do exame — consultar a equipe/médico.
- Não recomendado para gestantes/lactantes.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cintilografia Óssea (com ou sem Fluxo Sanguíneo)",
      texto: `- Não é necessário jejum nem suspensão de medicamentos.
- Trazer exames de imagem referentes à investigação.
- Após a injeção, aguardar de 2 a 4 horas (idosos: mínimo 3h) para fixação nos ossos — não precisa ficar na clínica.
- Hidratar-se bem e urinar várias vezes no período de espera.
- Imagens do corpo inteiro levam de 20 a 40 minutos; podem ser solicitadas imagens adicionais em 24h.
- Não recomendado para gestantes/lactantes.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cintilografia Renal Estática (DMSA)",
      texto: `- Não é necessário jejum nem suspensão de medicamentos.
- Avisar se estiver com infecção urinária.
- Após a injeção, retornar no mínimo 3 horas depois para as imagens (20-30 min deitado).
- Pode ser solicitado retorno no dia seguinte para imagens adicionais.
- Não recomendado para gestantes/lactantes.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Estudo Renal Dinâmico (com ou sem Diurético)",
      texto: `- Não é necessário jejum.
- Boa hidratação antes e depois do exame.
- Suspender anti-inflamatório não esteroide (ex: diclofenaco) no dia do exame.
- Antes do exame: tomar 2-3 copos de água e esvaziar a bexiga.
- Permanecer deitado por 30-40 min; pode ser necessária administração de diurético para estimular eliminação do traçador.
- Após, manter hidratação abundante para evitar hipotensão.
- Não recomendado para gestantes/lactantes.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Pesquisa de Refluxo Gastroesofágico",
      texto: `- Jejum de 4 horas (recém-nascidos: 2 horas).
- Adultos: trazer 1 litro de iogurte, leite ou leite de soja.
- Crianças: trazer leite/iogurte (~1 litro) e 2 mamadeiras (1 se amamentação exclusiva).
- Não usar sucos ou água no lugar do leite.
- A critério médico, suspender Bromoprida, Prepulsid, Digesan, Plasil, Plamet etc. 2 dias antes.
- Após ingerir o leite com o radiofármaco, permanecer deitado e imóvel por 20-30 min.
- Pesquisa de aspiração pulmonar: retornar em 2h e 24h após o procedimento.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cintilografia das Paratireoides",
      texto: `- Dieta normal; não há preparo específico.
- Trazer PTH sérico e exames de imagem (ultrassom cervical, tomografia).
- Após a injeção, aguardar cerca de 10 min; imagens de 20-30 min. Pode ser feita tomografia da região cervical.
- Retorno em 2 horas para novas imagens; podem ser solicitadas imagens mais tardias.
- Não recomendado para gestantes/lactantes.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cintilografia da Tireoide com 99mTc",
      texto: `- Não é necessário jejum.
- Suspender: T3 (triiodotironina) por 15 dias; Levotiroxina (Puran T4, Levoid, Synthroid, Euthyrox) por 30 dias; PTU por 2-3 semanas ou Tapazol por 2 dias (a critério médico); amiodarona por no mínimo 90 dias.
- Suspender medicamentos com iodo (xaropes, vitaminas, corante eritrosina) por no mínimo 30 dias — verificar bula.
- Analgésicos, antibióticos e anti-inflamatórios sem corante vermelho são permitidos.
- Evitar soluções tópicas com iodo (Povidine, álcool iodado, teste de Schiller) e batom vermelho/rosa por 15 dias.
- Suspender medicamentos apenas sob orientação médica.
- Evitar contraste radiológico iodado por 30 dias antes.
- Evitar praia, banho de mar e bronzeador por 15 dias (protetor solar liberado).
- Dieta pobre em iodo/eritrosina por 15 dias antes (ver lista de alimentos restritos com a clínica).
- Trazer exames de imagem (ultrassom de tireoide).
- Não recomendado para gestantes/lactantes.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
  ],
},
{
  id: 26, nome: "Elucida Imagem e Saúde",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Rua Coronel Pedro Correa", numero:"273", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Luiz Gustavo Lima de Oliveira", especialidade:"Radiologia e Diagnóstico por Imagem"}],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "Ultrassonografia de Abdome Total",
      texto: `- Jejum de 6 a 8 horas.
- Evitar alimentos gordurosos no dia anterior.
- Medicamentos de uso contínuo: tomar normalmente, com pouca água.
- Comparecer com a bexiga cheia (4-6 copos de água 1h antes, sem urinar).
- Trazer exames anteriores da região.`
    },
    {
      procedimento: "Ultrassonografia de Abdome Superior",
      texto: `- Jejum de 6 a 8 horas.
- Evitar alimentos gordurosos no dia anterior.
- Bexiga cheia não é necessária, salvo orientação específica.
- Trazer exames anteriores da região.`
    },
    {
      procedimento: "Ultrassonografia de Rins e Vias Urinárias",
      texto: `- Não é necessário jejum.
- Comparecer com bexiga cheia (4-6 copos de água 1h antes, sem urinar).
- Trazer exames anteriores da região.`
    },
    {
      procedimento: "Ultrassonografia Pélvica / Ginecológica Suprapúbica",
      texto: `- Comparecer com bexiga cheia (4-6 copos de água 1h antes, sem urinar).
- Trazer exames anteriores da região.`
    },
    {
      procedimento: "Ultrassonografia Transvaginal",
      texto: `- Comparecer com bexiga vazia.
- Não é necessário jejum.
- Trazer exames anteriores da região.`
    },
    {
      procedimento: "Ultrassonografia de Próstata Suprapúbica",
      texto: `- Comparecer com bexiga cheia (4-6 copos de água 1h antes, sem urinar).
- Trazer exames anteriores da região.`
    },
    {
      procedimento: "Ultrassonografia de Próstata Transretal",
      texto: `- Jejum e preparo intestinal conforme orientação prévia da clínica.
- Bexiga conforme orientação da clínica.
- Trazer exames anteriores da região.`
    },
    {
      procedimento: "Ultrassonografia com Doppler Vascular",
      texto: `- Geralmente não é necessário preparo.
- Para vasos abdominais (aorta, artérias renais, veia porta) pode ser necessário jejum de 6 a 8 horas.
- Trazer exames anteriores da região.`
    },
  ],
},
{
  id: 27, nome: "Endomed",
  modalidade: "misto",
  modalidadeDetalhe: "Colonoscopia, endoscopia e consulta em reumatologia: Com agenda. Demais procedimentos: Por solicitação.",
  enderecos: [{label:"", logradouro:"Praça Jose de Rezende Paiva", numero:"177", bairro:"Centro", cidade:"Varginha", uf:"MG", cep:"37002-030"}],
  profissionais: [
    {nome:"Lidiane Maiolini", especialidade:"Reumatologista"},
    {nome:"Rogerio Maiolini", especialidade:"Gastroenterologista / Endoscopia"}
  ],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "Colonoscopia — período da manhã",
      texto: `Seguir apenas o preparo do período do seu exame.

Véspera: dieta líquida sem resíduos a partir do café da manhã (água, chá, suco de frutas, gatorade, água de coco, caldo de carne/galinha peneirado, gelatina clara, sopa rala com macarrão sem verduras). Evitar sucos vermelhos, leite e derivados, frutas ou verduras.
- 17h: 4 comprimidos de Dulcolax.
- 21h: misturar 750ml de Manitol 20% + 500ml de suco de laranja/limão coado na hora + 1 frasco de Luftal; tomar 1 copo a cada 15 min, intercalando com água.

Dia do exame:
- Jejum a partir das 5h.
- Vir com acompanhante maior de 18 anos.
- Trazer roupa íntima reserva.
- Anti-hipertensivos devem ser tomados; remédios para diabetes não devem ser tomados no dia do exame.

Obrigatório: documento e Cartão Nacional de Saúde (SUS). Dúvidas: WhatsApp (35) 3222-2020.`
    },
    {
      procedimento: "Colonoscopia — período da tarde",
      texto: `Seguir apenas o preparo do período do seu exame.

Véspera: mesma dieta líquida sem resíduos da manhã.
- 21h: 4 comprimidos de Dulcolax.

Dia do exame:
- 7h: misturar 750ml de Manitol 20% + 500ml de suco de laranja/limão coado na hora + 1 frasco de Luftal; tomar 1 copo a cada 15 min, intercalando com água.
- Jejum a partir das 5h.
- Vir com acompanhante maior de 18 anos.
- Trazer roupa íntima reserva.
- Anti-hipertensivos devem ser tomados; remédios para diabetes não devem ser tomados no dia do exame.

Obrigatório: documento e Cartão Nacional de Saúde (SUS). Dúvidas: WhatsApp (35) 3222-2020.`
    },
  ],
},
{
  id: 28, nome: "Dr. Rodrigo Ragognete",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Rodrigo Martins Ragognete", especialidade:"Otorrinolaringologista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 29, nome: "Laboratório Famasul",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Avenida Padre Jose Nasser", numero:"135", complemento:"Sala 2", bairro:"Centro", cidade:"Fama", uf:"MG", cep:"37144-000"}],
  profissionais: [{nome:"Ana Luiza Silverio Cordeiro", especialidade:"Biomédica"}],
  preparoStatus: "sem_preparo",
  preparos: [],
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
  ],
  preparoStatus: "parcial",
  preparos: [
    {
      procedimento: "Colonoscopia (Dr. Luccas Diniz)",
      texto: `1º dia (antevéspera): alimentos permitidos em pequena quantidade e pastosos (pão não integral, torradas, bolacha água e sal, ovo cozido, purê de batata/mandioquinha, arroz branco, filé de frango não empanado, gelatina clara, frutas sem casca/sementes). Evitar carne vermelha, leite e derivados, álcool, líquidos escuros, verduras, legumes, feijão e frituras.

2º dia (véspera):
- 12h: 500ml de caldo de sopa de legumes coado (batata, cenoura, chuchu, carne); também chá claro, água de coco, Gatorade, refrigerante claro.
- 14h e 18h: 3 comprimidos de Dulcolax cada.
- 20h: 1 comprimido de Dramin, Plasil ou Vonau.
- 22h: diluir 200ml de Duphalac + 1000ml de água/gatorade/suco de laranja coado; tomar 1 copo a cada 10 min até 24h. Tomar também 1 frasco (15ml) de Simeticona/Luftal.
- Dores abdominais: 1 comprimido de dipirona ou paracetamol.

3º dia (dia do exame): jejum absoluto de 6 horas antes do exame, inclusive água.

Orientações: preparo inadequado prejudica o resultado; evacuações sem resíduos e de cor clara indicam preparo adequado. Medicamentos de uso contínuo: levar receita; hipertensão administrar normalmente; diabetes suspender somente no dia do exame. Trazer pedido médico e exames prévios (colonoscopia, cardiológicos, pulmonares, sangue). Anticoagulantes/antiagregantes: avisar previamente (tel. 3299-3612).
Vir com acompanhante — não poderá retornar sozinho após a sedação. Proibido usar salto alto, andar de moto/bicicleta, dirigir ou realizar atividades que exijam atenção no dia do exame.
Uso de Mounjaro, Tirzepatida, Ozempic, Wegovy, Trulicity ou canetas emagrecedoras: suspender 7 dias antes.
Dúvidas: (35) 3299-3542 ou (35) 3299-3612.`
    },
  ],
  preparoNota: "Aguardando envio dos demais preparos dos outros profissionais.",
},
{
  id: 31, nome: "Dra. Francielle Leismann",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Francielle Regina Leismann", especialidade:"Dermatologista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 32, nome: "Dra. Gisele Neves Martins",
  modalidade: "com_agenda",
  enderecos: [{label:"Consultório Dra. Gisele Neves", logradouro:"Rua Artur Xavier Pedroso", numero:"428", complemento:"Loja 17, Pav. 1", bairro:"Centro", cidade:"Machado", uf:"MG", cep:"37750-000"}],
  profissionais: [{nome:"Gisele Neves Martins", especialidade:"Dermatologista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
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
  ],
  preparoStatus: "pendente",
  preparos: [],
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
  ],
  preparoStatus: "pendente",
  preparos: [],
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
  ],
  preparoStatus: "pendente",
  preparos: [],
},
{
  id: 37, nome: "Santa Casa de Misericórdia de São Sebastião do Paraíso",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Praça Comendador João Pio de Figueiredo Westin", numero:"92", bairro:"Mocoquinha", cidade:"São Sebastião do Paraíso", uf:"MG", cep:"37957-148"}],
  profissionais: [{nome:"Flavio Bernardes Goncalves", especialidade:"Anestesiologista"}],
  preparoStatus: "pendente",
  preparos: [],
},
{
  id: 38, nome: "Hospital Regional do Sul de Minas",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Avenida Rui Barbosa", numero:"158", bairro:"Centro", cidade:"Varginha", uf:"MG", cep:"37002-140"}],
  profissionais: [
    {nome:"Gustavo Eugenio Martins Marinho", especialidade:"Anestesiologista / Cardiologista / Cardiologista Intervencionista / Radiologia e Diagnóstico por Imagem"},
    {nome:"Marcelo Biscaro Carvalho", especialidade:"Anestesiologista / Cardiologista / Cardiologista Intervencionista / Radiologia e Diagnóstico por Imagem"}
  ],
  preparoStatus: "pendente",
  preparos: [],
},
{
  id: 40, nome: "Consultório Dr. Eduardo Magalhaes",
  modalidade: "com_agenda",
  enderecos: [{label:"Humana Cardiologia", logradouro:"Rua Adolfo Engel", numero:"22", complemento:"Sala 01", bairro:"Loteamento Siqueira", cidade:"Alfenas", uf:"MG", cep:"37133-613"}],
  profissionais: [{nome:"Eduardo Magalhaes Fernandes", especialidade:"Cardiologista"}],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "Teste Ergométrico",
      texto: `- Trazer o pedido médico.
- Não é necessário jejum. Evitar cafeína (café, alguns chás, chocolate) no dia do exame.
- Vir com roupas leves/esportivas e tênis. Mulheres: evitar macacão, vestido ou saia. Homens: retirar pelos da região do tórax.
- Trazer uma toalha de rosto.
- Fumantes: não fumar no dia anterior nem no dia do exame.
- Trazer o nome das medicações em uso — algumas podem precisar ser suspensas (verificar com o médico solicitante).`
    },
  ],
},
{
  id: 41, nome: "Innovare Diagnósticos",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Rua Bias Fortes", numero:"610", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-085"}],
  profissionais: [
    {nome:"Paula Miranda Orsi Del Bianco", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Thyago Silva Grigorio", especialidade:"Vascular"}
  ],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 42, nome: "Inspire",
  modalidade: "misto",
  modalidadeDetalhe: "Consulta, DLCO, espirometria e pletismografia: Com agenda. Polissonografia: Por solicitação.",
  enderecos: [{label:"Clínica Inspire", logradouro:"Rua João Paulino Damasceno", numero:"1314", bairro:"Jardim Tropical", cidade:"Alfenas", uf:"MG", cep:"37133-602"}],
  profissionais: [{nome:"Katia Rejane Rodrigues Leal", especialidade:"Pneumologista"}],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "Espirometria / Prova de Função Pulmonar",
      texto: `- Interromper broncodilatadores de ação prolongada por pelo menos 12h (idealmente 24h): symbicort, alenia, foraseq, vannair, seretide, fostair, relvar, fluir, formocaps, onbrize, seebri, striverdi, spiriva, spiolto, ultibro, vanisto, teolong, aminofilina, bamifix.
- Interromper broncodilatadores de curta ação por 4h: berotec, atrovent, aerodini, aerolin, salbutamol, regrair, duovent.
- Demais medicamentos podem e devem ser tomados normalmente.
- Não ingerir álcool por pelo menos 8h antes.
- Não fumar por pelo menos 2h antes.
- Não ingerir cafeinados (café, chá mate, chocolate, refrigerante de cola) por pelo menos 6h antes.
- Evitar refeições volumosas 2h antes; não é necessário jejum.
- Infecção pulmonar recente (menos de 3 semanas): reagendar, salvo orientação médica.
Rua João Paulino Damasceno, 1314, Jardim Tropical, Alfenas — (35) 3292-2177 / 98877-5975.`
    },
    {
      procedimento: "Difusão do Monóxido de Carbono (DLCO)",
      texto: `- Não fumar nas 24h anteriores (informar o horário do último cigarro).
- Não ingerir álcool por pelo menos 8h antes.
- Evitar refeições até 2h antes; evitar atividade física antes do exame.
- Não ingerir cafeinados por pelo menos 6h antes.
- Uso de oxigenoterapia domiciliar: suspender pelo menos 5 minutos antes.
- Trazer resultado de hemograma recente (valor da hemoglobina).`
    },
    {
      procedimento: "Pletismografia (Resistência e Volumes Pulmonares)",
      texto: `- Interromper broncodilatadores de ação prolongada por pelo menos 12h (idealmente 24h) e de curta ação por 4h (mesma lista da espirometria).
- Demais medicamentos: tomar normalmente.
- Não fumar por pelo menos 2h antes.
- Exame só pode ser feito 1h após a última refeição/atividade física.
- Não ingerir álcool por 8h nem cafeinados por 6h antes.
- Oxigenoterapia domiciliar: suspender 5 minutos antes.`
    },
    {
      procedimento: "Polissonografia",
      texto: `- Alimentar-se normalmente, evitando estimulantes (café, refrigerante de cola, chá preto/mate/verde, chocolate, cafeinados).
- Jantar antes de chegar à clínica; durante o exame só é oferecido café da manhã ao término.
- Manter medicações usuais; se usar remédio para dormir, trazer para tomar na clínica.
- Lavar os cabelos no dia do exame com shampoo neutro, sem condicionador/gel; cabelo completamente seco.
- Mulheres: sem maquiagem, cremes faciais/corporais ou esmalte. Homens: fazer a barba (se não usarem habitualmente).
- Trazer pedido do exame autorizado, itens de higiene pessoal, pijama largo (obrigatório, sem elástico em punhos/tornozelos), roupa de cama de casal, travesseiro, cobertor, toalha de rosto.
- Proibido fumar nas dependências internas.
- Horário do exame: 20h às 7h. Avisar com antecedência em caso de impossibilidade de comparecimento.
Rua João Paulino Damasceno, 1314, Jardim Tropical, Alfenas — (35) 3292-2177 / 98877-5975.`
    },
  ],
},
{
  id: 43, nome: "Instituto de Imagem da Mama",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Benjamin da Silva Campos", numero:"165", bairro:"Ouro Verde", cidade:"Três Pontas", uf:"MG", cep:"37191-146"}],
  profissionais: [{nome:"Silvio Cesar da Silva", especialidade:"Mastologista"}],
  preparoStatus: "pendente",
  preparos: [],
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
  ],
  preparoStatus: "pendente",
  preparos: [],
},
{
  id: 46, nome: "Dra. Juliana Marilia",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Juliana Marilia Pereira de Oliveira", especialidade:"Cardiologista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 47, nome: "Laboratório Furquim",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua João Paulino Damasceno", numero:"927", bairro:"Santa Rita", cidade:"Alfenas", uf:"MG", cep:"37132-004"}],
  profissionais: [{nome:"Lais Morais Furquim", especialidade:"Farmacêutica Analista Clínica"}],
  preparoStatus: "sem_preparo",
  preparos: [],
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
  ],
  preparoStatus: "pendente",
  preparos: [],
  preparoNota: "Preparo existente no sistema antigo — pendente de transferência para o novo sistema.",
},
{
  id: 49, nome: "Dra. Ana Carolina",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Ana Carolina Silva Santos", especialidade:"Cardiologista"}],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "Ecocardiograma",
      texto: `Homens: fazer depilação peitoral, se necessário.`
    },
  ],
},
{
  id: 50, nome: "Dr. Rubens Bittencourt",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Rubens Bittencourt", especialidade:"Ortopedista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
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
  ],
  preparoStatus: "pendente",
  preparos: [],
},
{
  id: 52, nome: "Magnus Varginha",
  modalidade: "solicitacao",
  enderecos: [{label:"Clínica", logradouro:"Alameda Olívio Bregalda", numero:"595", bairro:"Santa Luiza", cidade:"Varginha", uf:"MG", cep:"37062-680"}],
  profissionais: [
    {nome:"Felipe de Oliveira Mejias", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Gabriel Ademar Reis", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Paulo Lourenço Menicucci Silva", especialidade:"Radiologia e Diagnóstico por Imagem"}
  ],
  preparoStatus: "pendente",
  preparos: [],
},
{
  id: 53, nome: "Magsul Três Corações",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Tenente Clovis Neder", numero:"333", bairro:"Alto Pero", cidade:"Três Corações", uf:"MG", cep:"37410-001"}],
  profissionais: [{nome:"Flavio Siqueira Junqueira", especialidade:"Radiologia e Diagnóstico por Imagem"}],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "RM Uro",
      texto: `- Jejum de 4 horas.
- Estar com a bexiga cheia.
- Não mastigar chiclete no dia do exame.

- Chegar com 30 minutos de antecedência para cadastro do exame.
- Trazer pedido médico original, autorização (se convênio), carteirinha do convênio, documento com foto e CPF.
- Trazer exames anteriores da mesma região (laudo e imagens).
- Menores de idade devem vir acompanhados do responsável legal.
- Tomar a medicação de uso contínuo normalmente.
- Não vir de cabelo molhado, com creme na pele ou adornos (corrente, anel, piercing etc.).
- Não ter tatuagem e/ou maquiagem definitiva recente (aguardar 48h).
- Gestantes ou com suspeita de gravidez devem avisar com antecedência.
Central de Atendimento: (35) 3449-3800 / WhatsApp (35) 3449-3350.`
    },
    {
      procedimento: "RM Tórax (Mediastino, Pulmão, Parede Torácica)",
      texto: `- Jejum de 4 horas.
- Não mastigar chiclete no dia do exame.

- Chegar com 30 minutos de antecedência para cadastro do exame.
- Trazer pedido médico original, autorização (se convênio), carteirinha do convênio, documento com foto e CPF.
- Trazer exames anteriores da mesma região (laudo e imagens).
- Menores de idade devem vir acompanhados do responsável legal.
- Tomar a medicação de uso contínuo normalmente.
- Não vir de cabelo molhado, com creme na pele ou adornos (corrente, anel, piercing etc.).
- Não ter tatuagem e/ou maquiagem definitiva recente (aguardar 48h).
- Gestantes ou com suspeita de gravidez devem avisar com antecedência.
Central de Atendimento: (35) 3449-3800 / WhatsApp (35) 3449-3350.`
    },
    {
      procedimento: "RM Reconstrução Tridimensional (acrescentar ao exame de base)",
      texto: `- Não há jejum; fazer dieta leve.

- Chegar com 30 minutos de antecedência para cadastro do exame.
- Trazer pedido médico original, autorização (se convênio), carteirinha do convênio, documento com foto e CPF.
- Trazer exames anteriores da mesma região (laudo e imagens).
- Menores de idade devem vir acompanhados do responsável legal.
- Tomar a medicação de uso contínuo normalmente.
- Não vir de cabelo molhado, com creme na pele ou adornos (corrente, anel, piercing etc.).
- Não ter tatuagem e/ou maquiagem definitiva recente (aguardar 48h).
- Gestantes ou com suspeita de gravidez devem avisar com antecedência.
Central de Atendimento: (35) 3449-3800 / WhatsApp (35) 3449-3350.`
    },
    {
      procedimento: "RM — Perna, Joelho, Tornozelo, Coxa, Quadril, Coluna (Dorsal/Lombar/Cervical/Lombossacral), Pênis, Sialo, Sela Túrcica (Hipófise), Crânio, Plexo Braquial (Desfiladeiro Torácico), Pescoço",
      texto: `- Não há jejum; fazer dieta leve.

- Chegar com 30 minutos de antecedência para cadastro do exame.
- Trazer pedido médico original, autorização (se convênio), carteirinha do convênio, documento com foto e CPF.
- Trazer exames anteriores da mesma região (laudo e imagens).
- Menores de idade devem vir acompanhados do responsável legal.
- Tomar a medicação de uso contínuo normalmente.
- Não vir de cabelo molhado, com creme na pele ou adornos (corrente, anel, piercing etc.).
- Não ter tatuagem e/ou maquiagem definitiva recente (aguardar 48h).
- Gestantes ou com suspeita de gravidez devem avisar com antecedência.
Central de Atendimento: (35) 3449-3800 / WhatsApp (35) 3449-3350.`
    },
    {
      procedimento: "RM Pelve (Próstata)",
      texto: `Véspera e dia do exame: alimentação leve (pobre em resíduos); evitar frutas, legumes e derivados de leite.
- Tomar 1 comprimido de Dulcolax às 8h e outro às 14h (cólicas: 1 Buscopan).

Dia do exame:
- Jejum de 4 horas.
- Urinar 2 horas antes e não urinar mais até o fim do exame; não beber água.
- Não mastigar chiclete.
Observação: não pode ter feito biópsia de próstata nos últimos 30 dias, nem relação sexual nos 3 dias anteriores.

- Chegar com 30 minutos de antecedência para cadastro do exame.
- Trazer pedido médico original, autorização (se convênio), carteirinha do convênio, documento com foto e CPF.
- Trazer exames anteriores da mesma região (laudo e imagens).
- Menores de idade devem vir acompanhados do responsável legal.
- Tomar a medicação de uso contínuo normalmente.
- Não vir de cabelo molhado, com creme na pele ou adornos (corrente, anel, piercing etc.).
- Não ter tatuagem e/ou maquiagem definitiva recente (aguardar 48h).
- Gestantes ou com suspeita de gravidez devem avisar com antecedência.
Central de Atendimento: (35) 3449-3800 / WhatsApp (35) 3449-3350.`
    },
    {
      procedimento: "RM Pelve (não inclui articulações coxofemorais)",
      texto: `- Jejum de 4 horas.
- Não mastigar chiclete no dia do exame.
- Urinar 2 horas antes e não urinar mais até o fim do exame; não beber água.
- Mulheres: será utilizado gel intravaginal — trazer um absorvente.

- Chegar com 30 minutos de antecedência para cadastro do exame.
- Trazer pedido médico original, autorização (se convênio), carteirinha do convênio, documento com foto e CPF.
- Trazer exames anteriores da mesma região (laudo e imagens).
- Menores de idade devem vir acompanhados do responsável legal.
- Tomar a medicação de uso contínuo normalmente.
- Não vir de cabelo molhado, com creme na pele ou adornos (corrente, anel, piercing etc.).
- Não ter tatuagem e/ou maquiagem definitiva recente (aguardar 48h).
- Gestantes ou com suspeita de gravidez devem avisar com antecedência.
Central de Atendimento: (35) 3449-3800 / WhatsApp (35) 3449-3350.`
    },
    {
      procedimento: "RM Pelve (Endometriose)",
      texto: `Véspera: tomar 1 comprimido de Dulcolax às 8h e outro às 14h (cólicas: 1 Buscopan); dieta pobre em resíduos.
Permitidos: suco coado, água, chá, café, água de coco, isotônicos, leite, queijo branco/muçarela/requeijão/cottage, iogurte sem pedaços de fruta, pão francês, bolacha água e sal, sopa magra coada, macarrão com molho vermelho ou alho e óleo, purê de batata, arroz branco, gelatina sem pedaços, picolé de frutas, suspiro.
Evitar: verduras cruas, bagaço de frutas, saladas, frituras, feijões, grão-de-bico, milho, lentilha, ervilha, sementes, integrais.

Dia do exame:
- Jejum de 4 horas; manter dieta pobre em resíduos até o início do exame.
- Urinar 2 horas antes e não urinar mais até o fim; não beber água.
- Evitar o período menstrual. Pode ser usado gel intravaginal — trazer absorvente.
- Não mastigar chiclete.

- Chegar com 30 minutos de antecedência para cadastro do exame.
- Trazer pedido médico original, autorização (se convênio), carteirinha do convênio, documento com foto e CPF.
- Trazer exames anteriores da mesma região (laudo e imagens).
- Menores de idade devem vir acompanhados do responsável legal.
- Tomar a medicação de uso contínuo normalmente.
- Não vir de cabelo molhado, com creme na pele ou adornos (corrente, anel, piercing etc.).
- Não ter tatuagem e/ou maquiagem definitiva recente (aguardar 48h).
- Gestantes ou com suspeita de gravidez devem avisar com antecedência.
Central de Atendimento: (35) 3449-3800 / WhatsApp (35) 3449-3350.`
    },
    {
      procedimento: "RM Pé (Antepé — não inclui tornozelo)",
      texto: `- Não há jejum; fazer dieta leve.
- Retirar esmaltes e base das unhas.

- Chegar com 30 minutos de antecedência para cadastro do exame.
- Trazer pedido médico original, autorização (se convênio), carteirinha do convênio, documento com foto e CPF.
- Trazer exames anteriores da mesma região (laudo e imagens).
- Menores de idade devem vir acompanhados do responsável legal.
- Tomar a medicação de uso contínuo normalmente.
- Não vir de cabelo molhado, com creme na pele ou adornos (corrente, anel, piercing etc.).
- Não ter tatuagem e/ou maquiagem definitiva recente (aguardar 48h).
- Gestantes ou com suspeita de gravidez devem avisar com antecedência.
Central de Atendimento: (35) 3449-3800 / WhatsApp (35) 3449-3350.`
    },
  ],
},
{
  id: 54, nome: "Magsul Pouso Alegre",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Adriano de Freitas Cardoso", numero:"30", bairro:"Fatima III", cidade:"Pouso Alegre", uf:"MG", cep:"37555-002"}],
  profissionais: [{nome:"Flavio Siqueira Junqueira", especialidade:"Radiologia e Diagnóstico por Imagem"}],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "RM Uro",
      texto: `- Jejum de 4 horas.
- Estar com a bexiga cheia.
- Não mastigar chiclete no dia do exame.

- Chegar com 30 minutos de antecedência para cadastro do exame.
- Trazer pedido médico original, autorização (se convênio), carteirinha do convênio, documento com foto e CPF.
- Trazer exames anteriores da mesma região (laudo e imagens).
- Menores de idade devem vir acompanhados do responsável legal.
- Tomar a medicação de uso contínuo normalmente.
- Não vir de cabelo molhado, com creme na pele ou adornos (corrente, anel, piercing etc.).
- Não ter tatuagem e/ou maquiagem definitiva recente (aguardar 48h).
- Gestantes ou com suspeita de gravidez devem avisar com antecedência.
Central de Atendimento: (35) 3449-3800 / WhatsApp (35) 3449-3350.`
    },
    {
      procedimento: "RM Tórax (Mediastino, Pulmão, Parede Torácica)",
      texto: `- Jejum de 4 horas.
- Não mastigar chiclete no dia do exame.

- Chegar com 30 minutos de antecedência para cadastro do exame.
- Trazer pedido médico original, autorização (se convênio), carteirinha do convênio, documento com foto e CPF.
- Trazer exames anteriores da mesma região (laudo e imagens).
- Menores de idade devem vir acompanhados do responsável legal.
- Tomar a medicação de uso contínuo normalmente.
- Não vir de cabelo molhado, com creme na pele ou adornos (corrente, anel, piercing etc.).
- Não ter tatuagem e/ou maquiagem definitiva recente (aguardar 48h).
- Gestantes ou com suspeita de gravidez devem avisar com antecedência.
Central de Atendimento: (35) 3449-3800 / WhatsApp (35) 3449-3350.`
    },
    {
      procedimento: "RM Reconstrução Tridimensional (acrescentar ao exame de base)",
      texto: `- Não há jejum; fazer dieta leve.

- Chegar com 30 minutos de antecedência para cadastro do exame.
- Trazer pedido médico original, autorização (se convênio), carteirinha do convênio, documento com foto e CPF.
- Trazer exames anteriores da mesma região (laudo e imagens).
- Menores de idade devem vir acompanhados do responsável legal.
- Tomar a medicação de uso contínuo normalmente.
- Não vir de cabelo molhado, com creme na pele ou adornos (corrente, anel, piercing etc.).
- Não ter tatuagem e/ou maquiagem definitiva recente (aguardar 48h).
- Gestantes ou com suspeita de gravidez devem avisar com antecedência.
Central de Atendimento: (35) 3449-3800 / WhatsApp (35) 3449-3350.`
    },
    {
      procedimento: "RM — Perna, Joelho, Tornozelo, Coxa, Quadril, Coluna (Dorsal/Lombar/Cervical/Lombossacral), Pênis, Sialo, Sela Túrcica (Hipófise), Crânio, Plexo Braquial (Desfiladeiro Torácico), Pescoço",
      texto: `- Não há jejum; fazer dieta leve.

- Chegar com 30 minutos de antecedência para cadastro do exame.
- Trazer pedido médico original, autorização (se convênio), carteirinha do convênio, documento com foto e CPF.
- Trazer exames anteriores da mesma região (laudo e imagens).
- Menores de idade devem vir acompanhados do responsável legal.
- Tomar a medicação de uso contínuo normalmente.
- Não vir de cabelo molhado, com creme na pele ou adornos (corrente, anel, piercing etc.).
- Não ter tatuagem e/ou maquiagem definitiva recente (aguardar 48h).
- Gestantes ou com suspeita de gravidez devem avisar com antecedência.
Central de Atendimento: (35) 3449-3800 / WhatsApp (35) 3449-3350.`
    },
    {
      procedimento: "RM Pelve (Próstata)",
      texto: `Véspera e dia do exame: alimentação leve (pobre em resíduos); evitar frutas, legumes e derivados de leite.
- Tomar 1 comprimido de Dulcolax às 8h e outro às 14h (cólicas: 1 Buscopan).

Dia do exame:
- Jejum de 4 horas.
- Urinar 2 horas antes e não urinar mais até o fim do exame; não beber água.
- Não mastigar chiclete.
Observação: não pode ter feito biópsia de próstata nos últimos 30 dias, nem relação sexual nos 3 dias anteriores.

- Chegar com 30 minutos de antecedência para cadastro do exame.
- Trazer pedido médico original, autorização (se convênio), carteirinha do convênio, documento com foto e CPF.
- Trazer exames anteriores da mesma região (laudo e imagens).
- Menores de idade devem vir acompanhados do responsável legal.
- Tomar a medicação de uso contínuo normalmente.
- Não vir de cabelo molhado, com creme na pele ou adornos (corrente, anel, piercing etc.).
- Não ter tatuagem e/ou maquiagem definitiva recente (aguardar 48h).
- Gestantes ou com suspeita de gravidez devem avisar com antecedência.
Central de Atendimento: (35) 3449-3800 / WhatsApp (35) 3449-3350.`
    },
    {
      procedimento: "RM Pelve (não inclui articulações coxofemorais)",
      texto: `- Jejum de 4 horas.
- Não mastigar chiclete no dia do exame.
- Urinar 2 horas antes e não urinar mais até o fim do exame; não beber água.
- Mulheres: será utilizado gel intravaginal — trazer um absorvente.

- Chegar com 30 minutos de antecedência para cadastro do exame.
- Trazer pedido médico original, autorização (se convênio), carteirinha do convênio, documento com foto e CPF.
- Trazer exames anteriores da mesma região (laudo e imagens).
- Menores de idade devem vir acompanhados do responsável legal.
- Tomar a medicação de uso contínuo normalmente.
- Não vir de cabelo molhado, com creme na pele ou adornos (corrente, anel, piercing etc.).
- Não ter tatuagem e/ou maquiagem definitiva recente (aguardar 48h).
- Gestantes ou com suspeita de gravidez devem avisar com antecedência.
Central de Atendimento: (35) 3449-3800 / WhatsApp (35) 3449-3350.`
    },
    {
      procedimento: "RM Pelve (Endometriose)",
      texto: `Véspera: tomar 1 comprimido de Dulcolax às 8h e outro às 14h (cólicas: 1 Buscopan); dieta pobre em resíduos.
Permitidos: suco coado, água, chá, café, água de coco, isotônicos, leite, queijo branco/muçarela/requeijão/cottage, iogurte sem pedaços de fruta, pão francês, bolacha água e sal, sopa magra coada, macarrão com molho vermelho ou alho e óleo, purê de batata, arroz branco, gelatina sem pedaços, picolé de frutas, suspiro.
Evitar: verduras cruas, bagaço de frutas, saladas, frituras, feijões, grão-de-bico, milho, lentilha, ervilha, sementes, integrais.

Dia do exame:
- Jejum de 4 horas; manter dieta pobre em resíduos até o início do exame.
- Urinar 2 horas antes e não urinar mais até o fim; não beber água.
- Evitar o período menstrual. Pode ser usado gel intravaginal — trazer absorvente.
- Não mastigar chiclete.

- Chegar com 30 minutos de antecedência para cadastro do exame.
- Trazer pedido médico original, autorização (se convênio), carteirinha do convênio, documento com foto e CPF.
- Trazer exames anteriores da mesma região (laudo e imagens).
- Menores de idade devem vir acompanhados do responsável legal.
- Tomar a medicação de uso contínuo normalmente.
- Não vir de cabelo molhado, com creme na pele ou adornos (corrente, anel, piercing etc.).
- Não ter tatuagem e/ou maquiagem definitiva recente (aguardar 48h).
- Gestantes ou com suspeita de gravidez devem avisar com antecedência.
Central de Atendimento: (35) 3449-3800 / WhatsApp (35) 3449-3350.`
    },
    {
      procedimento: "RM Pé (Antepé — não inclui tornozelo)",
      texto: `- Não há jejum; fazer dieta leve.
- Retirar esmaltes e base das unhas.

- Chegar com 30 minutos de antecedência para cadastro do exame.
- Trazer pedido médico original, autorização (se convênio), carteirinha do convênio, documento com foto e CPF.
- Trazer exames anteriores da mesma região (laudo e imagens).
- Menores de idade devem vir acompanhados do responsável legal.
- Tomar a medicação de uso contínuo normalmente.
- Não vir de cabelo molhado, com creme na pele ou adornos (corrente, anel, piercing etc.).
- Não ter tatuagem e/ou maquiagem definitiva recente (aguardar 48h).
- Gestantes ou com suspeita de gravidez devem avisar com antecedência.
Central de Atendimento: (35) 3449-3800 / WhatsApp (35) 3449-3350.`
    },
  ],
},
{
  id: 55, nome: "Menegate Oftalmologia",
  modalidade: "solicitacao",
  enderecos: [
    {label:"Unidade Passos", logradouro:"Avenida Arouca", numero:"940", bairro:"Centro", cidade:"Passos", uf:"MG", cep:"37900-152"},
    {label:"Unidade Carmo do Rio Claro", logradouro:"Avenida Rondon Pacheco", numero:"300", bairro:"Centro", cidade:"Carmo do Rio Claro", uf:"MG", cep:"37150-000"}
  ],
  profissionais: [{nome:"Wesley Menegate Ferreira de Faria", especialidade:"Oftalmologista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 56, nome: "Magsul Medicina Nuclear",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Adriano de Freitas Cardoso", numero:"30", complemento:"1", bairro:"Fatima III", cidade:"Pouso Alegre", uf:"MG", cep:"37550-001"}],
  profissionais: [{nome:"Erico Luis Camacho", especialidade:"Medicina Nuclear"}],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "Cintilografia de Glândulas Salivares (com ou sem estímulo)",
      texto: `- Jejum absoluto de 4 horas.
- Evitar balas ou chiclete 12 horas antes do exame.
- Duração até 1 hora.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cintilografia de Miocárdio para Localização de Necrose (Infarto Agudo)",
      texto: `- Não é necessário jejum ou suspensão de medicamentos diários.
- Região do tórax deve estar depilada (melhora fixação dos eletrodos).
- Separar o dia todo; não é necessário permanecer na clínica entre etapas.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cintilografia de Miocárdio — Repouso, Esforço e com Dobutamina (Perfusão)",
      texto: `- Suspender café, chá preto/mate, refrigerante, chocolate, achocolatados, energéticos e álcool 24h antes.
- A critério médico, suspender medicamentos para o coração 3 dias antes (na dúvida, não suspender).
- Não tomar medicamentos com cafeína (Dorflex, Tandrilax, Dorilax, Neosaldina etc.).
- Fumantes: suspender 24h antes.
- Descansar bem na véspera; tomar banho e esfregar bem o peito com sabão.
- Não fazer o exame em jejum — alimentação leve (pão, bolacha, leite, suco); se for à tarde, almoçar 2h antes com algo leve.
- Vestuário: tênis ou sapato de sola de borracha, toalha de rosto. Homens: agasalho esportivo, short/bermuda, tórax depilado. Mulheres: agasalho ou calça comprida, top ou sutiã.
- Exame em 2 etapas (repouso e esforço), podendo ser no mesmo dia ou em dias diferentes.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cintilografia de Ossos (com ou sem Fluxo Sanguíneo — Corpo Inteiro)",
      texto: `- Não é necessário jejum ou suspensão de medicamentos.
- Após a injeção, ingerir líquidos e urinar bastante até as imagens tardias.
- Separar o dia todo.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cintilografia de Paratireoides",
      texto: `- Não é necessário jejum ou suspensão de medicamentos.
- Separar meio dia; exame em 2 etapas.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cintilografia de Pulmão por Inalação (mínimo 2 projeções)",
      texto: `- Não é necessário jejum ou suspensão de medicamentos.
- Trazer obrigatoriamente radiografia ou tomografia do pulmão.
- Separar cerca de 3 horas.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cintilografia de Pulmão por Perfusão (mínimo 4 projeções)",
      texto: `- Não é necessário jejum ou suspensão de medicamentos.
- Trazer obrigatoriamente radiografia ou tomografia do pulmão.
- Separar cerca de 3 horas.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cintilografia de Pulmão para Pesquisa de Aspiração",
      texto: `- Jejum de 2 horas; não é necessário suspender medicação diária.
- Crianças: trazer 2 mamadeiras/copos (1 vazio, 1 com leite ou suco de soja) e roupa de troca.
- Adultos: trazer 1 litro de leite ou suco de soja (de preferência integral).
- Suspender medicação conforme orientação médica.
- Quando houver pesquisa de aspiração, não agendar sextas-feiras ou vésperas de feriado.
- Evitar café, iogurte, suco natural e refrigerante.
- Exame em 3 etapas (1h, 4h e 24h após ingestão).

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cintilografia do Miocárdio com Duplo Isótopo (Perfusão + Viabilidade)",
      texto: `- Não é necessário jejum ou suspensão de medicamentos.
- Exame em 1 dia; separar pelo menos meio dia (imagem de repouso e de redistribuição 4h depois).

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cintilografia para Pesquisa de Divertículo de Meckel",
      texto: `- Jejum absoluto de 4 horas (maiores de 10 anos) ou 2 horas (menores de 10 anos).
- Não é necessário suspender medicação diária.
- Separar meio dia.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cintilografia para Pesquisa de Hemorragia Digestiva Não Ativa",
      texto: `- Não é necessário jejum ou suspensão de medicamentos.
- Separar o dia todo; imagens tardias podem se estender até 24h.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cintilografia para Pesquisa de Refluxo Gastroesofágico",
      texto: `- Jejum de 4 horas; não é necessário suspender medicação diária.
- Crianças: trazer 2 mamadeiras/copos (1 vazio, 1 com leite ou suco de soja) e roupa de troca.
- Adultos: trazer 1 litro de leite ou suco de soja (de preferência integral).
- Suspender medicação conforme orientação médica; evitar café, iogurte, suco natural e refrigerante.
- Duração até 1 hora (sem pesquisa de aspiração pulmonar).

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cintilografia de Corpo Inteiro para Pesquisa de Metástases (PCI)",
      texto: `- Colher exames de sangue solicitados pelo médico nuclear antes do procedimento.
- Suspender hormônios tireoidianos 30 dias antes (reiniciar só após liberação do médico nuclear).
- Dieta pobre em iodo por 15 dias (evitar peixe/frutos do mar, couve-flor, repolho, espinafre, agrião, caqui, sal iodado, laticínios, embutidos, gema de ovo, maionese, chocolate, café solúvel, chás industrializados, refrigerantes etc. — verificar lista completa com a clínica).
- Suspender por 30 dias: butazona, corticoterapia oral, vitaminas, xaropes para tosse, remédios para vermes.
- Suspender amiodarona por 3 meses (com o cardiologista).
- Suspender bronzeador, esmalte/base de unha (15 dias), tintura de cabelo (1 mês) — protetor solar permitido.
- Suspender tratamento dentário/antissépticos com iodo.
- RX de vesícula, urografia ou tomografia com contraste: adiar o procedimento em 3 meses.
- Jejum absoluto de 4 horas antes da dose de Iodeto-131I; manter dieta pobre em iodo até a imagem.
- Exame realizado em 2 dias; separar meio período em cada um.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cintilografia Renal / Renograma (Qualitativa e/ou Quantitativa)",
      texto: `- Não é necessário jejum ou suspensão de medicamentos.
- Separar meio dia; imagens de 3 a 7 horas após a injeção.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Cistocintilografia Direta",
      texto: `- Não é necessário jejum ou suspensão de medicamentos.
- Paciente não pode estar com infecção urinária.
- Separar 3 horas do dia (inclui sondagem vesical).

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Detecção Intraoperatória Radioguiada de Linfonodo Sentinela",
      texto: `- Não é necessário jejum ou suspensão de medicamentos (exceto se a cirurgia for no mesmo dia — seguir jejum pré-operatório).
- Separar pelo menos 4 horas.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Estudo Renal Dinâmico (com ou sem Diurético)",
      texto: `- Não é necessário jejum ou suspensão de medicamentos.
- Tomar pelo menos 5 copos de líquido.
- Separar 3 horas do dia.

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Linfocintilografia",
      texto: `- Não é necessário jejum ou suspensão de medicamentos.
- Separar pelo menos meio dia; pode ser necessária imagem tardia (até 24h).

Informações gerais: trazer pedido médico e exames anteriores relacionados; trazer autorização se convênio; capacidade máxima do equipamento 150kg; menores de 18 anos acompanhados de adulto; amamentação — reservar leite para 3 dias após o exame; gravidez (suspeita ou confirmada) — não realizar; chegar 20 minutos antes do horário.`
    },
    {
      procedimento: "Tratamento de Hipertireoidismo (Plummer / Bócio Nodular Tóxico — até 30 MCI)",
      texto: `- Jejum obrigatório de 6 horas no dia da administração da dose (não precisa jejum no dia da imagem).
- RX de vesícula, urografia, arteriografia ou tomografia com contraste: só tratar após 3 meses.
- Teste de Schiller, bronzeador e tintura de cabelo: parar 1 mês antes.
- Base/esmalte de unha: parar 1 semana antes.
- Suspender por 1 mês: hormônios T4 (Puran T4, Euthyrox, Levoid, Synthroid, Tetroid), vitaminas, xarope para tosse, medicação para vermes.
- Suspender por 14 dias: hormônios T3 (ex.: Cynomel). Por 10 dias: corticoides. Por 90 dias: amiodarona (a critério médico).
- Parar Tapazol 3 dias antes e ficar mais 3 dias sem o medicamento.
- Dieta pobre em iodo por 15 dias antes.
- Não precisa de acompanhante, salvo necessidade de ajuda.
- Gravidez, suspeita de gravidez ou amamentação: não realizar.
- Trazer exames anteriores da tireoide (ultrassom, cintilografia, PCI) e exames de sangue.`
    },
  ],
},
{
  id: 57, nome: "MRI Diagnósticos",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Travessa Belo Horizonte", numero:"43", complemento:"Sala 04", bairro:"Belo Horizonte", cidade:"Passos", uf:"MG", cep:"37900-022"}],
  profissionais: [
    {nome:"Gesse Antonio Barrios de Jesus", especialidade:"Radiologia e Diagnóstico por Imagem"},
    {nome:"Humberto Franca Ferreira", especialidade:"Radiologista Intervencionista"}
  ],
  preparoStatus: "pendente",
  preparos: [],
},
{
  id: 58, nome: "Dr. Luiz Carlos Pereira Silva",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Luiz Carlos Pereira Silva", especialidade:"Neurologista"}],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "Eletroneuromiografia (ENMG)",
      texto: `Atenção aos agendadores:
- Membros Inferiores (MMII): agendar 1 horário (1 guia).
- Membros Superiores (MMSS): agendar 1 horário (1 guia).
- MMSS e MMII: agendar 2 horários (2 guias).
- Exame de língua: 1 horário (1 guia). Exame de face: 1 horário (1 guia).
- Duração média de 30 a 40 min, variando conforme o caso.
- Não é realizado sem pedido médico e guia de marcação — verificar antes de encaminhar o paciente.

Preparo do paciente:
- Tomar banho com sabão de coco.
- Não é necessário jejum.
- Não utilizar cremes ou óleo no corpo.
- MMSS: trazer camiseta sem manga. MMII: trazer bermuda larga que suba até a coxa.
- Trazer documentos pessoais e Cartão Nacional do SUS.
- Diabéticos: comunicar na hora do exame.
- Pacientes com marca-passo não podem realizar o exame.
- Uso de anticoagulante: consultar o médico sobre o tempo de suspensão necessário.

Atenção: pacientes que vierem sem o preparo correto não realizarão o exame.`
    },
  ],
},
{
  id: 59, nome: "O2 Hiperbárica Pouso Alegre",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Persano Tavares Galvao", numero:"50", complemento:"Quadra 08, Lote 007", bairro:"Fatima III", cidade:"Pouso Alegre", uf:"MG", cep:"37555-012"}],
  profissionais: [{nome:"Gustavo Pagliarini Pacheco", especialidade:"Radiologia e Diagnóstico por Imagem"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 60, nome: "Olhar Oftalmologia",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Jose Francisco de Castro", numero:"436", complemento:"Letra A", bairro:"Lagoinha", cidade:"São Sebastião do Paraíso", uf:"MG", cep:"37957-003"}],
  profissionais: [{nome:"Fernando Silva Moura", especialidade:"Oftalmologista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 61, nome: "Dr. Pedro Sant'Anna",
  modalidade: "com_agenda",
  enderecos: [{label:"Amb. Dr. Plínio", logradouro:"Praça Fausto Monteiro", numero:"347", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-031"}],
  profissionais: [{nome:"Pedro Henrique Oliveira Sant'Anna", especialidade:"Otorrinolaringologista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 62, nome: "Evolve Especialidades Pediátricas",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Avenida Comendador Francisco Avelino Maia", numero:"1740", bairro:"Santa Casa", cidade:"Passos", uf:"MG", cep:"37904-017"}],
  profissionais: [{nome:"Fabiana da Silva Freire", especialidade:"Cardiologista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 63, nome: "Dr. José Fernando Cordova",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"José Fernando Cordova Cepeda", especialidade:"Neurologista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 64, nome: "Prevenir Guaxupé",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Rua 13 de Maio", numero:"89", complemento:"Sala 5, 6, 7", bairro:"Centro", cidade:"Guaxupé", uf:"MG", cep:"37800-000"}],
  profissionais: [
    {nome:"Anderlei Tessarolo Degering", especialidade:"Pneumologista"},
    {nome:"Gisela de Almeida Palos Batista", especialidade:"Fonoaudióloga"}
  ],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "BERA / PEATE",
      texto: `Critérios:
- Crianças até 6 anos e 11 meses (ou com dificuldade de colaborar): exame feito obrigatoriamente com responsável adulto.
- Adultos: não vir com maquiagem, base, protetor solar ou perfume no rosto.
- Ambos: evitar vir resfriado ou com tosse; rosto limpo.

Preparo:
- Privação de sono na véspera e no dia do exame, pelo maior tempo possível.
- Paciente relaxado, pode dormir durante o exame (facilita a avaliação).
- Crianças: chegar com sono e fome; levar mamadeira/alimentos habituais e itens para dormir (chupeta, travesseiro, paninhos). Privar o sono durante a viagem até Guaxupé.
- O pediatra pode orientar uso de medicação para sonolência (Dramin, Decongex, Bromoprida, Histamin etc.) — combinar horário de aplicação já na clínica.
- Crianças pequenas devem ficar no colo do responsável.
- Cabelos presos para trás (rabo baixo).

Interferentes: obstrução do ouvido por cera impede o exame (a clínica não remove cera na hora); tensão/nervosismo podem interferir — manter-se calmo.

Observações: exame indolor; requer a permanência da oliva durante todo o exame. Se não for possível realizar, pode ser reagendado sob sedação (não realizamos Bera com sedação).`
    },
    {
      procedimento: "Espirometria",
      texto: `- Alimentar-se normalmente, evitando refeições volumosas até 1h antes.
- Não tomar café preto, chá mate ou Coca-Cola até 6h antes.
- Não consumir chocolate.
- Não ingerir bebida alcoólica no dia do exame.
- Não fumar no dia do exame (pelo menos 2h antes).
- Uso de broncodilatador: suspender no dia do exame.`
    },
    {
      procedimento: "Eletroencefalograma (EEG)",
      texto: `- Lavar o cabelo na véspera ou no dia do exame apenas com sabonete/shampoo neutro (ex: sabão de coco). Não usar condicionador, creme, gel, spray, óleo ou tintura. Cabelo 100% seco ao chegar.
- Não ficar em jejum — fazer refeição leve (café da manhã reforçado) para evitar queda de pressão ou hipoglicemia.
- Evitar café, chás preto/verde, refrigerante e chocolate por pelo menos 12h antes.
- Não suspender medicamentos de uso contínuo, salvo orientação do neurologista.`
    },
    {
      procedimento: "Eletrocardiograma (ECG)",
      texto: `- Não é necessário jejum.
- Vestir roupas confortáveis; evitar cremes/óleos no tórax; evitar exercícios intensos e bebidas estimulantes antes.
- Retirar objetos metálicos do corpo.
- Preferir roupas fáceis de tirar/abrir; mulheres devem remover o sutiã (fecho e hastes interferem no traçado).
- Retirar relógios, correntes, brincos, pulseiras e piercings próximos ao tórax/membros.
- Não passar cremes, hidratantes, óleos ou desodorante no peito e pulsos no dia do exame.
- Evitar atividade física intensa e cafeína antes do exame.
- Tórax com muitos pelos: pode ser necessária tricotomia (raspagem) na área dos adesivos.
- Informar todos os medicamentos de uso contínuo, principalmente para pressão ou batimentos cardíacos.`
    },
    {
      procedimento: "Acuidade Visual",
      texto: `- Levar óculos ou lentes de contato atuais, se usar; informar medicamentos, condições oculares ou esforço visual recente.
- Evitar lentes rígidas por 7 dias e gelatinosas por 3 dias antes do exame (podem alterar a córnea).
- Chegar com os olhos descansados, evitando uso prolongado de telas antes da avaliação.`
    },
  ],
},
{
  id: 65, nome: "Pronto-Lab",
  modalidade: "sem_agenda",
  enderecos: [{label:"", logradouro:"Rua Belmiro Bueno de Almeida", numero:"505", bairro:"Centro", cidade:"Campo do Meio", uf:"MG", cep:"37165-000"}],
  profissionais: [{nome:"Marisa Silveira Bueno Souza", especialidade:"Farmacêutica Analista Clínica"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 66, nome: "Dr. Ricardo Barbosa",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Ricardo Barbosa de Oliveira", especialidade:"Radiologia e Diagnóstico por Imagem"}],
  preparoStatus: "com_preparo",
  preparos: [
    {
      procedimento: "Ultrassom de Abdome Total",
      texto: `- Jejum de 8 horas.
- 50 gotas de Luftal 2 horas antes do exame.
- 2 copos de água 2 horas antes do exame.
- Não fumar e não urinar.`
    },
    {
      procedimento: "Ultrassom de Rins e Vias Urinárias",
      texto: `- Jejum de 8 horas.
- 50 gotas de Luftal 2 horas antes do exame.
- 2 copos de água 2 horas antes do exame.
- Não fumar e não urinar.`
    },
    {
      procedimento: "Ultrassom de Abdome Superior",
      texto: `- Jejum de 8 horas.
- 50 gotas de Luftal 2 horas antes do exame.
- Não fumar.`
    },
    {
      procedimento: "Ultrassom de Abdome Total e Rins e Vias Urinárias (Crianças)",
      texto: `- Jejum de 8 horas.
- 2 copos de água 2 horas antes do exame.
- Não urinar.`
    },
    {
      procedimento: "Ultrassom de Mamas",
      texto: `- Acima de 40 anos: trazer mamografia de no máximo 1 ano.`
    },
    {
      procedimento: "Ultrassom de Próstata",
      texto: `- 2 copos de água 4 horas antes do exame.
- Não fumar e não urinar.`
    },
    {
      procedimento: "Ultrassom Pélvico",
      texto: `- 2 copos de água antes do exame.
- Não fumar e não urinar.`
    },
    {
      procedimento: "Ultrassom Obstétrico de 1º Trimestre (até 14 semanas ou 4 meses)",
      texto: `- 2 copos de água 4 horas antes do exame.
- Não fumar e não urinar.`
    },
    {
      procedimento: "Ultrassom Morfológico de 1º Trimestre (até 14 semanas ou 4 meses)",
      texto: `- 2 copos de água 4 horas antes do exame.
- Não fumar e não urinar.`
    },
  ],
},
{
  id: 68, nome: "Dra. Isabela Tiburcio",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [{nome:"Isabela Tiburcio Cabral", especialidade:"Geriatra"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 69, nome: "TIPP Med",
  modalidade: "com_agenda",
  enderecos: [{label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}],
  profissionais: [],
  observacao: "Prestador ainda não enviou a relação de profissionais de saúde.",
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 70, nome: "Tomo Centro Médico e Diagnóstico de Machado",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Avenida Santa Cruz", numero:"244", bairro:"Centro", cidade:"Machado", uf:"MG", cep:"37750-000"}],
  profissionais: [{nome:"Marco Aurelio Abrahao Dias", especialidade:"Radiologia e Diagnóstico por Imagem"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 71, nome: "Ultrassom Ideal",
  modalidade: "solicitacao",
  enderecos: [{label:"", logradouro:"Rua Argentina", numero:"70", bairro:"Vila Pinto", cidade:"Varginha", uf:"MG", cep:"37010-640"}],
  profissionais: [{nome:"Gabriela Surita Garcez Guimarães", especialidade:"Radiologia e Diagnóstico por Imagem"}],
  preparoStatus: "sem_preparo",
  preparos: [],
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
  ],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 73, nome: "Urogyn",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Rua Adolfo Engel", numero:"22", complemento:"Consultório 2", bairro:"Loteamento Siqueira", cidade:"Alfenas", uf:"MG", cep:"37133-613"}],
  profissionais: [{nome:"Hugo Bernardes Filho", especialidade:"Urologista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 74, nome: "Clínica Dr. Alipio",
  modalidade: "com_agenda",
  enderecos: [{label:"", logradouro:"Rua João Paulino Damasceno", numero:"1381", complemento:"Sala 1", bairro:"Jardim Tropical", cidade:"Alfenas", uf:"MG", cep:"37133-602"}],
  profissionais: [{nome:"Alipio Jacintho Pereira Thiers Vieira", especialidade:"Urologista"}],
  preparoStatus: "sem_preparo",
  preparos: [],
},
{
  id: 75, nome: "Analises - Carvalho e Rosa Laboratório",
  modalidade: "sem_agenda",
  enderecos: [{label:"", logradouro:"Rua Gabriel Moura Leite", numero:"26", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-095"}],
  profissionais: [],
  observacao: "Profissionais de saúde ainda não informados.",
  preparoStatus: "pendente",
  preparos: [],
},
{
  id: 76, nome: "Associação Instituto de Preservação e Desenvolvimento - IPD",
  modalidade: "sem_agenda",
  enderecos: [{label:"", logradouro:"Avenida Princesa do Sul", numero:"1900", bairro:"Rezende", cidade:"Varginha", uf:"MG", cep:"37062-442"}],
  profissionais: [
    {nome:"Eliane Felicione Jardim", especialidade:"Farmacêutica Analista Clínico"},
    {nome:"João Baptista Macuco Janini", especialidade:"Médico Anatomopatologista / Citopatologista / Patologista Clínico / Medicina Laboratorial"}
  ],
  preparoStatus: "pendente",
  preparos: [],
},
{
  id: 77, nome: "Lab. de Analises Clinicas Santa Monica e Lab. Alfenas",
  modalidade: "sem_agenda",
  enderecos: [{label:"", logradouro:"Rua Martins Alfenas", numero:"1648", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37132-018"}],
  profissionais: [
    {nome:"Amanda de Araujo Zazeri", especialidade:"Biomédico"},
    {nome:"Natalia Anastaci de Souza Barbosa", especialidade:"Farmacêutico"}
  ],
  preparoStatus: "pendente",
  preparos: [],
},
{
  id: 78, nome: "Única Hospital Dia",
  modalidade: "solicitacao",
  enderecos: [
    {label:"Única Hospital Dia", logradouro:"Rua João Paulino Damasceno", numero:"1828", bairro:"Residencial Euroville", cidade:"Alfenas", uf:"MG", cep:"37133-660"},
    {label:"Policlínica Cislagos", logradouro:"Rua Coronel Pedro Corrêa", numero:"234", bairro:"Centro", cidade:"Alfenas", uf:"MG", cep:"37130-065"}
  ],
  profissionais: [
    {nome:"Flavio Assumpção Zambelli Loyola", especialidade:"Urologista"},
    {nome:"Paulo Eduardo Rocha", especialidade:"Urologista"},
    {nome:"Paulo Vilela Neto", especialidade:"Urologista"},
    {nome:"Ricardo Cordeiro Leite", especialidade:"Urologista"}
  ],
  preparoStatus: "pendente",
  preparos: [],
}
];
