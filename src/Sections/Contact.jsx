function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-300 mb-10">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-left space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-400">Email</h4>
            <p className="text-blue-400 break-words">meqdad576@gmail.com</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-400">Phone</h4>
            <p className="text-blue-400">+92 303 5761414</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-400">LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/meqdad-ali-47359b270"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              My Linkedin
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-400">GitHub</h4>
            <a
              href=" https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
            My GitHub Accout
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
