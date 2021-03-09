//This part is done by suman naskar
import React from 'react'
import './menu.css'

function search() {
    return (
        <section className="search-bar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <form>
                            <div className="p-1 bg-light shadow-sm">
                                <div className="input-group">
                                    <input className="form-control border-0 bg-light" type="search" placeholder="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-link" type="submit">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default search;