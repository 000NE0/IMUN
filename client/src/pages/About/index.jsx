import CounterCard from 'components/CounterCard';
import TeamCard from 'components/TeamCard';
import Layout from 'layouts';
import React from 'react';
import TDProfile from 'assets/img/td.jpg';
import BG from 'assets/img/breadcrumbs-bg.jpg';

const EVENTDETAILS = [
  {
    title: 'hello',
    count: '100',
    icon: <i className='bi bi-headset color-green flex-shrink-0'></i>,
  },
];

const TEAMDETAILS = [
  {
    name: 'Enter Name',
    profile: TDProfile,
    tag: 'Tag Line',
    description:
      'Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut',
    tweetLink: '',
    instaLink: '',
    fbLink: '',
    linkedinLink: '',
  },
];

function About() {
  return (
    <Layout>
      <main id='main'>
        <div
          className='breadcrumbs d-flex align-items-center'
          style={{ backgroundImage: `url(${BG})` }}
        >
          <div
            className='container position-relative d-flex flex-column align-items-center'
            data-aos='fade'
          >
            <h2>About SNSCT IMUN</h2>
            <ol>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>About SNSCT IMUN</li>
            </ol>
          </div>
        </div>

        <section id='about' className='about'>
          <div className='container' data-aos='fade-up'>
            <div className='row position-relative'>
              <div
                className='col-lg-7 about-img'
                style={{ backgroundImage: `url(${BG})` }}
              ></div>

              <div className='col-lg-7'>
                <h2>Why we are different.</h2>
                <div className='our-story'>
                  <h4>Est 2020</h4>
                  <h3>Our Story</h3>
                  <p>
                    Inventore aliquam beatae at et id alias. Ipsa dolores amet
                    consequuntur minima quia maxime autem. Quidem id sed
                    ratione. Tenetur provident autem in reiciendis rerum at
                    dolor. Aliquam consectetur laudantium temporibus dicta minus
                    dolor.
                  </p>
                  <ul>
                    <li>
                      <i className='bi bi-check-circle'></i>
                      <span>Ullamco laboris nisi ut aliquip ex ea commo</span>
                    </li>
                    <li>
                      <i className='bi bi-check-circle'></i>
                      <span>Duis aute irure dolor in reprehenderit in</span>
                    </li>
                    <li>
                      <i className='bi bi-check-circle'></i>
                      <span>Ullamco laboris nisi ut aliquip ex ea</span>
                    </li>
                  </ul>
                  <p>
                    Vitae autem velit excepturi fugit. Animi ad non. Eligendi et
                    non nesciunt suscipit repellendus porro in quo eveniet.
                    Molestias in maxime doloremque.
                  </p>

                  <div className='watch-video d-flex align-items-center position-relative'>
                    <i className='bi bi-play-circle'></i>
                    <a
                      href='https://www.youtube.com/watch?v=BMST3LRIO-Y'
                      className='glightbox stretched-link'
                      target={'_blank'}
                    >
                      Watch Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='stats-counter' className='stats-counter section-bg'>
          <div className='container'>
            <div className='row gy-4'>
              {EVENTDETAILS.map((item, index) => {
                const { title, icon, count } = item;
                return <CounterCard title={title} icon={icon} count={count} />;
              })}
            </div>
          </div>
        </section>

        {/* Methdology */}
        <section id='alt-services' className='alt-services'>
          <div className='container' data-aos='fade-up'>
            <div className='row justify-content-around gy-4'>
              <div
                className='col-lg-6 img-bg'
                style={{ backgroundImage: `url(${BG})` }}
                data-aos='zoom-in'
                data-aos-delay='100'
              ></div>

              <div className='col-lg-5 d-flex flex-column justify-content-center'>
                <h3>Supporting institutions</h3>
                <p>
                  True to the spirit of the United Nations, IMUN strives to
                  foster a constructive forum for open dialogue on complex
                  global issues, including international peace and security and
                  economic and social progress. IMUN stresses the in-depth
                  examination and resolution of pressing issues by emphasizing
                  the process over results. However, with great powers comes
                  great responsibilities. There are limitations to negotiations
                  especially when international diplomacies and great interests
                  are involved. We hope through IMUN, students learn the
                  importance of balancing national interests with the needs of
                  the international community.
                </p>

                <div
                  className='icon-box d-flex position-relative'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <i className='bi bi-easel flex-shrink-0'></i>
                  <div>
                    <h4>
                      <a href='' className='stretched-link'>
                        Lorem Ipsum
                      </a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
                    </p>
                  </div>
                </div>

                <div
                  className='icon-box d-flex position-relative'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <i className='bi bi-patch-check flex-shrink-0'></i>
                  <div>
                    <h4>
                      <a href='' className='stretched-link'>
                        Nemo Enim
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                    </p>
                  </div>
                </div>

                <div
                  className='icon-box d-flex position-relative'
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  <i className='bi bi-brightness-high flex-shrink-0'></i>
                  <div>
                    <h4>
                      <a href='' className='stretched-link'>
                        Dine Pad
                      </a>
                    </h4>
                    <p>
                      Explicabo est voluptatum asperiores consequatur magnam. Et
                      veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                    </p>
                  </div>
                </div>

                <div
                  className='icon-box d-flex position-relative'
                  data-aos='fade-up'
                  data-aos-delay='400'
                >
                  <i className='bi bi-brightness-high flex-shrink-0'></i>
                  <div>
                    <h4>
                      <a href='' className='stretched-link'>
                        Tride clov
                      </a>
                    </h4>
                    <p>
                      Est voluptatem labore deleniti quis a delectus et. Saepe
                      dolorem libero sit non aspernatur odit amet. Et eligendi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='alt-services-2' className='alt-services section-bg'>
          <div className='container' data-aos='fade-up'>
            <div className='row justify-content-around gy-4'>
              <div className='col-lg-5 d-flex flex-column justify-content-center'>
                <h3>Our Methodology</h3>
                <p>
                  Maxime quia dolorum alias perspiciatis. Earum voluptatem sint
                  at non. Ducimus maxime minima iste magni sit praesentium
                  assumenda minus. Amet rerum saepe tempora vero.
                </p>

                <div
                  className='icon-box d-flex position-relative'
                  data-aos='fade-up'
                  data-aos-delay='100'
                >
                  <i className='bi bi-easel flex-shrink-0'></i>
                  <div>
                    <h4>
                      <a href='' className='stretched-link'>
                        Lorem Ipsum
                      </a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi sint occaecati cupiditate non
                      provident
                    </p>
                  </div>
                </div>

                <div
                  className='icon-box d-flex position-relative'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <i className='bi bi-patch-check flex-shrink-0'></i>
                  <div>
                    <h4>
                      <a href='' className='stretched-link'>
                        Nemo Enim
                      </a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                    </p>
                  </div>
                </div>

                <div
                  className='icon-box d-flex position-relative'
                  data-aos='fade-up'
                  data-aos-delay='300'
                >
                  <i className='bi bi-brightness-high flex-shrink-0'></i>
                  <div>
                    <h4>
                      <a href='' className='stretched-link'>
                        Dine Pad
                      </a>
                    </h4>
                    <p>
                      Explicabo est voluptatum asperiores consequatur magnam. Et
                      veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                    </p>
                  </div>
                </div>

                <div
                  className='icon-box d-flex position-relative'
                  data-aos='fade-up'
                  data-aos-delay='400'
                >
                  <i className='bi bi-brightness-high flex-shrink-0'></i>
                  <div>
                    <h4>
                      <a href='' className='stretched-link'>
                        Tride clov
                      </a>
                    </h4>
                    <p>
                      Est voluptatem labore deleniti quis a delectus et. Saepe
                      dolorem libero sit non aspernatur odit amet. Et eligendi
                    </p>
                  </div>
                </div>
              </div>

              <div
                className='col-lg-6 img-bg'
                style={{ backgroundImage: `url(${BG})` }}
                data-aos='zoom-in'
                data-aos-delay='100'
              ></div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section id='team' className='team'>
          <div className='container' data-aos='fade-up'>
            <div className='section-header'>
              <h2>Our Team</h2>
              <p>
                Aperiam dolorum et et wuia molestias qui eveniet numquam nihil
                porro incidunt dolores placeat sunt id nobis omnis tiledo stran
                delop
              </p>
            </div>

            <div className='row gy-5'>
              {TEAMDETAILS.map((item, index) => {
                const {
                  profile,
                  name,
                  tag,
                  description,
                  tweetLink,
                  fbLink,
                  instaLink,
                  linkedinLink,
                } = item;

                return (
                  <TeamCard
                    profile={profile}
                    name={name}
                    tag={tag}
                    description={description}
                    tweetLink={tweetLink}
                    fbLink={fbLink}
                    instaLink={instaLink}
                    linkedinLink={linkedinLink}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default About;
