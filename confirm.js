const json = localStorage.getItem('form');
const obj = JSON.parse(json);

for (key in obj) {
    const markup = `
    <div> 
        <span>${key}: ${obj[key]}</span>
    </div>
    `;
    document.getElementById('data').inner += markup; 
}