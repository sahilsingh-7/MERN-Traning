function fetchAPI(){
    const url ='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=KSX997YZSFUY2M4ZC8DNDWUBK'
    fetch(url).then((res)=>res.json())
    // .then(console.log)
    .then(renderUI)
}

fetchAPI();
const root = document.getElementById("root");
function renderUI(data){
    const days = data.days;

    console.log(days);

    const row = document.createElement("tr")

    const cell1 = document.createElement("th")
    cell1.innerText = 'DATE';
    row.appendChild(cell1);


    const cell2 = document.createElement("th")
    cell2.innerText = 'MAXIMUM TEMPERATURE';
    row.appendChild(cell2);


    const cell3 = document.createElement("th")
    cell3.innerText = 'MINIMUM TEMPERATURE';
    row.appendChild(cell3);
    root.appendChild(row);

    const row2 = document.createElement("tr");

    const c1 = document.createElement("th")
    c1.innerText = '08/04/2024';
    row2.appendChild(c1);


    const c2 = document.createElement("th")
    c2.innerText = '80 F';
    row2.appendChild(c2);


    const c3 = document.createElement("th")
    c3.innerText = '72 F';
    row2.appendChild(c3);

    root.appendChild(row2);

}


//map filter reduce try yorself