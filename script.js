function mostrarSecao(id) {
  document.querySelectorAll('.secao').forEach(sec => sec.classList.remove('ativa'));
  const el = document.getElementById(id);
  if (el) el.classList.add('ativa');
}

function atualizarRodape(texto) {
  const alvo = document.getElementById("secaoAtual");
  if (alvo) alvo.textContent = texto;
}

document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    const label = btn.getAttribute('data-label') || target;

    // seção
    mostrarSecao(target);

    // ativo visual na navegação (só no menu, não no fluxo)
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // rodapé muda conforme aba
    atualizarRodape(label);

    // rola pro topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// set inicial do rodapé
atualizarRodape("Introdução");