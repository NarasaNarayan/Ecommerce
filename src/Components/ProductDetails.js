import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({ product }) => {
    const navigate=useNavigate();
    console.log('tis is from item', product);
    const [image, setimage] = useState()
  const closeHandler=()=>{
  navigate('/')
  }
    return (
        <div className='p-4' style={{ backgroundColor: '#212529' }}>
            <div className='container p-4' style={{ backgroundColor: '#151315', border: '1px solid white' }}>



                <div class="row">

                
                    <div class="col-md-1">



                        <div>

                            {
                                product.images.map((image) => {
                                    return (
                                        <div>

                                            <img onClick={() => setimage(image)} onMouseOver={() => setimage(image)} className='img-fluid mt-4 ' src={image} alt="" style={{ border: '1px solid white', backgroundColor: '#212529' }} />
                                        </div>

                                    )
                                })

                            }

                        </div>






                    </div>

                    <div class="col-md-6 justify-content-left">


                        <img className='img-fluid w-75 bg-dark' src={image} alt="" style={{ border: '1px solid white' }} />

                    </div>



                    <div class="col-md-4">


                        <div class="card "  style={{ backgroundColor: '#212529' }} >
                        <button onClick={closeHandler} className='btn btn-danger w-25' style={{marginLeft:"260px"}}>close</button>
                            <div class="card-body">

                             <h2 className='text-white'>{product.title}</h2>
                             <p  className='text-white'>{product.info}</p>

                           <div className='d-flex align-items-center justify-content-left'>
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>  
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-warning" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg>                   

                            <p className='text-white'>{product.ratings} <span className='text-white'>Ratings</span></p>
                           </div>
                            <hr  className='text-white'/>
                               <div className='d-flex'>
                               <h6 class="card-title mx-3 text-white">
                                    <span>&#8377;</span>{product.finalPrice}</h6>
                                <s><p class="card-text text-white" style={{fontSize:'10px'}}><span>&#8377;</span>{product.originalPrice}</p></s>
                               </div>
                             <div className='d-flex justify-content-between ' >
                             <p  style={{fontSize:'16px',color:'green'}}>you save<span>&#8377;</span>(209) </p>
                               <button className='btn btn-success'>InStack</button>
                             </div>
                               <hr  className='text-white'/>
                               <p className='text-white'>Offers and Discounts</p>
                              <div className='d-flex'>
                              <button className='mx-2' style={{fontSize:'10px'}}>No Cost Emi On Credit Card</button>
                               <button className='' style={{fontSize:'10px'}}>Pay Later and Avail Casback</button>
                              </div>
                              <hr  className='text-white'/>

                                <a href="#" class="btn btn-danger">AddToCart</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>

    )

}

export default ProductDetails