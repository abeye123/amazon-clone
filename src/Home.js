import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
      <div className="home">
          <div className="home__container">
              <img
               className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/GiftGuides/HGG/finald1graphics/HGG_Shark_v2-bg_GW-1x_1500x600._CB418832329_.jpg"
              alt=""
              />
              <div className="home__row">
                   <Product
                   id="3254354342"
                   title="Samsung Galaxy Watch Active 2 (44mm, GPS, Bluetooth) Smart Watch with Advanced Health monitoring, Fitness Tracking , and Long lasting Battery -  Silver  (US Version)"
                   price={43.99}
                   image="https://images-na.ssl-images-amazon.com/images/I/51Ddvy2DxBL._AC_SL1024_.jpg"
                   rating={5}
                   />
                    <Product
                    id="3254354340"
                    title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 64 GB"
                    price={39.99}
                    image= "https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg"
                    rating={4} 
                   />
                  <Product
                  id="3254354340"
                  title="Ring Video Doorbell – Satin Nickel with Ring Chime (2020 release)"
                  price={119.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/51BlxeYdLsL._SL1000_.jpg"
                  rating={4} 
                  />
                   
               </div>
               <div className="home__row">
                   <Product
                   id="3254354349"
                   title="Barbie Dreamhouse Dollhouse with Pool, Slide and Elevator"
                   price={179.99}
                   image="https://images-na.ssl-images-amazon.com/images/I/81faJqzegWL._AC_SL1500_.jpg"
                   rating={5}
                   />
                   <Product
                   id="3254354344"
                   title="Educational Insights Artie 3000 The Coding Robot: Perfect for Homeschool & Classroom - STEM Toy, Coding Robot for Kids 7+"
                   price={41.19}
                   image="https://images-na.ssl-images-amazon.com/images/I/61EaZh9lZcL._AC_SL1480_.jpg"
                   rating={5}
                   />
                   <Product
                    id="3254354344"
                    title="Amazon Smart Plug, works with Alexa – A Certified for Humans Device"
                    price={24.19}
                    image="https://images-na.ssl-images-amazon.com/images/I/51qiNODWNGL._AC_SL1000_.jpg"
                     rating={5}
                  />
               </div>
               <div className="home__row">
                  <Product
                   id="3254354345"
                   title="LG 86NANO90UNA Alexa Built-In NanoCell 90 Series 86 4K Smart UHD NanoCell TV (2020)"
                   price={2646.99}
                   image="https://images-na.ssl-images-amazon.com/images/I/81c8TPBcizL._AC_SL1500_.jpg"
                   rating={5}
                    />
                  <Product
                   id="3254354345"
                  title="Garmin RV 780 GPS Navigator with Traffic"
                  price={148.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/61aKB6pRtdL._AC_SL1000_.jpg"
                  rating={5}
                  />
               </div>
               <div className="home__row">
                  <Product
                  id="3254354345"
                  title="Galaxy Buds True Wireless Earbuds (Wireless Charging Case included), Black – US Version"
                  price={246.99}
                  image="https://images-na.ssl-images-amazon.com/images/I/71yzmKeKMmL._AC_SL1500_.jpg"
                  rating={4}
                  />      
              </div>
          </div>
      </div>
    
    );
}

export default Home;
