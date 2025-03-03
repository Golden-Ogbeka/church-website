import React from 'react';
// import Header from '../../common/Header';
import HeroSection from '../../components/math-events/HeroSection';
import PopupModal from '../../common/Popup/PopupModal';
import Event from '../../components/math-events/Event';
import SubscribeSection from '../../common/Subscribe/Newsletter';
import Layout from '@/components/layout/Layout';
import WorshipWithUs from '../../components/math-events/Worship';
import EventForm from '@/components/math-events/EventForm';
// import Footer from '../../common/Footer';


function Events() {
  return (
    <div>
        <Layout>
            <PopupModal />
            <HeroSection />
            <Event />
            <EventForm />
            {/* <EventForm /> */}
            {/* <ImageWithText /> */}
            <WorshipWithUs />
            <SubscribeSection />
        </Layout>
    </div>
  )
}

export default Events