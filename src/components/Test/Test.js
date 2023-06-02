import React from 'react';

const TrekTable = () => {
  const trekData = [
    {
      trekName: 'Annapurna Base Camp Trek',
      duration: '13 days',
      difficulty: 'Hard',
      description: 'Offers diverse landscapes and a chance to visit Annapurna Sanctuary.',
      location: 'Pokhara, Kaski, Gandaki, 33700'
    }
  ];

  return (
    <div className="mx-auto max-w-md p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Trek Information</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Trek Name</th>
            <th className="border border-gray-300 px-4 py-2">Duration</th>
            <th className="border border-gray-300 px-4 py-2">Difficulty</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {trekData.map((trek, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
              <td className="border border-gray-300 px-4 py-2">{trek.trekName}</td>
              <td className="border border-gray-300 px-4 py-2">{trek.duration}</td>
              <td className="border border-gray-300 px-4 py-2">{trek.difficulty}</td>
              <td className="border border-gray-300 px-4 py-2">{trek.description}</td>
              <td className="border border-gray-300 px-4 py-2">{trek.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrekTable;
