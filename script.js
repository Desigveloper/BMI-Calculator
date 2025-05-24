function displayTime() {
    document.getElementById("currentTime").textContent = new Date().toUTCString();
}

displayTime();

setInterval(displayTime, 1000);

function calcBMI() {
    let width = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    
    let bmi = width / ((height / 100) ** 2);
    bmi = Math.round(bmi * 100) / 100; // Round to 2 decimal places
    
    return bmi;
}

function displayFootnote() {
    let categories = ["Underweight", "Normal", "Overweight", "Obese"];
    let category = document.getElementById("category");
    let interpretation = document.getElementById("interpretation");
    let footnote = document.getElementById("footnote");
    let warning = document.getElementById("warning");
    let bmi = calcBMI();

    if (isNaN(bmi) || bmi === 0) {
        footnote.style.display = "none";
        warning.style.display = "none";
        interpretation.textContent = "";
        category.textContent = "";
        return;
    }
    
    if (bmi < 18.5){
        category.textContent = categories[0];
        interpretation.textContent = category.textContent + ": You are underweight. Consider consulting a healthcare provider.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category.textContent = categories[1];
        interpretation.textContent = category.textContent + ": You have a normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        category.textContent = categories[2];
        interpretation.textContent = category.textContent + ": You are overweight. Consider a balanced diet and exercise.";
    } else if (bmi >= 30) {
        category.textContent = categories[3];
        interpretation.textContent = category.textContent + ": You are obese. Consult a healthcare provider for advice.";
    }
        
    footnote.style.display = "block";
    warning.style.display = "block";
}
    
    document.getElementById("calcBtn").addEventListener("click", function() {
        document.getElementById("result").textContent = calcBMI();
        displayFootnote();
    });