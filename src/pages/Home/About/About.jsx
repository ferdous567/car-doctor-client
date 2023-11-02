import person from '../../../assets/images/about_us/person.jpg'; 
import parts from '../../../assets/images/about_us/parts.jpg';


const About = () => {
    return (
        <div className='flex justify-between  my-20 w-full'>
            <div className='relative w-1/2'>
                <img className='h-[350px] w-3/4  rounded' src={person} alt="" />
                <img className='h-[250px] w-[250px] absolute -bottom-8 left-64 border-8 rounded border-white' src={parts} alt="" />
            </div>
            <div className='w-1/2 space-y-5'>
                <h2 className='text-red-600 font-bold text-xl'>About Us</h2>
                <h1 className='text-4xl font-extrabold '>We are qualified <br /> & of experience <br /> in this field</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className="btn btn-warning font-bold">Get More Info</button>
            </div>
        </div>
    );
};

export default About;