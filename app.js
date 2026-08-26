const MODALIDADE_LABEL = {
  com_agenda: "Com agenda",
  sem_agenda: "Sem agenda",
  solicitacao: "Por solicitação",
  misto: "Modalidade mista"
};

const PREPARO_LABEL = {
  com_preparo: "Preparo cadastrado",
  sem_preparo: "Sem preparo necessário",
  pendente: "Preparo pendente",
  parcial: "Preparo parcial"
};

const els = {
  busca: document.getElementById('busca'),
  filtroModalidade: document.getElementById('filtroModalidade'),
  filtroCidade: document.getElementById('filtroCidade'),
  filtroEspecialidade: document.getElementById('filtroEspecialidade'),
  filtroPreparo: document.getElementById('filtroPreparo'),
  lista: document.getElementById('listaEstabelecimentos'),
  resultCount: document.getElementById('resultCount'),
  semResultados: document.getElementById('semResultados'),
  modalOverlay: document.getElementById('modalOverlay'),
  modalTitulo: document.getElementById('modalTitulo'),
  modalSubtitulo: document.getElementById('modalSubtitulo'),
  modalCorpo: document.getElementById('modalCorpo'),
  modalFechar: document.getElementById('modalFechar')
};

function abrirModal(titulo, subtitulo, montarCorpo) {
  els.modalTitulo.textContent = titulo;
  els.modalSubtitulo.textContent = subtitulo || '';
  els.modalSubtitulo.hidden = !subtitulo;
  els.modalCorpo.innerHTML = '';
  montarCorpo(els.modalCorpo);
  els.modalOverlay.hidden = false;
  document.body.classList.add('modal-aberto');
}

function fecharModal() {
  els.modalOverlay.hidden = true;
  document.body.classList.remove('modal-aberto');
  els.modalCorpo.innerHTML = '';
}

els.modalFechar.addEventListener('click', fecharModal);
els.modalOverlay.addEventListener('click', (ev) => {
  if (ev.target === els.modalOverlay) fecharModal();
});
window.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape' && !els.modalOverlay.hidden) fecharModal();
});

function popularFiltros() {
  const cidades = new Set();
  const especialidades = new Set();

  ESTABELECIMENTOS.forEach(e => {
    e.enderecos.forEach(end => cidades.add(end.cidade));
    e.profissionais.forEach(p => {
      p.especialidade.split('/').forEach(s => especialidades.add(s.trim()));
    });
  });

  [...cidades].sort((a,b)=>a.localeCompare(b,'pt-BR')).forEach(c => {
    const opt = document.createElement('option');
    opt.value = c; opt.textContent = c;
    els.filtroCidade.appendChild(opt);
  });

  [...especialidades].sort((a,b)=>a.localeCompare(b,'pt-BR')).forEach(esp => {
    const opt = document.createElement('option');
    opt.value = esp; opt.textContent = esp;
    els.filtroEspecialidade.appendChild(opt);
  });
}

function normalizar(str) {
  return (str || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
}

function destacar(texto, termo) {
  if (!termo) return texto;
  const idx = normalizar(texto).indexOf(normalizar(termo));
  if (idx === -1) return texto;
  return texto.slice(0, idx) + '<mark>' + texto.slice(idx, idx + termo.length) + '</mark>' + texto.slice(idx + termo.length);
}

const areaImpressao = document.getElementById('areaImpressao');

function imprimirPreparo(estabelecimento, procedimento, texto) {
  const hoje = new Date().toLocaleDateString('pt-BR');

  areaImpressao.innerHTML = '';

  const cabecalho = document.createElement('div');
  cabecalho.className = 'impressao-cabecalho';
  cabecalho.innerHTML = `
    <img src="assets/logo.png" alt="CISLAGOS" onerror="this.style.display='none'">
    <div>
      <div class="impressao-titulo-cislagos">CISLAGOS</div>
      <div class="impressao-subtitulo-cislagos">Consórcio Intermunicipal de Saúde dos Municípios da Região dos Lagos do Sul de Minas</div>
    </div>`;

  const h1 = document.createElement('h1');
  h1.textContent = procedimento;

  const pEstab = document.createElement('p');
  pEstab.className = 'impressao-estabelecimento';
  pEstab.textContent = estabelecimento;

  const corpo = document.createElement('div');
  corpo.className = 'impressao-texto';
  corpo.textContent = texto;

  const rodape = document.createElement('div');
  rodape.className = 'impressao-rodape';
  rodape.innerHTML = `<span>Catálogo de Prestadores Credenciados — CISLAGOS</span><span>Impresso em ${hoje}</span>`;

  areaImpressao.appendChild(cabecalho);
  areaImpressao.appendChild(h1);
  areaImpressao.appendChild(pEstab);
  areaImpressao.appendChild(corpo);
  areaImpressao.appendChild(rodape);

  document.body.classList.add('imprimindo-preparo');
  window.print();
}

window.addEventListener('afterprint', () => {
  document.body.classList.remove('imprimindo-preparo');
});

function enderecoTexto(end) {
  let partes = [];
  if (end.label) partes.push(end.label);
  partes.push(`${end.logradouro}, ${end.numero}${end.complemento ? ' - ' + end.complemento : ''}`);
  partes.push(`${end.bairro}, ${end.cidade} - ${end.uf}`);
  partes.push(`CEP ${end.cep}`);
  return partes.join(' — ');
}

function estabelecimentoMatch(e, termo, modalidade, cidade, especialidade, preparo) {
  if (modalidade && e.modalidade !== modalidade) return false;
  if (cidade && !e.enderecos.some(end => end.cidade === cidade)) return false;
  if (especialidade && !e.profissionais.some(p => p.especialidade.toLowerCase().includes(especialidade.toLowerCase()))) return false;
  if (preparo && e.preparoStatus !== preparo) return false;

  if (termo) {
    const t = normalizar(termo);
    const nomeMatch = normalizar(e.nome).includes(t);
    const profMatch = e.profissionais.some(p => normalizar(p.nome).includes(t) || normalizar(p.especialidade).includes(t));
    const cidadeMatch = e.enderecos.some(end => normalizar(end.cidade).includes(t));
    const procMatch = !!(e.procedimentos && e.procedimentos.some(p => normalizar(p.procedimento).includes(t)));
    if (!nomeMatch && !profMatch && !cidadeMatch && !procMatch) return false;
  }
  return true;
}

function renderCard(e, termo) {
  const card = document.createElement('article');
  card.className = 'card';

  const header = document.createElement('div');
  header.className = 'card-header';

  const h2 = document.createElement('h2');
  h2.innerHTML = destacar(e.nome, termo);
  header.appendChild(h2);

  const badgesRow = document.createElement('div');
  badgesRow.className = 'badges-row';

  const badge = document.createElement('span');
  badge.className = `badge ${e.modalidade}`;
  badge.textContent = MODALIDADE_LABEL[e.modalidade];
  badgesRow.appendChild(badge);

  if (e.preparoStatus) {
    const badgePrep = document.createElement('span');
    badgePrep.className = `badge-preparo ${e.preparoStatus}`;
    badgePrep.textContent = PREPARO_LABEL[e.preparoStatus] || e.preparoStatus;
    badgesRow.appendChild(badgePrep);
  }

  header.appendChild(badgesRow);

  card.appendChild(header);

  if (e.modalidadeDetalhe) {
    const det = document.createElement('div');
    det.className = 'modalidade-detalhe';
    det.textContent = e.modalidadeDetalhe;
    card.appendChild(det);
  }

  if (termo && e.procedimentos && e.procedimentos.length) {
    const t = normalizar(termo);
    const encontrados = e.procedimentos.filter(p => normalizar(p.procedimento).includes(t));
    if (encontrados.length) {
      const achado = document.createElement('div');
      achado.className = 'procedimento-achado';
      const MOSTRAR = 3;
      achado.innerHTML = encontrados.slice(0, MOSTRAR).map(p =>
        `<div class="procedimento-achado-item"><span>${destacar(p.procedimento, termo)}</span><strong>${p.valor}</strong></div>`
      ).join('') + (encontrados.length > MOSTRAR ? `<div class="procedimento-achado-mais">+ ${encontrados.length - MOSTRAR} outro${encontrados.length - MOSTRAR > 1 ? 's' : ''} procedimento${encontrados.length - MOSTRAR > 1 ? 's' : ''} encontrado${encontrados.length - MOSTRAR > 1 ? 's' : ''}</div>` : '');
      card.appendChild(achado);
    }
  }

  if (e.profissionais.length) {
    const tituloProf = document.createElement('div');
    tituloProf.className = 'secao-titulo';
    tituloProf.textContent = `Profissionais (${e.profissionais.length})`;
    card.appendChild(tituloProf);

    const ulProf = document.createElement('ul');
    ulProf.className = 'profissionais-lista';
    e.profissionais.forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${destacar(p.nome, termo)}</strong><span>${destacar(p.especialidade, termo)}</span>`;
      ulProf.appendChild(li);
    });
    card.appendChild(ulProf);
  }

  if (e.observacao) {
    const obs = document.createElement('div');
    obs.className = 'observacao';
    obs.textContent = e.observacao;
    card.appendChild(obs);
  }

  if (e.preparoNota) {
    const nota = document.createElement('div');
    nota.className = 'preparo-nota';
    nota.textContent = e.preparoNota;
    card.appendChild(nota);
  }

  const acoes = document.createElement('div');
  acoes.className = 'card-acoes';

  if (e.preparos && e.preparos.length) {
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'preparos-toggle';
    toggle.textContent = `Ver preparo${e.preparos.length > 1 ? 's' : ''} (${e.preparos.length})`;
    toggle.addEventListener('click', () => {
      abrirModal(e.nome, `Preparo${e.preparos.length > 1 ? 's' : ''} de exame`, (corpo) => {
        e.preparos.forEach(p => {
          const item = document.createElement('div');
          item.className = 'preparo-item';

          const itemHeader = document.createElement('div');
          itemHeader.className = 'preparo-item-header';

          const h3 = document.createElement('h3');
          h3.textContent = p.procedimento;
          itemHeader.appendChild(h3);

          const btnImprimir = document.createElement('button');
          btnImprimir.type = 'button';
          btnImprimir.className = 'preparo-imprimir';
          btnImprimir.textContent = 'Imprimir';
          btnImprimir.addEventListener('click', () => imprimirPreparo(e.nome, p.procedimento, p.texto));
          itemHeader.appendChild(btnImprimir);

          const par = document.createElement('p');
          par.textContent = p.texto;

          item.appendChild(itemHeader);
          item.appendChild(par);
          corpo.appendChild(item);
        });
      });
    });
    acoes.appendChild(toggle);
  }

  if (e.procedimentos && e.procedimentos.length) {
    const toggleProc = document.createElement('button');
    toggleProc.type = 'button';
    toggleProc.className = 'procedimentos-toggle';
    toggleProc.textContent = `Ver procedimentos e valores (${e.procedimentos.length})`;
    toggleProc.addEventListener('click', () => {
      abrirModal(e.nome, `Procedimentos e valores (${e.procedimentos.length})`, (corpo) => {
        const termoNormalizado = normalizar(termo);
        const termoCorrespondeProc = !!(termo && e.procedimentos.some(p => normalizar(p.procedimento).includes(termoNormalizado)));
        const termoInicial = termoCorrespondeProc ? termo : '';

        const precisaBusca = e.procedimentos.length > 15 || !!termoInicial;
        let buscaProcInput = null;

        if (precisaBusca) {
          buscaProcInput = document.createElement('input');
          buscaProcInput.type = 'text';
          buscaProcInput.className = 'procedimentos-busca';
          buscaProcInput.placeholder = 'Buscar procedimento...';
          buscaProcInput.value = termoInicial;
          corpo.appendChild(buscaProcInput);
        }

        const tabela = document.createElement('table');
        tabela.className = 'procedimentos-tabela';
        const thead = document.createElement('thead');
        thead.innerHTML = '<tr><th>Procedimento</th><th>Valor</th></tr>';
        const tbody = document.createElement('tbody');
        tabela.appendChild(thead);
        tabela.appendChild(tbody);

        const vazioProc = document.createElement('p');
        vazioProc.className = 'procedimentos-vazio';
        vazioProc.textContent = 'Nenhum procedimento encontrado.';
        vazioProc.hidden = true;

        function renderProcedimentos(termoBusca) {
          const t = normalizar(termoBusca || '');
          tbody.innerHTML = '';
          const itens = t
            ? e.procedimentos.filter(p => normalizar(p.procedimento).includes(t))
            : e.procedimentos;
          itens.forEach(p => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${destacar(p.procedimento, termoBusca)}</td><td>${p.valor}</td>`;
            tbody.appendChild(tr);
          });
          vazioProc.hidden = itens.length !== 0;
        }

        renderProcedimentos(termoInicial);

        if (buscaProcInput) {
          buscaProcInput.addEventListener('input', () => renderProcedimentos(buscaProcInput.value));
        }

        corpo.appendChild(tabela);
        corpo.appendChild(vazioProc);

        if (buscaProcInput) buscaProcInput.focus();
      });
    });
    acoes.appendChild(toggleProc);
  }

  if (acoes.childElementCount) {
    card.appendChild(acoes);
  }

  const tituloEnd = document.createElement('div');
  tituloEnd.className = 'secao-titulo';
  tituloEnd.textContent = e.enderecos.length > 1 ? 'Endereços de atendimento' : 'Endereço de atendimento';
  card.appendChild(tituloEnd);

  const ulEnd = document.createElement('ul');
  ulEnd.className = 'enderecos-lista';
  e.enderecos.forEach(end => {
    const li = document.createElement('li');
    li.innerHTML = enderecoTexto(end).replace(end.cidade, `<b>${end.cidade}</b>`);
    ulEnd.appendChild(li);
  });
  card.appendChild(ulEnd);

  return card;
}

function render() {
  const termo = els.busca.value.trim();
  const modalidade = els.filtroModalidade.value;
  const cidade = els.filtroCidade.value;
  const especialidade = els.filtroEspecialidade.value;
  const preparo = els.filtroPreparo.value;

  const resultado = ESTABELECIMENTOS.filter(e => estabelecimentoMatch(e, termo, modalidade, cidade, especialidade, preparo));

  els.lista.innerHTML = '';
  resultado
    .sort((a,b) => a.nome.localeCompare(b.nome, 'pt-BR'))
    .forEach(e => els.lista.appendChild(renderCard(e, termo)));

  els.resultCount.textContent = `${resultado.length} de ${ESTABELECIMENTOS.length} estabelecimentos`;
  els.semResultados.hidden = resultado.length !== 0;
}

['input','change'].forEach(evt => {
  els.busca.addEventListener(evt, render);
});
els.filtroModalidade.addEventListener('change', render);
els.filtroCidade.addEventListener('change', render);
els.filtroEspecialidade.addEventListener('change', render);
els.filtroPreparo.addEventListener('change', render);

popularFiltros();
render();
