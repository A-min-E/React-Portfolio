import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import HTTPApi from "i18next-http-backend";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Header Component
        hello: "Hello I'm",
        job: "Fullstack-Developer",
        godown: "Scroll Down",
        cv: "Download My CV",
        tk: "Let's Talk",

        //About Component
        know: "Get To Know",
        me: "About Me",
        exp: "Experience",
        expNbr: "3+ Years Working",
        cln: "Clients",
        clnNbr: "20+ Worldwide",
        proj: "Projects",
        projNbr: "40+ Completed",
        textAbout:
          "I'm a Web Developer with a vast experience in the field, I have worked in different field with companies and small businesses, that allowed me to understand and master the need of the market",

        //Experience Component
        skl: "What Skills I Have",
        mexp: "My Experience",
        frntdev: "Frontend Development",
        bckdev: "Backend Development",
        exper: "Experienced",
        inter: "Intermediate",

        //Services Component
        ofr: "What I Offer",
        sers: "Services",
        udesg: "UI/UX Design",
        udesgtxt1: "Strategy",
        udesgtxt2: "Scope",
        udesgtxt3: "Structure",
        udesgtxt4: "Skeleton",
        udesgtxt5: "Surface",
        webd: "Web Development",
        webdtxt1: "Analysis",
        webdtxt2: "programming",
        webdtxt3: "deployment",
        webdtxt4: "maintenance",
        webdtxt5: "review",

        //Portfolio Component
        wrkres: "My Recent Work",
        title1: "Job portal application",
        title2: "Ecommerce Clothes shop",
        title3: "Demo3",
        title4: "Demo4",
        title5: "Demo5",
        title6: "Demo6",
        gthb: "https://github.com/A-min-E",

        //Testimonials Component
        clnrev: "Review from clients",
        testim: "Testimonials",
        revw1:
          "He was very responsive and provided helpful advice throughout the process. Highly recommend!",
        revw2:
          "His attention to detail and excellent customer service made the experience a pleasure. I highly recommend John for any web development needs.",
        revw3:
          "He understood my needs and was able to provide a website that was user-friendly, visually appealing and met my requirements. I would definitely recommend John for any web development needs.",
        revw4:
          "His expertise, professionalism and attention to detail were instrumental in creating a website that truly reflects my professional goals. I highly recommend John as a web developer.",

        //Contact Component
        gettch: "Get In Touch",
        ctncme: "Contact Me",
        mail: "Email",
        sndmsg: "Send a message",
        yrnme: "Your Full Name",
        yrmail: "Your Email",
        yrmsg: "Your Message",

        //Footer Component
        contc: "Contact",
        quoat: "Mohamed Amine WISSAR Website. All rights reserved.",
      },
    },
    de: {
      translation: {
        // Header Component
        hello: "Hallo ich bin",
        job: "Fullstack-Entwickler",
        godown: "Runterscrollen",
        cv: "CV herunterladen",
        tk: "Lass uns reden",
        know: "Get To Know",

        //About Component
        know: "Kennenlernen",
        me: "Über mich",
        exp: "Erfahrung",
        expNbr: "2+ Jahre arbeiten",
        cln: "Kunden",
        clnNbr: "Über 20 weltweit",
        proj: "Projekte",
        projNbr: "40+ Abgeschlossen",
        textAbout:
          "Ich bin ein Webentwickler mit umfangreicher Erfahrung auf diesem Gebiet. Ich habe in verschiedenen Bereichen mit Unternehmen und kleinen Unternehmen zusammengearbeitet, was es mir ermöglichte, die Bedürfnisse des Marktes zu verstehen und zu meistern",

        //Experience Component
        skl: "Welche Fähigkeiten ich habe",
        mexp: "Meine Erfahrung",
        frntdev: "Frontend-Entwicklung",
        bckdev: "Backend-Entwicklung",
        exper: "Erfahren",
        inter: "Mittelstufe",

        //Services Component
        ofr: "Was ich anbiete",
        sers: "Dienstleistungen",
        udesg: "UI/UX Design",
        udesgtxt1: "Strategie",
        udesgtxt2: "Umfang",
        udesgtxt3: "Struktur",
        udesgtxt4: "Skelett",
        udesgtxt5: "Oberfläche",
        webd: "Web Entwicklung",
        webdtxt1: "Analyse",
        webdtxt2: "Programmierung",
        webdtxt3: "Einsatz",
        webdtxt4: "Wartung",
        webdtxt5: "Rezension",

        //Portfolio Component
        wrkres: "Meine aktuelle Arbeit",
        title1: "Bewerbung im Jobportal",
        title2: "E-Commerce-Bekleidungsgeschäft",
        title3: "Demo2",
        title4: "Demo4",
        title5: "Demo5",
        title6: "Demo6",

        //Testimonials Component
        clnrev: "Bewertung von Kunden",
        testim: "Referenzen",
        revw1:
          "Er war sehr reaktionsschnell und gab während des gesamten Prozesses hilfreiche Ratschläge. Sehr empfehlenswert!",
        revw2:
          "Seine Liebe zum Detail und sein exzellenter Kundenservice machten die Erfahrung zu einem Vergnügen. Ich kann John für alle Webentwicklungsanforderungen wärmstens empfehlen.",
        revw3:
          "Er verstand meine Bedürfnisse und konnte eine Website bereitstellen, die benutzerfreundlich und optisch ansprechend war und meinen Anforderungen entsprach. Ich würde John auf jeden Fall für alle Webentwicklungsanforderungen empfehlen.",
        revw4:
          "Sein Fachwissen, seine Professionalität und seine Liebe zum Detail trugen entscheidend dazu bei, eine Website zu erstellen, die meine beruflichen Ziele wirklich widerspiegelt. Ich kann John als Webentwickler wärmstens empfehlen.",

        //Contact Component
        gettch: "In Kontakt kommen",
        ctncme: "Kontaktiere mich",
        mail: "Email",
        sndmsg: "Eine Nachricht schicken",
        yrnme: "Ihr vollständiger Name",
        yrmail: "Ihr E-Mail",
        yrmsg: "Ihre Nachricht",

        //Footer Component
        contc: "Kontakt",
        quoat: "Mohamed Amine WISSAR-Website. Alle Rechte vorbehalten.",
      },
    },
  },
  lng: "en",
});

export default i18next;
