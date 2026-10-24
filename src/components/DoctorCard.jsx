
export default function DoctorCard({ doctor, onBook }) {
  return (
    <div className="doctor-card">
      <img src={doctor.img} alt={doctor.name} />

      <div className="doctor-info">
        <h3>{doctor.name}</h3>
        <p>{doctor.specialty}</p>
        <p>امتیاز: {doctor.rating}</p>
        <p>{doctor.experience} سال سابقه</p>

        <button className="doctor-btn" onClick={() => onBook(doctor)}>
          رزرو نوبت
        </button>
      </div>
    </div>
  );
}
