import React from "react";
import { TripCard } from "./TripCard";

export const TripList = ({ trips }) => {

    return (
        <section className="trips">
            <h2 className="visually-hidden">Trips List</h2>
            <ul className="trip-list">
                {
                    trips.map(trip => (
                        <TripCard key={trip.id} trip={trip} />
                    )
                    )
                }
            </ul>
        </section>
    )
}