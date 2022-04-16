// diferença de e.target e e.currentTarget

// document.querySelector('.neutralArea').addEventListener('click', e => {
//   console.log(e.target); //retorna exatamente o elemento que clicou
//   console.log(e.currentTarget); // retorna quem tem o evento, mesmo que tenha clicado em um item que está contido na área
// });

let areas = {
  a: null,
  b: null,
  c: null
};

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.area').forEach(area => {
  area.addEventListener('dragover', dragOver); // roda a função quando o item passar por cima da area
  area.addEventListener('dragleave', dragLeave); // roda a função quando você sai da área
  area.addEventListener('drop', drop); // quando solta o item no local
});

let neutralArea = document.querySelector('.neutralArea');
neutralArea.addEventListener('dragover', dragOverNeutral);
neutralArea.addEventListener('dragleave', dragLeaveNeutral);
neutralArea.addEventListener('drop', dropNeutral);

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
    updateAreas();
  }
}

//Functions Neutral Area
function dragOverNeutral(e) {
  e.preventDefault();
  e.currentTarget.classList.add('hover');
}
function dragLeaveNeutral(e) {
  e.currentTarget.classList.remove('hover');
}
function dropNeutral(e) {
  e.currentTarget.classList.remove('hover');
  let dragItem = document.querySelector('.item.dragging');
  e.currentTarget.appendChild(dragItem);
  updateAreas();
}

// Logic Functions
function updateAreas() {
  document.querySelectorAll('.area').forEach(area => {
    let name = area.getAttribute('data-name');

    if (area.querySelector('.item') !== null) {
      areas[name] = area.querySelector('.item').innerHTML;
    } else {
      areas[name] = null;
    }
  });

  if (areas.a === '1' && areas.b === '2' && areas.c === '3') {
    document.querySelector('.areas').classList.add('correct');
  } else {
    document.querySelector('.areas').classList.remove('correct');
  }
}
