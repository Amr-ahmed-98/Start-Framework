import { useState } from 'react';
import img1 from '../../assets/images/poert1.png';
import img2 from '../../assets/images/port2.png';
import img3 from '../../assets/images/port3.png';
import Offcanvas from '../Offcanvas/Offcanvas';
const Card = () => {
  const imgArr = [img1, img2, img3];
  const [isClickedIndex, setIsClickedIndex] = useState(null);
  const [imgSrc,setImgSrc] = useState(null);

  const imgSrcc = (e)=>{
    setImgSrc(e.target.parentElement.closest('.group').querySelector('img').getAttribute('src'));
  }
  return (
    <>
      {imgArr.map((img, i) => {
        return (
          <>
            <div key={i} className='relative group transition-opacity'>
              <img
                src={img}
                className='w-full rounded-lg cursor-pointer'
                alt='illustrateion'
              />
              <div
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-torquaze-color-low-opacity flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:transition-opacity cursor-pointer'
                onClick={(e) => {
                    setIsClickedIndex(i);
                    imgSrcc(e);
                }}
              >
                <i className='fa-solid fa-plus text-6xl text-white'></i>
              </div>
            </div>
            { isClickedIndex === i && <Offcanvas imageSrc={imgSrc} onClose={() => setIsClickedIndex(null)} />}
          </>
        );
      })}
    </>
  );
};

export default Card;
