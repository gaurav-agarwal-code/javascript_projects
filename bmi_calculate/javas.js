document.getElementById("check").addEventListener('click', function(){
    let height = document.querySelector("#height").value
    let weight = document.querySelector("#weight").value
    console.log(height,weight);
    
    height = height * 3.048;
    let bmi = weight / (height * height);

    document.getElementById("output").innerHTML += bmi;
    
})

