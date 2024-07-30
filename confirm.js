document.addEventListener('DOMContentLoaded', function() {
    const json = localStorage.getItem('form');
    if (json) {
        const obj = JSON.parse(json);

        for (const key in obj) {
            const markup = `
            <div class="data-item"> 
                <span>${key}:</span> ${obj[key]}
            </div>
            `;
            document.getElementById('data').innerHTML += markup; 
        }
    } else {
        document.getElementById('data').innerHTML = '<p>Nenhum dado encontrado.</p>';
    }
});