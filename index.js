let lis = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = lis.length;
let active = 0;  // Inicializa o índice ativo

next.onclick = () => {
    // Remove a classe 'active' do item atual
    lis[active].classList.remove('active');
    // Incrementa o índice ativo (vai para o próximo item)
    active = (active + 1) % count; // Se chega no final, volta ao início
    // Adiciona a classe 'active' ao novo item
    lis[active].classList.add('active');
};

prev.onclick = () => {
    // Remove a classe 'active' do item atual
    lis[active].classList.remove('active');
    // Decrementa o índice ativo (vai para o item anterior)
    active = (active - 1 + count) % count; // Se chega no início, vai para o final
    // Adiciona a classe 'active' ao novo item
    lis[active].classList.add('active');
};
