import { useState, useEffect } from 'react';
import Dropdown from "../Dropdown/Dropdown.jsx";
import styles from "./Regestraion1.module.css";

function Regestration1({onChange, data}) {
  const schools = ["ENSIA", "NHSM", "NSCS", "ENSSA", "NSNN"];
  const academicLevels = [
    "1st year",
    "2nd year",
    "3rd year",
    "4th year",
    "5th year",
  ];
  const departments = ["IT", "Relex", "Design", "HR", "Event", "Marketing"];
  const [selectedOption1, setSelectedOption1] = useState(() => {
      const saved = localStorage.getItem('selectedOption1');
      return saved ? JSON.parse(saved) : "Select";    
  });
  const [selectedOption2, setSelectedOption2] = useState(() => {
      const saved = localStorage.getItem('selectedOption2');
      return saved ? JSON.parse(saved) : "Select";    
  });
  // Save selectedStep1 to localStorage
  useEffect(() => {
      localStorage.setItem('selectedOption1', JSON.stringify(selectedOption1));
  }, [selectedOption1]);
  
  // Save selectedStep2 to localStorage
  useEffect(() => {
      localStorage.setItem('selectedOption2', JSON.stringify(selectedOption2));
  }, [selectedOption2]);  
  // Update data object with all step values
  useEffect(() => {
      if (data) {
          if (selectedOption1 !== 0) data.School = selectedOption1;
          if (selectedOption2 !== 0) data.AcademicLevel = selectedOption2;
      }
  }, [selectedOption1, selectedOption2, data]);
  return (
    <section className={styles.pInfos}>
      <div className={styles.titleContainer}>
        <p className="text-xl">Personal information</p>
      </div>
      <div action="" id="myForm" className={styles.myForm}>
        <div className={styles.group}>
          <div className={styles.inputGroup}>
            <input type="text" name="fName" id="fName" required value={data.FirstName} onChange={(e) => onChange("FirstName", e.target.value)}/>
            <label htmlFor="fName" className="labelText">
              First name <span>*</span>
            </label>
          </div>
          <div className={styles.inputGroup}>
            <input type="text" name="lName" id="lName" required value={data.LastName} onChange={(e) => onChange("LastName", e.target.value)}/>
            <label htmlFor="lName" className="labelText">
              Last Name <span>*</span>
            </label>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="eg : mohammed.amine@ensia.edu.dz"
              value={data.Email} onChange={(e) => onChange("Email", e.target.value)}
            />
            <label htmlFor="email">
              Email <span>*</span>
            </label>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.inputGroup}>
            <div className={styles.numberInput}>
              <div className={styles.countryNumber}>
                <span>+213</span>
              </div>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="* ** ** ** **"
                value={data.PhoneNumber} onChange={(e) => onChange("PhoneNumber", e.target.value)}
              />
            </div>

            <label htmlFor="phoneNumber">Phone number</label>
          </div>
          <div
            className={styles.selectGroup}
            style={{ position: "relative", zIndex: "5" }}
          >
            <Dropdown options={schools} selectedOption={selectedOption1} setSelectedOption={setSelectedOption1}/>
            <label htmlFor="school">
              School <span>*</span>
            </label>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.selectGroup}>
            <Dropdown options={academicLevels} selectedOption={selectedOption2} setSelectedOption={setSelectedOption2}/>
            <label htmlFor="academicLevel">
              Academic level <span>*</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Regestration1;