const container = document.querySelector('.container');

const miktar = document.getElementById('amount');
const price = document.getElementById('price');
const movie = document.getElementById('movie');

const customer = document.getElementById('customer');

container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('.reserved') ){
  
       if(!e.target.classList.contains('infos')){
       
        e.target.classList.toggle('selected');
        hesaplama();

       }
    }
});

movie.addEventListener('change',function(e){
    hesaplama();
});

function hesaplama() {
    let selectedSeatAmount = container.querySelectorAll('.seat.selected').length;
    let totalprice = movie.value;

    
    selectedSeatAmount-=1;
    miktar.innerText = selectedSeatAmount;
     
    price.innerText = selectedSeatAmount * totalprice;
};