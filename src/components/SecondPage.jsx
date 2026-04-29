import React from 'react'
import Navbar from './navbar/Navbar'
import Logo from "../assets/logos.png"
import Avatar from "../assets/Avatar.png"
import Notification from "../assets/notification.png"
import Ellipse1 from '../assets/Ellipse_Element.png'
import Ellipse2 from '../assets/Ellipse_element__1_.png'
import Saly from '../assets/Saly-2.svg'
import Gifts from '../assets/DESIGN_2.png'
import Person from '../assets/DESIGN_3.svg'
import Illustration from '../assets/Tasks.svg'
import Card1Img from '../assets/f3b260e5b3014938b57e52adb6e0cc1016f76b84.png'
import Card2Img from '../assets/6550a0bc3290a451a072b9b58fb5fe5cae5be8fa.png'
import Card3Img from '../assets/c962aeb0aa30690ddba5322790361d429817ae5c.png'
import HomeIcon from '../assets/home-2.png'
import DealsIcon from '../assets/percentage-square.png'
import MembershipIcon from '../assets/notification-favorite.png'
import ReferralIcon from '../assets/profile-add.png'
import Logo1 from '../assets/480246be720b9f8ea4fca20f97ed66c69429b837.png'
import Logo2 from '../assets/de582a3adfdffdd0a2640803cd6e198edd1ecfbc.png'
import MovieImg from '../assets/6d49d0ca5b477cf235a26b79e56e2ca20b0f08f9.jpg'
import { Link, useLocation } from 'react-router-dom'
const SecondPage = () => {
  const location = useLocation()

  return (
    <div>
      <div className="wrapper1">
        <div className="container1">
          <div className="navbar">
            <h1 className="time">9:41</h1>
            <img src={Logo} alt="logo" className="logo" />
          </div>

          <div className="friend__card">
            <h2 className="friend__name">
              <img className='friend__avatar' src={Avatar} alt="friend" />Hi,Friend</h2>
            <img className='friend__notification' src={Notification} alt="notification" />
          </div>
          <div style={{
            background: '#191b1c',
            borderRadius: '24px',
            width: '1200px',
            margin: '0 auto',
            position: 'relative',
            overflow: 'hidden',
            height: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>

            <img src={Saly} style={{
              position: 'absolute', bottom: `5%`, left: '65%',
              transform: 'translateX(-50%)', width: '40%', zIndex: 1
            }} alt="" />

            <img src={Ellipse1} style={{
              position: 'absolute', top: '10px', right: '18px',
              width: '48px', zIndex: 2
            }} alt="" />

            <img src={Ellipse2} style={{
              position: 'absolute', bottom: '10px', left: '18px',
              width: '40px', zIndex: 2
            }} alt="" />

            <img src={Gifts} style={{
              position: 'absolute', left: '20%', bottom: '20%',
              width: '30%', zIndex: 5
            }} alt="" />

            <img src={Person} style={{
              position: 'absolute', right: '-5px', bottom: 0,
              height: '220px', zIndex: 3
            }} alt="" />

            <div className='Offer__card' style={{
              position: 'relative', zIndex: 4,
              textAlign: 'center', padding: '40px 20px'
            }}>
              <p style={{
                color: '#fff', fontSize: '18px', fontWeight: 700,
                margin: '0 0 18px', lineHeight: 1.4
              }}>
                Exclusive offers for members
              </p>
              <button className='btn'>
                Connect now
              </button>
            </div>

          </div>
          <div className="section__wrapper">
            <h2 className="section__title">How it works</h2>

            <div className="section__image2">
              <img src={Illustration} alt="how it works" className="section__image" />
            </div>

            <div className="section__steps">

              <div className="section__step">
                <div className="section__number">1</div>
                <p className="section__text">Enjoy shopping at CareMember's partner brands</p>
              </div>

              <div className="section__step">
                <div className="section__number">2</div>
                <p className="section__text">Let our staff register you as a member</p>
              </div>

              <div className="section__step">
                <div className="section__number">3</div>
                <p className="section__text">Earn points from your first order</p>
              </div>

              <div className="section__step">
                <div className="section__number">4</div>
                <p className="section__text">Next time, just give your phone number to earn points.</p>
              </div>

            </div>

            <button className="section__button">Our Partner Brands</button>

            <p className="section__link">Discover more ways to earn points</p>
          </div>
          <div className="breaking__wrapper">

            <div className="breaking__header">
              <h2 className="breaking__title">Breaking Now</h2>
              <span className="breaking__view">View all ›</span>
            </div>

            <div className="breaking__card breaking__purple">
              <img src={Card1Img} alt="" className="breaking__img" />
              <div className="breaking__content">
                <p className="breaking__text">Explore Exclusive Benefits for Care+ Members</p>
                <button className="breaking__btn">Read now</button>
              </div>
            </div>

            <div className="breaking__card breaking__yellow">
              <img src={Card2Img} alt="" className="breaking__img" />
              <div className="breaking__content">
                <p className="breaking__text">Explore Exclusive Benefits for Care+ Members</p>
                <button className="breaking__btn">Read now</button>
              </div>
            </div>

            <div className="breaking__card breaking__dark__purple">
              <img src={Card3Img} alt="" className="breaking__img" />
              <div className="breaking__content">
                <p className="breaking__text">Point Redemption Between LynkID and CareMember</p>
                <button className="breaking__btn">Read now</button>
              </div>
            </div>

          </div>
          <div className="feed__wrapper">

            <h2 className="feed__title">Brand Feed</h2>

            <div className="feed__card">
              <img src={Card3Img} alt="" className="feed__img" />
              <div className="feed__body">
                <p className="feed__text">20% Off First 300 Autumn Melody Mooncake Sets</p>
                <div className="feed__footer">
                  <img src={Logo1} alt="logo" className="feed__logo" />
                  <button className="feed__btn">Sea deals</button>
                </div>
              </div>
            </div>

            <div className="feed__card">
              <img src={MovieImg} alt="" className="feed__img" />
              <div className="feed__body">
                <p className="feed__text">Limited: 200 Early Access Tickets for CareMember</p>
                <div className="feed__footer">
                  <img src={Logo2} alt="CGV logo" className="feed__logo feed__white" />
                  <button className="feed__btn">Sea deals</button>
                </div>
              </div>
            </div>

          </div>
          <div className="extra__card"></div>
          <div className="navbar__wrapper">
            <div className="navbar__tabs">

              <Link to="/" className="navbar__tab">
                <div className={`navbar__icon1 `}>
                  <img src={HomeIcon} alt="Home" className={`navbar__icon `} />
                </div>
                <span className={`navbar__label`}>Home</span>
              </Link>

              <Link to="/" className="navbar__tab">
                <div className={`navbar__icon1 `}>
                  <img src={DealsIcon} alt="Deals" className={`navbar__icon`} />
                </div>
                <span className={`navbar__label `}>Deals</span>
              </Link>

              <Link to="/" className="navbar__tab">
                <div className={`navbar__icon1`}>
                  <img src={MembershipIcon} alt="Membership" className={`navbar__icon `} />
                </div>
                <span className={`navbar__label`}>Membership</span>
              </Link>

              <Link to="/" className="navbar__tab">
                <div className={`navbar__icon1 `}>
                  <img src={ReferralIcon} alt="Referral" className={`navbar__icon `} />
                </div>
                <span className={`navbar__label`}>Referral</span>
              </Link>

            </div>
            <div className="navbar__container" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default SecondPage
