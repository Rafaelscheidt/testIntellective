var msg = {
    olive: "Extra virgin."
}
let flavor = "daft punk";
const products = [
        {
            instruction: "Turn oven on.",
            order: 4,
            callback: function() {
                alert(msg.olive);
            }
        },
        {
            instruction: "Add yeast.",
            order: 2,
            callback: function() {
                alert(this.instruction);
            }
        },
        {
            instruction: "Add olive oil.",
            order: 3,
            callback: function() {
                alert(msg.olive);
            }
        },
        {
            instruction: "Add flour to a bowl",
            order: 1, 
            callback: function() {
                alert(this.order);
            }
        },
        {
            instruction: "Mix it. Bake it. Eat it.",
            order: 5,
            callback: function() {
                alert(flavor);
            }
        },
    ]

// 1. Get the list of instructions from instructions.js
const instructions = products.map(product => product.instruction);
console.log(instructions);

// 2. Order the instructions using the order property of the object
products.sort(function(a, b) {
    if(a.order < b.order) {
        return -1;
    } else {
        return 1;
    }
});

console.log(products);

// 4. Execute the function "callback" on the instruction object 
//    when the item is clicked on the instruction list. 
function newButton(text, callback) {
    const $body = document.querySelector("body");
    const $button = document.createElement("button");
    $button.textContent = text;

    callback($button);

    $body.insertAdjacentElement("beforeend", $button);

    return $button;
}

newButton("Turn oven on", (button) => {
    button.addEventListener("click", () => {
        console.log("instruction1") 
    });
});

newButton("Add yeast", (button) => {
    button.addEventListener("click", () => {
        console.log("instruction2") 
    });
});

newButton("Add olive oil", (button) => {
    button.addEventListener("click", () => {
        console.log("instruction3")
    });
});

newButton("Add flour to a bowl", (button) => {
    button.addEventListener("click", () => {
        console.log("instruction4")
    });
});

newButton("Mix it. Bake it. Eat it", (button) => {
    button.addEventListener("click", () => {
        console.log("instruction5")
    });
});

// 5. Fix the callback for third instruction 'Add olive oil'
newButton("Add olive oil", (button) => {
    button.addEventListener("click", () => {
        console.log(msg.olive);
    });
});



   