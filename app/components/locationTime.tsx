'use client'
import { Clock3, MapPin } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export const LocationTime = () => {
  const [time, setTime] = useState<string | null>(null);

  function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // "0" should be converted to 12

    setTime(`${hours}:${minutes}:${seconds} ${ampm}`);
  }
  useEffect(() => {
    // Update time immediately when the page loads
    updateTime();

    // Update time every second
    setInterval(updateTime, 1000);
  }, []);

  return (
    <div className='flex gap-2'>
      <div className="flex gap-2  items-center">
        <p>{time}</p>
      </div>
      -
      <div className="flex gap-2  items-center">
        Edinburg, Texas
      </div>
    </div>
  )
}

