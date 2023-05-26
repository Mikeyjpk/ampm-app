'use client'

import React, { useEffect, useCallback } from 'react';

import { toast } from "react-hot-toast";

// Declare the Eventbrite widget type from their API
declare global {
  interface Window {
    EBWidgets: {
      createWidget: (options: {
        widgetType: string;
        eventId: string | null;
        modal: boolean;
        modalTriggerElementId: string;
        onOrderComplete: () => void;
      }) => void;
    };
  }
}

interface EventBriteButtonProps {
  eventIdNumber: string | null;
}

const EventBriteButton: React.FC<EventBriteButtonProps> = ({
  eventIdNumber
}) => {
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
        eventId: eventIdNumber,
        modal: true,
        modalTriggerElementId: `eventbrite-widget-modal-trigger-${eventIdNumber}`,
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
      <div> 
          <div className='bg-white flex flex-row justify-center w-full pb-6 pt-10 shadow-2xl'>
              <button id={`eventbrite-widget-modal-trigger-${eventIdNumber}`} type="button" 
                className='
                w-11/12 
                bg-orange-600 
                rounded-lg
                h-12 
                hover:bg-orange-500

                text-md 
                text-white
                '
              >
                Get tickets
              </button>
          </div>
      </div>
    </>
  );
}

export default EventBriteButton;