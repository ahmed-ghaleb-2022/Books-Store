const About = () => {
  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to our website! We are passionate about bringing the best
        products and services to our customers. Our mission is to create value
        and make a difference in the world through innovation and dedication.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
      <p className="text-lg text-gray-700 mb-6">
        To be a leader in our industry, setting the standard for quality,
        customer service, and sustainability.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
      <p className="text-lg text-gray-700 mb-6">
        Our team is comprised of experienced professionals who are dedicated to
        excellence. We believe in fostering a culture of creativity and
        collaboration.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p className="text-lg text-gray-700">
        If you have any questions or want to know more about us, feel free to
        reach out. Email us at{" "}
        <a
          href="mailto:info@example.com"
          className="text-blue-500 hover:underline"
        >
          info@example.com
        </a>
        .
      </p>
    </div>
  );
};

export default About;
