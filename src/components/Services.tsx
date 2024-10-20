import React from 'react';
import { Flower, Dumbbell, Wifi, Coffee } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">私たちのサービス</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <Flower className="w-12 h-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-lg font-semibold mb-2">スパ＆ウェルネス</h3>
            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300">詳細を見る</button>
          </div>
          <div className="text-center">
            <Dumbbell className="w-12 h-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-lg font-semibold mb-2">フィットネスセンター</h3>
            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300">詳細を見る</button>
          </div>
          <div className="text-center">
            <Wifi className="w-12 h-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-lg font-semibold mb-2">高速Wi-Fi</h3>
            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300">詳細を見る</button>
          </div>
          <div className="text-center">
            <Coffee className="w-12 h-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-lg font-semibold mb-2">24時間ルームサービス</h3>
            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300">詳細を見る</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;