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
  semResultados: document.getElementById('semResultados')
};

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
    if (!nomeMatch && !profMatch && !cidadeMatch) return false;
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

  if (e.preparos && e.preparos.length) {
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'preparos-toggle';
    toggle.textContent = `Ver preparo${e.preparos.length > 1 ? 's' : ''} (${e.preparos.length})`;

    const listaPrep = document.createElement('div');
    listaPrep.className = 'preparos-lista';
    listaPrep.hidden = true;
    e.preparos.forEach(p => {
      const item = document.createElement('div');
      item.className = 'preparo-item';
      const h3 = document.createElement('h3');
      h3.innerHTML = destacar(p.procedimento, termo);
      const par = document.createElement('p');
      par.textContent = p.texto;
      item.appendChild(h3);
      item.appendChild(par);
      listaPrep.appendChild(item);
    });

    toggle.addEventListener('click', () => {
      listaPrep.hidden = !listaPrep.hidden;
      toggle.textContent = listaPrep.hidden
        ? `Ver preparo${e.preparos.length > 1 ? 's' : ''} (${e.preparos.length})`
        : 'Ocultar preparos';
    });

    card.appendChild(toggle);
    card.appendChild(listaPrep);
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
