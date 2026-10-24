
import { createContext, useEffect, useState } from "react";
import { doctors } from "../data";

export const DoctorContext = createContext();

export const DoctorContextProvider = ({ children }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("همه");

  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem("doctord");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("doctord", JSON.stringify(appointments));
  }, [appointments]);

  const addtocart = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const addAppointment = (newForm) => {
    const isDuplicate = appointments.some(
      (item) =>
        item.doctorName === newForm.doctorName &&
        item.date === newForm.date &&
        item.time === newForm.time
    );

    if (isDuplicate) {
      alert("این زمان برای پزشک انتخاب‌شده قبلاً رزرو شده است.");
      return false;
    }

    setAppointments((prev) => [...prev, newForm]);
    return true;
  };

  const removeAppointment = (id) => {
    setAppointments((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const closeBookingForm = () => {
    setSelectedDoctor(null);
  };

  const filteredDoctors = doctors.filter(
    (item) =>
      item.name.includes(search) &&
      (selectedSpecialty === "همه" ||
        item.specialty === selectedSpecialty)
  );

  const contextValue = {
    doctors,
    addtocart,
    selectedDoctor,
    addAppointment,
    appointments,
    removeAppointment,
    closeBookingForm,
    filteredDoctors,
    search,
    setSearch,
    selectedSpecialty,
    setSelectedSpecialty,
  };

  return (
    <DoctorContext.Provider value={contextValue}>
      {children}
    </DoctorContext.Provider>
  );
};
