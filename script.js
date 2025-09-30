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

                if (actividad.pdf) {
                    const contentHTML = `
                        <div class="actividad-title-box">
                            <h3>${actividad.titulo}</h3>
                        </div>
                        <div class="actividad-content-wrapper">
                            <div class="actividad-pdf-box">
                                <embed src="${actividad.pdf}" type="application/pdf" class="pdf-viewer" />
                            </div>
                            <div class="actividad-info-box">
                                <div class="actividad-description">
                                    <p>${actividad.descripcion}</p>
                                </div>
                                <div class="actividad-button-box">
                                    <a href="${actividad.pdf}" class="btn full-screen-btn" target="_blank">
                                        <span class="material-symbols-outlined">fullscreen</span>
                                        Ver en pantalla completa
                                    </a>
                                </div>
                            </div>
                        </div>
                    `;
                    card.innerHTML = contentHTML;
                } else {
                    const contentHTML = `
                        <div class="no-entregada-content">
                            <div class="actividad-title-box">
                                <h3>${actividad.titulo}</h3>
                            </div>
                            <div class="no-entregada-message">
                                <span class="material-symbols-outlined">description_off</span>
                                <h4>No entregada</h4>
                                <p>Esta actividad no fue entregada.</p>
                            </div>
                        </div>
                    `;
                    card.innerHTML = contentHTML;
                }

                actividadesContainer.appendChild(card);
            });
        }
    }
});