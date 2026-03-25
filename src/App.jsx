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
      aboutMe: "About Me",
      resume: "Resume",
      services: "Services",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
      hi: "Hi, I'm Muhammad",
      techlonogies:
        "I build fast, scalable, and user-focused web applications using React and Laravel. With a strong focus on performance and clean design, I turn ideas into real digital products using modern technologies like ",

      junior: "Junior",
      wad: "Web & App Developer",
      am: "& More",
      downloadmycv: "Download CV",
      ye: "Years Experience",
      pc: "Projects Completed",
      hc: "Happy Clients",
      aw: "Awards Won",
      MySkillsb: "Building solutions ",
      MySkillsb2: "tailored to your needs.",
      sc1: "Crafting visually appealing and user-friendly interfaces using ",
      sc1_2: " and modern frameworks like React.",
      sc2: "Designing and managing databases with SQL and NoSQL technologies such as ",
      sc2_2: " and ",
      sc3: "Building and integrating ",
      sc3_2:
        " to enable seamless communication between front-end and back-end systems.",
      sc4: "Optimizing web applications for maximum speed and performance to deliver a flawless user experience. Proficiency in ",
      sc5: "Developing scalable and secure payment solutions for ",
      sc5_2: " tailored to your business needs.",
      sc6: "Integrating AI features to enhance user experience and automate workflows.",
      scb1: "Web & App Development",
      scb2: "Database Management",
      scb3: "API Development",
      scb4: "Performance Optimization",
      scb5: "E-commerce Solutions",
      scb6: "AI Integration",
      MySkillsson1: "Excited to take on ",
      MySkillsson2: "new projects ",
      MySkillsson3: "and collaborate. Let's chat about your ideas. ",
      MySkillsson4: "Reach out!",
      MySkills: "My Skills",
      Experience: "Experience",
      yo: "Years of ",
      passion: "Passion ",
      fpt: "for software development",
      present: "Present",
      sse: "Junior Software Engineer",
      list1:
        "Developed scalable web applications, optimizing performance and enhancing user experience.",
      list2:
        "Integrated modern algorithms and techniques to enhance core functionality.",
      list3:
        "Collaborated with cross-functional teams to seamlessly integrate new features.",
      project1t: "Code_Art (learning platform)",
      project1d:
        "A React-based web development learning platform covering HTML, CSS, JavaScript, and modern frameworks.",
      project1c: "Personal Project",
      project1time: "2 Weeks",

      project2t: " Eiser (fashion ecommerce)",
      project2d:
        " A React fashion e-commerce storefront with dynamic product listings and seamless shopping UX.",
      project2c: "Personal Project",
      project2time: "4 Weeks",

      project3t: "Invent (Agency/Tech site)",
      project3d:
        " A React agency landing page showcasing services, portfolio, pricing, and team sections.",
      project3c: "Personal Project",
      project3time: "1 Week",

      project4t: " Kiddy (kids clothing)",
      project4d:
        " A React children's clothing and toys store with playful UI and seasonal collection displays.",
      project4c: "Personal Project",
      project4time: "1 Week",

      project5t: "Linea (fashion store)",
      project5d:
        " A React multi-category fashion retail site with product filtering, best-sellers, and blog.",
      project5c: "Personal Project",
      project5time: "1 Week",

      project7t: "visible (agency/tech site)",
      project7d:
        "  A dark-themed React creative agency portfolio with services, features, pricing, and FAQ sections.",
      project7c: "Personal Project",
      project7time: "1 Week",

      projects: "Projects",
      mrw: "My Recent Work",
      Education: "Education",
      Services: "Services",
      MySkillsr: "My Skills",
    },
    tr: {
      aboutMe: "Hakkımda",
      resume: "Özgeçmiş",
      services: "Hizmetler",
      portfolio: "Portfolyo",
      blog: "Blog",
      contact: "İletişim",
      hi: "Merhaba, Ben Muhammed",
      techlonogies:
        "React ve Laravel kullanarak hızlı, ölçeklenebilir ve kullanıcı odaklı web uygulamaları geliştiriyorum. Performans ve temiz tasarıma güçlü bir şekilde odaklanarak, fikirleri modern teknolojilerle gerçek dijital ürünlere dönüştürüyorum. Bu teknolojiler şunları içerir: ",

      junior: "Junior",
      wad: "Web & Uygulama Geliştiricisi",
      am: "& Daha Fazlası",
      downloadmycv: "CV'yi İndir",
      ye: "Yıllık Tecrübe",
      pc: "Tamamlanan Proje",
      hc: "Mutlu Müşteri",
      aw: "Kazanılan Ödül",
      MySkillsb: "İhtiyaçlarınıza uygun ",
      MySkillsb2: "çözümler üretiyorum.",
      sc1: "Kullanıcı dostu ve görsel olarak çekici arayüzler tasarlıyorum. Kullanılan teknolojiler: ",
      sc1_2: " ve React gibi modern framework'ler.",
      sc2: "SQL ve NoSQL teknolojileri ile veritabanları tasarlıyor ve yönetiyorum. Örneğin: ",
      sc2_2: " ve ",
      sc3: "Ön yüz ve arka yüz sistemleri arasında kesintisiz iletişim sağlamak için oluşturulan ve entegre edilen: ",
      sc3_2: ".",
      sc4: "Kusursuz bir kullanıcı deneyimi sunmak için web uygulamalarını maksimum hız ve performans için optimize ediyorum. Uzmanlık alanı: ",
      sc5: "İşletmenizin ihtiyaçlarına uygun olarak ölçeklenebilir ve güvenli ödeme çözümleri geliştiriyorum. Kullanılanlar: ",
      sc5_2: ".",
      sc6: "Kullanıcı deneyimini geliştirmek ve iş akışlarını otomatikleştirmek için yapay zeka özelliklerini entegre ediyorum.",
      scb1: "Web ve Uygulama Geliştirme",
      scb2: "Veritabanı Yönetimi",
      scb3: "API Geliştirme",
      scb4: "Performans Optimizasyonu",
      scb5: "E-ticaret Çözümleri",
      scb6: "Yapay Zeka Entegrasyonu",
      MySkillsson1: "Yeni projeler ",
      MySkillsson2: "almak ",
      MySkillsson3:
        "ve işbirliği yapmak için heyecanlıyım. Fikirleriniz hakkında konuşalım. ",
      MySkillsson4: "Bana ulaşın!",
      MySkills: "Yeteneklerim",
      Experience: "Deneyim",
      yo: "Yıllık ",
      passion: "Tutkuyla ",
      fpt: "yazılım geliştirme",
      present: "Günümüz",
      sse: "Junior Yazılım Mühendisi",
      list1:
        "Performansı optimize eden ve kullanıcı deneyimini geliştiren ölçeklenebilir web uygulamaları geliştirdim.",
      list2:
        "Temel işlevselliği geliştirmek için modern algoritmalar ve teknikler entegre ettim.",
      list3:
        "Yeni özellikleri sorunsuz bir şekilde entegre etmek için çapraz fonksiyonlu ekiplerle çalıştım.",
      code_art: "Code_Art (öğrenim platformu)",
      project1d:
        "HTML, CSS, JavaScript ve modern framework'leri kapsayan React tabanlı web geliştirme öğrenim platformu.",
      project1c: "Kişisel Proje",
      project1time: "2 Hafta",

      project2t: " Eiser (moda e-ticaret)",
      project2d:
        " Dinamik ürün listelemeleri ve sorunsuz alışveriş deneyimi (UX) sunan React tabanlı moda e-ticaret mağazası.",
      project2c: "Kişisel Proje",
      project2time: "4 Hafta",

      project3t: "Ajans/Teknoloji sitesi",
      project3d:
        " Hizmetleri, portfolyoyu, fiyatlandırmayı ve ekip bölümlerini sergileyen React tabanlı ajans açılış sayfası.",
      project3c: "Kişisel Proje",
      project3time: "1 Hafta",

      project4t: " Kiddy (çocuk giyim)",
      project4d:
        " Eğlenceli UI ve sezonluk koleksiyon ekranları ile React tabanlı çocuk giyim ve oyuncak mağazası.",
      project4c: "Kişisel Proje",
      project4time: "1 Hafta",

      project5t: "Linea (moda mağazası)",
      project5d:
        " Ürün filtreleme, en çok satanlar ve blog içeren React tabanlı çok kategorili moda perakende sitesi.",
      project5c: "Kişisel Proje",
      project5time: "1 Hafta",

      project7t: "visible (ajans/teknoloji sitesi)",
      project7d:
        " Hizmetler, özellikler, fiyatlandırma ve SSS bölümlerine sahip koyu temalı React tabanlı yaratıcı ajans portfolyosu.",
      project7c: "Kişisel Proje",
      project7time: "1 Hafta",

      projects: "Projeler",
      mrw: "Son Çalışmalarım",
      Education: "Eğitim",
      Services: "Hizmetler",
      MySkillsr: "Yeteneklerim",
    },
    ar: {
      aboutMe: "نبذة عني",
      resume: "السيرة الذاتية",
      services: "الخدمات",
      portfolio: "معرض الأعمال",
      blog: "المدونة",
      contact: "اتصل بي",
      hi: "مرحباً، أنا محمد",
      techlonogies:
        "أقوم ببناء تطبيقات ويب سريعة وقابلة للتطوير وتركز على المستخدم باستخدام React و Laravel. مع التركيز القوي على الأداء والتصميم الواضح، أقوم بتحويل الأفكار إلى منتجات رقمية حقيقية باستخدام التقنيات الحديثة مثل ",

      junior: "مبتدئ (Junior)",
      wad: "مطور ويب وتطبيقات",
      am: "والمزيد",
      downloadmycv: "تحميل السيرة الذاتية",
      ye: "سنوات خبرة",
      pc: "مشاريع منجزة",
      hc: "عملاء سعداء",
      aw: "جوائز مكتسبة",
      MySkillsb: "بناء حلول ",
      MySkillsb2: "مصممة خصيصاً لتلبية احتياجاتك.",
      sc1: "تصميم واجهات جذابة بصرياً وسهلة الاستخدام باستخدام ",
      sc1_2: " وأطر العمل الحديثة مثل React.",
      sc2: "تصميم وإدارة قواعد البيانات باستخدام تقنيات SQL و NoSQL مثل ",
      sc2_2: " و ",
      sc3: "بناء ودمج ",
      sc3_2: " لتمكين التواصل السلس بين أنظمة الواجهة الأمامية والخلفية.",
      sc4: "تحسين تطبيقات الويب للحصول على أقصى سرعة وأداء لتقديم تجربة مستخدم خالية من العيوب. إتقان في ",
      sc5: "تطوير حلول دفع آمنة وقابلة للتطوير من أجل ",
      sc5_2: " ومصممة خصيصاً لاحتياجات عملك.",
      sc6: "دمج ميزات الذكاء الاصطناعي لتعزيز تجربة المستخدم وأتمتة سير العمل.",
      scb1: "تطوير الويب والتطبيقات",
      scb2: "إدارة قواعد البيانات",
      scb3: "تطوير واجهات برمجة التطبيقات (API)",
      scb4: "تحسين الأداء",
      scb5: "حلول التجارة الإلكترونية",
      scb6: "دمج الذكاء الاصطناعي",
      MySkillsson1: "متحمس لتولي ",
      MySkillsson2: "مشاريع جديدة ",
      MySkillsson3: "والتعاون. دعنا نتحدث عن أفكارك. ",
      MySkillsson4: "تواصل معي!",
      MySkills: "مهاراتي",
      Experience: "الخبرة",
      yo: "سنوات من ",
      passion: "الشغف ",
      fpt: "في تطوير البرمجيات",
      present: "في الوقت الحاضر",
      sse: "مهندس برمجيات مبتدئ",
      list1:
        "تطوير تطبيقات ويب قابلة للتطوير، وتحسين الأداء، وتعزيز تجربة المستخدم.",
      list2: "دمج الخوارزميات والتقنيات الحديثة لتعزيز الوظائف الأساسية.",
      list3: "التعاون مع فرق متعددة التخصصات لدمج الميزات الجديدة بسلاسة.",
      code_art: "Code_Art (منصة تعليمية)",
      project1d:
        "منصة تعليمية لتطوير الويب مبنية على React تغطي HTML و CSS و JavaScript وأطر العمل الحديثة.",
      project1c: "مشروع شخصي",
      project1time: "أسبوعان",

      project2t: " Eiser (تجارة الأزياء الإلكترونية)",
      project2d:
        " واجهة متجر تجارة إلكترونية للأزياء مبنية على React مع قوائم منتجات ديناميكية وتجربة تسوق سلسة.",
      project2c: "مشروع شخصي",
      project2time: "٤ أسابيع",

      project3t: "موقع وكالة/تكنولوجيا",
      project3d:
        " صفحة هبوط لوكالة مبنية على React تعرض الخدمات، معرض الأعمال، الأسعار، وأقسام الفريق.",
      project3c: "مشروع شخصي",
      project3time: "أسبوع واحد",

      project4t: " Kiddy (ملابس أطفال)",
      project4d:
        " متجر ملابس وألعاب أطفال مبني على React مع واجهة مستخدم ممتعة وعروض مجموعات موسمية.",
      project4c: "مشروع شخصي",
      project4time: "أسبوع واحد",

      project5t: "Linea (متجر أزياء)",
      project5d:
        " موقع بيع بالتجزئة للأزياء متعدد الفئات مبني على React مع تصفية المنتجات، والأكثر مبيعاً، والمدونة.",
      project5c: "مشروع شخصي",
      project5time: "أسبوع واحد",

      project7t: "visible (موقع وكالة/تكنولوجيا)",
      project7d:
        " معرض أعمال لوكالة إبداعية مبني على React بمظهر داكن مع أقسام الخدمات، الميزات، الأسعار، والأسئلة الشائعة.",
      project7c: "مشروع شخصي",
      project7time: "أسبوع واحد",

      projects: "المشاريع",
      mrw: "أعمالي الأخيرة",
      Education: "التعليم",
      Services: "الخدمات",
      MySkillsr: "مهاراتي",
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
          {/* <Education EducationRef={EducationRef} /> */}
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
