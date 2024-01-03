const items = document.querySelectorAll('.item');
  const blanks = document.querySelectorAll('.blank');

  items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
  });

  blanks.forEach(blank => {
    blank.addEventListener('dragover', dragOver);
    blank.addEventListener('dragenter', dragEnter);
    blank.addEventListener('dragleave', dragLeave);
    blank.addEventListener('drop', drop);
  });

  let draggedItem = null;

  function dragStart() {
    draggedItem = this;
    setTimeout(() => {
      this.style.display = 'none';
    }, 0);
  }

  function dragEnd() {
    draggedItem.style.display = 'flex';
    draggedItem = null;
  }2

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
  }

  function dragLeave() {
    this.classList.remove('hovered');
  }

  function drop() {
    if (this.children.length === 0) {
      this.classList.remove('hovered');
      this.appendChild(draggedItem);
    }
  }
  function drop() {
  if (this.children.length === 0) {
    this.classList.remove('hovered');
    this.appendChild(draggedItem);

    // Check if the puzzle is complete
   /* const puzzleContainers = document.querySelectorAll('.puzzle');
    let isPuzzleComplete = true;

    puzzleContainers.forEach(container => {
      const itemsInContainer = Array.from(container.getElementsByClassName('item'));
      const correctItemsInContainer = itemsInContainer.filter(item => {
        const imgAlt = item.querySelector('img').alt;
        const rowCol = imgAlt.replace('Part ', '').split('-');
        const row = parseInt(rowCol[0]);
        const col = parseInt(rowCol[1]);
        return container === puzzleContainers[row - 1].children[col - 1];
      });

      if (itemsInContainer.length !== correctItemsInContainer.length) {
        isPuzzleComplete = false;
      }
    });

    if (isPuzzleComplete) {
      const congratulationsElement = document.getElementById('congratulations');
      congratulationsElement.style.display = 'block';
    }*/
  }
}
function refreshPage() {
      location.reload();
    }
    document.getElementById("exitFunction").addEventListener("click",function(){
      if (confirm("are you sur u want to exit the screen")){
        window.close();
      }
    });
