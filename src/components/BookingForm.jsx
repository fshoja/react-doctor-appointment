
import { useState } from "react";

export default function BookingForm({ doctor, addAppointment, onClose }) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");

  const today = new Date().toLocaleDateString("en-CA");

  const submitHandeler = (e) => {
    e.preventDefault();

    // جلوگیری از ثبت تاریخ گذشته
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const selectedDate = new Date(`${date}T00:00:00`);

    if (selectedDate < currentDate) {
      alert("تاریخ نوبت نمی‌تواند در گذشته باشد.");
      return;
    }

    // ساخت اطلاعات نوبت
    const newForm = {
      id: Date.now(),
      name,
      phone,
      date,
      time,
      doctorName: doctor.name,
    };

    // ثبت نوبت
    const success = addAppointment(newForm);

    // پاک کردن فرم بعد از رزرو موفق
    if (success) {
      setName("");
      setPhone("");
      setDate("");
      setTime("");
      onClose();
    }
  };

  return (
    <div className="booking-form">
      <h2>رزرو نوبت</h2>
      <p>پزشک: {doctor.name}</p>

      <form onSubmit={submitHandeler}>
        <label htmlFor="patient-name">نام بیمار</label>
        <input
          id="patient-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="نام بیمار را وارد کنید..."
          required
        />

        <label htmlFor="patient-phone">تلفن</label>
<input
  id="patient-phone"
  type="tel"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  placeholder="شماره تلفن را وارد کنید..."
  minLength={10}
  maxLength={11}
  pattern="[0-9]{10,11}"
  required
/>

        <label htmlFor="appointment-date">تاریخ</label>
        <input
          id="appointment-date"
          type="date"
          min={today}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label htmlFor="appointment-time">ساعت</label>
        <input
          id="appointment-time"
          type="time"
          dir="ltr"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <button type="submit">ثبت نوبت</button>

        <button type="button" onClick={onClose}>
          بستن فرم
        </button>
      </form>
    </div>
  );
}
