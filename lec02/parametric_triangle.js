function triangle(size, character) {
    let string = "#"
    if (character != undefined) {
        string = character
    }
    let triangle = "";
    for (let i = 0; i < size + 1; i++) {
        triangle = triangle + string;
        console.log(triangle)
    }
}

triangle(5)
triangle(5,"%")