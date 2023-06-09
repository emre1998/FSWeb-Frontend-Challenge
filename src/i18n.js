import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      karanlik: "KARANLIK MOD",
      aydinlik: "AYDINLIK MOD",
      footerText: "Birlikte bir sonraki ürününüz üzerinde çalışalım.",
      navSkills: "Beceriler",
      navProjects: "Projeler",
      navContactMe: "İletişim",
      introTitle: "Yaratıcı düşünce minimalist yaklaşım",
      introText:
        "Merhaba, ben Emre Can. Full stack geliştirici ve Elektrik Elektronik mühendisiyim. Ön yüz geliştirme konusunda heyecan verici projelerde yer almak için buradayım. Mühendislik yaklaşımıyla disiplinli ve özverili bir çalışma arkadaşı arıyorsanız, mutlaka tanışmalıyız.",
      navContact: "İletişim",
      skillsTitle: "Beceriler",
      profileTitle: "Profil",
      birthday: "Doğum Tarihi",
      residence: "Yaşadığı Yer",
      preferredRole: "Tercih Ettiği Rol",
      frontendDeveloper: "Ön Uç Geliştirici",
      education: "Eğitim geçmişi",
      aboutMe: "Hakkımda",
      aboutMeText:
        "Kariyerim boyunca Full Stack Web Geliştiricisi olarak, eğitim ve deneyimlerimle donanımlı bir geliştirici olmaya çaşıştım. Özellikle Workintech eğitim kurumundaki yoğun program, bilgi ve becerilerimi önemli ölçüde ilerletme fırsatı sağladı. 900 saatten fazla süren bu eğitimde gerçek dünya projelerinde aktif olarak yer aldım ve sürekli olarak kendimi geliştirme imkanı buldum.Yazılım geliştirmeye olan tutkum, kullanıcıların unutulmaz deneyimler yaşayacağı web uygulamaları oluşturma hedefimle birleşti. Görsel estetiğe olan hassasiyetim ve detaylara verdiğim önem, projelerimde yaratıcı ve etkileyici çözümler sunmama yardımcı oldu. JavaScript, React.js ve Node.js gibi teknolojilerdeki becerilerimi geliştirerek, etkileşimli ve dinamik web siteleri oluşturma konusunda uzmanlaştım. Ayrıca, endüstri trendlerini takip etmek ve kendimi sürekli güncel tutmak için çaba sarf ettim.Benim için her proje, yeni bir yolculuk ve öğrenme fırsatıdır. Yaratıcılığım, teknik uzmanlığım ve sürekli öğrenme azmim, her projeye benzersiz bir perspektif getirmeme yardımcı olur. İşbirliği yapmaktan keyif alırım ve takım arkadaşlarımla birlikte zorlukların üstesinden gelmek için heyecan duyarım. İlerlemek için her zaman yeni ve heyecan verici meydan okumaları arzuluyorum.",
      javascriptText:
        "JavaScript, web geliştirmede çok yönlü ve güçlü bir programlama dilidir. Ben bir frontend geliştirici olarak, JavaScript'in potansiyelini tam anlamıyla kullanarak etkileyici ve duyarlı kullanıcı arayüzleri oluşturma konusunda uzmanım. Değişkenler, fonksiyonlar ve nesneler gibi JavaScript'in temel kavramlarını derinlemesine anlayarak, Belgeler Nesne Modeli'ni (DOM) sorunsuz bir şekilde manipüle edebilir ve karmaşık mantığı uygulayarak kullanıcı deneyimini geliştirebilirim. JavaScript çerçevelerini ve kütüphanelerini kullanarak, ölçeklenebilir ve çapraz platformlu uygulamaları etkin bir şekilde geliştirebilir ve web üzerinde fikirleri hayata geçirebilirim. JavaScript'in dinamik yapısı ve geniş ekosistemi, benim için sınırsız yaratıcılık ve inovasyon fırsatları sunuyor.",
      reactText:
        "React.js, kullanıcı arayüzleri oluşturmak için yaygın olarak kullanılan bir JavaScript kütüphanesidir ve ben, React.js'in yeteneklerini kullanarak sağlam ve verimli frontend uygulamaları geliştirme konusunda yeteneklerimi geliştirdim. React.js ile, karmaşık kullanıcı arayüzü bileşenlerini yeniden kullanılabilir ve modüler bir şekilde kodlayarak sürdürülebilirlik ve ölçeklenebilirlik sağlayabiliyorum. Ayrıca, React'in sanal DOM (Virtual DOM) özelliğini kullanarak gereksiz yeniden-render işlemlerini minimize edebilir ve uygulamaların genel performansını artırabilirim. React.js ile olan deneyimim, dinamik, etkileşimli ve görsel açıdan çekici kullanıcı arayüzleri oluşturma konusunda beni yetenekli hale getiriyor ve olağanüstü bir kullanıcı deneyimi sunuyor. React.js, frontend geliştirme sürecindeki verimliliğimi artırırken, güçlü ve esnek bir araç seti sunarak projelerime yenilikçi çözümler getirmemi sağlıyor.",
      nodeJsText:
        "Node.js, güçlü bir çalışma ortamı olarak sunucu tarafında JavaScript geliştirmeye olanak sağlar. Ben bir frontend geliştirici olarak, Node.js konusundaki yetkinliğim, tam yığın uygulamalar oluşturmanın yanı sıra web projelerinin performansını optimize etme yeteneğimi artırır. Node.js ile asenkron görevleri sorunsuz bir şekilde yönetebilir, RESTful API'ler geliştirebilir ve çeşitli veritabanlarıyla entegrasyon sağlayabilirim. Bu da ölçeklenebilir, gerçek zamanlı ve veri odaklı uygulamalar oluşturmamı mümkün kılar.Node.js paketleri ve çerçevelerinin geniş ekosistemini kullanarak, zengin özelliklere sahip web uygulamaları geliştirebilir ve sunucu ile istemci arasındaki iletişimi sorunsuz hale getirerek kullanıcılara kesintisiz deneyimler sunabilirim. Node.js'in esnekliği ve performansı, veri yönetimi, hızlı işlemler ve genişletilebilirlik gibi alanlarda bana avantaj sağlar. Bu sayede projelerimi daha verimli bir şekilde yönetebilir ve kullanıcıların ihtiyaçlarını karşılayacak güvenilir ve etkili çözümler sunabilirim.",
      projectsTitle: "Projeler",
      viewSite: "Siteye Git",
      StarTitle: "Star Wars Api",
      PizzaTitle: "Pizza Sipariş Uygulaması",
      FilmsTitle: "Film İzleme Listesi",
      ShoppingTitle: "Alışveriş Sepeti",
      TaskTitle: "Görev Takip Listesi",
      FriendsTitle: "Arkadaşlar Veritabanı",
      PizzaText:
        " React kullanılarak geliştirilen bu etkileşimli web sayfası, Axios, Router, Cypress ve Yup gibi temel araçları başarıyla kullanma becerimi gösteriyor. İşlevselliği ve estetiği sorunsuz bir şekilde birleştiren pizza sipariş sayfası, müşterilerin sadece birkaç tıklama ile pizzalarını özelleştirebilecekleri ve sipariş verebilecekleri keyifli bir kullanıcı deneyimi sunuyor. Şık tasarımı ve akıcı gezinmesiyle bu proje, etkileyici ve duyarlı arayüzler oluşturma konusundaki uzmanlığımı göstermektedir.",
      FilmsText:
        "Redux Film Projesi, React redux ve React Router ile oluşturulmuş şık ve profesyonel bir uygulama. Geniş ve ödüllü kült film koleksiyonumuzu keşfederek hoş vakit geçirin,favorilerinizi ekleyin ve ayrıntılı film bilgilerini görüntüleyin. Verimli durum yönetimi için Redux kullanılarak geliştirilen bu proje, sorunsuz ve hızlı bir kullanıcı deneyimi sunuyor. Film dünyasına dalın ve keyifli bir gezinti deneyimi yaşayın.",
      StarText:
        "Star Wars Api projesi,React ve api ile oluşturulmuş sade ve etkileyici bir star wars karakter dökümantasyonunu tek tıkla önünnüze seren kullanışlı bir uygulama.Etkileyici sinematik evreni ve geniş karakter kadrosuyla mest eden star wars'ın tüm detaylarına api den çektiğimiz stored datalarımız ile daha rahat erişebilir ve serinin yeni filmlerini küçük bir tekrar sonrası izleyebilirsiniz.",
      ShoppingText:
        "Alışveriş Sepeti Uygulaması, React ve React Router ile geliştirilen dinamik bir web uygulaması. Ürünlere göz atın ve sepete ekleyerek sorunsuz bir alışveriş deneyimi yaşayın.",
      TaskText:
        "React Görev İzleme Listesi projesi,yoğun iş yaşamının getirdiği karmaşayı ve verimsizliği önlemeyi vaat eden sade ve etkili bir uygulama.Proje React hook form kullanılarak state güncellemesi,yup validasyonu ve error state işlemlerini tek kaleme indirgeyerek daha sade bir kod geliştirme süreci ile geliştirildi.Date-fns kütüpahnesi kullanılan proje son teslim tarihi imkanı sunarak iş akışınıza olumlu etki yapmayı hedefliyor.",
      FriendsText:
        "React ve React Router ile oluşturulan sosyal ağ uygulamasıdır. Arkadaşlarınızla iletişimde kalın ve arkadaş listenizi kolaylıkla yönetin. Uygulama, kullanıcıların kimlik doğrulama yapabileceği bir giriş işlevselliği sunar. Başarılı bir girişten sonra kullanıcılar arkadaş listelerini görüntüleyebilir, yeni arkadaşlar ekleyebilir ve her arkadaş hakkında detaylı bilgilere erişebilir. Uygulama, giriş token'ını yerel depolama kullanarak saklayarak, oturumlar arasında sorunsuz bir deneyim sağlar.",
    },
  },

  en: {
    translation: {
      karanlik: "DARK MODE",
      aydinlik: "LIGHT MODE",
      footerText: "Let’s work together on your next product.",
      navSkills: "Skills",
      navProjects: "Projects",
      navContactMe: "Contact!",
      introTitle: "Creative thinker  Minimalism lover",
      introText:
        "Hello, I'm Emre Can. I am a Full stack developer and an Electrical and Electronics engineer. I'm here to be a part of exciting projects in front-end development. If you are looking for a disciplined and dedicated colleague with an engineering mindset, we should definitely get to know each other.",
      navContact: "Contact",
      profileTitle: "Profile",
      birthday: "Birthday",
      residence: "Residence",
      preferredRole: "Preferred Role",
      frontendDeveloper: "Frontend Developer",
      education: "Education",
      skillsTitle: "Skills",
      aboutMe: "About Me",
      aboutMeText:
       "Throughout my career as a Full Stack Web Developer, I have strived to become a skilled developer through education and experience. In particular, the intensive program at Workintech has provided me with significant opportunities to enhance my knowledge and skills. Being actively involved in real-world projects during this program, which lasted for over 900 hours, has allowed me to continuously improve myself. My passion for software development has merged with my goal of creating unforgettable experiences for users through web applications. My attention to visual aesthetics and focus on details have helped me deliver creative and impactful solutions in my projects. By enhancing my skills in technologies such as JavaScript, React.js, and Node.js, I have specialized in building interactive and dynamic websites. Additionally, I have made efforts to stay updated with industry trends and keep myself continuously updated. For me, every project is a new journey and learning opportunity. My creativity, technical expertise, and constant thirst for learning enable me to bring a unique perspective to each project. I enjoy collaborating and feel excited to overcome challenges with my team members. I always crave new and exciting challenges to move forward.",
      javascriptText:
        "JavaScript is a versatile and powerful programming language in web development. As a frontend developer, I specialize in creating impressive and responsive user interfaces by fully harnessing the potential of JavaScript. By deeply understanding fundamental concepts such as variables, functions, and objects in JavaScript, I can seamlessly manipulate the Document Object Model (DOM) and implement complex logic to enhance the user experience. By utilizing JavaScript frameworks and libraries, I can effectively develop scalable and cross-platform applications and bring ideas to life on the web. The dynamic nature and extensive ecosystem of JavaScript provide me with limitless opportunities for creativity and innovation.",
      reactText:
        "React.js is a popular JavaScript library for building user interfaces, and I have honed my skills in leveraging its capabilities to create robust and efficient frontend applications. With React.js, I can efficiently break down complex UI components into reusable and modular code, ensuring maintainability and scalability. By utilizing React's virtual DOM, I can optimize performance by minimizing unnecessary re-rendering and enhancing the overall responsiveness of applications. My experience in working with React.js enables me to create dynamic, interactive, and visually appealing user interfaces that provide an exceptional user experience.",
      nodeJsText:
        "React.js is a widely used JavaScript library for building user interfaces, and I have honed my skills in developing robust and efficient frontend applications using React.js. With React.js, I can create reusable and modular code for complex UI components, ensuring sustainability and scalability. Additionally, by leveraging React's virtual DOM feature, I can minimize unnecessary re-rendering and enhance overall performance of the applications. My experience with React.js enables me to build dynamic, interactive, and visually appealing user interfaces, providing an exceptional user experience. React.js enhances my productivity in the frontend development process and offers a powerful and flexible toolset to bring innovative solutions to my projects.",  
      projectsTitle: "Projects",
      viewSite: "View Site",
      PizzaTitle: "Pizza Order App",
      FilmsTitle: "Movies App",
      StarTitle: "Star Wars Api",
      ShoppingTitle: "Shopping Cart",
      TaskTitle: "Task Tracking List",
      FriendsTitle: "Friends Database",

      PizzaText:
        "Introducing my pizza ordering page, a captivating project showcased in my frontend developer portfolio. Developed using React, this interactive webpage demonstrates my proficiency in utilizing essential tools such as Axios, Router, Cypress, and Yup. Seamlessly blending functionality and aesthetics, the pizza ordering page offers a delightful user experience, allowing customers to effortlessly customize their pizza selections and place orders with just a few clicks. With its sleek design and smooth navigation, this project exemplifies my expertise in creating engaging and responsive interfaces.",
      FilmsText:
        "Redux Movie Project is a sleek and professional application built with React Redux and React Router. Explore our extensive and award-winning collection of cult films, have a great time, add your favorites, and view detailed movie information. Developed using Redux for efficient state management, this project offers a seamless and fast user experience. Dive into the world of films and enjoy a delightful browsing experience.",
      TaskText:
        "The React Task Tracker project is a simple and efficient application that promises to prevent the chaos and inefficiency brought by a busy work life. The project is developed using React Hook Form, reducing state updates, Yup validation, and error state handling into a streamlined code development process. With the use of the Date-fns library, the project offers the possibility of setting deadlines, aiming to have a positive impact on your workflow.",
      ShoppingText:
        "Introducing my E-commerce App project, a dynamic web application built with React and React Router. Browse products and add to cart for a seamless shopping experience.",
      StarText:
        "The Star Wars API project is a sleek and impressive application built with React and an API that presents a comprehensive documentation of Star Wars characters with just a click. It's a handy tool that allows easy access to the fascinating cinematic universe and extensive character roster of Star Wars through the stored data retrieved from the API. You can conveniently explore all the details and even catch up on the latest films in the series after a quick recap.", 
      FriendsText:
        "A social networking application built with React and React Router. Stay connected with your friends and manage your friend list effortlessly. The app features a login functionality where users can authenticate and access their friend list. Upon successful login, users can view their friends, add new friends, and view detailed information about each friend. The app utilizes local storage to store the login token, ensuring a seamless experience across sessions.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
