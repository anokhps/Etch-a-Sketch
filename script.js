const container = document.querySelector('.container');
let noOgGrid = 16;
const resetBtn = document.querySelector('button');
function createGrids(sizeOfGrid) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
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
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
            })

        }
        wrapper.appendChild(row);
    }
    container.appendChild(wrapper);
}
createGrids(noOgGrid);
resetBtn.addEventListener('click', () => {
    noOgGrid = Number(prompt('enter the size of grid'));
    while (noOgGrid > 100) {
        noOgGrid = Number(prompt('size of grid should be less than 100'));
    }
    const wrapper = document.querySelector('.wrapper');
    if (!wrapper) {
        createGrids(noOgGrid);
    } else {
        wrapper.remove();
        createGrids(noOgGrid);
    }

})
