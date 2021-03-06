import axios from "axios";

export default {
    // Gets all trips
    getTrips: function () {
        return axios.get("/api/trips");
    },
    // Gets the trip with the given id
    getTrip: function (id) {
        return axios.get("/api/trips/" + id);
    },

    getTripCity: function (city) {
        return axios.post("api/trips/lookup", city);
    },

    // Deletes the trip with the given id
    deleteTrip: function (id) {
        return axios.delete("/api/trips/" + id);
    },
    // Saves a trip to the database
    saveTrip: function (tripData) {
        return axios.post("/api/trips", tripData);
    },

    login: function (credentials) {
        return axios.post("/api/auth/login", credentials)
    },
    signup: function (credentials) {
        return axios.post("/api/auth/signup", credentials)
    },
    logout: function () {
        return axios.get("/api/auth/logout")
    },
    checkLogin: function (username) {
        return axios.get("/api/auth/checklogin")
    }
};
