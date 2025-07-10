// Dados de preços e links
const prices = {
    mensal: {
        gold: 'R$ 25,90/mês',
        platinum: 'R$ 35,90/mês',
        p2p: 'R$ 35,90/mês',
        elite: 'R$ 49,90/mês'
    },
    trimestral: {
        gold: 'R$ 75,00/trimestre',
        platinum: 'R$ 100,00/trimestre',
        p2p: 'R$ 100,00/trimestre',
        elite: 'R$ 140,00/trimestre'
    },
    semestral: {
        gold: 'R$ 120,00/semestre',
        platinum: 'R$ 180,00/semestre',
        p2p: 'R$ 180,00/semestre',
        elite: 'R$ 270,00/semestre'
    },
    anual: {
        gold: 'R$ 220,00/ano',
        platinum: 'R$ 330,00/ano',
        p2p: 'R$ 330,00/ano',
        elite: 'R$ 500,00/ano'
    }
};

const links = {
    mensal: {
        gold: 'https://painelcliente.net/cart.php?a=add&pid=2',
        platinum: 'https://painelcliente.net/cart.php?a=add&pid=3',
        p2p: 'https://painelcliente.net/cart.php?a=add&pid=4',
        elite: 'https://painelcliente.net/cart.php?a=add&pid=10'
    },
    trimestral: {
        gold: 'https://painelcliente.net/cart.php?a=add&pid=2&billingcycle=quarterly',
        platinum: 'https://painelcliente.net/cart.php?a=add&pid=3&billingcycle=quarterly',
        p2p: 'https://painelcliente.net/cart.php?a=add&pid=4&billingcycle=quarterly',
        elite: 'https://painelcliente.net/cart.php?a=add&pid=10&billingcycle=quarterly'
    },
    semestral: {
        gold: 'https://painelcliente.net/cart.php?a=add&pid=2&billingcycle=semiannually',
        platinum: 'https://painelcliente.net/cart.php?a=add&pid=3&billingcycle=semiannually',
        p2p: 'https://painelcliente.net/cart.php?a=add&pid=4&billingcycle=semiannually',
        elite: 'https://painelcliente.net/cart.php?a=add&pid=10&billingcycle=semiannually'
    },
    anual: {
        gold: 'https://painelcliente.net/cart.php?a=add&pid=2&billingcycle=annually',
        platinum: 'https://painelcliente.net/cart.php?a=add&pid=3&billingcycle=annually',
        p2p: 'https://painelcliente.net/cart.php?a=add&pid=4&billingcycle=annually',
        elite: 'https://painelcliente.net/cart.php?a=add&pid=10&billingcycle=annually'
    }
};

// Seletor de período com animação e mudança de preço e link
document.querySelectorAll('.period-selector .option').forEach((option, index) => {
    option.addEventListener('click', function() {
        // Remover a classe 'active' da opção atual
        document.querySelector('.period-selector .option.active').classList.remove('active');
        // Adicionar a classe 'active' à nova opção clicada
        this.classList.add('active');

        // Mover o slide-indicator para a nova opção
        const slideIndicator = document.querySelector('.slide-indicator');
        slideIndicator.style.transform = `translateX(${index * 100}%)`;

        // Capturar o valor do período selecionado
        const selectedPeriod = this.getAttribute('data-period');

        // Atualizar os preços
        document.querySelector('.gold-price').textContent = prices[selectedPeriod].gold;
        document.querySelector('.platinum-price').textContent = prices[selectedPeriod].platinum;
        document.querySelector('.p2p-price').textContent = prices[selectedPeriod].p2p;
        document.querySelector('.elite-price').textContent = prices[selectedPeriod].elite;

        // Atualizar os links dos botões de assinatura
        document.getElementById('gold-link').setAttribute('href', links[selectedPeriod].gold);
        document.getElementById('platinum-link').setAttribute('href', links[selectedPeriod].platinum);
        document.getElementById('p2p-link').setAttribute('href', links[selectedPeriod].p2p);
        document.getElementById('elite-link').setAttribute('href', links[selectedPeriod].elite);
    });
});