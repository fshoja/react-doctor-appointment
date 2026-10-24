
import { useContext } from "react";
import { DoctorContext } from "../context/CoctotContext";

export default function Search() {
  const {
    search,
    setSearch,
    selectedSpecialty,
    setSelectedSpecialty,
  } = useContext(DoctorContext);

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="جست‌وجوی نام پزشک..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={selectedSpecialty}
        onChange={(e) => setSelectedSpecialty(e.target.value)}
      >
        <option value="همه">همه تخصص‌ها</option>
        <option value="قلب و عروق">قلب و عروق</option>
        <option value="پوست و مو">پوست و مو</option>
        <option value="مغز و اعصاب">مغز و اعصاب</option>
      </select>
    </div>
  );
}
