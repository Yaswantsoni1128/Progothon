import React, {useState} from 'react'

function ContactPowerPlant() {
    const [formData, setFormData] = useState({ subject: "", message: "" });
    const [isSending, setIsSending] = useState(false);
    const [success, setSuccess] = useState(null);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSending(true);
  
      // Simulate email sending process
      setTimeout(() => {
        setIsSending(false);
        setSuccess(true);
        setFormData({ subject: "", message: "" });
      }, 2000);
    };
  
    return (
      <div className="h-[75vh]  bg-[url('/src/assets/spocassets.jpg')] bg-cover bg-center" >
        {/* <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 bg-[url('https://img.freepik.com/free-photo/close-up-detailed-wrinkled-paper-texture_23-2151873023.jpg?t=st=1743576119~exp=1743579719~hmac=22c368325777f80246c6025c5bfd3f913557f468b366f8c8b4c4b5918ef1603a&w=740')] bg-opacity-85">
          <h2 className="text-2xl font-bold text-center mb-4">Contact Power Plant</h2>
          <p className="text-gray-600 text-center mb-6">Send an email to the power plant regarding any concerns or updates.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="text"
                placeholder='Power plant email'
                name="powerPlant"
                value={formData.powerPlant}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Subject</label>
              <input
                type="text"
                placeholder='reason of writing...'
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea
                name="message"
                placeholder='Enter message...'
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
          {success && <p className="text-green-600 text-center mt-4">Email sent successfully!</p>}
        </div> */}
      </div>

    );
  }
  

export default ContactPowerPlant