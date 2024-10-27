import React, { useState } from 'react'
import { UserCircle, Car, MapPin } from "lucide-react"

export default function Component() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeRide, setActiveRide] = useState(null)
  const [activeTab, setActiveTab] = useState('dashboard')

  const handleLogin = (userData) => {
    setIsLoggedIn(true)
  }

  const handleBookRide = (rideDetails) => {
    setActiveRide(rideDetails)
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
          ModernRide: Efficient Transportation
        </h1>
        {!isLoggedIn ? (
          <RegistrationForm onLogin={handleLogin} />
        ) : (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex-1 py-4 px-6 text-center font-medium ${
                  activeTab === 'dashboard' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Car className="inline-block mr-2 h-5 w-5" />
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('tracking')}
                className={`flex-1 py-4 px-6 text-center font-medium ${
                  activeTab === 'tracking' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <MapPin className="inline-block mr-2 h-5 w-5" />
                Ride Tracking
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex-1 py-4 px-6 text-center font-medium ${
                  activeTab === 'profile' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <UserCircle className="inline-block mr-2 h-5 w-5" />
                Profile
              </button>
            </div>
            <div className="p-6">
              {activeTab === 'dashboard' && <Dashboard onBookRide={handleBookRide} />}
              {activeTab === 'tracking' && <RideTracking activeRide={activeRide} />}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-xl font-semibold mb-2">User Profile</h2>
                  <p>User profile information would go here.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function RegistrationForm({ onLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Registration data:', formData)
    onLogin(formData)
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Access ModernRide</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Enter ModernRide
        </button>
      </form>
    </div>
  )
}

function Dashboard({ onBookRide }) {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')

  // Mock data for available cabs
  const availableCabs = [
    { id: 1, driver: "John Doe", car: "Tesla Model 3", eta: 5 },
    { id: 2, driver: "Jane Smith", car: "Toyota Prius", eta: 8 },
    { id: 3, driver: "Bob Johnson", car: "Chevrolet Bolt", eta: 12 },
  ]

  const handleBooking = (cabId) => {
    const selectedCab = availableCabs.find(cab => cab.id === cabId)
    onBookRide({
      ...selectedCab,
      pickup,
      destination,
    })
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Book Your Ride</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="pickup" className="block text-sm font-medium text-gray-700">Pickup Location</label>
            <input
              id="pickup"
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup location"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
            <input
              id="destination"
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Available Rides</h2>
        <div className="space-y-4">
          {availableCabs.map((cab) => (
            <div key={cab.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-800">{cab.driver}</p>
                <p className="text-sm text-gray-600">{cab.car}</p>
                <p className="text-sm text-gray-600">ETA: {cab.eta} mins</p>
              </div>
              <button
                onClick={() => handleBooking(cab.id)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function RideTracking({ activeRide }) {
  const [rideStatus, setRideStatus] = useState('Waiting for driver')
  const [driverLocation, setDriverLocation] = useState({ lat: 40.7128, lng: -74.0060 })

  React.useEffect(() => {
    if (activeRide) {
      const statusUpdates = ['Driver on the way', 'Driver nearby', 'Driver arrived', 'Ride in progress']
      let currentStatus = 0

      const interval = setInterval(() => {
        setRideStatus(statusUpdates[currentStatus])
        currentStatus = (currentStatus + 1) % statusUpdates.length

        setDriverLocation({
          lat: driverLocation.lat + (Math.random() - 0.5) * 0.01,
          lng: driverLocation.lng + (Math.random() - 0.5) * 0.01,
        })
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [activeRide])

  if (!activeRide) {
    return <p className="text-gray-600">No active ride to track.</p>
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Ride Tracking</h2>
      <div className="space-y-4">
        <p><strong>Driver:</strong> {activeRide.driver}</p>
        <p><strong>Vehicle:</strong> {activeRide.car}</p>
        <p><strong>Status:</strong> {rideStatus}</p>
        <div className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-blue-500" />
          <p><strong>Pickup:</strong> {activeRide.pickup}</p>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-blue-500" />
          <p><strong>Destination:</strong> {activeRide.destination}</p>
        </div>
        <div>
          <p><strong>Driver Location:</strong></p>
          <p>Lat: {driverLocation.lat.toFixed(6)}, Lng: {driverLocation.lng.toFixed(6)}</p>
        </div>
      </div>
    </div>
  )
}