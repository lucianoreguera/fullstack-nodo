window.addEventListener('load', () => {
    const $importeBaseInput = document.querySelector('#importeBase');
    const $tipoArticuloSelect = document.querySelector('#tipoArticulo');
    const $btnCalcular = document.querySelector('#btnCalcular');
    const $btnReset = document.querySelector('#btnReset');
    const $resultadosDiv = document.querySelector('#resultados');

    const calcularIVA = (importeBase, tipoArticulo) => {
        switch (tipoArticulo) {
            case 'tipo1':
                return importeBase * 0.21;
            case 'tipo2':
                return importeBase * 0.27;
            case 'tipo3':
                return importeBase * 0.105;
            case 'tipo4':
                return importeBase * 0.05;
            case 'tipo5':
                return 0;
            default:
                throw new Error('Tipo no válido');
        }
    };
     

    $btnCalcular.addEventListener('click', () => {
        const importeBase = parseFloat($importeBaseInput.value);
        const tipoArticulo = $tipoArticuloSelect.value;

        const importeIVA = calcularIVA(importeBase, tipoArticulo);

        const importeTotal = importeBase + importeIVA;        

        $resultadosDiv.classList.add('bg-blue-100', 'text-gray-800', 'p-4', 'rounded', 'shadow', 'border', 'border-gray-200', 'space-y-2');
        $resultadosDiv.innerHTML = `
            <p>Importe Base: $${importeBase.toFixed(2)}</p>
            <p>Importe IVA: $${importeIVA.toFixed(2)}</p>
            <p>Importe Total: $${importeTotal.toFixed(2)}</p>
        `;
    });

    $btnReset.addEventListener('click', () => {
        $importeBaseInput.value = '';
        $resultadosDiv.classList.remove('bg-blue-100', 'text-gray-800', 'p-4', 'rounded', 'shadow', 'border', 'border-gray-200', 'space-y-2');
        $resultadosDiv.innerHTML = '';
    })
});