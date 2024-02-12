export default function ExColumns(){

  const petrolPrice= 600;
  const movieT=300;
  const food=120;
  const locationOfExpence="lucknow"
     return <div class="container text-center">
  <div class="row">
    <div class="col">
      PETROL
    </div>
    <div class="col">
      {petrolPrice}
    </div>
  </div>

  <div class="row">
    <div class="col">
      Movie
    </div>
    <div class="col">
      {movieT}
    </div>
  </div>


  <div class="row">
    <div class="col">
      Food
    </div>
    <div class="col">
      {food}
    </div>
  </div>



  <div class="row">
    <div class="col">
      LOCATION OF EXPENCE
    </div>
    <div class="col">
      {locationOfExpence}
    </div>
  </div>




</div>










}