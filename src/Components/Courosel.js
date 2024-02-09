import React from 'react'
import { useNavigate } from 'react-router-dom'

const Courosel = () => {
  const navigate=useNavigate()
  const shopHandler=()=>{
    navigate('/Specification')

  }
  return (
    <div className=''>
      <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel" >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            {/* 1st row  */}

          <div className="carousel-item active  align-items-right bg-dark">
            <div>
              <div className="row">
              <div className="col mt-5 my-5 text-left " style={{ marginLeft: '10rem' }}>
                  <p className='text-white' >boat Airdropes 131 WX-j8697</p>

                  <h4 className='text-white'>Featherweight For <br />
                    Comport All-Day
                  </h4>
                  <p className='text-white'> @1099 <s>@2099</s></p>
                  <button className='btn btn-danger btn-sm' onClick={shopHandler}>Shop Now</button>
                </div>
                <div className="col">
                  <img classNameName='img-fluid' src={require('../Assets/images/products/boat410-2.png')} alt='' style={{ width: '300px', height: '300px',marginLeft:'50px' }} />
                </div>
              </div>
            </div>

          </div>
            {/* 2st row  */}

          <div className="carousel-item  bg-dark">
            <div>
              <div className="row ">
                <div className="col   text-left my-5" style={{ marginLeft: '10rem' }}>
                  <p className='text-white' >Sony WX-j8697</p>

                  <h4 className='text-white'>Give Your Favourite <br />
                    Music A Boost.
                  </h4>
                  <p className='text-white'> @19,990</p>
                  <button className='btn btn-danger btn-sm'onClick={shopHandler}>Shop Now</button>
                </div>
                <div className="col ">
                  <img classNameName='img-fluid' src={require('../Assets/images/products/sonyXb910n-1.png')} alt='' style={{ width: '300px', height: '300px',marginLeft:'50px' }} />
                </div>
              </div>
            </div>
          </div>

            {/* 3st row  */}

          <div className="carousel-item  bg-dark">
            <div>
              <div className="row">
                <div className="col mt-5  text-left my-5" style={{ marginLeft: '10rem' }}>
                  <p className='text-white' >boat Airdropes 131 WX-j8697</p>

                  <h4 className='text-white'>Featherweight For <br />
                    Comport All-Day
                  </h4>
                  <p className='text-white'> @1099 <s>@2099</s></p>
                  <button className='btn btn-danger btn-sm' onClick={shopHandler}>Shop Now</button>
                </div>
                <div className="col">
                  <img classNameName='img-fluid' src={require('../Assets/images/products/boat131-3.png')} alt='' style={{ width: '300px', height: '300px',marginLeft:'50px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Courosel