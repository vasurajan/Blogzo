import Layout from '../components/Layout'
import Link from 'next/link';

const Index = () => {
    return (
        <Layout>
            <article className="overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 style={{ color: "black" }} className="display-4 font-weight-bold">
                                WELCOME TO BLOGZO.
                            </h1>
                            <h1 style={{ color: "black" }} className="display-4 font-weight-bold">CREATIVITY MADE SIMPLE</h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-4 pb-5">
                            <p className="lead">
                                Best programming and technical articles on React Node NextJs and
                                JavaScript
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://miro.medium.com/max/630/1*dLaDL-lSN0iprzmOpmM7zQ.png' +
                                            ')'
                                    }}
                                >
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/react">

                                        <h3 className="h1">React Js</h3>

                                    </Link>
                                    <p className="lead">The world's most popular frontend web development library</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://miro.medium.com/max/576/1*xdo0UBpyszvD7-7EH4TkIA.png' +
                                            ')'
                                    }}
                                >
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/node">

                                        <h3 className="h1">Node Js</h3>

                                    </Link>
                                    <p className="lead">
                                        The worlds most popular backend development tool for JavaScript Ninjas
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundImage:
                                            'url(' +
                                            'https://miro.medium.com/max/576/1*htbUdWgFQ3a94PMEvBr_hQ.png' +
                                            ')'
                                    }}
                                >
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/nextjs">

                                        <h3 className="h1">Next Js</h3>

                                    </Link>
                                    <p className="lead">A Production ready web framework for building SEO React apps</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default Index;