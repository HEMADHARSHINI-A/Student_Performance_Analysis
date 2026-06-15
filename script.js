new Chart(document.getElementById("ethnicityChart"),{

type:"bar",

data:{
labels:["A","B","C","D","E"],
datasets:[{
label:"Average Score",
data:[62,64,61,60,59]
}]
}

});

new Chart(document.getElementById("genderChart"),{

type:"doughnut",

data:{
labels:["Male","Female"],
datasets:[{
data:[50,50]
}]
}

});

new Chart(document.getElementById("educationChart"),{

type:"bar",

data:{
labels:["High School","Bachelor","Master"],
datasets:[{
label:"Score",
data:[58,64,70]
}]
}

});

new Chart(document.getElementById("prepChart"),{

type:"pie",

data:{
labels:["Completed","Not Completed"],
datasets:[{
data:[55,45]
}]
}

});
backgroundColor:[
"#7b2cbf",
"#9d4edd",
"#c77dff",
"#ff4d9d",
"#ff85c1"
]
