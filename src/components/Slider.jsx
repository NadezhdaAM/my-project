import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'

const Slider = () => {
  return (
    <div>
    <Carousel >
    <Carousel.Item interval={1000}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./img/first_slide.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3></h3>
        <p></p>
           <Link exact to={'/form'} >
            <Button class="d-grid gap-2 col-6 mx-auto" variant="dark">
             Обратная связь 
            </Button>
           </Link>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img width={'100%'} height={800}
        className="d-block w-100"
        src="./img/second_slide.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  width={'100%'}height={800}
        className="d-block w-100"
        src="./img/third_slide.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Slider