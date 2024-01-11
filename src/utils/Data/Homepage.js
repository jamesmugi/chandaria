import banner0 from "../../assets/images/banners/building_view.png";
import banner1 from "../../assets/images/gallery/DSC_0249.jpg";
import banner2 from "../../assets/images/gallery/DSC_0268.jpg";
import banner3 from "../../assets/images/gallery/DSC_0813.jpg";
import banner4 from "../../assets/images/gallery/DSC_0943.jpg";

import incubation_process from "../../assets/images/services/image1.png";
import incubation_services from "../../assets/images/content/incubation-services.png";
import technology_transfer from "../../assets/images/content/technology-transfer.png";
import partnerships from "../../assets/images/content/partnetships.png";
import partnerships2 from "../../assets/images/content/partnetships2.jpg";
import dollar from "../../assets/images/content/dollar.png";

export const homepage = {
  carousel: [
    {
      image: banner0,
      title: "Chandaria Business Innovation & Incubation Centre",
      subtitle:
        "Unlock Your Business Potential with Us – Start Your Entrepreneurial Journey Today by Applying for Incubation!",
    },
    {
      image: banner1,
      title: "Chandaria Business Innovation & Incubation Centre",
      subtitle:
        "Unlock Your Business Potential with Us – Start Your Entrepreneurial Journey Today by Applying for Incubation!",
    },
    {
      image: banner2,
      title: "Chandaria Business Innovation & Incubation Centre",
      subtitle:
        "Unlock Your Business Potential with Us – Start Your Entrepreneurial Journey Today by Applying for Incubation!",
    },
    {
      image: banner3,
      title: "Chandaria Business Innovation & Incubation Centre",
      subtitle:
        "Unlock Your Business Potential with Us – Start Your Entrepreneurial Journey Today by Applying for Incubation!",
    },
    {
      image: banner4,
      title: "Chandaria Business Innovation & Incubation Centre",
      subtitle:
        "Unlock Your Business Potential with Us – Start Your Entrepreneurial Journey Today by Applying for Incubation!",
    },
  ],

  what_we_offer: {
    title: "What We Offer",
    description:
      "We offer a broad range of services categorised to support Innovation and Entrepreneurship. Innovators and researchers can access incubation services; IP management and Technology Transfer support; and linkages to strategic partners and collaborators.  Click below for more detail.      ",
    offers: [
      {
        image: incubation_services,
        title: "Incubation services",
        path: "services",
        description:
          "We offer Mentoring Programmes (Advisory boards & mentors), assistance with business basics, accounting/financial management, presentation/pitching skills, comprehensive business training programs, business etiquette and assistance with regulatory compliance",
      },
      {
        image: technology_transfer,
        title: "Technology Transfer Office",
        path: "what-we-offer/technology-transfer-office",
        description: `
          <p>
            The core role of the Technology Transfer Service(TTS) at the centre is to assist faculty, researchers, technicians and students in managing their intellectual assets in ways that facilitate their transformations into benefits for society. In doing this, the TTS helps to bridge the gap between research and innovation. The general role is defined into more specific ones that include:
          </p>
          <ul>
            <li>
              Establishing relationships with firms and community actors 
            </li>
            <li>
              Generating new funding support from sponsored research or consulting opportunities
            </li>
            <li>
              Providing assistance on all areas related to entrepreneurship and intellectual property (IP)
            </li>
            <li>
              Facilitating the formation of university-connected companies utilising university’s technology (start-up) and/or university people (spin-off)  to enhance prospects of further development and, 
            </li>
            <li>
              Generating net royalties to the university and collaborating partners. 
            </li>
          </ul>
          
          <p>
            In order to accomplish the above assigned roles, the Technology Transfer Office carries out a very variable range of activities relating to different  channels of knowledge and technology transfer that involve a contract between the university and a third party. These channels; collaborative research, contract research, consultancy, spin-off and start-up companies, incubator facilities, licensing and patenting
          </p>
          `,
        categories: [
          {
            title: "MANAGEMENT OF INTELLECTUAL PROPERTY",
            subTitle: "Intellectual Property",
            path: "what-we-offer/technology-transfer-office/management-intelectual-property",
            description: `
            <p>
              The Technology Transfer Services assists with management of all forms of intellectual property including patents, utility models, trademarks, trade secrets, geographical indications and copyrights among others. Once a patent is filed at the Kenya Industrial Property Institute (KIPI), the researcher and students can publish the articles. It is important for our community to understand that having a patent does not mean others will not copy the invention. Patent owners must enforce their own patents through the available mechanisms including the Anti-Counterfeit Authority and seeking legal redress. A patent is enforceable only from the date of grant although in Kenya, in some circumstances, it is possible to claim compensation for infringement back to the date of publication of the patent application.
            </p>
            `,
          },
          {
            title: "TECHNOLOGY LICENSING",
            subTitle: "Technology Licensing",
            path: "what-we-offer/technology-transfer-office/technology-licensing",
            description: `
            <div class="image-col-holder">
              <div class="col small">
                <div class="image">
                  <img src="${partnerships}"/>
                </div>
              </div>
              <div class="col">
                <p>
                  The Technology Transfer Office facilitates agreements whereby an owner of a technological intellectual property (the licensor) allows another party (the licensee) to use, modify, and or resell that property in exchange for compensation (consideration). The compensation may take the form of a;
                </p>
                <br/>
                <ul>
                  <li>
                    Lump sum royalty,
                  </li>
                  <li>
                    Royalty based on volume of production (called running royalty), or
                  </li>
                  <li>
                    Right to use licensee's technology (called cross licensing).
                  </li>
                </ul>
              </div>
            </div>
            <br/>
            <p>
              Through licensing of proprietary technology, small firms can earn substantial income from markets that they could not penetrate on their own, and large firms can have foreign affiliates without high financial and legal risks.
            </p>
            `,
          },
          {
            title: "TECHNOLOGY VALUATION AND MARKETING",
            subTitle: "Valuation & Marketing",
            path: "what-we-offer/technology-transfer-office/technology-valuation-marketing",
            description: `
            <div class="image-col-holder">
              <div class="col wide">
                <p>
                  The Technology Transfer Office assists in determining the value of a new technology. Standard valuation methodologies are used to assist the researcher/student understand the value of intellectual property in their research product that assists in the negotiation with technology licensees. The Technology Transfer Office also assists in getting potential customers for respective technologies.
                </p>
              </div>
              <div class="col small">
                <div class="image small">
                  <img src="${dollar}"/>
                </div>
              </div>
            </div>
            `,
          },
          {
            title: "PATENT DRAFTING CENTRE",
            subTitle: "Patent Drafting",
            path: "what-we-offer/technology-transfer-office/patent-drafting-centre",
            description: `
            <p>
              The Technology Transfer Office provides patent drafting services. With a concentration of 25 patent drafters, it provides an enabling environment for Kenya’s utilization of the patent system in national development. Specifically the centre facilitates patent applicants, especially the Kenyan nationals to access professional patent drafting expertise so as to be able to file patent application that meets the formality and the substantive requirements under the national (Kenya Industrial Property Institute), regional (African Regional Intellectual Property Organization) or international (Patent Cooperation Treaty) routes.
            </p>

            <p>
              This has resulted in improved progress of patent applications by nations transiting into grant and then commercialization. Further the TTS has widened and deepened intellectual property management, technology transfer and commercialization of research findings in order to improve the quality of life of the people of Kenya through a thriving entrepreneurial ecosystem. Further still it inspires and mentors higher education staff and other Kenyans to be wealth and employment creators.
            </p>
            `,
          },
          {
            title: "TECHNOLOGY AND INNOVATION SUPPORT CENTRE",
            subTitle: "Tech & Innovation Support",
            path: "what-we-offer/technology-transfer-office/technology-and-innovation-support-centre",
            description: `
              <p>
                The Technology and innovation support centre (TISC) program provides innovators in Kenya with access to locally based, high quality technology information and related services, helping them to exploit their innovative potential and to create, protect and manage their intellectual property (IP) rights.
              </p>
              <p>
              Services offered by the TISC include: 
              </p>
              <ol>
                <li>
                  Access to online patent and non-patent (scientific and technical) resources and IP-related publications.
                </li>
                <li>
                  Assistance in searching and retrieving technology information
                </li>
                <li>
                  Training in database search
                </li>
                <li>
                  On-demand searches (novelty, state-of-the-art and infringement)
                </li>
                <li>
                  Monitoring technology and competitors
                </li>
                <li>
                  Basic information on industrial property laws, management and strategy, and technology commercialization and marketing.
                </li>
              </ol>
              `,
          },
        ],
      },
      {
        image: partnerships,
        title:
          "Partnerships and Collaborations For Innovation and Entrepreneurerships",
        path: "what-we-offer/partnerships-and-collaborations",
        description: `
        <p>
          The Chandaria Innovation Center facilitates the development of strategic partnerships and collaborations specifically targeted to enhance innovation and business development. Of great interest are relationships with industry actors, entrepreneurs and investors who can provide an effective pathway for technology transfer through commercialization. Industry collaborations are critical for Skills development (education and training), generation, acquisition, and adoption of knowledge (innovation and technology transfer) and promotion of entrepreneurship (start-ups and spin-offs). The Center supports partnerships development through: 
        </p>

        <ol type="i">
          <li>
            Providing a domicile for innovators and start-ups where potential partners can locate them;
          </li>
          <li>
            Issuing introductory letters to innovators as they engage potential partners;
          </li>
          <li>
            Acting as guarantor and assurance to partners that resources will be used effectively and commitments honoured.
          </li>
        </ol>

        <p>
          Industry links enable bi-directional flow and exchange of knowledge, skills, innovations and technologies for the mutual benefit of university and industry. Industry collaborations enhance the relevance of research carried out in Kenyatta University and foster the commercialization of research outputs. We aim to increase the mobility of expertise between Kenyatta University and industry while industry will benefit through increased access to new products and technologies.
        </p>


        <div class="images-holder">
          <div class="image">
            <img src="${partnerships2}">
          </div>
        </div>

        `,
        // "We have networking activities and links to higher education resources, strategic partners, access to angel investors or venture capital, access to bank loans, loan funds and guarantee programs.",
      },
    ],
  },

  events: [
    {
      date: "20th Feb",
      image: banner1,
      name: "India's first AI conference",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, hic quam? Officia eaque harum consequatur iusto cumque obcaecati nemo aut!",
    },
    {
      date: "20th Feb",
      image: banner2,
      name: "India's first AI conference",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, hic quam? Officia eaque harum consequatur iusto cumque obcaecati nemo aut!",
    },
    {
      date: "20th Feb",
      image: banner3,
      name: "India's first AI conference",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, hic quam? Officia eaque harum consequatur iusto cumque obcaecati nemo aut!",
    },
    {
      date: "20th Feb",
      image: banner3,
      name: "India's first AI conference",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, hic quam? Officia eaque harum consequatur iusto cumque obcaecati nemo aut!",
    },
  ],
};
