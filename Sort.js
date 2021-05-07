function enviaNumeroBubble(){
    event.preventDefault();
    $.ajax({
        type:'POST',
        url:'bubbleSort.php',
        data:{
            numero: $('#numero').val()
        },
        datatype:'text',
        success:function(html){
            
        }, 
        error:function(){

        }
    })
}