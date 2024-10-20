import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[600px] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">エリシアンへようこそ</h2>
        <p className="text-xl text-white text-center mb-8">快適さと贅沢が融合する場所です。</p>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
          <form className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
              <input type="date" className="w-full p-2 border rounded" placeholder="チェックイン" />
            </div>
            <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
              <input type="date" className="w-full p-2 border rounded" placeholder="チェックアウト" />
            </div>
            <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
              <select className="w-full p-2 border rounded">
                <option>大人 2名</option>
                <option>大人 1名</option>
                <option>大人 3名</option>
                <option>大人 4名</option>
              </select>
            </div>
            <div className="w-full md:w-1/4 px-2">
              <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition duration-300">予約する</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;