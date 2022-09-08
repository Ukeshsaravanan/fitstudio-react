import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import VisionImage from '../../images/new/about2.jpeg'
import StoryImage from '../../images/new/about1.jpeg'
import MissionImage from '../../images/new/about3.jpeg'
import './about.css'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem nisi quaerat, blanditiis laborum inventore architecto eius placeat ducimus 
      </Header>
      <section className="about__story">
        <div className=" container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam voluptatem pariatur eius temporibus inventore, ad rerum eaque eos necessitatibus porro quo minima hic exercitationem asperiores illo adipisci provident a earum.Vero mollitia molestias ipsam, tempora ab praesentium facilis hic et dicta, consectetur ex tempore minima itaque reprehenderit delectus corporis tenetur optio numquam beatae. At, numquam. Ratione illum exercitationem amet aperiam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat, aperiam voluptates mollitia, possimus temporibus recusandae accusantium quas delectus harum qui voluptatum? Excepturi in modi dolorem nostrum deleniti quidem saepe.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laboriosam a laborum eius unde deserunt vel voluptas, ex dolore 
            </p>
          </div>

        </div>
      </section>

      <section className="about__vision">
        <div className=" container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam voluptatem pariatur eius temporibus inventore, ad rerum eaque eos necessitatibus porro quo minima hic exercitationem asperiores illo adipisci provident a earum.Vero mollitia molestias ipsam, tempora ab praesentium facilis hic et dicta, consectetur ex tempore minima itaque reprehenderit delectus corporis tenetur optio numquam beatae. At, numquam. Ratione illum exercitationem amet aperiam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat, aperiam voluptates mollitia, possimus temporibus recusandae accusantium quas delectus harum qui voluptatum? Excepturi in modi dolorem nostrum deleniti quidem saepe.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our vision" />
          </div>

        </div>
      </section>

      <section className="about__mission">
        <div className=" container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam voluptatem pariatur eius temporibus inventore, ad rerum eaque eos necessitatibus porro quo minima hic exercitationem asperiores illo adipisci provident a earum.Vero mollitia molestias ipsam, tempora ab praesentium facilis hic et dicta, consectetur ex tempore minima itaque reprehenderit delectus corporis tenetur optio numquam beatae. At, numquam. Ratione illum exercitationem amet aperiam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat, aperiam voluptates mollitia, possimus temporibus recusandae accusantium quas delectus harum qui voluptatum? Excepturi in modi dolorem nostrum deleniti quidem saepe.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laboriosam a laborum eius unde deserunt vel voluptas, ex dolore 
            </p>
          </div>

        </div>
      </section>
    </>
  )
}

export default About