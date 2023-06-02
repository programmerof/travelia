import './Form.css'; // Import the CSS file
import React, { useState } from 'react';
import axios from 'axios';

const TrekkingForm = () => {
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [clientName, setClientName] = useState('');
  const [trekTime, setTrekTime] = useState('');
  const [soloGroup, setSoloGroup] = useState('');
  const [trekLocation, setTrekLocation] = useState('');

  const trekkingSites = [
    // Existing trekkingSites data
    {
      name: 'Annapurna Base Camp Trek',
      duration: '13 days',
      difficulty: 'Hard',
      description: 'Offers diverse landscapes and a chance to visit Annapurna Sanctuary.',
      location: {
        city: 'Pokhara',
        district: 'Kaski',
        province: 'Gandaki',
        zipCode: '33700',
      },
    }
  ];


  const [filteredSites, setFilteredSites] = useState(trekkingSites);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data
    const formData = new FormData();
    formData.append('clientName', clientName);
    formData.append('trekTime', trekTime);
    formData.append('soloGroup', soloGroup);
    formData.append('trekLocation', trekLocation);
    formData.append('province', province);
    formData.append('city', city);
    formData.append('difficulty', difficulty);

    try {
      // Send the form data to Formspree endpoint
      await axios.post('https://formspree.io/f/xqkoooen', formData);

      // Reset the form fields after successful submission
      setClientName('');
      setTrekTime('');
      setSoloGroup('');
      setTrekLocation('');
      setProvince('');
      setCity('');
      setDifficulty('');

      // Perform any additional actions after successful submission or redirect the user
      // For example, you can show a success message or navigate to a different page
      alert('Form submitted successfully!');
    } catch (error) {
      // Handle any errors that occur during form submission
      console.error('Error submitting form:', error);
      // Display an error message to the user or perform any necessary actions
      alert('An error occurred while submitting the form. Please try again later.');
    }
  };

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setProvince(selectedProvince);

    const filtered = trekkingSites.filter((site) => {
      return (
        (site.location.province === selectedProvince || selectedProvince === '') &&
        (site.location.city === city || city === '') &&
        (site.difficulty === difficulty || difficulty === '') &&
        (site.name.toLowerCase().includes(trekLocation.toLowerCase()) || trekLocation === '')
      );
    });

    setFilteredSites(filtered);
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setCity(selectedCity);

    const filtered = trekkingSites.filter((site) => {
      return (
        (site.location.city === selectedCity || selectedCity === '') &&
        (site.location.province === province || province === '') &&
        (site.difficulty === difficulty || difficulty === '') &&
        (site.name.toLowerCase().includes(trekLocation.toLowerCase()) || trekLocation === '')
      );
    });

    setFilteredSites(filtered);
  };

  const handleDifficultyChange = (e) => {
    const selectedDifficulty = e.target.value;
    setDifficulty(selectedDifficulty);

    const filtered = trekkingSites.filter((site) => {
      return (
        (site.difficulty === selectedDifficulty || selectedDifficulty === '') &&
        (site.location.city === city || city === '') &&
        (site.location.province === province || province === '') &&
        (site.name.toLowerCase().includes(trekLocation.toLowerCase()) || trekLocation === '')
      );
    });

    setFilteredSites(filtered);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Client Name */}
      <label htmlFor="clientName">Client Name:</label>
      <input
        type="text"
        id="clientName"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />

      {/* Trek Time */}
      <label htmlFor="trekTime">Trek Time:</label>
      <select
        id="trekTime"
        value={trekTime}
        onChange={(e) => setTrekTime(e.target.value)}
      >
        <option value="">All</option>
        <option value="Baisakh">Baisakh</option>
        <option value="Jestha">Jestha</option>
        <option value="Ashadh">Ashadh</option>
        <option value="Shrawan">Shrawan</option>
        <option value="Bhadra">Bhadra</option>
        <option value="Ashwin">Ashwin</option>
        <option value="Kartik">Kartik</option>
        <option value="Mangsir">Mangsir</option>
        <option value="Poush">Poush</option>
        <option value="Magh">Magh</option>
        <option value="Falgun">Falgun</option>
        <option value="Chaitra">Chaitra</option>
      </select>

      {/* Solo/Group Preference
            <label htmlFor="groupPreference">Trek Time:</label>
      <select
        id="groupPreference"
        value={groupPreference}
        onChange={(e) => setGroupPreference(e.target.value)}
      >
        <option value="">All</option>
        <option value="Solo">Solo</option>
        <option value="Group">Group</option>
              </select> */}



      {/* Solo/Group Preference */}
      <label htmlFor="soloGroup">Solo/Group:</label>
      <select
        id="soloGroup"
        value={soloGroup}
        onChange={(e) => setSoloGroup(e.target.value)}
      >
        <option value="solo">Solo</option>
        <option value="group">Group</option>
      </select>


      {/* Trek Location (Trek Name) */}
      <label htmlFor="trekLocation">Trek Location (Trek Name):</label>
      <select
        id="trekLocation"
        value={trekLocation}
        onChange={(e) => setTrekLocation(e.target.value)}
      >
        <option value="">All</option>
        {Array.from(new Set(trekkingSites.map((site) => site.name))).map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      {/* Province filter */}
      <label htmlFor="province">Select Province:</label>
      <select id="province" value={province} onChange={handleProvinceChange}>
        <option value="">All</option>
        {Array.from(new Set(trekkingSites.map((site) => site.location.province))).map((province) => (
          <option key={province} value={province}>
            {province}
          </option>
        ))}
      </select>

      {/* City filter */}
      <label htmlFor="city">Select City:</label>
      <select id="city" value={city} onChange={handleCityChange}>
        <option value="">All</option>
        {Array.from(new Set(trekkingSites.map((site) => site.location.city))).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      {/* Difficulty filter */}
      <label htmlFor="difficulty">Select Difficulty:</label>
      <select id="difficulty" value={difficulty} onChange={handleDifficultyChange}>
        <option value="">All</option>
        {Array.from(new Set(trekkingSites.map((site) => site.difficulty))).map((difficulty) => (
          <option key={difficulty} value={difficulty}>
            {difficulty}
          </option>
        ))}
      </select>

      {/* Render filtered trekking sites */}
      {filteredSites.map((site) => (
        <div key={site.name}>
          <h3>{site.name}</h3>
          <p>Duration: {site.duration}</p>
          <p>Description: {site.description}</p>
          <p>
            Location: {site.location.city}, {site.location.district}, {site.location.province}, {site.location.zipCode}
          </p>
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default TrekkingForm;
