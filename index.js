function hoist() {
    for (let i = 52; i > 0; i--) {
        let timer = (52 - i) * (29)
        setTimeout(() => {
            // console.log(timer, i)
            document.querySelector(".flag").style.marginTop = i + "vh";
            document.querySelector(".button1").innerHTML = "Happy Independence day 🇮🇳";
            document.querySelector(".button1").style.backgroundColor = "#F6B23D";
            document.querySelector(".button1").style.height = "45px";
            document.querySelector(".button1").style.fontWeight = "bold";
            document.querySelector(".button1").style.Color = "#FFFFFF";
            document.querySelector(".hoist").style.marginLeft = "250px";
            document.querySelector(".button").style.fontWeight = "normal";
            document.querySelector(".button").innerHTML = "UnHoist";
            document.querySelector(".button").style.backgroundColor = "#58F1FC";
            document.querySelector(".unhoist").style.marginRight = "450px";
            document.querySelector(".button1").style.height = "35px";


        }, timer)
    }
}
function unHoist() {
    // console.log("hai")
    let i = 0;
    var time = setInterval(() => {
        

        // let timer = ((i * 53) / 53) * 29;
        console.log(i, time)
        document.querySelector(".flag").style.marginTop = (i) + "vh";
        document.querySelector(".button").innerHTML = "Stay Safe ❤️";
        document.querySelector(".button1").innerHTML = "Hoist";
        document.querySelector(".button1").style.backgroundColor = "#5DF8FD";
        document.querySelector(".button1").style.fontWeight = "normal";
        document.querySelector(".button1").style.height = "35px";
        document.querySelector(".button1").style.Color = "#5DF8FD";
        document.querySelector(".hoist").style.marginLeft = "350px";
        document.querySelector(".button").style.backgroundColor = "#6dcc37";
        document.querySelector(".button").style.fontWeight = "bold";
        document.querySelector(".unhoist").style.marginLeft = "40px";
        document.querySelector(".button").style.height = "50px";
        // console.log(i, "from plus")
        i = i + 1;
        if (i > 52) {
            console.log("hi")
            clearInterval(time)
        }

    }, 29);

}
    // if (i == 53) {
    // }
    // }




// Set timeout
// function unHoist() {
//     for (let i = 0; i < 53; i++) {
//         var timer = ((i * 53) / 53) * 29;

//         setTimeout(() => {

//             console.log(i)
//             document.querySelector(".flag").style.marginTop = i + "vh";
//             document.querySelector(".button").innerHTML = "Stay Safe ❤️";
//             document.querySelector(".button1").innerHTML = "Hoist";
//             document.querySelector(".button1").style.backgroundColor = "#5DF8FD";
//             document.querySelector(".button1").style.fontWeight = "normal";
//             document.querySelector(".button1").style.height = "35px";

//             document.querySelector(".button1").style.Color = "#5DF8FD";
//             document.querySelector(".hoist").style.marginLeft = "350px";
//             document.querySelector(".button").style.backgroundColor = "#6dcc37";
//             document.querySelector(".button").style.fontWeight = "bold";
//             document.querySelector(".unhoist").style.marginLeft = "40px";
//             document.querySelector(".button").style.height = "50px";

//         }, timer)
//     }
// }