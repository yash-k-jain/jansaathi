'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Yash Jain',
    role: 'Developer',
    description: 'Passionate about crafting efficient and scalable solutions, turning ideas into reality through code.',
    image: 'https://wallpapers.com/images/hd/funny-discord-profile-pictures-oezijmajuioyf682.jpg',
    github: '#',
    twitter: '#',
    instagram: '#',
    youtube: '#',
  },
  {
    name: 'Aryan Sagar',
    role: 'Designer',
    description: 'Creative thinker who brings imagination to life with stunning visuals and user-friendly designs.',
    image: 'https://wallpapers.com/images/hd/hilarious-discord-pfp-of-comical-ufo-abduction-kvqdq06rp7loynd3.jpg',
    github: '#',
    twitter: '#',
    instagram: '#',
    youtube: '#',
  },
  {
    name: 'Aditya Sinha',
    role: 'Researcher',
    description: 'Driven by curiosity, I specialize in deep analysis, uncovering insights, and innovating through research.',
    image: 'https://wallpapers.com/images/hd/boy-with-blue-eyes-pfp-for-discord-vf6l3hnpcnstn1n4.jpg',
    github: '#',
    twitter: '#',
    instagram: '#',
    youtube: '#',
  },
  {
    name: 'Vishal',
    role: 'Leader',
    description: 'A visionary strategist, ensuring team collaboration and efficiency to achieve impactful results.',
    image: 'https://cdn.pfps.gg/pfps/2529-omori-13.png',
    github: '#',
    twitter: '#',
    instagram: '#',
    youtube: '#',
  },
];

const Card = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl text-neon font-bold mb-8 text-center">Meet Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className="w-full bg-gray-900 transition-all duration-300 rounded-xl flex flex-col items-center p-6 shadow-neon border border-neon transform hover:scale-105 hover:shadow-neon-glow"
          >
            <div className="w-24 h-24 bg-white rounded-full overflow-hidden mb-4 border-2 border-neon shadow-neon-glow">
              <Image src={member.image} alt={member.name} width={96} height={96} className="object-cover" />
            </div>
            <span className="text-neon font-bold text-xl">{member.name}</span>
            <span className="text-gray-300 text-base">{member.role}</span>
            <p className="text-gray-400 text-center text-sm mt-2 px-4">{member.description}</p>
            <div className="flex gap-4 mt-4">
              <Link href={member.github} className="text-neon hover:text-pink-500 transition">
                <FaGithub size={24} />
              </Link>
              <Link href={member.twitter} className="text-neon hover:text-blue-400 transition">
                <FaTwitter size={24} />
              </Link>
              <Link href={member.instagram} className="text-neon hover:text-pink-400 transition">
                <FaInstagram size={24} />
              </Link>
              <Link href={member.youtube} className="text-neon hover:text-red-500 transition">
                <FaYoutube size={24} />
              </Link>
            </div>
            <button className="mt-6 px-8 py-2 bg-neon text-white font-bold rounded-full hover:bg-pink-500 hover:text-white transition">
              Resume
            </button>
          </div>
        ))}
      </div>
      <style jsx>{`
        .text-neon {
          color: #0ff;
          text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff;
        }
        .shadow-neon {
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }
        .shadow-neon-glow {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.6);
        }
        .border-neon {
          border-color: #0ff;
        }
      `}</style>
    </div>
  );
};

export default Card;
