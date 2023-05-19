'use client'

import React, { useEffect, useCallback } from 'react';

import { toast } from "react-hot-toast";

// Declare the Eventbrite widget type from their API
declare global {
  interface Window {
    EBWidgets: {
      createWidget: (options: {
        widgetType: string;
        eventId: string;
        modal: boolean;
        modalTriggerElementId: string;
        onOrderComplete: () => void;
      }) => void;
    };
  }
}

const EventBriteButton = () => {
  // Example callback function
  const orderComplete = useCallback(() => {
      console.log('Order complete!');
      toast.success('Order complete!');
  }, []);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
    script.async = true;

    script.onload = () => {
      window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '627499787757',
        modal: true,
        modalTriggerElementId: 'eventbrite-widget-modal-trigger-627499787757',
        onOrderComplete: orderComplete
      });
    };

    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, [orderComplete]);

  return (
    <>
      {/* Noscript content for added SEO */}
      <noscript>
        <a 
          href="https://emonightmay27.eventbrite.com.au" 
          rel="noopener noreferrer" 
          target="_blank"
        >
          Buy Tickets on Eventbrite
        </a>
      </noscript>

      {/* You can customize this button any way you like */}
      <div 
        className='
          fixed
          bottom-0
          shadow-xl

          flex 
          flex-col
          w-full
          justify-center 
          items-center
          
          bg-white 
          py-4 
          px-2 
          rounded-sm
          '
        > 
          <div className='text-neutral-800 py-4 px-2 font-semibold'>
            $12.56 - $20
          </div>
          <div className='flex flex-row justify-center'>
            <div className='text-md text-white font-semibold'>
              <button id="eventbrite-widget-modal-trigger-627499787757" type="button">
                <div className='bg-orange-600 py-4 px-48 rounded-lg'>
                  Get tickets
                </div>
              </button>
            </div>
          </div>
      </div>
    </>
  );
}

export default EventBriteButton;