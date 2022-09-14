import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    let data = [];
    for (let i = 0; i < 6; i++) {
      data.push({
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        description: faker.company.catchPhraseDescriptor(),
        image: faker.image.avatar(),
      });
    }
    setServices(data);
  }, []);

  return (
    <div className="w-full p-5">
      <div className="max-w-[1250px] mx-auto">
        <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.id}
              className="w-full h-fit cursor-pointer rounded-lg shadow-md hover:shadow-xl"
            >
              <img src={s.image} className="object-conver w-full h-52" />
              <div className="p-3">
                <h3 className="w-full text-lg">{s.name}</h3>
                <p className="text-base">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
