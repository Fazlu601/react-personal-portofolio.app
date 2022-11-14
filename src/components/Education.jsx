import React from 'react'

function Education() {
  return (
    <article className='about-education p-3'>
        <h1 className='text-center title-page  text-secondary mt-3 mb-2'>Education</h1>
        <div className="row justify-content-between">
                    <div className="card-timeline">
                        <img src="./src/assets/image/unama.png" alt=""/>
                        <div className="timeline-caption text-secondary">
                            <p className="timeline-title">
                                Universitas Dinamika Bangsa Jambi
                            </p>
                            <p className="timeline-description">
                                Kota jambi, thehok
                            </p>
                        </div>
                    </div>
                    <div className="date text-secondary">
                        2019 - 2023
                    </div>
            </div>
            <hr/>
            <div className="row justify-content-between">
                <div className="card-timeline">
                    <img src="./src/assets/image/sma.png" alt=""/>
                    <div className="timeline-caption text-secondary">
                        <p className="timeline-title">
                            SMA Negeri 8
                        </p>
                        <p className="timeline-description">
                            Kenali Asam Bawah, Kota Jambi.
                        </p>
                    </div>
                </div>
                <div className="date text-secondary">
                    2017 - 2019
                </div>
            </div>
            <hr/>
            <div className="row justify-content-between">
                <div className="card-timeline">
                    <img src="./src/assets/image/sma.png" alt=""/>
                    <div className="timeline-caption text-secondary">
                        <p className="timeline-title">
                            SMP Negeri 24
                        </p>
                        <p className="timeline-description">
                            Vila, Jambi.
                        </p>
                    </div>
                </div>
                <div className="date text-secondary">
                    2014 - 2016
                </div>
            </div>
            <hr/>
            <div className="row justify-content-between">
                <div className="card-timeline">
                    <img src="./src/assets/image/sma.png" alt=""/>
                    <div className="timeline-caption text-secondary">
                        <p className="timeline-title">
                            SD Negeri 206
                        </p>
                        <p className="timeline-description">
                            Kenali Asam Bawah, Kota Jambi.
                        </p>
                    </div>
                </div>
                <div className="date text-secondary">
                    2007 - 2013
                </div>
            </div>
    </article>
  )
}

export default Education
