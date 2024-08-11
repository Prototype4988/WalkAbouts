"use client";
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Layout from './Layout';
import Tabs from './Tabs';
import ExperiencesItem from './ExperiencesItem';
import { experiences } from '../mocks/experiences';
import Image from 'next/image';
import { useGeolocationContext } from '../hooks/geolocationcontext';

const NewsLetter = ({ session }) => {
  let context;
  try {
    context = useGeolocationContext();
  } catch (error) {
    console.error(error.message);
    return <div>{error.message}</div>;
  }

  const { addressComponent, error } = context;
  console.log("NewsLetter - addressComponent:", addressComponent, "error:", error); // Add this log

  const [type, setType] = useState("overview");

  const typeOffers = [
    { title: "Overview", active: type === "overview", onClick: () => setType("overview") },
    { title: "Culture", active: type === "culture", onClick: () => setType("culture") },
    { title: "Food", active: type === "food", onClick: () => setType("food") },
    { title: "Sea", active: type === "sea", onClick: () => setType("sea") },
    { title: "Signature", active: type === "signature", onClick: () => setType("signature") },
    { title: "Sustainability", active: type === "sustainability", onClick: () => setType("sustainability") },
    { title: "Sport", active: type === "sport", onClick: () => setType("sport") },
  ];

  const experiencesWithAddress = experiences.map((experience) => {
    if (experience.prompt) {
      return {
        ...experience,
        prompt: experience.prompt.replace('{addressComponent}', addressComponent || 'your area'),
      };
    }
    return experience;
  });

  return (
    <div className='h-full relative'>
      <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900'>
        <div>
          <Sidebar session={session} />
        </div>
      </div>
      <main className='md:pl-72'>
        <Layout>
          <div className="pt-10 pb-20 md:pt-6">
            <div className="container">
              <div className="max-w-[38rem] mx-auto mb-10 text-center text-h2 md:text-h3">
                Experience Exceptional Moments That Bring You To Life.
              </div>
              <Tabs className="mb-10" items={typeOffers} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experiences.map((experience) => (
                  <ExperiencesItem
                    className="w-[calc(50%-1.5rem)] mt-14 mx-3 md:w-[calc(100%-1.5rem)]"
                    item={experience}
                    key={experience.id}
                  />
                ))}
              </div>
              {error && <div>Error: {error}</div>}
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default NewsLetter;
