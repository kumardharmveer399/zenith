'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { liveClasses } from '@/lib/dummy-data';
// import { LogOut, Home, BookOpen, Users, Calendar, Play, Clock } from 'lucide-react';

// 'use client';

import { liveClasses } from '@/lib/live-classes';
import { Button } from '@/components/ui/button';
import { Calendar, Users } from 'lucide-react';

export default function LiveClassesPage() {

  const getStatus = (cls: any) => {
    const now = new Date();
    const start = new Date(`${cls.date}T${cls.time}`);
    const end = new Date(start.getTime() + cls.durationMinutes * 60000);

    if (now >= start && now <= end) return 'LIVE';
    if (now < start) return 'UPCOMING';
    return 'ENDED';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Live Classes</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {liveClasses.map(cls => {
          const status = getStatus(cls);

          return (
            <div key={cls.id} className="bg-white border rounded-lg p-5 shadow-sm">

              {/* Status */}
              <div className="mb-3">
                {status === 'LIVE' && (
                  <span className="text-red-600 font-semibold">🔴 LIVE NOW</span>
                )}
                {status === 'UPCOMING' && (
                  <span className="text-blue-600 font-semibold">Upcoming</span>
                )}
                {status === 'ENDED' && (
                  <span className="text-gray-500 font-semibold">Ended</span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold mb-2">{cls.title}</h2>

              {/* Info */}
              <div className="text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4" />
                  {cls.mentor}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {cls.date} at {cls.time}
                </div>
              </div>

              {/* Action */}
              <Button
                className={`w-full ${
                  status === 'LIVE'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
                disabled={status !== 'LIVE'}
                onClick={() => window.open(cls.meetLink, '_blank')}
              >
                {status === 'LIVE' ? 'Join Live Class' : 'Not Live'}
              </Button>

            </div>
          );
        })}
      </div>
    </div>
  );
}