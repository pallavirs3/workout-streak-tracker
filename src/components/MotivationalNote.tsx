
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { StickyNote } from 'lucide-react';

const MotivationalNote: React.FC = () => {
  return (
    <Card className="w-full max-w-sm bg-yellow-100 border-yellow-300 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-200">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <StickyNote className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
          <div className="space-y-3">
            <div className="text-center">
              <img 
                src="/lovable-uploads/bd7a6566-7735-436c-a469-5979459d71eb.png" 
                alt="Motivation" 
                className="w-full h-32 object-cover rounded-lg shadow-sm"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-yellow-800 text-sm mb-2">
                Daily Motivation
              </h3>
              <p className="text-xs text-yellow-700 leading-relaxed">
                "Not just looks, but strength within. Every rep counts, every set matters. 
                Push through today - your future self will thank you! 💪"
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MotivationalNote;
