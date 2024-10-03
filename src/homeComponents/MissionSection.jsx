import Image1 from '../assets/images/missionImg.png'

const MissionSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center my-16 px-6">
      {/* Left side: Mission text */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900">OUR MISSION</h2>
        <p className="mt-4 text-tertiary50 text-[17px] text-lg">
          Our mission is to leverage digital innovation to streamline the procurement and distribution of fruits and vegetables, creating value for our customers, partners, and stakeholders. We are committed to fostering a sustainable and inclusive agricultural ecosystem that promotes economic growth, food security, and environmental sustainability in Nigeria.
        </p>
      </div>

      {/* Right side: Image */}
      <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
        <img
          src={Image1} 
          alt="mission image" 
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </section>
  )
}

export default MissionSection