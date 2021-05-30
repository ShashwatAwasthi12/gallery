import React from 'react'
import { tabs } from './Galdata'
import './gallery.css'

function gallery() {
    return (
        <>
            <div className="gal-title">
                <center><div className="heading">My Gallery</div></center>
                <hr />
            </div>

            {/* this is the body of gallery */}

            <div className=" container galbody">
                <div className="row" >
                    {tabs.map((item, index) => {
                        return (
                            <div class="col col-md-3">
                                <div class="card tab-item">
                                    <img src={item.image} class="card-img-top tab-img tab-image" alt="..." />
                                    <div class="card-body tab-body">
                                        <h5 class="card-title tab-title">{item.title}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default gallery
