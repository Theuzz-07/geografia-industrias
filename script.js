// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Esconder todas as seções exceto a primeira
    const secoes = document.querySelectorAll('.industria');
    if (secoes.length > 0) {
        // Mostrar apenas a primeira seção por padrão
        secoes[0].classList.add('ativa');
        // Atualizar o link ativo
        const primeiroLink = document.querySelector(`[data-section="${secoes[0].id}"]`);
        if (primeiroLink) {
            primeiroLink.classList.add('ativa');
        }
    }

    // Navegação por clique nos links
    document.querySelectorAll('nav a[data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const secaoAlvo = this.getAttribute('data-section');
            
            // Remover classe ativa de todas as seções e links
            document.querySelectorAll('.industria').forEach(secao => {
                secao.classList.remove('ativa');
            });
            document.querySelectorAll('nav a').forEach(l => l.classList.remove('ativa'));
            
            // Adicionar classe ativa na seção e link clicados
            const secaoAtiva = document.getElementById(secaoAlvo);
            if (secaoAtiva) {
                secaoAtiva.classList.add('ativa');
                this.classList.add('ativa');
                // Rolar suavemente para a seção
                secaoAtiva.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Verificar o hash da URL ao carregar a página
    function verificarHash() {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            const secao = document.getElementById(hash);
            if (secao) {
                // Remover classe ativa de todas as seções e links
                document.querySelectorAll('.industria').forEach(s => s.classList.remove('ativa'));
                document.querySelectorAll('nav a').forEach(l => l.classList.remove('ativa'));
                
                // Ativar a seção e link correspondentes ao hash
                secao.classList.add('ativa');
                const linkAtivo = document.querySelector(`[data-section="${hash}"]`);
                if (linkAtivo) {
                    linkAtivo.classList.add('ativa');
                }
                secao.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    // Verificar hash ao carregar a página
    verificarHash();

    // Verificar hash quando a URL mudar
    window.addEventListener('hashchange', verificarHash);
});
