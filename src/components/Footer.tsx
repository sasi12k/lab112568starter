import { type FooterProps } from "../libs/Footer";

export default function Footer({ 
  year = "2025", 
  fullName = "ศศิกานต์ ปาคำ", 
  studentId = "660612159" 
}: FooterProps) {
  return (
    <footer className="align-self-end text-center w-100">
      <p className="text-white bg-secondary p-4 m-0">
        Copyright © {year} {fullName} {studentId}
      </p>
    </footer>
  );
}