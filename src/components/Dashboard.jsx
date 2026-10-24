
import { useContext } from "react";
import { DoctorContext } from "../context/CoctotContext";

export default function Dashboard() {
  const { doctors, appointments } = useContext(DoctorContext);

  const now = new Date();

  const today = `${now.getFullYear()}-${String(
    now.getMonth() + 1
  ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  const todayAppointments = appointments.filter(
    (item) => item.date === today
  );

  const upcomingAppointments = appointments.filter(
    (item) => item.date > today
  );

  return (
    <section className="dashboard">
      <h2>داشبورد مدیریتی</h2>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>تعداد پزشکان</h3>
          <p>{doctors.length}</p>
        </div>

        <div className="dashboard-card">
          <h3>کل نوبت‌ها</h3>
          <p>{appointments.length}</p>
        </div>

        <div className="dashboard-card">
          <h3>نوبت‌های امروز</h3>
          <p>{todayAppointments.length}</p>
        </div>

        <div className="dashboard-card">
          <h3>نوبت‌های آینده</h3>
          <p>{upcomingAppointments.length}</p>
        </div>
      </div>
    </section>
  );
}

