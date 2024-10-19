window.addEventListener('load', () => {
    const $btnCalcular = document.querySelector('#btnCalcular');
    const $resultadosDiv = document.querySelector('#resultados');

    const calcularRentabilidadBase = (capital) => {
        if (capital >= 500000 && capital < 1500000) return capital * 0.06;
        if (capital >= 1500000 && capital < 5000000) return capital * 0.075;
        if (capital >= 5000000 && capital < 25000000) return capital * 0.085;
        return capital * 0.095;
    };

    const calcularRentabilidadAdicionalCliente = (rentabilidadBase) => {
        const clienteBanco = document.getElementById('clienteBanco').checked;
        return clienteBanco ? rentabilidadBase * 0.007 : 0;
    };

    const calcularRentabilidadAdicionalPlazo = (rentabilidadBase) => {
        const plazoAutorenovable = document.getElementById('plazoAutorenovable').checked;
        return plazoAutorenovable ? rentabilidadBase * 0.009 : 0;
    };

    $btnCalcular.addEventListener('click', () => {
        const capital = parseFloat(document.getElementById('capital').value);

        const rentabilidadBase = calcularRentabilidadBase(capital);
        const rentabilidadAdicionalCliente = calcularRentabilidadAdicionalCliente(rentabilidadBase);
        const rentabilidadAdicionalPlazo = calcularRentabilidadAdicionalPlazo(rentabilidadBase);
        const rentabilidadTotal = rentabilidadBase + rentabilidadAdicionalCliente + rentabilidadAdicionalPlazo;

        $resultadosDiv.classList.add('bg-gray-50', 'p-4', 'rounded', 'shadow');
        $resultadosDiv.innerHTML = `
            <p>Capital Invertido: $${capital}</p>
            <p>Rentabilidad Base: $${rentabilidadBase.toFixed(2)}</p>
            <p>Rentabilidad Adicional (Cliente): $${rentabilidadAdicionalCliente.toFixed(2)}</p>
            <p>Rentabilidad Adicional (Plazo): $${rentabilidadAdicionalPlazo.toFixed(2)}</p>
            <p>Rentabilidad Total: $${rentabilidadTotal.toFixed(2)}</p>
        `;
    });
});