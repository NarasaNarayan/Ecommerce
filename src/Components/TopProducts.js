import React from 'react'
import Buttons from './Buttons'
import { Link, useNavigate } from 'react-router-dom'
import Courosel from './Courosel'
import ScrollingCarousel from './ScrollingCarousel'


const TopProducts = ({ getProductData,Data,getCartData,menuitems,filterData,setData }) => {
  console.log('topproductsdata',Data);
const navigate=useNavigate()
  const SendProductDetails = (item) => {
    getProductData(item)

    console.log('image',Data);
    navigate('/ProductDetails')
  }

  const addHandler=(item)=>{
    getCartData(item)
  }

  return (
    <div>

{/* Carousel starts here */}

    
      <Courosel/>
{/* Carousel ends  here */}


      {/* ProductCarousel sarts here  */}
   <ScrollingCarousel getProductData={getProductData} Data={Data} />
      {/* ProductCarousel ends here  */}



      {/* top products starts here */}


      <h1 className='text-center text-white '>Top Products</h1>

      <Buttons menuitems={menuitems} filterData={filterData}setData={setData}  />

      <div className="container-fluid pt-2 d-flex" style={{ backgroundColor: ' rgb(20,18,20)' }}>
        <div className="row " >


          {
            Data.map((item, index) => (

              <div className="col-md-3 mb-4  ">
                <div key={index} className="card  " style={{ border: "0.1px solid rgb(114, 112, 112)", backgroundColor: ' #141414' }}>
                  <img className='img-fluid  mx-auto my-auto '  onClick={()=>SendProductDetails(item)} src={item.heroImage} alt="..." style={{
                    width: '150px', height: '150px', backgroundColor: "#161819"
                  }} />


                  <div className="card-body">
                    <h5 className='text-white'>{item.title}</h5>
                    <p className='text-white '    > {item.info.substring(0,20)}...</p>

                    <hr className='text-white'/>

                    <h4 className='text-white'><span>&#8377;</span>{item.finalPrice} <s className='mx-2 ' style={{ fontSize: '13px', color: 'rgb(170, 165, 165)' }}> <span>&#8377;</span>{item.originalPrice}</s> </h4>
                    <button onClick={()=>addHandler(item)} className='btn btn-danger w-100'>AddtoCart</button>

                   
                  </div>
                </div>
              </div>

            )

            ) 
          }
          
          <div className="card d-flex justify-content-center align-items-center mx-auto mx-auto " style={{width:'22%',backgroundColor: ' rgb(20,18,20)',border: "0.1px solid rgb(114, 112, 112)"}} >
  <div className="card-body justify-content-center align-items-center mx-auto mx-auto p-5">
   
   <Link to="/Specification" className="btn btn-danger mt-5 ">Browse All products</Link>
  </div>
</div>
          

        </div>
      </div>


    </div>
  )
}

export default TopProducts