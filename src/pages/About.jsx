const About = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#8529CD]">
          About Me
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Hello! I’m <span className="font-semibold">Rahul Khan Suvo</span>, an
          enthusiastic web developer passionate about building responsive and
          user-friendly websites. With a strong foundation in{" "}
          <span className="font-medium">HTML, CSS, JavaScript, and React</span>,
          I love solving challenges and creating impactful digital experiences.
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-[#8529CD]">
            Skills & Technologies
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Frontend: HTML, CSS, Tailwind CSS, JavaScript, React</li>
            <li>State Management: Context API</li>
            <li>Tools: Vite, DaisyUI, React Icons</li>
            <li>UI/UX: Responsive design, animations</li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-[#8529CD]">
            My Projects
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <span className="font-medium">Gadget Heaven:</span> An e-commerce
              platform with cart, wishlist, and product filters.
            </li>
            <li>
              <span className="font-medium">SquadX:</span> A cricket team
              management app for organizing players dynamically.
            </li>
            <li>
              <span className="font-medium">Peddy:</span> A pet adoption website
              featuring API-based data and responsive design.
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2 text-[#8529CD]">
            Let’s Connect!
          </h3>
          <p className="text-gray-700">
            I’m always eager to learn and collaborate on exciting projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
