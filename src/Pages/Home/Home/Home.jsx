import React from 'react';
import { useNavigation } from 'react-router-dom';
import Spinner from '../../../Components/Spinner/Spinner';
import Banner from '../Banner/Banner';
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
            <Banner />
            <ShopByCategory />
            <Offer />
            <Gallery />
            <OurPartner />
            <SubscribeForm />
        </div>
    );
}

export default Home;
