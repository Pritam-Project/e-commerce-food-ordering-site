import React from 'react'
import './menu.css'

function slide() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/menu.jpg'} alt="First slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h3><font color = "#0EF3E4 "><em><b>Rost</b></em></font></h3>
                        <p><font size=" 30" color = "#ED0EF3 "><em><b>It's a very testy menu </b></em></font></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/land2.jpg'} alt="Second slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Chinish Menu</h5>
                        <p>Get all kinds of flavour</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src={process.env.PUBLIC_URL + '/images/south.jpg'} alt="Third slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h3><font color = "#0EF3E4 "><em><b>Delicious Breakfast</b></em></font></h3>
                        <p><font size=" 30" color = "#ED0EF3 "><em><b>Different types of menus with different color</b></em></font></p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    );
}

export default slide;