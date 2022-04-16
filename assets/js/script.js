// diferença de e.target e e.currentTarget

// document.querySelector('.neutralArea').addEventListener('click', e => {
//   console.log(e.target); //retorna exatamente o elemento que clicou
//   console.log(e.currentTarget); // retorna quem tem o evento, mesmo que tenha clicado em um item que está contido na área
// });

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.area').forEach(item => {
  area.addEventListener('dragover', dragOver);
  area.addEventListener('dragleave', dragLeave);
  area.addEventListener('drop', drop);
});

// Functions Item
function dragStart(e) {
  e.currentTarget.classList.add('dragging');
}

function dragEnd(e) {
  e.currentTarget.classList.remove('dragging');
}

//Functions Area
