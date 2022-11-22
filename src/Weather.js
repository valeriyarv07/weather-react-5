import React from 'react';
import "./Weather.css"

export default function Weather (){
    return (
        <div className="whole-page-wrapper">
            <div className="card container-whole-page">
                <div className="card-body">
                    <form id="search-form">
                        <div className="row input-group">
                            <div className="col-sm-auto">
                                <input>
                                </input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}