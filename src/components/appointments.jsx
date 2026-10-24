
import { useContext } from "react";
import { DoctorContext } from "../context/CoctotContext";

export default function Appointments() {
  const { appointments, removeAppointment } = useContext(DoctorContext);

  const sortedAppointments = [...appointments].sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);

    return dateB - dateA;
  });

  return (
    <section className="appointments-list">
      <h2>نوبت‌های ثبت‌شده</h2>

      {sortedAppointments.length === 0 ? (
        <p>هنوز نوبتی ثبت نشده است.</p>
      ) : (
        sortedAppointments.map((item) => (
          <div key={item.id} className="appointment-card">
            <p>نام بیمار: {item.name}</p>
            <p>تلفن: {item.phone}</p>
            <p>پزشک: {item.doctorName}</p>
            <p>تاریخ: {item.date}</p>
            <p>ساعت: {item.time}</p>

            <button
              type="button"
              onClick={() => removeAppointment(item.id)}
            >
              لغو نوبت
            </button>
          </div>
        ))
      )}
    </section>
  );
}
