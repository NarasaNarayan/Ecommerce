import React, { } from 'react'
import Buttons from './Buttons'
import { Link, useNavigate } from 'react-router-dom'
import Courosel from './Courosel'
import Multicorousel from './Multicorousel'


const TopProducts = ({ getProductData, Data, getCartData, menuitems, filterData, setData, activeButton }) => {
  console.log('topproductsdata', Data);
  const navigate = useNavigate()
  const SendProductDetails = (item) => {
    getProductData(item)

    console.log('image', Data);
    navigate('/ProductDetails')
  }



  const addHandler = (item) => {
    getCartData(item)
  }

  return (
    <div>

      {/* Carousel starts here */}


      <Courosel />
      {/* Carousel ends  here */}


      {/* ProductCarousel sarts here  */}
      <Multicorousel getProductData={getProductData} Data={Data} />
      {/* ProductCarousel ends here  */}



      {/* top products starts here */}


      <h1 className='text-center text-white '>Top Products</h1>

      <Buttons menuitems={menuitems} filterData={filterData} setData={setData} activeButton={activeButton} />

      <div className="container-fluid pt-2 d-flex" style={{ backgroundColor: ' rgb(20,18,20)' }}>
        <div className="row " >


          {
            Data.map((item, index) => (

              <div className=" col-6 col-sm-6 col-md-3 mb-4  ">
                <div key={index} className="card  " style={{ border: "0.1px solid rgb(114, 112, 112)", backgroundColor: ' #141414' }}>
                  <img className='img-fluid  mx-auto my-auto ' onClick={() => SendProductDetails(item)} src={item.heroImage} alt="..." style={{
                    width: '150px', height: '150px', backgroundColor: "#161819"
                  }} />


                  <div className="card-body">
                    <h5 className='text-white'>{item.title}</h5>
                    <p className='text-white '    > {item.info.substring(0, 20)}...</p>

                    <hr className='text-white' />

                    <h4 className='text-white'><span>&#8377;</span>{item.finalPrice} <s className='mx-2 ' style={{ fontSize: '13px', color: 'rgb(170, 165, 165)' }}> <span>&#8377;</span>{item.originalPrice}</s> </h4>
                    <button onClick={() => addHandler(item)} className='btn btn-danger w-100'>AddtoCart</button>


                  </div>
                </div>
              </div>

            )

            )
          }

          {/* <div className="card  w-25 " style={{ backgroundColor: ' rgb(20,18,20)', border: "0.1px solid rgb(114, 112, 112)" }} >
            <div className="card-body mx-auto my-auto  ">

              <Link to="/Specification" className="btn btn-danger ">Browse All products</Link>
            </div>
          </div> */}


        </div>
      </div>

    {/* browse all products starts here  */}
   <div className='container-fluid px-3' >
    <div class="row ">
      <div class="col-6 col-sm-6 col-md-3 col-lg-3 ">
      <div class="card border" style={{ backgroundColor: ' rgb(20,18,20)' }} >
  <div class="card-body">
    <Link to="/Specification" class="btn btn-danger">Browse All Products</Link>
  </div>
   
</div>
      </div>
    </div>
   </div>


   


    {/* main div ends here  */}
  </div>
  )
}

export default TopProducts