
import { useContext } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import BookingForm from "./components/BookingForm";
import DoctorCard from "./components/DoctorCard";
import Appointments from "./components/appointments";
import Search from "./components/Search";

import { DoctorContext } from "./context/CoctotContext";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

export default function App() {
  const {
    addtocart,
    selectedDoctor,
    addAppointment,
    closeBookingForm,
    filteredDoctors,
    search,
    setSearch,
  } = useContext(DoctorContext);

  return (
    <div className="app" dir="rtl">
      <Header />
      <Hero />
<Dashboard />
      <section className="doctors-section" id="doctors">
        <div className="section-heading">
          <p>تیم پزشکی ما</p>
          <h2>پزشکان متخصص</h2>
          <span>
            پزشک مناسب خود را انتخاب کنید و برای رزرو نوبت اقدام کنید.
          </span>
        </div>

        <Search search={search} setSearch={setSearch} />

        <div className="doctors-grid">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBook={addtocart}
            />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <p className="no-doctors">
            پزشکی با این نام پیدا نشد.
          </p>
        )}

        {selectedDoctor && (
          <BookingForm
            doctor={selectedDoctor}
            addAppointment={addAppointment}
            onClose={closeBookingForm}
          />
        )}

        <Appointments />
      </section>
          <Footer />
    </div>
  );
}
