import React from 'react';

const Collection = () => {
    return (
        <section className="collection">
            <div className="collection__content">
                <div className="collection__left">
                    <h2 className="collection__left-title">
                        new
                        arrival
                    </h2>
                    <p className="collection__left-desc">
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ipLorem
                        ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ip
                    </p>
                    <a href="#" className="collection__left-link">
                        Смотреть коллекцию
                    </a>
                </div>
                <div className="collection__right">
                    <div className="collection__right-box">
                        <div className="collection__right-blockImg">
                            <p className="collection__right-text">
                                Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipLorem ipsumLorem ip
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Collection;