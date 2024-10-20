import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Elysian</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">ホーム</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">客室</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">施設</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">サービス</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">お問い合わせ</a>
        </nav>
        <button className="md:hidden">
          <Menu className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;