import { useEffect, useState } from "react";
import "./App.css";
import { delay, motion } from "framer-motion";
const spring = {
  type: "spring",
  damping: 5,
  stiffness: 100,
};

const App = () => {
  useEffect(() => {
    calculateAge();
  }, []);

  const [day, setDay] = useState(15);
  const [month, setMonth] = useState(7);
  const [year, setYear] = useState(1999);

  const [values, setValues] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleDayInput = (e) => {
    const { value } = e.target;
    if (value.length > 2) {
      return;
    }
    setDay(value);
  };
  const handleMonthInput = (e) => {
    const { value } = e.target;
    if (value.length > 2) {
      return;
    }
    setMonth(value);
  };
  const handleYearInput = (e) => {
    const { value } = e.target;
    if (value.length > 4) {
      return;
    }
    setYear(value);
  };

  const calculateAge = () => {
    const birthDate = new Date(year, month - 1, day);
    let yearDiff = new Date().getFullYear() - birthDate.getFullYear();
    let monthDiff = new Date().getMonth() - birthDate.getMonth();
    let dayDiff = new Date().getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff == 0 && dayDiff < 0)) {
      yearDiff -= 1;
      monthDiff += 12;
    }
    if (dayDiff < 0) {
      const lastDayOfMonth = new Date(year, month - 1, 0).getDate();
      dayDiff += lastDayOfMonth;
      monthDiff -= 1;
    }
    setValues({
      day: dayDiff,
      month: monthDiff,
      year: yearDiff,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge();
  };

  return (
    <div className="screen h-auto overflow-auto w-screen p-5 flex items-center justify-center">
      <div className="container max-w-7xl mx-auto h-max rounded-xl p-10 grid md:grid-cols-3 auto-rows-[300px] gap-4">
        <motion.div
          transition={spring}
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          exit={{ x: 0 }}
          delay={{ delay: 1 }}
          className="boxes form-box  rounded-md"
        >
          <form className="flex flex-col p-3 gap-2" onSubmit={handleSubmit}>
            <input
              name="day"
              value={day}
              onChange={handleDayInput}
              className="p-2 rounded-full bg-yellow-200 w-56 border-2 border-gray-950"
              type="text"
              placeholder="Day"
            />
            <input
              name="month"
              value={month}
              onChange={handleMonthInput}
              className="p-2 rounded-full bg-teal-200 w-56 ms-auto border-2 border-gray-950"
              type="text"
              placeholder="Month"
            />
            <input
              name="year"
              value={year}
              onChange={handleYearInput}
              className="p-2 rounded-full bg-purple-200 w-56 border-2 border-gray-950"
              type="text"
              placeholder="Year"
            />
            <button className="btn p-2 w-56 ms-auto rounded-full bg-orange-200 border-0 text-black border-2 border-gray-950 flex justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5004 12H5.00043M4.91577 12.2915L2.58085 19.2662C2.39742 19.8142 2.3057 20.0881 2.37152 20.2569C2.42868 20.4034 2.55144 20.5145 2.70292 20.5567C2.87736 20.6054 3.14083 20.4869 3.66776 20.2497L20.3792 12.7296C20.8936 12.4981 21.1507 12.3824 21.2302 12.2216C21.2993 12.082 21.2993 11.9181 21.2302 11.7784C21.1507 11.6177 20.8936 11.5019 20.3792 11.2705L3.66193 3.74776C3.13659 3.51135 2.87392 3.39315 2.69966 3.44164C2.54832 3.48375 2.42556 3.59454 2.36821 3.74078C2.30216 3.90917 2.3929 4.18255 2.57437 4.72931L4.91642 11.7856C4.94759 11.8795 4.96317 11.9264 4.96933 11.9744C4.97479 12.0171 4.97473 12.0602 4.96916 12.1028C4.96289 12.1508 4.94718 12.1977 4.91577 12.2915Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </motion.div>
        <motion.div
          transition={spring}
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          exit={{ x: 0 }}
          delay={{ delay: 1 }}
          className="boxes md:col-span-2 rounded-md"
        >
          <div className="image flex items-center justify-center">
            <h1 className="text-3xl xl:text-9xl font-bold antialiased ms-2 text-white">
              Age Calculator
            </h1>
          </div>
        </motion.div>
        <motion.div
          transition={spring}
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          exit={{ y: 0 }}
          delay={{ delay: 20 }}
          className="boxes rounded-md"
        >
          <div className="years-wrapper">
            <span className="years-number text-purple-700">
              {values.year === "" ? "--" : values.year}
            </span>
            <p className="years-text text-purple-700 text-end pe-3">Years</p>
          </div>
        </motion.div>
        <motion.div
          transition={spring}
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          exit={{ y: 0 }}
          delay={{ delay: 2 }}
          className="boxes rounded-md"
        >
          <div className="years-wrapper">
            <span className="years-number text-sky-500">
              {values.month === "" ? "--" : values.month}
            </span>
            <p className="years-text text-purple-700 text-end pe-3">Months</p>
          </div>
        </motion.div>
        <motion.div
          transition={spring}
          initial={{ y: 60 }}
          animate={{ y: 0 }}
          exit={{ y: 0 }}
          delay={{ delay: 3 }}
          className="boxes rounded-md"
        >
          <div className="years-wrapper">
            <span className="years-number text-green-400">
              {values.day === "" ? "--" : values.day}
            </span>
            <p className="years-text text-purple-700 text-end pe-3">Days</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
