/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */

import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Spinner from '../../../Components/Spinner/Spinner';
import SubCategoryCard from './SubCategoryCard';

function ShopByCategory() {
    const [isTabActive, setIsTabActive] = useState('Science Kits');
    const [toyData, setToyData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://infinity-toyland-server.vercel.app/category/${isTabActive}`)
            .then((res) => res.json())
            .then((data) => {
                setToyData(data);
                setLoading(false);
            });
    }, [isTabActive]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="my-16 ">
            <div className="w-full text-center mx-auto ">
                <h1 className="text-2xl lg:text-3xl text-primary-text font-bold">
                    Shop By Category
                </h1>
                <p className="text-secondary-text text-lg mb-2">
                    Great educational toys for kids to learn about science
                </p>
            </div>
            <div className="mt-10 ">
                <Tabs>
                    <TabList>
                        <Tab onClick={() => setIsTabActive('Science Kits')}>Science Kits</Tab>
                        <Tab onClick={() => setIsTabActive('Engineering Kits')}>
                            Engineering kits
                        </Tab>
                        <Tab onClick={() => setIsTabActive('Math Learning Toys')}>Math Toy</Tab>
                    </TabList>

                    <TabPanel className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
                            {toyData?.map((toy) => (
                                <SubCategoryCard key={toy._id} toy={toy} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
                            {toyData?.map((toy) => (
                                <SubCategoryCard key={toy._id} toy={toy} />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
                            {toyData?.map((toy) => (
                                <SubCategoryCard key={toy._id} toy={toy} />
                            ))}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
}

export default ShopByCategory;
