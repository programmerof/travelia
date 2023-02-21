import React from 'react'
import LoaderSVG from '../../images/preloader.svg';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="preloader" data-preloader>
        <div className="preloader-inner">
            <img src={LoaderSVG} alt='Logo' width={50} height={50} />
        </div>
    </div>
  )
}

export default Loader