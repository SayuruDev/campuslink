import React, { useState } from "react";

function TimeTable() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16]; 

  const [selected, setSelected] = useState([]);

  const toggle = (day, hour) => {
    const slot = `${day}-${hour}`;
    setSelected((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]
    );
  };

  return (
    <div>
      {hours.map((hour) => (
        <div key={hour} style={{ display: "flex" }}>
          {days.map((day) => {
            const slot = `${day}-${hour}`;
            const isSelected = selected.includes(slot);
            return (
              <div
                key={slot}
                onClick={() => toggle(day, hour)}
                style={{
                  width: 40,
                  height: 40,
                  border: "1px solid black",
                  background: isSelected ? "gray" : "white",
                }}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default TimeTable;