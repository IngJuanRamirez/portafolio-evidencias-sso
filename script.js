document.addEventListener('DOMContentLoaded', () => {
    const actividadesContainer = document.getElementById('actividades-container');
    
    if (actividadesContainer) {
        const path = window.location.pathname;
        let moduloActual;

        if (path.includes('modulo-1.html')) {
            moduloActual = modulos.modulo1;
        } else if (path.includes('modulo-2.html')) {
            moduloActual = modulos.modulo2;
        } else if (path.includes('modulo-3.html')) {
            moduloActual = modulos.modulo3;
        }

        if (moduloActual && moduloActual.length > 0) {
            actividadesContainer.innerHTML = '';
            moduloActual.forEach(actividad => {
                const card = document.createElement('div');
                card.classList.add('actividad-card');

                let contentHTML = `
                    <h3>${actividad.titulo}</h3>
                    <p>${actividad.descripcion}</p>
                `;

                // Solo si la actividad tiene un PDF, agrega el visor
                if (actividad.pdf) {
                    contentHTML += `<embed src="${actividad.pdf}" type="application/pdf" class="pdf-viewer" />`;
                } else {
                    // Muestra un mensaje si la actividad no fue entregada
                    contentHTML += `
                        <div class="no-actividades-card">
                            <span class="material-symbols-outlined">description_off</span>
                            <h4>No entregada</h4>
                            <p>Esta actividad no fue entregada.</p>
                        </div>
                    `;
                }

                card.innerHTML = contentHTML;
                actividadesContainer.appendChild(card);
            });
        }
    }
});