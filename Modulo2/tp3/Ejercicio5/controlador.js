const meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE']

window.addEventListener('load', () => {
    const $txtInputMes = document.querySelector('#txtInputMes');
    const $btnValidar = document.querySelector('#btnValidar');
    const $txtRespuesta = document.querySelector('#txtRespuesta');

    $btnValidar.addEventListener('click', () => {
        $txtRespuesta.textContent = '';
        $txtRespuesta.classList.remove('text-red-500');
        $txtRespuesta.classList.remove('text-green-500');
        
        if ($txtInputMes.value === '' || $txtInputMes.value.length < 5) {
            $txtRespuesta.textContent = 'Por favor, ingrese al menos 5 caracteres.';
            $txtRespuesta.classList.add('text-red-500');
            $txtInputMes.value = '';
            return;
        }
        
        const txtInputMes = $txtInputMes.value.toUpperCase();
        
        if (meses.includes(txtInputMes)) {
            $txtRespuesta.textContent = `${txtInputMes} es un mes válido`;
            $txtRespuesta.classList.add('text-green-500');        
        } else {
            $txtRespuesta.textContent = `${txtInputMes} no es un mes válido`;
            $txtRespuesta.classList.add('text-red-500');
        }

        $txtInputMes.value = '';
    });    
});