/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */

import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategoryCard from './SubCategoryCard';

function ShopByCategory() {
    const [isTabActive, setIsTabActive] = useState('Science Kits');
    const [toyData, setToyData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/category/${isTabActive}`)
            .then((res) => res.json())
            .then((data) => setToyData(data));
    }, [isTabActive]);
    return (
        <div className="my-10 ">
            <div className="w-full text-center mx-auto ">
                <h1 className="text-2xl lg:text-3xl text-primary-text font-bold">
                    Shop By Category
                </h1>
            </div>
            <div className="mt-5 ">
                <Tabs>
                    <TabList>
                        <Tab onClick={() => setIsTabActive('Science Kits')}>Science Kits</Tab>
                        <Tab onClick={() => setIsTabActive('Engineering Kits')}>
                            Engineering kits
                        </Tab>
                        <Tab onClick={() => setIsTabActive('Math Learning Toys')}>Math Toy</Tab>
                    </TabList>

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
