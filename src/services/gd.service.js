import http from "../http-common";
class GDDataService {
  // get All Customer
  ShowAllCustomer() {
    return http.get(`/GD/ShowAllCustomer`);
  }

  // get All Countris
  getcountries() {
    return http.get(`/GD/getcountries`);
  }

  // get All VisaTypes
  getVisaType() {
    return http.get(`/GD/getVisaType`);
  }

  // get  VisaTypes per country selection

  getCountryVisaType(selectedCountry) {
    return http.get(`/GD/getCountryVisaType/${selectedCountry}`);
  }

  // get All Extras
  getExtras() {
    return http.get(`/GD/getExtras`);
  }

  // get All ContryFlags
  getContryFlags() {
    return http.get(`/GD/getContryFlags`);
  }

  // get All ShenginContryFlags
  getShenginContryFlags() {
    return http.get(`/GD/getShenginContryFlags`);
  }

  // get All Customer With Booking
  ShowAllCustomerWithBooking() {
    return http.get(`/GD/ShowAllFiles`);
  }

  // get All Admin
  ShowAllAdmin() {
    return http.get(`/GD/ShowAllAdmin`);
  }

  // get All Logs
  ShowAllLogs() {
    return http.get(`/GD/ShowAllLogs`);
  }

  // get All Appointments
  ShowAllAppointments() {
    return http.get(`/GD/ShowAllAppointments`);
  }

  // get All Bookings
  ShowAllBookings() {
    return http.get(`/GD/ShowAllBookings`);
  }

  // get AllSuperAdmin
  ShowSuperAdmin() {
    return http.get(`/GD/ShowSuperAdmin`);
  }

  // AdminLogin
  AdminLogin() {
    return http.get(`/GD/AdminLogin`);
  }

  // User login
  login() {
    return http.get(`/GD/login`);
  }

  // SignUp
  signup(data) {
    return http.get(`/GD/signup`, data);
  }

  // Save Data
  saveData(data) {
    return http.get(`/GD/saveData`, data);
  }

  calculateSoonestAppointment(id) {
    return http.get(`/GD/calculateSoonestAppointment/${id}`);
  }

  // upload File
  upload(data) {
    return http.post(`/GD/upload`, data);
  }
}

export default new GDDataService();
