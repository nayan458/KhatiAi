import React from "react";
import '../index.css'
import KhetAI from "../media/logo/KhetiAI";

function HomePage(){
    return(
        <>
            <div className="home-main">
                <h1 className="home-title">empowering farmers with teechnology for a better tomorrow</h1>
            </div>
            <div className="home-main">
                
                <h1 className="home-title">get the true value of your hardwork.</h1>
            </div>
            <div className="home-main">
                <h1 className="home-title">buy all your farm supplies at affordable price.</h1>
            </div>
            <div className="home-main">
                <h1 className="home-title">connnect with farmers from all over the </h1>
            </div>
            <div className="home-main">
                <h1 className="home-title">discover your soil's secrets and harvest the beauty of every season.</h1>
            </div>
            <div className="home-main">
                <h1 className="home-title">uncover all government schemes at your fingertips.</h1>
            </div>
            <div className="home-main">
                <h1 className="home-title">ask your ai friend "krishak" to get your doubt resolve.</h1>
            </div>

            <footer className="footer">
                <KhetAI />
            </footer>
        </>
    )
}


export default HomePage;