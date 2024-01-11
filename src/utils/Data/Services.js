import banner1 from "../../assets/images/services/image1.png";
import printer3d from "../../assets/images/content/incubation-services.png";
import ictfacilities from "../../assets/images/services/ict-facilities.png";
import mentoring from "../../assets/images/services/mentoring.png";
import prototyping from "../../assets/images/services/prototyping.png";
import marketing from "../../assets/images/services/marketing.png";

export const services = {
  title: "Services",
  subtitle: "What we offer in the incubation hub",
  image: banner1,
  serviceDesc: `
  <h1>PROCEDURES & SUPPORT</h1>
  <h2>Innovation journey</h2>
  <ol>
  <li> 
    <h3>Idea generation</h3>
    <p>
      This is the creative process that encompasses coming up with the new concepts from the innovators then it is followed by an application submitted via an email to the <a href="mail:director-cbiic@ku.ac.ke">director-cbiic@ku.ac.ke</a> 
    </p>
  </li>
  <li>
    <h3>Screening</h3>
    <p>
      A team of reviewers meet monthly to vet and evaluate the new ideas using a set of guidelines
    </p>
  </li>
  <li>
    <h3>Research</h3>
    <p>
      This entails conducting extensive literature regarding the idea/topic 
    </p>
  </li>
  <li>
    <h3>Design</h3>
    <p>
      This involves coming up with a model on how to address the specific research question. 
    </p>
  </li>
  <li>
    <h3>Testing</h3>
    <p>
      Prototyping is done to gather the feedback of the model and validate the hypothesis of the research idea
    </p>
  </li>
  <li>
    <h3>Product launch</h3>
    <p>
      This is a carefully premeditated and concerted effort to unveil a novel good to the market by rendering it accessible for acquisition.
    </p>
  </li>
  </ol>
  <h2>Innovation phases</h2>
  <p>
    Innovations will be enrolled in one of the following phases:
  </p>
  <ul>
    <li> Idea phase</li>
    <li>Research and Development</li>
    <li>Prototype phase</li>
    <li>Start- up phase</li>
    <li>Market phase</li>
    <li>Scaling- up phase</li>
    <li>Other</li>
  </ul>

  <h2>Innovators terms and policies at the centre</h2>
  <ul>
    <li>
      A company will be exited from Chandaria-BIIC if it does not attain satisfactory growth for the first six (3) months.
    </li>
    
    <li>
      After a maximum period of twelve (12) months, companies will exit the Chandaria-BIIC but the successful ones may exit earlier than that upon attainment of their maximum growth to maturity.
    </li>
    
    <li>
      There will be a full time Administrative Assistant with a background in Business Administration and Accounting to offer administrative support at the Centre.
    </li>
    <li>
      Other support staff will include a receptionist, a cleaner and a messenger.
    </li>
    
    <li>
      On regular intervals, renowned entrepreneurial icons shall be invited to talk to the innovators.
    </li>
    
    <li>
      A selected team of professionals from relevant disciplines will be available on a daily basis to offer advisory support to the innovators as consultants.
    </li>
  </ul>
  `,
  services: [
    {
      title: "3D Printing",
      icon: "fa fa-cubes",
      path: "3d-printing",
      banner: printer3d,
      description: `
        <p>
        The Centre has in place desktop 3D printers that innovators can use to produce physical prototypes of their engineering design projects. Innovators are able to produce one-offs from Computer Aided Designs (CAD) cost-effectively and quickly. The four 3D printers include 2 Flashforge Creator Pro and 1 Flashforge Dreamer printer (these are fused Deposition Modeling (FDM) printers that extrude thermoplastic materials such as PLA, ABS through a heated nozzle), and a Peopoly Phenom L which is a resin based masked stereolithography (MSLA) printer. We conduct training and demonstration on 3D printing to KU students on request. If you need this service please contact our IT expert Ken Maina at email: <a href="mail:" style="color:#03a358;font-weight:500">kennedy.gathanga@ku.ac.ke</a> and Ext 3898.
        </p>
        `,
    },
    {
      title: "ICT Facilities",
      icon: "fa fa-screwdriver-wrench",
      banner: ictfacilities,
      path: "ict-facilities",
      description: `
      <p>
        Innovators at the centre have access to two computer labs with a capacity of 35 PCs loaded with basic software e.g. Microsoft office and browsers as well as advanced software such as 3D design CAD software, code editors and IDEs such as Visual Studio Code, NetBeans, Pycharm, among others. These labs are highly useful to innovators and offer platforms for research and to advance their knowledge in design and software development. A stable and reliable WI-FI and internet connectivity is available as well as a resident technical ICT expert to help innovators with their needs. A new ICT lab is in the pipeline being developed in collaboration with Arm Ltd, it will be equipped with ……….. To access this service please contact Ken Maina  at  <a href="mail:" style="color:#03a358;font-weight:500">kennedy.gathanga@ku.ac.ke</a> Ext 3898.
      </p>
      `,
    },
    {
      title: "Training services",
      icon: "fa fa-screwdriver-wrench",
      path: "training-services",
      description: `<p>
        The Center provides a rich offering of training to enhance business skills for innovators under incubation. A standard curriculum is available with topics covering from how to develop an entrepreneurial mind-set, Lean Startup, Design Thinking, Market Research, Pitching, Intellectual Property Management, Valuation of innovations and IPs, Partnerships for business growth and success, Contract Law, Financing startups, How to write a winning proposal/bid, IT for Entrepreneurship, Business analytics, Gender equity and social inclusion (GESI) and soft skills for entrepreneurs.  <a href="https://pdf.ac/1ab4vV" target="_blank" style="color:#03a358;font-weight:500">Click here Chandaria Innovation centre training plan</a>  for more details on what you will be able to do after this training. 
      </p>`,
    },
    {
      title: "Mentoring Programmes (Advisory boards & mentors)",
      icon: "fa fa-building",
      path: "mentoring-programmes-advisory-boards-and-mentors",
      banner: mentoring,
      description: `
        <ul>
          <li>Assistance with business basics</li>
          <li>Helps with accounting/financial management</li>
          <li>Help with presentation/pitching skills</li>
          <li>Comprehensive business training programs</li>
          <li>Helps with business etiquette</li>
          <li>Assistance with regulatory compliance</li>
        </ul>
        `,
    },
    // {
    //   title: "Maker Space and Light Manufacturing Facility",
    //   icon: "fa fa-lightbulb",
    //   path: "maker-space-and-light-manufactiring-facility",
    //   description:
    //     "It is a paradise for makers that entails high-tech workshops open to the public, which provides members open to the public, which provides members with access to machines, tools and software as well as a creative community. With the new launch of Maker space, the Directorate of Innovation, Incubation and University Industry Linkages will cater to ambitious start-ups, active doers and creatives. It will offer a place to implement ideas and innovations in the form of prototypes and small batch production. Various work areas will be available, such as machine, metal and woodworking shops as well as textile and electrical processing facilities. In addition, 3D printers and laser and waterjet cutters will make it possible to fabricate new shapes and to process every type of material. The Maker space will offer training and consulting services as well as events for members with any level of knowledge, providing them with support and networking options.",
    // },
    {
      title: "Prototyping support",
      icon: "fa fa-gears",
      banner: prototyping,
      path: "prototyping-support",
      description: `<p>
        The Center supports innovators to access essential equipment and facilities including machines, tools and software to develop prototypes and products. Currently the Center works closely with various teaching departments of the university to access equipment. These include Engineering workshops, analytical labs in Physics, Chemistry, Biotechnology, Agriculture, Environment, food and nutrition labs, and Health sciences. We are in the process of setting up a maker space equipped with microcontrollers, Sensors, Actuators, IoT hardware-wireless modules, IoT lab- design, test and measure equipment, mechanical and wood prototyping workshop, textile and electrical processing facilities, 3D printers and laser and waterjet cutters, PCB prototyping machine, Virtual Reality and augmented reality kits, High speed processing computers. 
      </p>
      `,
    },
    {
      title: "Marketing & Exhibition Support",
      icon: "fa fa-bullhorn",
      banner: marketing,
      path: "marketing-exhibition-support",
      description: `
      <p>
        Innovators with prototypes and minimum viable products are supported to introduce their products to market through participation in externally organized exhibitions and internally organized events with invited guests and potential investors. Innovators can get support to produce marketing materials including fliers, banners among others. Innovators will be able to place their products on display at the strategically located exhibition space near the main entrance, and potential clients can visit and view product demos. Innovators wishing to place a product on display please contact Ms. Pamela Mbae at +254700363741 Email: <a href="mail:MBAE.PAMELA@ku.ac.ke" style="color:#03a358;font-weight:500">MBAE.PAMELA@ku.ac.ke</a> extension +2540208703870 

      </p>
      `,
    },
    {
      title: "Management of Intellectual Property",
      icon: "fa fa-file",
      banner: banner1,
      path: "management-of-intellectual-property",
      description: `
      <p>
      The Technology Transfer Office (TTO) is responsible for assisting innovators with management of all forms of intellectual property. The main activities are drafting of patents, utility models, trademarks, trade secrets, and copyrights.  TTO helps to complete the paperwork, transmits documents to the Kenya Industrial Property Institute (KIPI), and makes the necessary payments to commence IP protection. Innovators should understand that having a patent does not mean others will not copy the invention. Patent owners must enforce their rights through the available mechanisms. For students and KU staff please note you should file for protection of IP before the information is published in a journal paper or presented in a conference. If you need support to protect your IP please contact Ms. Pamela Mbae at …email: <a href="mail:MBAE.PAMELA@ku.ac.ke" style="color:#03a358;font-weight:500">MBAE.PAMELA@ku.ac.ke</a>
      and Tel………….

      </p>
      `,
    },
    {
      title: "Technology Valuation",
      icon: "fa fa-dollar-sign",
      path: "technology-valuation",
      description: `
      <p>
        The Technology Transfer Office assists in determining the value of an innovation or intellectual property. Standard valuation methodologies are used to assist the innovator determine the value of intellectual property, which is necessary for negotiation during technology licensing.  Where possible the Technology Transfer Office will assist innovators to identify potential clients for their innovations.
      </p>
      `,
    },
    {
      title: "Technology licensing",
      icon: "fa fa-certificate",
      path: "technology-licensing",
      description: `
      <p>
        The Technology Transfer Office facilitates agreements between the IP owner (the licensor) and an interested party (the licensee) to use, modify, and or resell the IP in exchange for compensation. The compensation may take the form of a lump sum royalty, payment based on volume of production (called running royalty), or right to use licensee's technology (called cross licensing). Through licensing of proprietary technology, small firms can earn substantial income from markets that they could not penetrate on their own, and large firms can have foreign affiliates without high financial and legal risks.
      </p>
      `,
    },
    {
      title: "Technology and Innovation Support centre",
      icon: "fa fa-robot",
      path: "technology-innovation-support-centre",
      description: `
      <p>
      The Technology and Innovation Support Centre (TISC) program provides innovators in Kenya with access to locally based, high quality technology information and related services, helping them to exploit their innovative potential and to create, protect and manage their intellectual property (IP) rights. Services offered by the TISC include: access to online patent and non-patent (scientific and technical) resources and IP-related publications, assistance in searching and retrieving technology information, training in database search, on-demand searches (novelty, state-of-the-art and infringement), monitoring technology and competitors, basic information on industrial property laws, management and strategy, and technology commercialization and marketing. TISC operates in the framework of The World Intellectual Property Organization (WIPO), the global forum for intellectual property (IP) services, policy, information and cooperation.
      </p>
      `,
    },
  ],
};
