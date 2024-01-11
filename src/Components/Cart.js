import React, { useEffect, useState } from 'react'

const Cart = ({ cartData, decrement, increment, deleteHandler }) => {
  const [Price, setPrice] = useState(0)
  useEffect(() => {
    let totalprice = 0
    cartData.map((item) => {
      totalprice += (item.quantity * item.finalPrice)
    })
    setPrice(totalprice)


  }, [cartData])
  console.log('myprice', Price);

  return (


    <div className='container mt-5' style={{ backgroundColor: "#000000", marginTop: '200px' }}>
      {cartData.length === 0 ?

        <div className='emtycart ' style={{ height: '300px' }}>
          <div style={{ paddingTop: '100px' }}>
            <div className='d-flex justify-content-center align-items-center text-danger'>

              <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
                <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z" />
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
              </svg>
            </div>

            <div className='d-flex justify-content-center align-items-center text-white'>
              <h1>Cart is Emty</h1>
            </div>
          </div>

        </div>

        :

        <div className='cartitems'>
          <div className="container text-left">
            <div className="row align-items-start text-white">
              <div className="col-md-12 text-left ">
                <div className="">


                  {cartData.map((data) => (

                    <div className='container d-flex  justify-content-between align-items-center mt-4 text-left' style={{ backgroundColor: '#16171A' }}>
                      <div className="">
                        <img className='img-fluid ' src={data.heroImage} alt="" style={{ width: '100px' }} />
                      </div>
                      <div>
                        <h4>{data.title}</h4>
                        <div className='d-flex justify-content-between'>
                          <button onClick={() => decrement(data)} className='btn btn-danger btn-sm'>-</button>
                          <h2>{data.quantity}</h2>
                          <button onClick={() => increment(data)} className='btn btn-success btn-sm'>+</button>
                        </div>

                      </div>

                      <div className="">
                        <button onClick={() => deleteHandler(data)} className='btn btn-danger'>Delete</button>
                      </div>

                      <div>
                        <p className='text-left' ><span>&#8377;</span> FinalPrice <span className='mx-5 '>{data.finalPrice}</span></p>
                        <p className='text-left'><span>&#8377;</span> DiscontedPrice <span className='mx-5'>{data.originalPrice}</span></p>


                      </div>
                      <hr className='text-white' />

                      <div>
                      </div>

                    </div>

                  ))}
                </div>
                <h5 className='text-end ' style={{ marginRight: '270px' }}  >Total Price={Price}</h5>


              </div>

              {/* Order Summary Started Here  */}

              {/* <div className="col-md-4">
            
              <div className="card" style={{ backgroundColor: '#151315' }}>

                <div className="card-body" style={{ border: '0.2px solid white' }}>
                  <h5 className="card-title text-white">Order Summary</h5>
                  <div className='d-flex justify-content-between '>
                    <p className="card-text text-white">Original Price</p>
                    <p className="card-text text-white">200</p>
                  </div>
                  <div className='d-flex justify-content-between '>
                    <p className="card-text text-white">Discount Price</p>
                    <p className="card-text text-white">100</p>
                  </div>
                  <div className='d-flex justify-content-between '>
                    <p className="card-text text-success">Delivery</p>
                    <p className="card-text text-success">Free</p>
                  </div>
                  <hr className='text-white' />
                  <div className='d-flex justify-content-between pb-5 '>
                    <h1 className="card-text text-white">Total Price</h1>
                    <h1 className="card-text text-white">{Price}</h1>
                  </div>


                  <a href="#" className="btn btn-danger w-75 mx-5">checkout</a>
                </div>
              </div>
            </div> */}

            </div>

          </div>

        </div>
      }

    </div >
  )
}

{/* <div>


      {
        cartData.map((data) => (
          <div className="row p-5" style={{ backgroundColor: '#151315' }}>

            <div className="col-md-2" style={{ backgroundColor: '#16171A' }}>
              <img className='img-fluid w-75' src={data.heroImage} alt="" />
            </div>
            <div className="col-md-4 " style={{ backgroundColor: '#16171A' }}>
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
              <div className="col-md-2 align-items-center justify-content-center" style={{ backgroundColor: '#16171A' }} >

              <br />
              <button className='btn btn-danger mt-5'>Removeitem</button>


             </div>
            </div>



            ))
               }

            <div className="col-md-4">
              <div className="card" style={{ backgroundColor: '#151315' }}>

                <div className="card-body" style={{ border: '0.2px solid white' }}>
                  <h5 className="card-title text-white">Order Summary</h5>
                  <div className='d-flex justify-content-between '>
                    <p className="card-text text-white">Original Price</p>
                    <p className="card-text text-white">200</p>
                  </div>
                  <div className='d-flex justify-content-between '>
                    <p className="card-text text-white">Discount Price</p>
                    <p className="card-text text-white">100</p>
                  </div>
                  <div className='d-flex justify-content-between '>
                    <p className="card-text text-success">Delivery</p>
                    <p className="card-text text-success">Free</p>
                  </div>
                  <hr className='text-white' />
                  <div className='d-flex justify-content-between pb-5 '>
                    <h1 className="card-text text-white">Delivery</h1>
                    <h1 className="card-text text-white">400</h1>
                  </div>


                  <a href="#" className="btn btn-danger w-75 mx-5">checkout</a>
                </div>
              </div>
            </div>




          </div>
          </div>
           */}







export default Cart