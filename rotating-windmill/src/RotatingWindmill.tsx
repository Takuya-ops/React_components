import React, { useState, useEffect } from 'react';

const RotatingWindmill: React.FC = () => {
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleMouseMove = (event: MouseEvent) => {
    // カーソルの位置に基づいて回転角度を計算します
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const radians = Math.atan2(clientY - centerY, clientX - centerX);
    const degrees = (radians * 180) / Math.PI;
    setRotationAngle(degrees);
  };

  useEffect(() => {
    // マウント時にイベントリスナーを追加します
    window.addEventListener('mousemove', handleMouseMove);

    // アンマウント時にイベントリスナーを削除します
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="windmill">
      <div className="blades" style={{ transform: `rotate(${rotationAngle}deg)` }}>
        <div className="blade" />
        <div className="blade" />
        <div className="blade" />
      </div>
    </div>
  );
};

export default RotatingWindmill;
