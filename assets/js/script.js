// diferença de e.target e e.currentTarget

// document.querySelector('.neutralArea').addEventListener('click', e => {
//   console.log(e.target); //retorna exatamente o elemento que clicou
//   console.log(e.currentTarget); // retorna quem tem o evento, mesmo que tenha clicado em um item que está contido na área
// });

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.area').forEach(area => {
  area.addEventListener('dragover', dragOver); // roda a função quando o item passar por cima da area
  area.addEventListener('dragleave', dragLeave); // roda a função quando você sai da área
  area.addEventListener('drop', drop); // quando solta o item no local
});

// Functions Item
function dragStart(e) {
  e.currentTarget.classList.add('dragging');
}

function dragEnd(e) {
  e.currentTarget.classList.remove('dragging');
}

//Functions Area
function dragOver(e) {
  if (e.currentTarget.querySelector('.item') === null) {
    e.preventDefault(); // o comportamento padrão é negar o drop, dessa forma, liberamos o drop.
    e.currentTarget.classList.add('hover');
  }
}
function dragLeave(e) {
  e.currentTarget.classList.remove('hover');
}
function drop(e) {
  e.currentTarget.classList.remove('hover');

  //verifica se tem algum item na area
  if (e.currentTarget.querySelector('.item') === null) {
    let dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
  }
}
