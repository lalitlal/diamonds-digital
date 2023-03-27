import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyBooking = () => {
  return <InlineWidget url={process.env.NEXT_PUBLIC_API_CALENDLY_WEBSITE} />;
};

export default CalendlyBooking;
