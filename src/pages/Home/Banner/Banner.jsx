import slider1 from '../../../assets/images/banner/1.jpg';
import slider2 from '../../../assets/images/banner/2.jpg';
import slider3 from '../../../assets/images/banner/3.jpg';
import slider4 from '../../../assets/images/banner/4.jpg';
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[500px] my-5 rounded-xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider1} className="w-full" />
                    <div className='absolute h-full  flex items-center text-white top-0 left-0 
                    bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                        <div className='pl-12 space-y-5 '>
                            <h2 className='text-5xl font-bold '>Affordable <br /> Price For Car <br />Servicing</h2>
                            <p className='w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                            <div>
                                <button className="btn btn-secondary">Discover More</button>
                                <button className="btn btn-outline btn-warning ml-4">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform  left-5 right-5 bottom-2 gap-2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider2} className="w-full" />
                    <div className='absolute h-full  flex items-center text-white top-0 left-0 
                    bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                        <div className='pl-12 space-y-5 '>
                            <h2 className='text-5xl font-bold '>Affordable <br /> Price For Car <br />Servicing</h2>
                        <p className='w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-warning ml-4">Latest Project</button>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform  left-5 right-5 bottom-2 gap-2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider3} className="w-full" />
                     <div className='absolute h-full  flex items-center text-white top-0 left-0 
                    bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                        <div className='pl-12 space-y-5 '>
                            <h2 className='text-5xl font-bold '>Affordable <br /> Price For Car <br />Servicing</h2>
                        <p className='w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-warning ml-4">Latest Project</button>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform  left-5 right-5 bottom-2 gap-2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slider4} className="w-full" />
                     <div className='absolute h-full  flex items-center text-white top-0 left-0 
                    bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                        <div className='pl-12 space-y-5 '>
                            <h2 className='text-5xl font-bold '>Affordable <br /> Price For Car <br />Servicing</h2>
                        <p className='w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-warning ml-4">Latest Project</button>
                        </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform  left-5 right-5 bottom-2 gap-2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;