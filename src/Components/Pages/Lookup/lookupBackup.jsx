import React from 'react'
import "./lookup.css";
import { Link } from 'react-router-dom';
import "../../Responsive/Responsive.css";
const lookup = () => {
    return (
        <div className='d-flex'>
            <div className='lookup'>
                <div className='lookup-header'>
                    <Link to="/">
                        <img src="/img/left arrow.svg" alt="" srcSet="" />
                    </Link>
                    <h5>Order Look up</h5>
                </div>
                <div className='order'>
                    <h2>Order Look Up</h2>
                    <div>
                        <p>Order code can be found in my orders page. after placing an order.</p>
                        <p>Order Code</p>
                        <input type="text" placeholder='---- ----' />
                        <button>Order Look Up</button>
                    </div>
                </div>
                <div className='next-btn-div'>
                    <button className="next-btn" type="button" >
                        Next
                    </button>
                </div>
            </div>
            <div className="image-section">
                <img className='image-section-img' src="./img/Rectangle 3.png" alt="" />
                <div className="circle-box">
                    <div>
                        <a href="/">
                            <img src="/img/icon/Menu.svg" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <img src="/img/icon/Cart.svg" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <img src="/img/icon/Search.svg" alt="" />
                        </a>
                    </div>
                    <div>
                        <h6>P</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default lookup
