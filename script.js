const container = document.querySelector('.container');
const noOgGrid = 16;
function createGrids(sizeOfGrid) {
    for (let i = 0; i < sizeOfGrid; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        for (let j = 0; j < sizeOfGrid; j++) {
            const heightAndWidth = 800 / noOgGrid;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${heightAndWidth}px`;
            gridBox.style.height = `${heightAndWidth}px`
            row.appendChild(gridBox);
            //background is changed when entering the mouse into each gridbox
            gridBox.addEventListener('mouseenter',()=>{
                gridBox.style.backgroundColor='black'
            })

        }
        container.appendChild(row);
    }
}
createGrids(noOgGrid)