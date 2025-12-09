'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    id: {
        // Hero
        'hero.available': 'Tersedia untuk bekerja',
        'hero.role': 'Saya adalah',
        'hero.description': 'Fokus pada Java Backend Development dengan pengalaman dalam routing ESB dan komunikasi socket TCP/IP.',
        'hero.viewProjects': 'Lihat Proyek',
        'hero.contact': 'Hubungi Saya',
        'hero.scroll': 'Scroll untuk eksplorasi',
        'hero.location': 'Berbasis di Indonesia',

        // About
        'about.label': 'Tentang',
        'about.headline': 'Saya adalah Backend Developer yang fokus membangun sistem yang stabil dan efisien',
        'about.text1': 'Berpengalaman dalam menangani logika sistem yang kompleks seperti routing ESB dan komunikasi socket TCP/IP.',
        'about.text2': 'Saya adalah pekerja keras yang tekun, mampu bekerja mandiri maupun memimpin tim. Saat ini saya menempuh pendidikan di SMKS Wikrama Bogor, jurusan Pengembangan Perangkat Lunak dan Gim (PPLG) dengan fokus pada Backend Development.',
        'about.certs': 'Sertifikasi',
        'about.started': 'Mulai Coding',
        'about.experience': 'Bulan Pengalaman',
        'about.certifications': 'Sertifikasi',

        // Projects
        'projects.label': 'Pengalaman & Proyek',
        'projects.title': 'Karya Terpilih',
        'projects.viewDetails': 'Lihat Detail',

        // Skills
        'skills.label': 'Tech Stack',
        'skills.title': 'Keahlian & Teknologi',

        // Footer
        'footer.cta': 'Mari bekerja sama',
        'footer.navigation': 'Navigasi',
        'footer.socials': 'Sosial Media',
        'footer.contact': 'Kontak',
        'footer.localTime': 'Waktu Lokal',
    },
    en: {
        // Hero
        'hero.available': 'Available for work',
        'hero.role': 'I am a',
        'hero.description': 'Focused on Java Backend Development with experience in ESB routing and TCP/IP socket communication.',
        'hero.viewProjects': 'View Projects',
        'hero.contact': 'Get in Touch',
        'hero.scroll': 'Scroll to explore',
        'hero.location': 'Based in Indonesia',

        // About
        'about.label': 'About',
        'about.headline': 'I am a Backend Developer focused on building stable and efficient systems',
        'about.text1': 'Experienced in handling complex system logic such as ESB routing and TCP/IP socket communication.',
        'about.text2': 'I am a hardworking and diligent person, capable of working independently or leading a team. Currently studying at SMKS Wikrama Bogor, majoring in Software and Game Development (PPLG) with a focus on Backend Development.',
        'about.certs': 'Certifications',
        'about.started': 'Started Coding',
        'about.experience': 'Months Exp',
        'about.certifications': 'Certifications',

        // Projects
        'projects.label': 'Experience & Projects',
        'projects.title': 'Selected Work',
        'projects.viewDetails': 'View Details',

        // Skills
        'skills.label': 'Tech Stack',
        'skills.title': 'Skills & Technologies',

        // Footer
        'footer.cta': "Let's work together",
        'footer.navigation': 'Navigation',
        'footer.socials': 'Socials',
        'footer.contact': 'Contact',
        'footer.localTime': 'Local Time',
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="language-switcher">
            <button
                className={`lang-btn ${language === 'id' ? 'active' : ''}`}
                onClick={() => setLanguage('id')}
            >
                ID
            </button>
            <span className="lang-divider">/</span>
            <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
            >
                EN
            </button>
        </div>
    );
}
