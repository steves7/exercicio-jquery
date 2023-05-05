$(document).ready(function(){


    $('.adiciona').on('click', function(){
        const nomeTarefa = $('#nome-tarefa').val();
        const li = document.createElement('li');
        li.innerHTML = `${nomeTarefa}`;
        $('ul').append(li);
        $('#nome-tarefa').val('');
        $(li).click(function(){
            $(li).toggleClass('pronto')
        })
    })
})