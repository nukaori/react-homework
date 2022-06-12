import React, { useState } from "react";
import { TripList } from "../components/TripList";

export const MainPage = ({ trips }) => {
    const allTrips = [...trips]
    const [filteredTrips, setFilteredTrips] = useState(allTrips)

    function searchFilter(event) {
        setFilteredTrips(allTrips.filter(trip => trip.title.toLowerCase().includes(event.target.value.toLowerCase())))
    }

    function durationFilter(event) {

        switch (event.target.value) {
            case "0_x_5":
                setFilteredTrips(allTrips.filter(trip => trip.duration < 5))
                break;
            case "5_x_10":
                setFilteredTrips(allTrips.filter(trip => trip.duration >= 5 && trip.duration < 10))
                break;
            case "10_x":
                setFilteredTrips(allTrips.filter(trip => trip.duration >= 10))
                break;
            default:
                setFilteredTrips(allTrips)
        }
    }

    function levelFilter(event) {

        switch (event.target.value) {
            case "easy":
                setFilteredTrips(allTrips.filter(trip => trip.level === "easy"))
                break;
            case "moderate":
                setFilteredTrips(allTrips.filter(trip => trip.level === "moderate"))
                break;
            case "difficult":
                setFilteredTrips(allTrips.filter(trip => trip.level === "difficult"))
                break;
            default:
                setFilteredTrips(allTrips)
        }
    }



    return (
        <main>
            <h1 className="visually-hidden">Travel App</h1>
            <section className="trips-filter">
                <h2 className="visually-hidden">Trips filter</h2>
                <form className="trips-filter__form" autoComplete="off">
                    <label className="trips-filter__search input">
                        <span className="visually-hidden">Search by name</span>
                        <input onChange={searchFilter} name="search" type="search" placeholder="search by title" />
                    </label>
                    <label className="select">
                        <span className="visually-hidden">Search by duration</span>
                        <select onChange={durationFilter} name="duration">
                            <option value="">duration</option>
                            <option value="0_x_5">&lt; 5 days</option>
                            <option value="5_x_10">&lt; 10 days</option>
                            <option value="10_x">&ge; 10 days</option>
                        </select>
                    </label>
                    <label className="select">
                        <span className="visually-hidden">Search by level</span>
                        <select onChange={levelFilter} name="level">
                            <option value="">level</option>
                            <option value="easy">easy</option>
                            <option value="moderate">moderate</option>
                            <option value="difficult">difficult</option>
                        </select>
                    </label>
                </form>
            </section>
            <TripList trips={filteredTrips} />
        </main>
    )
}