import React from 'react'

const Cart = ({ cartData }) => {
  console.log('cartData', cartData);
  return (
    <div>

    <div>


      {
        cartData.map((data) => (
          <div class="row p-5" style={{ backgroundColor: '#151315' }}>

            <div class="col-md-2" style={{ backgroundColor: '#16171A' }}>
              <img className='img-fluid w-75' src={data.heroImage} alt="" />
            </div>
            <div class="col-md-4 " style={{ backgroundColor: '#16171A' }}>
              <h4 className='text-white'>{data.info}</h4>
              <p className='text-white'><span>&#8377;</span>{data.finalPrice}</p>
              <p className='text-white'><span>&#8377;</span>{data.originalPrice}</p>
              <div className='d-flex'>
                <button className='btn btn-success mx-4'>+</button>
                <h1 className='text-white'>{data.quantity}</h1>
                <button className='btn btn-danger mx-4'>-</button>
              </div>


              <hr className='text-white' />



             </div>
              <div class="col-md-2 align-items-center justify-content-center" style={{ backgroundColor: '#16171A' }} >

              <br />
              <button className='btn btn-danger mt-5'>Removeitem</button>


             </div>
            </div>



            ))
               }

            <div class="col-md-4">
              <div class="card" style={{ backgroundColor: '#151315' }}>

                <div class="card-body" style={{ border: '0.2px solid white' }}>
                  <h5 class="card-title text-white">Order Summary</h5>
                  <div className='d-flex justify-content-between '>
                    <p class="card-text text-white">Original Price</p>
                    <p class="card-text text-white">200</p>
                  </div>
                  <div className='d-flex justify-content-between '>
                    <p class="card-text text-white">Discount Price</p>
                    <p class="card-text text-white">100</p>
                  </div>
                  <div className='d-flex justify-content-between '>
                    <p class="card-text text-success">Delivery</p>
                    <p class="card-text text-success">Free</p>
                  </div>
                  <hr className='text-white' />
                  <div className='d-flex justify-content-between pb-5 '>
                    <h1 class="card-text text-white">Delivery</h1>
                    <h1 class="card-text text-white">400</h1>
                  </div>


                  <a href="#" class="btn btn-danger w-75 mx-5">checkout</a>
                </div>
              </div>
            </div>




          </div>
          </div>
          


        )
}

      export default Cart