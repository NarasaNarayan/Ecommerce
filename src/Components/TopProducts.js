import React from 'react'
import Buttons from './Buttons'
import { useNavigate } from 'react-router-dom'
import ProductCarousel from './ProductCarousel'

const TopProducts = ({ getProductData,Data,getCartData }) => {
const navigate=useNavigate()
  const SendProductDetails = (item) => {
    getProductData(item)
    navigate('/ProductDetails')
  }

  const addHandler=(item)=>{
    getCartData(item)
  }

  return (
    <div>

      {/* Carousel starts here */}

      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active bg-dark">
          <div>
              <div className="row">
              <div className="col mt-5 my-5 text-left " style={{ marginLeft: '15rem' }}>
                  <p className='text-white' >boat Airdropes 131 WX-j8697</p>

                  <h4 className='text-white'>Featherweight For <br />
                    Comport All-Day
                  </h4>
                  <p className='text-white'> @1099 <s>@2099</s></p>
                  <button className='btn btn-danger btn-sm'>Shop Now</button>
                </div>
                <div className="col">
                  <img classNameName='img-fluid' src={require('../Assets/images/products/boat410-2.png')} alt='' style={{ width: '300px', height: '300px' }} />
                </div>
              </div>
            
            </div>

          </div>
          <div class="carousel-item">
          <div>
              <div className="row bg-dark">
                <div className="col mt-5  text-left my-5" style={{ marginLeft: '15rem' }}>
                  <p className='text-white' >boat Airdropes 131 WX-j8697</p>

                  <h4 className='text-white'>Featherweight For <br />
                    Comport All-Day
                  </h4>
                  <p className='text-white'> @1099 <s>@2099</s></p>
                  <button className='btn btn-danger btn-sm'>Shop Now</button>
                </div>
                <div className="col">
                  <img classNameName='img-fluid' src={require('../Assets/images/products/boat131-3.png')} alt='' style={{ width: '300px', height: '300px' }} />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
          <div>
              <div className="row bg-dark">
                <div className="col mt-5  text-left my-5" style={{ marginLeft: '15rem' }}>
                  <p className='text-white' >Sony WX-j8697</p>

                  <h4 className='text-white'>Give Your Favourite <br />
                    Music A Boost.
                  </h4>
                  <p className='text-white'> @19,990</p>
                  <button className='btn btn-danger btn-sm'>Shop Now</button>
                </div>
                <div className="col">
                  <img classNameName='img-fluid' src={require('../Assets/images/products/sonyXb910n-1.png')} alt='' style={{ width: '300px', height: '300px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>



      {/* Carousel ends  here */}


      {/* ProductCarousel sarts here  */}


      {/* ProductCarousel ends here  */}


   <ProductCarousel/>

      {/* top products starts here */}


      <h1 className='text-center '>Top Products</h1>

      <Buttons />

      <div class="container pt-2" style={{ backgroundColor: ' rgb(20,18,20)' }}>
        <div class="row " >


          {
            Data.map((item, index) => (

              <div className="col-md-3 mb-4  ">
                <div key={index} className="card  " style={{ border: "0.1px solid rgb(114, 112, 112)", backgroundColor: ' #141414' }}>
                  <img className='img-fluid  mx-auto my-auto '  onClick={()=>SendProductDetails(item)} src={item.heroImage} alt="..." style={{
                    width: '150px', height: '150px', backgroundColor: "#161819"
                  }} />


                  <div className="card-body">
                    <h5 className='text-white'>{item.title}</h5>
                    <p className='text-white '  minlength="10"> {item.info}</p>

                    <hr className='text-white'/>

                    <h4 className='text-white'><span>&#8377;</span>{item.finalPrice} <s className='mx-2 ' style={{ fontSize: '13px', color: 'rgb(170, 165, 165)' }}> <span>&#8377;</span>{item.originalPrice}</s> </h4>
                    <button onClick={()=>addHandler(item)} className='btn btn-danger w-100'>AddtoCart</button>

                   
                  </div>
                </div>
              </div>

            )

            )
          }


        </div>
      </div>


    </div>
  )
}

export default TopProducts