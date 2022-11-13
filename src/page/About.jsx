import React from 'react'

function About() {
  return (
    <section className='about-section bg-triangle-animated'>
        <article className='about-me p-3'>
          <h1 className='text-center title-page text-secondary mt-3 mb-2'>About Me</h1>
          <p className='text-secondary text-center'> I am a student majoring in information systems who are interested and want to learn many things about programming, especially in web development. I feel this is the right passion for me, and I will continue to study as best as I can to pursue the career I dream of.</p>
        </article>

        <article className='about-experience p-3'>
          <h1 className='text-center title-section text-secondary mt-3 mb-2'>Experience</h1>
          <ul className='list-group text-secondary '>
            <li className='list-img text-center'>
              <img src='./src/assets/image/skilvul.png' />
              <img src='./src/assets/image/msib.png' />
              <img src='./src/assets/image/kampusMerdeka.png' />
            </li>
              <li>SIB (Studi Independen Bersertifikat) Kampus Merdeka Batch 3, Mitra : PT. Impactbyte Teknologi Edukasi - Skilvul Tech4Impact, Learning Track : Front-End Web Development
                        <ul className='list-group list-title'>
                          <li className='list-title'>What lessons did I get while participating in the activity?</li>
                          <li className='list'>Learn the flow of making Digital Products using Design Thinking</li>
                          <li className='list'>Learn how to make Wireframe & High-Fi Prototype using Figma</li>
                          <li className='list'>Learn the flow of making Digital Products using Design Thinking</li>
                          <li className='list'>Learn basic fundamental of Web Development with HTML, CSS, & JavaScript</li>
                          <li className='list'>Learn how to manage source code with Git and remote repositories on GitHub</li>
                          <li className='list'>Learn to develop Front-End Project with React js as Library Framework</li>
                          <li className='list'>Learn how to collaborate on teams and create project groups based on case studies from challenge partners</li>
                        </ul>
              </li>
              </ul>
        </article>

        <article className='about-education p-3'>
          <h1 className='text-center title-section  text-secondary mt-3 mb-2'>Education</h1>
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
                <div class="date text-secondary">
                    2014 - 2016
                </div>
            </div>
            <hr/>
            <div class="row justify-content-between">
                <div class="card-timeline">
                    <img src="./src/assets/image/sma.png" alt=""/>
                    <div class="timeline-caption text-secondary">
                        <p class="timeline-title">
                            SD Negeri 206
                        </p>
                        <p class="timeline-description">
                            Kenali Asam Bawah, Kota Jambi.
                        </p>
                    </div>
                </div>
                <div class="date text-secondary">
                    2007 - 2013
                </div>
            </div>
        </article>
    </section>
  )
}

export default About