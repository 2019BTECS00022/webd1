// document.getElementById("colorbutton").addEventListener("click", function () {
//     document.body.style.background= Randamcolorgenet();
//     let color= randamcolorgenet();
//     document.getElementById('colorcheck').textContent="color";
// });

// function Randamcolorgenet() {
    //single backgrounf color 

    // const letters= "0123456789ABCDEF";
    // let color="#";
    // for(let i=0; i<6; i++){
    //     color = color + letters [Math.floor(Math.random()* 15)];
    //     console.log(color);
    // }
    // return color;
//}

    //Gradiante background code
    document.getElementById("colorbutton").addEventListener("click", function () {
        const gradient = RandamGradient();
        document.body.style.background = gradient;
        document.getElementById('colorcheck').textContent = "gradient";
    });
    
    function RandamGradient() {
        const color1 = Randamcolorgenet();
        const color2 = Randamcolorgenet();
        return `linear-gradient(to right, ${color1}, ${color2})`;
    }
    
    function Randamcolorgenet() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];  // Changed to 16 to include all hexadecimal digits
        }
        return color;
    }
    