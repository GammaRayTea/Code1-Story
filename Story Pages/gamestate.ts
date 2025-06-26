namespace Story {
    type Parent = Window & {gameState: boolean}& {path: String};
    
    declare var parent:Parent

    console.log(location.href)
    console.log(parent.gameState);
    if (parent.gameState == true) {
        console.log(parent.path);
    }
}