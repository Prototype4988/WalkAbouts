import React, { useEffect, useState } from 'react';
import Image from "../Image";
import Explore from "../Explore";

type ItemType = {
    id: string;
    image: string;
    title: string;
    content: string;
    prompt?: string;
};

type ExperiencesItemProps = {
    className?: string;
    classContent?: string;
    item: ItemType;
};

const ExperiencesItem = ({
    className,
    classContent,
    item,
}: ExperiencesItemProps) => {
    const [content, setContent] = useState(item.content);

    useEffect(() => {
        const getOpenAIContent = async () => {
            console.log('Fetching content for:', item.title); // Debugging: Log the item being processed
            
            try {
                const response = await fetch('/api/fetchopenaicontent', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ prompt: item.prompt }),
                });
            
            if (!response.ok) {
              throw new Error('Failed to fetch OpenAI content');
            }
    
            const data = await response.json();
            setContent(data.content);
          } catch (error) {
            console.error('Error fetching OpenAI content:', error.message);
          }
        };
    
        if (item.prompt) {
            getOpenAIContent();
        }
    }, [item.prompt]);
    
    return (
        <div className={`${className || ""}`}>
          <div className="h-[25.125rem] mb-8">
            <Image
              className="w-full h-full object-cover"
              src={item.image}
              width={704}
              height={402}
              alt=""
            />
          </div>
          <div className="mb-4 text-h4-libre text-primary-500">{item.title}</div>
          <div className={`mb-8 ${classContent || ""}`}>{content}</div>
          <Explore url={`/experiences/${item.id}`} />
        </div>
      );
    }; 
    export default ExperiencesItem;