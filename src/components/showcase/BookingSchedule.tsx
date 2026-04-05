import React from 'react';

export interface BookingScheduleProps {}

const BookingSchedule: React.FC<BookingScheduleProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Booking / Schedule</h1>
            <h3>Book Your Session</h3>
            <br />
            <div className="text-block">
                <p>
                    Placeholder text for Booking / Schedule page. Add your booking and schedule content here.
                </p>
            </div>
        </div>
    );
};

export default BookingSchedule;
