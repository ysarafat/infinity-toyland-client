import React from 'react';
import { ScrollRestoration, useNavigation } from 'react-router-dom';
import DynamicTitle from '../../../Components/DynamicTitle/DynamicTitle';
import Spinner from '../../../Components/Spinner/Spinner';
import Banner from '../Banner/Banner';
import Blog from '../Blogs/Blogs';
import Gallery from '../Gallery/Gallery';
import Offer from '../Offer/Offer';
import OurPartner from '../OurPartner/OurPartner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import SubscribeForm from '../SubscribeForm/SubscribeForm';

function Home() {
    const navigate = useNavigation();
    if (navigate.state === 'loading') {
        return <Spinner />;
    }

    return (
        <div>
            <ScrollRestoration />
            <DynamicTitle title="Home" />
            <Banner />
            <ShopByCategory />
            <Offer />
            <Gallery />
            <Blog />
            <OurPartner />
            <SubscribeForm />
        </div>
    );
}

export default Home;
