import React from 'react';
import { Bed, Waves, Utensils } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">エリシアンで比類なき快適さとスタイルを体験してください。</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Bed className="w-16 h-16 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">豪華な客室</h3>
            <p className="text-gray-600">優雅さとエレガンスが融合した、至福の空間をお楽しみください。</p>
          </div>
          <div className="text-center">
            <Waves className="w-16 h-16 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">世界クラスの設備</h3>
            <p className="text-gray-600">最高級のスパやプールで、心身ともにリラックスしてください。</p>
          </div>
          <div className="text-center">
            <Utensils className="w-16 h-16 mx-auto mb-4 text-green-600" />
            <h3 className="text-xl font-semibold mb-2">一流のダイニング</h3>
            <p className="text-gray-600">世界中の料理を、最高の雰囲気の中でお楽しみいただけます。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;