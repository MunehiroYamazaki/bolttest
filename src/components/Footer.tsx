import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Elysian</h3>
            <p className="text-gray-400">快適さと贅沢が融合する場所</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">クイックリンク</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">ホーム</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">客室</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">施設</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">サービス</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <p className="text-gray-400">123 Elysian Street, Tokyo, Japan</p>
            <p className="text-gray-400">電話: +81 123-456-7890</p>
            <p className="text-gray-400">メール: info@elysian.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">フォローする</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2023 Elysian Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;