/*
*   Create 16x16 grid of square divs using javascript
*   Put them inside div container that is already in HTML
*   use flexbox to make them appear as grid
*
*   Create hover effect so the grid divs change color as mouse passes over them
*   should leave a pixelated trail
*   Use event listeners for entering and leaving divs
*
*   Add button that asks user for new grid size
*   Existing grid should be replaced with new grid in same space(e.g. 960px wide)
*   E.g.  Entering 64 returns a 64x64 grid without changing the 
*   total amount of pixels used
*   Set user input limit to a max of 100
*/

/*
*   Part One: 16x16 grid
*       create a default size?
*       Create divs using a for loop
*       append them to the 'grid' div in html
*       make them appear as a grid using flexbox
*/

const grid = document.querySelector('.grid');
console.log(grid)

function makeGrid(size){
    let area = size * size;
    for(let i = 0; i <= area; i++){
        let square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square);
    }
}


makeGrid(16);