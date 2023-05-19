import React from 'react';
import { useNavigation } from 'react-router-dom';
import Spinner from '../../../Components/Spinner/Spinner';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import OurPartner from '../OurPartner/OurPartner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

function Home() {
    const navigate = useNavigation();
    if (navigate.state === 'loading') {
        return <Spinner />;
    }
    return (
        <div>
            <Banner />
            <ShopByCategory />
            <Gallery />
            <OurPartner />
        </div>
    );
}

export default Home;
