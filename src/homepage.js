import React from "react";

class Homepage extends React.Component {
    constructor() {
        super();
        this.state = {
            isScattered: true
        };
        this.letterAnimation = this.letterAnimation.bind(this);
    }
    componentDidMount() {
        setTimeout(this.letterAnimation, 5000);
    }

    letterAnimation() {
        this.setState({
            isScattered: !this.state.isScattered
        });
    }

    render() {
        const { isScattered } = this.state;
        return (
            <div className="hompepage-container">
                <section className="header-container">
                    <section
                        onClick={this.letterAnimation}
                        className="letters-container"
                    >
                        {/* check how to make letters hover around maybe*/}
                        <div className="letters-letters">
                            <span
                                className={`transition  ${
                                    isScattered ? "a absolute" : " "
                                }  `}
                            >
                                M
                            </span>
                            <span
                                className={`transition  ${
                                    isScattered ? "b absolute" : " "
                                }  `}
                            >
                                O
                            </span>
                            <span
                                className={`transition  ${
                                    isScattered ? "c absolute" : " "
                                }  `}
                            >
                                D
                            </span>
                            <span
                                className={`transition  ${
                                    isScattered ? "d absolute" : " "
                                }  `}
                            >
                                E
                            </span>
                            <span
                                className={`transition  ${
                                    isScattered ? "e absolute" : " "
                                }  `}
                            >
                                R
                            </span>
                            <span
                                className={`transition  ${
                                    isScattered ? "f absolute" : " "
                                }  `}
                            >
                                N
                            </span>
                        </div>
                        <div className="psyche">
                            <span
                                className={`transition  ${
                                    isScattered ? "g absolute" : " "
                                }  `}
                            >
                                P
                            </span>
                            <span
                                className={`transition  ${
                                    isScattered ? "h absolute" : " "
                                }  `}
                            >
                                S
                            </span>
                            <span
                                className={`transition  ${
                                    isScattered ? "i absolute" : " "
                                }  `}
                            >
                                Y
                            </span>
                            <span
                                className={`transition  ${
                                    isScattered ? "j absolute" : " "
                                }  `}
                            >
                                C
                            </span>
                            <span
                                className={`transition  ${
                                    isScattered ? "k absolute" : " "
                                }  `}
                            >
                                H
                            </span>
                            <span
                                className={`transition  ${
                                    isScattered ? "l absolute" : " "
                                }  `}
                            >
                                E
                            </span>
                        </div>
                    </section>
                    <section className="header-content-container">
                        <img className="header-image" src="img/ruta.jpeg" />
                        <p className="header-tagline">
                            A soft space to create a modern day survival guide
                            for an ancient psyche of a human being. We’re here
                            to talk about healing modalities that work and don’t
                            work, to consider our surroundings, our commitment,
                            our freedom, and our relationship to everything that
                            is outside and inside of us. A story of a
                            counter-culture protagonist.
                        </p>
                    </section>
                </section>
            </div>
        );
    }
}

export default Homepage;
