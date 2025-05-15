import React, { useState } from 'react';
import './ReservationForm.css';
import restaurant from "../assets/images/restaurant.jpg"
import chef from "../assets/images/restaurant chef B.jpg"
import food from "../assets/images/restauranfood.jpg"
function ReservationForm() {
  const [step, setStep] = useState(1);
  const [policy, setPolicy] = useState(false);
  const [reservationData, setReservationData] = useState({
    seating: 'indoor',
    date: '',
    time: '',
    diners: '',
    occasion: '',
  });

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const handleReservationChange = (e) => {
    setReservationData({ ...reservationData, [e.target.name]: e.target.value });
  };
  const handlePolicy = (e) => {
    setPolicy(e.target.checked);
  };

  const handleUserChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

 const [confirmed, setConfirmed] = useState(false)

 const handleConfirm = (e) => {
  e.preventDefault();
  setConfirmed(true);

  setTimeout(() => {
    setConfirmed(false);

    setUserData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialRequests: '',
    });

    setReservationData({
      seating: 'indoor',
      date: '',
      time: '',
      diners: '',
      occasion: '',
    });

    setPolicy(false);
    setStep(1);
  }, 4000);
};

  return (
    <div className="reservation-container">
      {step === 1 ? (
        <>
        
          <form onSubmit={handleReservationSubmit} className="reservation-form">
          <h2 className="reservation-title">Reservations</h2>
            <div className="seating-options">
              <label>
                <input 
                  type="radio"
                  name="seating"
                  value="indoor"
                  checked={reservationData.seating === 'indoor'}
                  onChange={handleReservationChange}
                />
                Indoor seating
              </label>
              <label>
                <input
                  type="radio"
                  name="seating"
                  value="outdoor"
                  checked={reservationData.seating === 'outdoor'}
                  onChange={handleReservationChange}
                />
                Outdoor seating
              </label>
            </div>

            <div className="input-group">
             <div className='inputs'>
             <input type="date" name="date" onChange={handleReservationChange} required  />
              <select name="diners" onChange={handleReservationChange} required>
                <option value="">No. of Diners</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
             </div>
               <div className='inputs'>
               <select name="occasion" onChange={handleReservationChange} required>
                <option value="">Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
              <input type="time" name="time" onChange={handleReservationChange} required />
               </div>
            </div>

      <div className="reservation-images">
        <img src={restaurant} alt="interior" ></img>
        <img src={chef} alt="chef" />
        <img src={food} alt="food" />
      </div>
            <button type="submit" className="reserve-btn">Reserve a Table</button>
          </form>
    
          
        </>
      ) : (
        <>
       
<form onSubmit={handleConfirm} className="reservation-form">
<h2 className="reservation-title">Confirm Reservation</h2>
  {/* Input Pair Row 1 */}
  <div className="input-pair">
    <input
      type="text"
      name="firstName"
      placeholder="First name"
      onChange={handleUserChange}
      required
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last name"
      onChange={handleUserChange}
      required
    />
  </div>

  {/* Input Pair Row 2 */}
  <div className="input-pair">
    <input
      type="email"
      name="email"
      placeholder="you@company.com"
      onChange={handleUserChange}
      required
    />
    <input
      type="tel"
      name="phone"
      placeholder="Phone number"
      onChange={handleUserChange}
      required
    />
  </div>


  {/* Reservation Summary */}
  <div className="confirmation-summary">
   <div className='left-side'>
   <div className='confirmation-data'>    
    <p>🕘<strong>{reservationData.date}</strong></p>
    <p>👥 <strong>{reservationData.diners} Diners</strong></p>
    </div>
    <div className='confirmation-data'>
    <p>⏰ <strong>{reservationData.time}</strong></p>
    <p>🎉 <strong>{reservationData.occasion}</strong></p>
    <p>📍 <strong>{reservationData.seating === 'outdoor' ? 'Outdoor seating' : 'Indoor seating'}</strong></p>
    </div>

     <div className="confirmation-data">
     <label>
  <input
    type="checkbox"
    name="policy"
    onChange={handlePolicy}
    required
  />
  You agree to our <a href="#">privacy policy</a>
</label>
     </div>
   </div>
      {/* Textarea */}
  <div className="textarea-container">
    <label >Special Requests</label>
    <textarea
      name="specialRequests"
      placeholder="Comment"
      onChange={handleUserChange}
   
    />
  </div>
  </div>

  <div className="reservation-images">
     <img src={restaurant} alt="interior" ></img>
        <img src={chef} alt="chef" />
        <img src={food} alt="food" />
      </div>

  {/* Submit Button */}
  <button type="submit" className="reserve-btn">Confirm Reservation</button>

  {/* Confirmation Message */}
  {confirmed && (
    <div className="confirmation-alert">
      <p>Your reservation has been confirmed. Check your email.</p>
    </div>
    )}
          </form>
        </>
      )}

    </div>
  );
}

export default ReservationForm;
