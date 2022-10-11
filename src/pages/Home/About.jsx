import React from 'react';
import aboutImg from '../../assets/about/about.png'

const About = () => {
    return (
        <section className="about">
            <div className="container-small">
                <div className="about__content">
                    <div className="about__info">
                        <h2 className="about__title">
                            О
                            нас
                        </h2>
                        <p className="about__desc">
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem
                            ipsumLoreLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                            ipLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                            ipsumLorem ipsumLorem ipsumipLorem ipsumLoremLorem ipsumLorem
                            ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipsumLorem
                            ipsumLorem
                        </p>
                    </div>

                    <img src={aboutImg} alt="" className="about__right-img"/>
                </div>
            </div>
        </section>
    );
};

export default About;