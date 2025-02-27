import React from 'react'
import foodrecipe from '../assets/burger-7419420_1280.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItems from '../components/RecipeItems'

export default function Home() {
  return (
    <>
    
      <section className="home">
        <div>
          <h1>Food Recipe</h1>
          <h5>
            It is a long established fact that a reader will be distracted by 
            the readable content of a page when looking at its layout. The point 
            of using Lorem Ipsum is that it has a more-or-less normal distribution 
            of letters, as opposed to using 'Content here, content here', making 
            it look like readable English.
          </h5>
          <button>Share your recipe</button>
        </div>
        <div className="right">
          <img src={foodrecipe} width="320px" height="300px" alt="Food Recipe" />
        </div>
      </section>
      
      <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#d4f6e8" fillOpacity="3" 
            d="M0,128L34.3,154.7C68.6,181,137,235,206,261.3C274.3,288,343,288,411,277.3C480,267,549,245,617,208C685.7,171,754,117,823,96C891.4,75,960,85,1029,122.7C1097.1,160,1166,224,1234,245.3C1302.9,267,1371,245,1406,234.7L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
          </path>
        </svg>
      </div>

      <div className='recipe'>
        <RecipeItems/>

      </div>

    
    </>
  )
}
