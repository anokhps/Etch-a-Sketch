const container = document.querySelector('.container');
let noOgGrid = 16;
const resetBtn = document.querySelector('button');
const clearBtn = document.querySelector('#clearBtn');
const rainbowBtn = document.querySelector('#rainbowBtn')
function createGrids(sizeOfGrid) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    for (let i = 0; i < sizeOfGrid; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        for (let j = 0; j < sizeOfGrid; j++) {
            const heightAndWidth = 500 / noOgGrid;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${heightAndWidth}px`;
            gridBox.style.height = `${heightAndWidth}px`
            row.appendChild(gridBox);
            //background is changed when entering the mouse into each gridbox
            gridBox.addEventListener('mouseenter', (e) => {
                gridBox.style.backgroundColor = 'black';
                // if rainbowbutton classname is active and mouse enter to the gridbox random colors will appear
                if (e.type == 'mouseenter' && rainbowBtn.className == 'active') {
                    const randomR = Math.floor(Math.random() * 256);
                    const randomG = Math.floor(Math.random() * 256);
                    const randomB = Math.floor(Math.random() * 256);
                    gridBox.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
                }

            });
            clearBtn.addEventListener('click', () => {
                gridBox.style.backgroundColor = 'grey';

            });

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

});

// adding class active so button background and text color will change
rainbowBtn.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    // console.log(e.target.className);
});



