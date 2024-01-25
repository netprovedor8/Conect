function visita(){
    sessionStorage.visita = 'sim';
}

if (sessionStorage.visita == '' || sessionStorage.visita == null){

    const modal = document.getElementById('modal-container')
        modal.classList.add('mostrar')
    
        modal.addEventListener('click', (e) =>{
            if (e.target.id == 'modal-container' || e.target.id == "fechar" || e.target.id == 'modal-app'){
                modal.classList.remove('mostrar')
            }
    })
}
