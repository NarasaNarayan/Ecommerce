import React, { useState } from 'react'
import productsData from '../Assets/productsData'
import { useNavigate } from 'react-router-dom'

const Specification = ({ getProductData, Data, getCartData, menuitems, filterData, setData }) => {
    const navigate = useNavigate()
    const [filterDataCopy, setfilterDataCopy] = useState([])
    const [filterData1, setfilterData1] = useState(productsData)
    const [sortedPriceProducts, setsortedPriceProducts] = useState([])
    const [range, setrange] = useState(499)
    const [search, setsearch] = useState('')
    const [activeButton, setactiveButton] = useState(null)


  const handleRangeChange = (event) => {
    const selectedRange = event.target.value;
    const [minPrice, maxPrice] = selectedRange.split('-')
    const filteredProducts = [...sortedPriceProducts].filter((product) =>
      [minPrice, maxPrice].every((value, index) =>
        !value || (index === 0 ? product.finalPrice >= Number(value) : product.finalPrice
         <= Number(value))
      )
    );
    console.log(filteredProducts);
    setfilterData1(filteredProducts)
  };




    const SendProductDetails = (item) => {
        getProductData(item)

        console.log('image', Data);
        navigate('/ProductDetails')
    }

    const addHandler = (item) => {
        getCartData(item)
    }

    const featureproduct = (cat) => {
        const result = productsData.filter((item) => {
            return item.tag === cat
        })
        setfilterData1(result)
    }

    const priceRanges = [
        '100-500',
        '500-5000',
      ];


   

    

    const filterBrand=(value)=>{
        const result=productsData.filter(item=>item.brand===value)
        setfilterData1(result)
        setactiveButton(value)

    }

    const catogoryHandler=(value)=>{
   const result=productsData.filter(item=>item.category===value)
   setfilterData1(result)
   setactiveButton(value)
    }



    const toprated = () => {
        const result = productsData.filter((item) => {
            return item.rateCount === 5
        })
        setfilterData1(result)
    }



    const onChange = (e) => {
        setsearch(e.target.value)


    }
    const sortPriceLow = () => {
        const sortedData = [...filterData1].sort((a, b) =>
            a.finalPrice - b.finalPrice
        )
        setfilterData1(sortedData)

    }
    const sortPriceHigh = () => {
        const sortedData = [...filterData1].sort((a, b) =>
            a.finalPrice - b.finalPrice

        )
        setfilterData1(sortedData.reverse())

    }

    const filteredData = (e) => {
        setsearch(e.target.value)
       const result= productsData.filter((item) =>
            item.toLowerCase().includes(search.toLowerCase())

        );
        setfilterData1(result)

    }
    const AllHandler=()=>{
        setfilterData1(productsData)
    }

    const menuitemsBrand = [...new Set(productsData.map(item => item.brand))]


    return (
        <div>

            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col- col-md-2 col-lg-2 text-white mx-3" >
                        <input type="text" value={search} onChange={(e)=>filteredData(e)} />



                        <h4>Sort By</h4>
                        <hr className='text-white' />
                        <div style={{ cursor: 'pointer' }}>
                            <ul>
                                <li><p onClick={() => AllHandler()}>All Products</p></li>
                                <li><p>Latest</p></li>
                                <li> <p onClick={() => featureproduct('featuredproduct')}>Featured Product</p></li>
                                <li> <p onClick={() => sortPriceLow()}>Price(lowest First)</p></li>
                                <li> <p onClick={() => sortPriceHigh()}>Price(High First)</p></li>
                                <li> <p onClick={() => toprated()}>Top Rated</p></li>

                            </ul>
                            <div>
                                <select id="priceRanges" onChange={handleRangeChange}>
                                    <option value="">Select a range</option>
                                    {priceRanges.map((range, index) => (
                                        <option key={index} value={range}>
                                            {range}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>
                        <h4 className='mt-5'>Filted By</h4>

                        <hr className='text-white' />

                        <h4>Brands</h4>
                        <div className='mx-4' style={{ cursor: 'pointer' }}>
                            <ul>
                            {menuitemsBrand.map(item=>(
                                <div key={item.id}>
                                    <p onClick={()=>filterBrand(item)} style={{backgroundColor:activeButton===item? 'red':''}} >{item}</p>
                                </div>
                            ))}

                              
                            </ul>
                        </div>


                        <hr className='text-white' />

                        <h4>Catogories</h4>
                        <div className='mx-4' style={{ cursor: 'pointer' }}>
                            <ul>
                              {menuitems.map((value)=>(
                              <div>
                              <p onClick={()=>catogoryHandler(value)} style={{backgroundColor:activeButton===value? 'red':''}}>{value}</p>
                              </div> ))}
                            </ul>

                        </div>

                        <div>
                            <hr className='text-white' />

                            <h4>Price</h4>
                            <input type="range" name="price" max='10000' min='499' step='100' value={range} onChange={(e) => setrange(e.target.value)} id="" />
                            <h4>{range}</h4>
                        </div>

                    </div>
                    <div className="col-md-9   ">
                        <div class="row">

                            {
                                filterData1.map((item, index) => (

                                    <div className="col-md-4">
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
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Specification