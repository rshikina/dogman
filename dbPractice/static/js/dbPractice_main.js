
//armedforcesvacationbook

const btn = document.querySelector(".btn");
const problem = document.querySelector("#mathProblem");
let factor1, factor2;
let counter = 0;

function assignRandomInt(){
    const temp1 = factor1;
    const temp2 = factor2;
    factor1 = Math.floor(Math.random() * (11) + 2); //range 2 to 12
    factor2 = Math.floor(Math.random() * (11) + 2); //range 2 to 12
    problem.textContent = factor1 + " * " + factor2 
    + " = " + (factor1 * factor2);
}

btn.addEventListener('click', () => {
    counter++;
    problem.textContent = counter%2;

    // runTest();

    assignRandomInt();

    // if (counter%2 == 1) {
    //     // const saveThis = problem.textContent;
    //     sayHello();
    // }
    // else {
    //     sayGoodbye();
    // }
})

$(document).ready(
    function () {
       assignRandomInt();
       var csrf = $("input[name=csrfmiddlewaretoken]").val();

        

    $(".second-button").click(function(){
        counter++;
        let flipSwitch;
        assignRandomInt();

        if (counter%2 == 1) {
            // const saveThis = problem.textContent;
            // sayHello();
            flipSwitch = "True";
        }
        else {
            flipSwitch = "False";
            // sayGoodbye();
        }

        // $("#mathProblem").text()
        $.ajax({
            url: '',
            type: 'post',
            data: {
                text: "me",
                switch: flipSwitch,
                getProblem: problem.textContent,

                csrfmiddlewaretoken: csrf
            },
            success: function(response){
                $("#right").append('<li>' + response.count +
                ": " + response.getProblem + '</li>')
                $("#sayHello").text(response.attempts)
            },
        })
    });
});
