import { useState, useRef } from "react";
import { LangContext } from "./contexts/LangContexts";
import Navbar from "./components/Navbar";
import AboutMe from "./components/about";
import Counters from "./components/counters";
import Education from "./components/education";
import Projects from "./components/projects";
import Experience from "./components/expericence";
import Services from "./components/services";
import MySkills from "./components/myskills";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const ProjectsRef = useRef(null);
  const ServicesRef = useRef(null);
  const ExperienceRef = useRef(null);
  const EducationRef = useRef(null);
  const MySkillsRef = useRef(null);
  const BlogRef = useRef(null);
  const ContactRef = useRef(null);
  const scrolltoContact = () => {
    ContactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrolltoBlog = () => {
    BlogRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrolltoProjects = () => {
    ProjectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrolltoMySkills = () => {
    MySkillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrolltoServices = () => {
    ServicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrolltoExperience = () => {
    ExperienceRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrolltoEducation = () => {
    EducationRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [lang, setLang] = useState("en");
  const translations = {
    en: {
      aboutMe: "About me",
      resume: "Resume",
      services: "Services",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
      hi: "Hi, I'm Muhammad",
      techlonogies: "With expertise in cutting-edge technologies such as",
      techlonogies2:
        "I deliver web solutions that are both innovative and robust.",
      senior: "senior",
      wad: "web & app developer",
      am: "and more",
      downloadmycv: "Download my CV",
      ye: "years experience",
      pc: "projects completed",
      hc: "happy clients",
      aw: "awards won",
      MySkillsb: "Designing solutions",
      MySkillsb2: "customized to meet your requirements.",
      sc1: "Crafting visually appealing and user-friendly interfaces using",
      sc1_2: ", and modern frameworks like React and Angular.",
      sc2: "Designing and managing databases with SQL and NoSQL technologies such as",
      sc2_2: "and",
      sc3: "Creating and integrating",
      sc3_2:
        "to enable smooth communication between front-end and back-end systems.",
      sc4: "Improving the speed and performance of web applications to provide a better user experience. Work with",
      sc5: "Developing scalable and secure payment solutions for",
      sc5_2: "tailored to your business needs.",
      sc6: "Boost your applications with AI for improved efficiency, automation, and enhanced user experience",
      scb1: "Web & App Development",
      scb2: "Database Management",
      scb3: "API development",
      scb4: "Performance Optimization",
      scb5: "E-commerce Solutions",
      scb6: "Integrating AI",
      MySkillsson1: "Excited to take on",
      MySkillsson2: " new projects",
      MySkillsson3: "and collaborate. Let's chat about your ideas. ",
      MySkillsson4: "Reach out!",
      MySkills: "My Skills",

      Experience: "Experience",
      yo: "Years of",
      passion: " Passion",
      fpt: "for programming techniques",
      present: "Present",
      sse: "Senior Software Engineer",
      list1:
        "led development of scalable web applications, improving performance and user experience for millions of users.",
      list2:
        "Implemented machine learning algorithms to enhance search functionality.",
      list3:
        "Collaborated with cross-functional teams to integrate new features seamlessly.",

      project1t: "Kiddy – Modern React Web Application",
      project1d:
        "A modern and responsive web application built with React and Vite. Kiddy focuses on clean UI design, performance optimization, and scalable component architecture.",
      project1c: "Self-Initiated Project",
      project1time: "2 weeks",

      project2t: "Linea – Interactive React Web Experience",
      project2d:
        "An interactive and responsive web application built with React and Vite. Linea emphasizes a smooth user experience, modern UI design, and modular component architecture.",
      project2c: "Self-Initiated Project",
      project2time: "4 weeks",
      project3t: "Visible – First React + Vite Web Project",
      project3d:
        "Visible is a beginner-level React web application scaffolded with Vite, showcasing a minimal React + Vite setup with modern tooling (ESLint, Vite config) and a simple UI structure. This project serves as an interactive starting point for learning component-based design, responsive UI, and development workflow using React and Vite",
      project3c: "Self-Initiated Project",
      project3time: "1 week",

      projects: " Projects",
      mrw: "My Recent Works",
      Education: "Education",
      Services: "Services",
      MySkillsr: "My Skills",
    },

    ar: {
      aboutMe: "عنّي",
      resume: "السيرة الذاتية",
      services: "الخدمات",
      portfolio: "أعمالي",
      blog: "المدونة",
      contact: "تواصل",
      hi: "السلام عليكم ، أنا محمد",
      techlonogies: "مع خبرة في التقنيات المتقدمة مثل",
      techlonogies2: "أنا أقدم حلول ويب مبتكرة وقوية.",
      senior: "محترف",
      wad: "مطور ويب وتطبيقات",
      am: "والمزيد",
      downloadmycv: "تحميل سيرتي الذاتية",
      ye: "سنوات من الخبرة",
      pc: "مشاريع مكتملة",
      hc: "عملاء سعداء",
      aw: "جوائز فازت",
      MySkillsb: "تصميم الحلول",
      MySkillsb2: "المخصصة لتلبية متطلباتك.",
      sc1: "إنشاء واجهات جذابة وسهلة الاستخدام باستخدام",
      sc1_2: "وإطارات عمل حديثة مثل React و Angular.",
      sc2: "تصميم وإدارة قواعد البيانات باستخدام تقنيات SQL و NoSQL مثل",
      sc2_2: "و",
      sc3: "إنشاء ودمج",
      sc3_2: "لتمكين الاتصال السلس بين أنظمة الواجهة الأمامية والخلفية.",
      sc4: "تحسين سرعة وأداء تطبيقات الويب لتوفير تجربة مستخدم أفضل. العمل مع",
      sc5: "تطوير حلول دفع قابلة للتوسع وآمنة لـ",
      sc5_2: "مصممة خصيصًا لاحتياجات عملك.",
      sc6: "تعزيز تطبيقاتك بالذكاء الاصطناعي لتحسين الكفاءة والأتمتة وتجربة المستخدم المحسنة",
      scb1: "تطوير الويب والتطبيقات",
      scb2: "إدارة قواعد البيانات",
      scb3: "تطوير واجهات برمجة التطبيقات",
      scb4: "تحسين الأداء",
      scb5: "حلول التجارة الإلكترونية",
      scb6: "دمج الذكاء الاصطناعي",
      MySkillsson1: "متحمس للعمل على",
      MySkillsson2: " مشاريع جديدة",
      MySkillsson3: " والتعاون. دعنا نتحدث عن أفكارك.",
      MySkillsson4: " تواصل معنا!",

      MySkills: "مهاراتي",
      Experience: "الخبرة",
      yo: "سنوات من",
      passion: " الشغف",
      fpt: "بتقنيات البرمجة",
      present: "الحاضر",
      sse: "مهندس برمجيات أول",
      list1:
        "قاد تطوير تطبيقات ويب قابلة للتوسع، مما حسن الأداء وتجربة المستخدم لملايين المستخدمين.",
      list2: "نفذ خوارزميات التعلم الآلي لتعزيز وظيفة البحث.",
      list3: "تعاون مع فرق متعددة التخصصات لدمج ميزات جديدة بسلاسة.",

      project1t: "Kiddy – تطبيق ويب حديث باستخدام React",
      project1d:
        "تطبيق ويب حديث ومتجاوب تم تطويره باستخدام React و Vite. يركز Kiddy على تصميم واجهة مستخدم نظيفة، وتحسين الأداء، وبنية مكونات قابلة للتوسع.",
      project1c: "مشروع شخصي",
      project1time: "أسبوعان",
      project2t: "Linea – تجربة ويب تفاعلية باستخدام React",
      project2d:
        "تطبيق ويب تفاعلي ومتجاوب تم تطويره باستخدام React و Vite. تركز Linea على تجربة مستخدم سلسة، وتصميم واجهة حديثة، وبنية مكونات منظمة وقابلة للتوسع.",
      project2c: "مشروع شخصي",
      project2time: "مستمر",
      project3t: "Visible – أول مشروع باستخدام React و Vite",
      project3d:
        "Visible هو تطبيق ويب بمستوى مبتدئ تم إنشاؤه باستخدام React وتم تجهيزه عبر Vite. يعرض إعدادًا بسيطًا لـ React + Vite مع أدوات حديثة مثل (ESLint و Vite config) وبنية واجهة مستخدم بسيطة. يُعد هذا المشروع نقطة انطلاق تفاعلية لتعلّم تصميم المكونات (Component-Based)، وبناء واجهات متجاوبة (Responsive UI)، وفهم سير عمل التطوير باستخدام React و Vite.",
      project3c: "مشروع شخصي",
      project3time: "أسبوع واحد",
      projects: "مشاريع",
      mrw: "أعمالي الأخيرة",
      Education: " التعليم",
      Services: "الخدمات",
      MySkillsr: "مهاراتي",
    },
    kr: {
      aboutMe: "Derbarê min",
      resume: "Jîyanname",
      services: "Xizmet",
      portfolio: "Berhemên min",
      blog: "Rojname",
      contact: "Têkilî",
      hi: "Slav, ez Muhammad im",
      techlonogies: "Bi ekspertiya di teknolocyên herî nûjen de wek",
      techlonogies2:
        "Ez çarenûsên wêbê pêşkêş dikim ku herdu nûjen û hêzdar in.",
      senior: "karzan",
      wad: "pêşkeftina wêb û sepan",
      am: "û zêdetir",
      downloadmycv: "Jîyannameyê xwe dakêşin",
      ye: "salên experîyansê",
      pc: "projeyên qedandî",
      hc: "mijarên kêfxweş",
      aw: "xelatên kuştî",
      MySkillsb: "Çêkirina çarenûsên",
      MySkillsb2: "xusûsî ji bo cihê xwe.",
      sc1: "Çêkirina interfacên xweş û bikarhêner bi",
      sc1_2: ", û çarçoveyên nûjen wek React û Angular.",
      sc2: "Dizaynekirin û rêveberiya daneyên bi teknolocyên SQL û NoSQL wek",
      sc2_2: "û",
      sc3: "Çêkirin û têkildarî",
      sc3_2:
        "bo destûrdana peywendiyê ya hêsan di navbera pergala pêş û paş de.",
      sc4: "Barkirina lez û performansa sepanên wêbê bo pêşkêşkirina tecrûbeya bikarhênerê ya baştir. Kar bi",
      sc5: "Dizaynekirin û rêveberiya daneyên bi teknolocyên SQL û NoSQL wek",
      sc5_2: "li gorî hewcedariyên karsaziya we hatî çêkirin.",
      sc6: "Barkirina lez û performansa sepanên wêbê bo pêşkêşkirina tecrûbeya bikarhênerê ya baştir. Kar bi",
      scb1: "Pêşkeftina Malper û Serlêdan",
      scb2: "Rêveberiya Daneyên",
      scb3: "Pêşkeftina API",
      scb4: "Beterkirina Karîgerî",
      scb5: "Çareseriyên Bazirganîya Elektronîk",
      scb6: "Têkeliya Zekayê Sînî",
      MySkillsson1: "Bi hêvîyê me projeyên nû",
      MySkillsson2: " dest pê bikin û hevkarî bikin.",
      MySkillsson3: " Em li ser ramanên te biaxivin.",
      MySkillsson4: " Têkiliyê bike!",

      MySkills: "Qabiliyetên Min",

      Experience: "Tecrûbe",
      yo: "Salên",
      passion: "Hezkirin",
      fpt: "ji bo teknîkên bernamesaziyê",
      present: "Niha",
      sse: "Endazyara Nivîsbarê ya Bilind (Senior Software Engineer)",
      list1:
        "Pêşengiya pêşveçûna sepanên web ên berfireh kir, performans û tecrûbeya bikarhêner ji bo milyonan bikarhêner baştir kir.",
      list2:
        "Algorîtmayên fêrbûna makîneyê sepand da ku fonksiyona lêgerînê bi hêztir bike.",
      list3:
        "Bi tîmên cûda-yê-karî re hevkarî kir da ku taybetmendiyên nû bi awayek bêkêmasî werin têkvekirin.",

      project1t: "Kiddy – Sepana Webê ya Nû bi React",
      project1d:
        "Sepana webê ya nû û bersivdar e ku bi React û Vite hatiye pêşxistin. Kiddy balê dide sêwirandina navrûyê pak, baştirkirina performansê û avahiyek pêkhateyan ku dikare berfireh bibe.",
      project1c: "Projeya Kesane",
      project1time: "2 hefte",

      project2t: "Linea – Tecrûbeya Webê ya Têkiliyî bi React",
      project2d:
        "Sepana webê ya têkiliyî û bersivdar e ku bi React û Vite hatiye pêşxistin. Linea balê dide tecrûbeya bikarhênerê ya nerm, sêwirandina navrûyê ya nûjen û avahiyek pêkhateyan ku dikare berfireh bibe.",
      project2c: "Projeya Kesane",
      project2time: "Berdewam",
      project3t: "Visible – Projeya Yekem a React + Vite",
      project3d:
        "Visible sepana webê ya asta destpêkê ye ku bi React hatî çêkirin û bi Vite hatî sazkirin. Ew nîşan dide sazûmanek minimal a React + Vite bi amûrên modern (ESLint, Vite config) û avahiyek UI ya hêsan. Ev proje wek destpêkek interactîf ji bo fêrbûna sêwirandina pêkhateyan (component-based), UI ya bersivdar (responsive) û pêvajoya pêşveçûna React û Vite tê bikaranîn.",
      project3c: "Projeya Xwe-Şexsî",
      project3time: "1 hefte",
      projects: "projeyên",
      mrw: "Karên Dawîn ên Min",
      Education: "perwerde",
      Services: "Xizmet",
      MySkillsr: "Şaredariyên min",
    },
  };
  return (
    <>
      <LangContext.Provider value={{ lang, setLang, translations }}>
        <div className="container">
          <Navbar
            onProjectsClick={scrolltoProjects}
            onServicesClick={scrolltoServices}
            onExperienceClick={scrolltoExperience}
            onEducationClick={scrolltoEducation}
            onMySkillsClick={scrolltoMySkills}
            onBlogClick={scrolltoBlog}
            onContactClick={scrolltoContact}
          />
          <AboutMe />
          <Counters />
          <Services ServicesRef={ServicesRef} />
          <Experience ExperienceRef={ExperienceRef} />
          <Education EducationRef={EducationRef} />
          <Projects ProjectsRef={ProjectsRef} />
          <MySkills MySkillsRef={MySkillsRef} />
          <Blog BlogRef={BlogRef} />
          <Contact ContactRef={ContactRef} />
          <Footer />
        </div>
      </LangContext.Provider>
    </>
  );
}

export default App;
