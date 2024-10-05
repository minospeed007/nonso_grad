import './home.css';
import nonso from '../../assests/nonso_grad_pic.jpg'

const Home = () => {


    return (
        <>
            <div className='home-container'>
                <img src={nonso} alt='img' className='home-profile-pic' />
                <div className='home-text-div'>
                    <p>
                        I am Nonso Okeke, a prospective doctoral student with a strong passion for advancing the field of cybersecurity through innovative research. I completed my undergraduate degree in computer science from the School of Science and Technology at Dominion University College, Accra, Ghana. My undergraduate dissertation, under the supervision of Professor Jessey Annang, focused on Cybersecurity, where I investigated various forms of cybercrime, methods of cybercrime, the cost of cybercrime on SMEs in Nnewi, and strategies to mitigate its effects.
                        My research interests lie at the intersection of Machine Learning and Cybersecurity, with a focus on applying ML algorithms for detecting fraudulent activities, intrusion detection, and protecting devices and users over the internet. I am driven by the aim to develop theories and innovative solutions that combat cyberattacks and protect users and devices in an increasingly digital world.
                        Through my doctoral studies, I aspire to contribute to innovative research that addresses emerging challenges in cybersecurity, ensuring a safer and more resilient internet ecosystem for individuals and businesses alike.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;
