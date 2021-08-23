import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7203.155310248193!2d85.09159272355384!3d25.485774535050872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2afe600d45e85%3A0xe7d53325ccbec266!2z4KSq4KWN4KSw4KS-4KSl4KSu4KS_4KSVIOCkteCkv-Ckp-CkvuCksuCkryDgpLngpKzgpY3gpKzgpL_gpKrgpYHgpLA!5e0!3m2!1sen!2sin!4v1629730660349!5m2!1sen!2sin"width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 8651267157'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'saahhiill123456@gmail.com'} text2={'theflyingsnow19@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Vill.- Habbipur, P.O-Jatt Dumari P.S.- Punpun, Dist. - Patna, Bihar.'} text2={'India'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
