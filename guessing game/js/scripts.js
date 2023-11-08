
    // initializing some values
    let totalAttempts = 5;
    let attempts = 0;
    let totalWons = 0;
    let totalLosts = 0;


    // Finding elements 
    const cardBody = document.querySelector(".card-body");
    const form = document.querySelector("form");
    const guessingNumber = form.querySelector("#guessingNumber");
    const button = form.querySelector("#check");
    const resultText = cardBody.querySelector(".resultText");
    const lostwin = document.createElement("p");
    const reminingAttempts = cardBody.querySelector(".reminingAttempts");
    
    form.addEventListener("submit", function(event){
            event.preventDefault();
            attempts++;
    if(attempts === 5){
            guessingNumber.disabled = true;
            button.disabled = true;
    }
    if (attempts < 6) {
            let guessNumber = Number(guessingNumber.value);
            checkResult(guessNumber);
            reminingAttempts.innerHTML = `Remaining attempts: ${totalAttempts - attempts}`; 
    }       
            guessingNumber.value = "";
    });

    function checkResult(guessNumber){
            const randomNumber = getRandomNumber(5);
        if (guessNumber === randomNumber) {
            resultText.innerHTML = `You have won`;
            totalWons++;       
        }else{
            resultText.innerHTML = `You have lost; Random number was: ${randomNumber}`;
            totalLosts++;
        }
            lostwin.innerHTML = `Won: ${totalWons}, Lost: ${totalLosts}`;
            lostwin.classList.add("large-text");
            cardBody.appendChild(lostwin);
    }

    function getRandomNumber(limit){
            return  Math.floor(Math.random() * limit) + 1;
    }