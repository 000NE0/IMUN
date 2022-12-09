import React from 'react';
import AOS from 'aos';
import Carousol from 'components/Carousol';
import PIC from 'assets/sns-logo/academy.jpg';
import QuoteForm from 'components/QuoteForm';
import Card from 'components/Card';
import Layout from 'layouts';
import SNSCTLogo from 'assets/sns-logo/snsct.png';
import AchievementsCard from 'components/AchievementsCard';
import SNSCELogo from 'assets/sns-logo/snsce.png';
import SNSACLogo from 'assets/sns-logo/academy.jpg';
import SNSartLogo from 'assets/sns-logo/arts.jpg';
import SNSeduLogo from 'assets/sns-logo/SNSCedu.png';
import SNSallLogo from 'assets/sns-logo/allied.png';
import SNSnurLogo from 'assets/sns-logo/nursing.jpg';
import SNSpharmaLogo from 'assets/sns-logo/pharmacy.png';
import SNSphysioLogo from 'assets/sns-logo/physiotheraphy.png';
import SNSspiLogo from 'assets/sns-logo/spine.jpg';
const ACHIEVEMENTS = [
  {
    title: 'Expedita voluptas ut ut nesciunt',
    pic: PIC,
    description:
      ' Aut est quidem doloremque voluptatem magnam quis excepturivero quia. Eum eos doloremque architecto illo at beataedolore. Fugiat suscipit et sint ratione dolores. Aut aliquidea dolores libero nobis.',
  },
  {
    title: 'Expedita voluptas ut ut nesciunt',
    pic: PIC,
    description:
      ' Aut est quidem doloremque voluptatem magnam quis excepturivero quia. Eum eos doloremque architecto illo at beataedolore. Fugiat suscipit et sint ratione dolores. Aut aliquidea dolores libero nobis.',
  },
  {
    title: 'Expedita voluptas ut ut nesciunt',
    pic: PIC,
    description:
      ' Aut est quidem doloremque voluptatem magnam quis excepturivero quia. Eum eos doloremque architecto illo at beataedolore. Fugiat suscipit et sint ratione dolores. Aut aliquidea dolores libero nobis.',
  },
  {
    title: 'Expedita voluptas ut ut nesciunt',
    pic: PIC,
    description:
      ' Aut est quidem doloremque voluptatem magnam quis excepturivero quia. Eum eos doloremque architecto illo at beataedolore. Fugiat suscipit et sint ratione dolores. Aut aliquidea dolores libero nobis.',
  },
];
const SUPPORTERS = [
  {
    title: 'SNSCT',
    description:
      'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque noet debitis iure Corrupti recusandae ducimus enim',
    logo: SNSCTLogo,
    link: 'www.google.com',
  },
  {
    title: 'SNSCE',
    description:
      'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque noet debitis iure Corrupti recusandae ducimus enim',
    logo: SNSCELogo,
    link: 'www.google.com',
  },
  {
    title: 'SNS Academy',
    description:
      'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque noet debitis iure Corrupti recusandae ducimus enim',
    logo: SNSACLogo,
    link: 'www.google.com',
  },
  {
    title: 'SNS Arts',
    description:
      'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque noet debitis iure Corrupti recusandae ducimus enim',
    logo: SNSartLogo,
    link: 'www.google.com',
  },
  {
    title: 'SNS Education',
    description:
      'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque noet debitis iure Corrupti recusandae ducimus enim',
    logo: SNSeduLogo,
    link: 'www.google.com',
  },
  {
    title: 'SNS Allied Science',
    description:
      'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque noet debitis iure Corrupti recusandae ducimus enim',
    logo: SNSallLogo,
    link: 'www.google.com',
  },

  {
    title: 'SNS Nursing',
    description:
      'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque noet debitis iure Corrupti recusandae ducimus enim',
    logo: SNSnurLogo,
    link: 'www.google.com',
  },
  {
    title: 'SNS Pharmacy',
    description:
      'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque noet debitis iure Corrupti recusandae ducimus enim',
    logo: SNSpharmaLogo,
    link: 'www.google.com',
  },
  {
    title: 'SNS Physiotherapy',
    description:
      'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque noet debitis iure Corrupti recusandae ducimus enim',
    logo: SNSphysioLogo,
    link: 'www.google.com',
  },
  {
    title: 'SNS Spine',
    description:
      'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque noet debitis iure Corrupti recusandae ducimus enim',
    logo: SNSspiLogo,
    link: 'www.google.com',
  },
];

function Home() {
  AOS.init();

  return (
    <Layout>
      <section id='hero' className='hero'>
        <div className='info d-flex align-items-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-6 text-center'>
                <h2 data-aos='fade-down'>
                  Welcome to <br />
                  <span>SNS IMUN</span>
                </h2>
                <p data-aos='fade-up'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a
                  data-aos='fade-up'
                  data-aos-delay='200'
                  href='#get-started'
                  className='btn-get-started'
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        <Carousol />
      </section>
      <main id='main'>
        <section id='services' className='services section-bg'>
          <div className='container' data-aos='fade-up'>
            <div className='section-header'>
              <h2>Our Supports</h2>
              <p>
                Voluptatem quibusdam ut ullam perferendis repellat non ut
                consequuntur est eveniet deleniti fignissimos eos quam
              </p>
            </div>

            <div className='row gy-4 d-flex  '>
              {SUPPORTERS.map((item, index) => {
                const { title, description, link, logo } = item;

                return (
                  <Card
                    key={index}
                    title={title}
                    description={description}
                    logo={logo}
                    link={link}
                  />
                );
              })}
              {/* Card */}
            </div>
          </div>
        </section>

        <section id='constructions' className='constructions'>
          <div className='container' data-aos='fade-up'>
            <div className='section-header'>
              <h2>Our Achievements</h2>
              <p>
                Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam
                porro nihil id ratione ea sunt quis dolorem dolore earum
              </p>
            </div>
            <div className='row gy-4'>
              {ACHIEVEMENTS.map((item, index) => {
                const { title, description, pic } = item;
                return (
                  <AchievementsCard
                    key={index}
                    title={title}
                    description={description}
                    PIC={pic}
                  />
                );
              })}
            </div>
          </div>
        </section>
        <section id='get-started' className='get-started section-bg'>
          <div className='container'>
            <div className='row justify-content-between gy-4'>
              <div
                className='col-lg-6 d-flex align-items-center'
                data-aos='fade-up'
              >
                <div className='content'>
                  <h3>Get in Touch</h3>
                  <p>
                    Rem id rerum. Debitis deserunt quidem delectus expedita
                    ducimus dolor. Aut iusto ipsa. Eos ipsum nobis ipsa soluta
                    itaque perspiciatis fuga ipsum perspiciatis. Eum amet fugiat
                    totam nisi possimus ut delectus dicta.
                  </p>
                  <p>
                    Aliquam velit deserunt autem. Inventore et saepe. Tenetur
                    suscipit eligendi labore culpa eos. Deserunt porro magni qui
                    necessitatibus dolorem at animi cupiditate.
                  </p>
                </div>
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
