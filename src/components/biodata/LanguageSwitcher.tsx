import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'or' : 'en');
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-gold hover:text-gold-light hover:bg-gold/10 transition-colors"
        >
            <Globe className="w-4 h-4" />
            <span className="font-medium">
                {language === 'en' ? 'Odia' : 'English'}
            </span>
        </Button>
    );
};

export default LanguageSwitcher;
