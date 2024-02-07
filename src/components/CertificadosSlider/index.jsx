import './style.css';
import cardData from './cardData.jsx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CertificadosSlider(props){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2.3,
          partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        }
    };

    const certifData = cardData.filter(item => item.type == props.type).map(item =>(
        <div>
            <img src={item.image} alt="" className='certifCarousel'/>
        </div>
    ))

    return(
        <Carousel 
            responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
            itemClass="carousel-item-padding-40-px"
        >   
            {certifData}   
        </Carousel>         
    )
}

export default CertificadosSlider;