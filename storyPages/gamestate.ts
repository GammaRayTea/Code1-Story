namespace Story {
    type Parent = Window & { gameState: boolean } & { path: String };

    declare var parent: Parent
    const element: string = document.getElementById("p1")!.innerHTML;
    //console.log(element);
    if (element.includes("Pick")) {

        parent.path = "";
        console.log("dididididi");
        
    }
    else if (element.includes("A")) {
        parent.path = parent.path +"A ";
        console.log("add a")
    }
    else if (element.includes("B")) {
        parent.path = parent.path +"B ";
        console.log("add b")
    }
    else if (element.includes("C")) {
        parent.path = parent.path +"C ";
        console.log("add b")
    }
    else if (element.includes("D")) {
        parent.path = parent.path +"D ";
        console.log("add c")
    }
    if (element.includes("end")) {
        document.getElementById("p1")!.innerHTML = "Your Path: " + parent.path;
    }
}