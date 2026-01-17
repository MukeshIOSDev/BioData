export interface TranslationData {
    personalDetails: {
        name: string;
        tagline: string;
        dateOfBirthLabel: string;
        ageLabel: string;
        timeOfBirthLabel: string;
        placeOfBirthLabel: string;
        rashiLabel: string;
        nakshatraLabel: string;
        gotraLabel: string;
        heightLabel: string;
        weightLabel: string;
        complexionLabel: string;
        bloodGroupLabel: string;
        dietLabel: string;
        educationLabel: string;
        currentPositionLabel: string;
        companyLabel: string;
        annualSalaryLabel: string;
        age: string;
        height: string;
        education: string;
        placeOfBirth: string;
        languageLabel: string;
        phoneLabel: string;
        instagramLabel: string;
        languages: string;
        complexion: string;
        diet: string;
    };
    about: {
        title: string;
        content: string;
    };
    hobbies: {
        title: string;
        list: string[];
    };
    gallery: {
        title: string;
        subtitle: string;
        categories: {
            family: string;
            formal: string;
            traditional: string;
            lifestyle: string;
            travel: string;
        }
        images: Array<{
            alt: string;
            categoryKey: string;
        }>;
    };
    partner: {
        title: string;
        subtitle: string;
        ageRange: string;
        height: string;
        education: string;
        workingPreference: string;
        familyValues: string;
        location: string;
        labels: {
            ageRange: string;
            height: string;
            education: string;
            workingPreference: string;
            familyValues: string;
            location: string;
        }
    };
    family: {
        title: string;
        background: string;
        membersTitle: string;
        headers: {
            relation: string;
            name: string;
            profession: string;
        }
        members: Array<{
            relation: string;
            name: string;
            profession: string;
            mobile?: string;
            description: string;
        }>;
    };
    educationWork: {
        title: string;
        educationTitle: string;
        workTitle: string;
        labels: {
            degree: string;
            institution: string;
            role: string;
            company: string;
            location: string;
            experience: string;
        }
        educationDetails: Array<{
            degree: string;
            field: string;
            institution: string;
            duration: string;
        }>;
        workDetails: {
            currentRole: string;
            company: string;
            location: string;
            experience: string;
            description: string;
        };
    };
    address: {
        title: string;
        currentLabel: string;
        permanentLabel: string;
    };
    contact: {
        title: string;
        subtitle: string;
        whatsappButton: string;
        whatsappMessage: string;
        callFamily: string;
    };
    navigation: {
        personal: string;
        about: string;
        gallery: string;
        family: string;
        contact: string;
    };
    seo: {
        title: string;
        description: string;
        keywords: string;
    };
    pdf: {
        download: string;
        filename: string;
    };
    footer: {
        copyright: string;
        madeWith: string;
    };
}

export const translations: Record<'en' | 'or', TranslationData> = {
    en: {
        personalDetails: {
            name: "Mukesh Behera",
            tagline: "Looking for a Life Partner | Family-Oriented | Caring & Supportive",
            dateOfBirthLabel: "Date of Birth",
            ageLabel: "Age",
            timeOfBirthLabel: "Time of Birth",
            placeOfBirthLabel: "Place of Birth",
            rashiLabel: "Rashi",
            nakshatraLabel: "Nakshatra",
            gotraLabel: "Gotra",
            heightLabel: "Height",
            weightLabel: "Weight",
            complexionLabel: "Complexion",
            bloodGroupLabel: "Blood Group",
            dietLabel: "Diet",
            educationLabel: "Education",
            currentPositionLabel: "Current Position",
            companyLabel: "Company",
            annualSalaryLabel: "Annual Salary",
            languageLabel: "Languages",
            phoneLabel: "Phone",
            instagramLabel: "Instagram",
            age: "26 Years",
            height: "5 feet 8 inches",
            education: "BTech – Computer Science",
            placeOfBirth: "Surat, Gujarat",
            languages: "Odia, Hindi, English, Gujarati",
            complexion: "Wheatish",
            diet: "Vegetarian",
        },
        about: {
            title: "About Me",
            content: "I am a simple, caring, and family-oriented person who believes in traditional values while embracing modern thinking. Born and raised with strong moral values, I respect elders and cherish family bonds deeply. I completed my BTech in Computer Science and am currently working as a Sr. Software Developer (Remote) at Contractor Plus, which is based in Mumbai, Maharashtra. I am currently living in Surat, Gujarat, where I enjoy a fulfilling career that allows me to balance professional growth with family life. In my free time, I love spending quality time with family, watching movies, exploring new places, learning new things, and engaging in fitness and wellness activities. I believe in honest communication, mutual respect, and building a life together based on trust and understanding.",
        },
        hobbies: {
            title: "Hobbies & Interests",
            list: [
                "Spending time with family",
                "Watching movies",
                "Traveling & exploring new places",
                "Learning new things",
                "Fitness and wellness activities",
                "Listening music",
                "Reading",
                "Cooking occasionally",
            ],
        },
        gallery: {
            title: "Photo Gallery",
            subtitle: "A glimpse into my life, family moments, and cherished memories",
            categories: {
                family: "Family",
                formal: "Formal",
                traditional: "Traditional",
                lifestyle: "Lifestyle",
                travel: "Travel",
            },
            images: [
                { alt: "Formal wear at a special event", categoryKey: "formal" },
                { alt: "Outdoor photo with sunglasses", categoryKey: "lifestyle" },
                { alt: "Professional look in formal suit", categoryKey: "formal" },
                { alt: "Casual outing in bright daylight", categoryKey: "lifestyle" },
                { alt: "Evening casual style", categoryKey: "lifestyle" },
                { alt: "Lifestyle mirror selfie", categoryKey: "lifestyle" },
                { alt: "Outdoor portrait in nature", categoryKey: "lifestyle" },
                { alt: "Shopping mall visit with a smile", categoryKey: "lifestyle" },
            ]
        },
        partner: {
            title: "Partner Preferences",
            subtitle: "Looking for a kind, understanding, and emotionally mature partner who values mutual respect, honesty, and long-term commitment. Someone who can balance family responsibilities with personal growth and believes in open communication and togetherness.\n\nA partner who believes in maintaining a healthy and active lifestyle, values fitness, wellness, and overall well-being would be appreciated. The intent is to build a supportive, respectful, and happy life together with shared values and understanding.",
            ageRange: "20 - 25 Years",
            height: "5'0\" - 5'6\"",
            education: "Graduate or above",
            workingPreference: "Working or Non-working",
            familyValues: "Moderate / Traditional",
            location: "Odisha / Gujarat",
            labels: {
                ageRange: "Age Range",
                height: "Height",
                education: "Education",
                workingPreference: "Working Preference",
                familyValues: "Family Values",
                location: "Location",
            }
        },
        family: {
            title: "Family Details",
            background: "We are a close-knit, middle-class family from Odisha, currently settled in Gujarat. Our family believes in traditional values, education, and mutual respect. We celebrate all festivals together and maintain strong bonds with our extended family. Father is a Textile Production Supervisor by profession and mother is a loving homemaker who takes care of the family. My younger brother is unmarried and works as a Software Engineer. We believe in simple living, high thinking, and value relationships above all.",
            membersTitle: "Family Members",
            headers: {
                relation: "Relation",
                name: "Name",
                profession: "Profession",
            },
            members: [
                {
                    relation: "Father",
                    name: "Shyam Ghan Behera",
                    profession: "Textile Production Supervisor",
                    mobile: "8866307697",
                    description: "Loving and supportive father who has always guided us with wisdom.",
                },
                {
                    relation: "Mother",
                    name: "Sukanti Behera",
                    profession: "Homemaker",
                    mobile: "9979158709",
                    description: "The heart of our family, caring and nurturing.",
                },
                {
                    relation: "Brother",
                    name: "Amit Behera",
                    profession: "Software Engineer",
                    description: "Younger brother, unmarried, working in IT sector.",
                },
            ],
        },
        educationWork: {
            title: "Education & Career",
            educationTitle: "Education",
            workTitle: "Current Position",
            labels: {
                degree: "Degree",
                institution: "Institution",
                role: "Role",
                company: "Company",
                location: "Location",
                experience: "Experience",
            },
            educationDetails: [
                {
                    degree: "Bachelor of Engineering",
                    field: "Computer Science",
                    institution: "Prime Institute of Engineering and Technology",
                    duration: "2016 - 2020",
                },
            ],
            workDetails: {
                currentRole: "Sr. Software Developer (Remote)",
                company: "Contractor Plus",
                location: "Mumbai, Maharashtra",
                experience: "5+ Years in IT Industry",
                description: "Stable career with good growth prospects. Balanced work-life environment.",
            },
        },
        address: {
            title: "Address Details",
            currentLabel: "Current Address",
            permanentLabel: "Native Place",
        },
        contact: {
            title: "Contact Information",
            subtitle: "Feel free to reach out to us for more information",
            whatsappButton: "Contact on WhatsApp",
            whatsappMessage: "Jai Jagannath. I am interested in Mukesh's biodata. Can we discuss further?",
            callFamily: "Call Family",
        },
        navigation: {
            personal: "Personal",
            about: "About",
            gallery: "Gallery",
            family: "Family",
            contact: "Contact",
        },
        seo: {
            title: "Mukesh Behera | Official Biodata",
            description: "Official biodata of Mukesh Behera - Sr. Software Developer (Remote) from Odisha, currently settled in Surat, Gujarat. Looking for a family-oriented life partner.",
            keywords: "Mukesh Behera, Biodata, Marriage, Software Engineer, Odisha, Surat, Gujarat",
        },
        pdf: {
            download: "Download PDF",
            filename: "Mukesh_Behera_Biodata.pdf",
        },
        footer: {
            copyright: "© 2026 Mukesh Behera. All rights reserved.",
            madeWith: "Made with ❤️ for Family",
        }
    },
    or: {
        personalDetails: {
            name: "ମୁକେଶ ବେହେରା",
            tagline: "ଏକ ଜୀବନ ସାଥୀ ସନ୍ଧାନରେ | ପରିବାର ପ୍ରତି ସମର୍ପିତ | ଯତ୍ନଶୀଳ ଏବଂ ସହାୟକ",
            dateOfBirthLabel: "ଜନ୍ମ ତାରିଖ",
            ageLabel: "ବୟସ",
            timeOfBirthLabel: "ଜନ୍ମ ସମୟ",
            placeOfBirthLabel: "ଜନ୍ମ ସ୍ଥାନ",
            rashiLabel: "ରାଶି",
            nakshatraLabel: "ନକ୍ଷତ୍ର",
            gotraLabel: "ଗୋତ୍ର",
            heightLabel: "ଉଚ୍ଚତା",
            weightLabel: "ଓଜନ",
            complexionLabel: "ରଙ୍ଗ",
            bloodGroupLabel: "ରକ୍ତ ବର୍ଗ",
            dietLabel: "ଖାଦ୍ୟପେୟ",
            educationLabel: "ଶିକ୍ଷା",
            currentPositionLabel: "ବର୍ତ୍ତମାନର ପଦବୀ",
            companyLabel: "କମ୍ପାନୀ",
            annualSalaryLabel: "ବାର୍ଷିକ ଦରମା",
            languageLabel: "ଭାଷା",
            phoneLabel: "ଫୋନ୍",
            instagramLabel: "ଇନଷ୍ଟାଗ୍ରାମ (Instagram)",
            age: "୨୬ ବର୍ଷ",
            height: "୫ ଫୁଟ ୮ ଇଞ୍ଚ",
            education: "ବି.ଟେକ୍ - କମ୍ପ୍ୟୁଟର ସାଇନ୍ସ",
            placeOfBirth: "ସୁରଟ, ଗୁଜୁରାଟ",
            languages: "ଓଡ଼ିଆ, ହିନ୍ଦୀ, ଇଂରାଜୀ, ଗୁଜୁରାଟୀ",
            complexion: "ଉଜ୍ଜ୍ୱଳ ଶ୍ୟାମଳ",
            diet: "ଶାକାହାରୀ",
        },
        about: {
            title: "ମୋ ବିଷୟରେ",
            content: "ମୁଁ ଜଣେ ସରଳ, ଯତ୍ନଶୀଳ ଏବଂ ପରିବାର ପ୍ରତି ସମର୍ପିତ ବ୍ୟକ୍ତି ଯିଏ ପାରମ୍ପରିକ ମୂଲ୍ୟବୋଧ ଏବଂ ଆଧୁନିକ ଚିନ୍ତାଧାରାରେ ବିଶ୍ୱାସ କରେ | ମୁଁ ମୋର ବି.ଟେକ୍ (BTech) କମ୍ପ୍ୟୁଟର ସାଇନ୍ସରେ ସମାପ୍ତ କରିଛି ଏବଂ ବର୍ତ୍ତମାନ ମୁମ୍ବାଇରେ ଥିବା କଣ୍ଟ୍ରକ୍ଟର ପ୍ଲସ (Contractor Plus) କମ୍ପାନୀରେ ଜଣେ ସିନିୟର ସଫ୍ଟୱେର୍ ଡେଭଲପର୍ (Sr. Software Developer - Remote) ଭାବରେ କାର୍ଯ୍ୟ କରୁଛି | ବର୍ତ୍ତମାନ ମୁଁ ସୁରଟ, ଗୁଜୁରାଟରେ ରହୁଛି | ମୋର ଖାଲି ସମୟରେ ମୁଁ ପରିବାର ସହିତ ସମୟ ବିତାଇବାକୁ, ଚଳଚ୍ଚିତ୍ର ଦେଖିବାକୁ, ନୂତନ ସ୍ଥାନ ଭ୍ରମଣ କରିବାକୁ, ନୂତନ ଜିନିଷ ଶିଖିବାକୁ ଏବଂ ଫିଟନେସ୍ ତଥା ସ୍ୱାସ୍ଥ୍ୟ କାର୍ଯ୍ୟକଳାପରେ ସମୟ ବିତାଇବାକୁ ଭଲ ପାଏ | ମୁଁ ସଚ୍ଚୋଟ ଯୋଗାଯୋଗ, ପାରସ୍ପରିକ ସମ୍ମାନ ଏବଂ ବିଶ୍ୱାସ ତଥା ବୁଝାମଣା ଉପରେ ଆଧାରିତ ଏକାଠି ଜୀବନ ଗଠନ କରିବାରେ ବିଶ୍ୱାସ କରେ |",
        },
        hobbies: {
            title: "ରୁଚି ଏବଂ ସଉକ",
            list: [
                "ପରିବାର ସହିତ ସମୟ ବିତାଇବା",
                "ଚଳଚ୍ଚିତ୍ର ଦେଖିବା",
                "ନୂତନ ସ୍ଥାନ ଭ୍ରମଣ କରିବା",
                "ନୂତନ ଜିନିଷ ଶିଖିବା",
                "ଫିଟନେସ୍ ଏବଂ ସ୍ୱାସ୍ଥ୍ୟ କାର୍ଯ୍ୟକଳାପ",
                "ସଙ୍ଗୀତ ଶୁଣିବା",
                "ପଢିବା",
                "କେବେ କେବେ ରୋଷେଇ କରିବା",
            ],
        },
        gallery: {
            title: "ଫଟୋ ଗ୍ୟାଲେରୀ",
            subtitle: "ମୋ ଜୀବନର କିଛି ଝଲକ, ପାରିବାରିକ ମୁହୂର୍ତ୍ତ ଏବଂ ସ୍ମୃତି",
            categories: {
                family: "ପରିବାର",
                formal: "ଆନୁଷ୍ଠାନିକ",
                traditional: "ପାରମ୍ପରିକ",
                lifestyle: "ଜୀବନଶୈଳୀ",
                travel: "ଭ୍ରମଣ",
            },
            images: [
                { alt: "ଏକ ବିଶେଷ କାର୍ଯ୍ୟକ୍ରମରେ ଆନୁଷ୍ଠାନିକ ପୋଷାକ", categoryKey: "formal" },
                { alt: "ଚଷମା ସହିତ ଏକ ସୁନ୍ଦର ବାହାର ଫଟୋ", categoryKey: "lifestyle" },
                { alt: "ଆନୁଷ୍ଠାନିକ ସୁଟ୍‌ରେ ଏକ ସୁନ୍ଦର ଲୁକ୍", categoryKey: "formal" },
                { alt: "ଦିନ ସମୟରେ ଏକ ସୁନ୍ଦର ବାହାର ଫଟୋ", categoryKey: "lifestyle" },
                { alt: "ସନ୍ଧ୍ୟା ସମୟର ଏକ ସୁନ୍ଦର କାଜୁଆଲ୍ ଲୁକ୍", categoryKey: "lifestyle" },
                { alt: "ଜୀବନଶୈଳୀ ଦର୍ପଣ ସେଲଫି", categoryKey: "lifestyle" },
                { alt: "ବାହାରେ ଏକ ପ୍ରାକୃତିକ ପରିବେଶରେ ଫଟୋ", categoryKey: "lifestyle" },
                { alt: "ସପିଂ ମଲ୍ ପରିଦର୍ଶନ ଏକ ସୁନ୍ଦର ହସ ସହିତ", categoryKey: "lifestyle" },
            ]
        },
        partner: {
            title: "ଜୀବନସାଥୀ ପସନ୍ଦ",
            subtitle: "ଏକ ଦୟାଳୁ, ବୁଝିବା ଶକ୍ତି ଥିବା ଏବଂ ଭାବପ୍ରବଣତା ଦୃଷ୍ଟିରୁ ପରିପକ୍ୱ ଜୀବନସାଥୀ ସନ୍ଧାନରେ ଅଛୁ, ଯିଏ ପାରସ୍ପରିକ ସମ୍ମାନ, ସଚ୍ଚୋଟତା ଏବଂ ଦୀର୍ଘକାଳୀନ ପ୍ରତିବଦ୍ଧତାକୁ ଗୁରୁତ୍ୱ ଦିଅନ୍ତି | ଏପରି ଜଣେ ବ୍ୟକ୍ତି ଯିଏ ପାରିବାରିକ ଦାୟିତ୍ୱ ସହିତ ବ୍ୟକ୍ତିଗତ ଅଭିବୃଦ୍ଧିର ସନ୍ତୁଳନ ରକ୍ଷା କରିପାରିବେ ଏବଂ ଖୋଲାଖୋଲି ଯୋଗାଯୋଗ ତଥା ଏକତାରେ ବିଶ୍ୱାସ କରନ୍ତି | \n\nଜଣେ ଜୀବନସାଥୀ ଯିଏ ଏକ ସୁସ୍ଥ ଏବଂ ସକ୍ରିୟ ଜୀବନଶୈଳୀ ବଜାୟ ରଖିବାରେ ବିଶ୍ୱାସ କରନ୍ତି, ଫିଟନେସ୍, ସ୍ୱାସ୍ଥ୍ୟ ଏବଂ ସାମଗ୍ରିକ କଲ୍ୟାଣକୁ ଗୁରୁତ୍ୱ ଦିଅନ୍ତି, ସେମାନଙ୍କୁ ପ୍ରାଧାନ୍ୟ ଦିଆଯିବ | ଆମର ମୂଳ ଉଦ୍ଦେଶ୍ୟ ହେଉଛି ସମାନ ମୂଲ୍ୟବୋଧ ଏବଂ ବୁଝାମଣା ସହିତ ଏକ ସହାୟକ, ସମ୍ମାନଜନକ ଏବଂ ଆନନ୍ଦଦାୟକ ଯୁଗ୍ମ ଜୀବନ ଗଠନ କରିବା |",
            ageRange: "୨୦ - ୨୫ ବର୍ଷ",
            height: "୫'୦\" - ୫'୬\"",
            education: "ସ୍ନାତକ (Graduate) କିମ୍ବା ଅଧିକ",
            workingPreference: "କିଛି ଅସୁବିଧା ନାହିଁ",
            familyValues: "ମଧ୍ୟମ / ପାରମ୍ପାରିକ",
            location: "ଓଡ଼ିଶା / ଗୁଜୁରାଟ",
            labels: {
                ageRange: "ବୟସ ସୀମା",
                height: "ଉଚ୍ଚତା",
                education: "ଶିକ୍ଷା",
                workingPreference: "କାର୍ଯ୍ୟ ସ୍ଥିତି",
                familyValues: "ପାରିବାରିକ ମୂଲ୍ୟବୋଧ",
                location: "ସ୍ଥାନ",
            }
        },
        family: {
            title: "ପାରିବାରିକ ବିବରଣୀ",
            background: "ଆମେ ଓଡ଼ିଶାର ଏକ ମଧ୍ୟବିତ୍ତ ପରିବାର, ବର୍ତ୍ତମାନ ଗୁଜୁରାଟରେ ରହୁଛୁ | ଆମ ପରିବାର ପାରମ୍ପରିକ ମୂଲ୍ୟବୋଧ, ଶିକ୍ଷା ଏବଂ ପାରସ୍ପରିକ ସମ୍ମାନରେ ବିଶ୍ୱାସ କରେ | ପିତା ଜଣେ ଟେକ୍ସଟାଇଲ୍ ପ୍ରଡକ୍ସନ୍ ସୁପରଭାଇଜର ଏବଂ ମାତା ଜଣେ ଗୃହିଣୀ | ମୋର ସାନ ଭାଇ ଜଣେ ସଫ୍ଟୱେର୍ ଇଞ୍ଜିନିୟର ଭାବରେ କାର୍ଯ୍ୟ କରେ |",
            membersTitle: "ପରିବାର ସଦସ୍ୟ",
            headers: {
                relation: "ସମ୍ପର୍କ",
                name: "ନାମ",
                profession: "ପେଶା",
            },
            members: [
                {
                    relation: "ପିତା",
                    name: "ଶ୍ୟାମ ଘନ ବେହେରା",
                    profession: "ଟେକ୍ସଟାଇଲ୍ ପ୍ରଡକ୍ସନ୍ ସୁପରଭାଇଜର",
                    mobile: "8866307697",
                    description: "ଜଣେ ସ୍ନେହୀ ଏବଂ ସହାୟକ ପିତା ଯିଏ ସବୁବେଳେ ଆମକୁ ମାର୍ଗଦର୍ଶନ କରିଛନ୍ତି |",
                },
                {
                    relation: "ମାତା",
                    name: "ସୁକାନ୍ତି ବେହେରା",
                    profession: "ଗୃହିଣୀ",
                    mobile: "9979158709",
                    description: "ଆମ ପରିବାରର ହୃଦୟ, ଯତ୍ନଶୀଳ ଏବଂ ସମର୍ପିତ |",
                },
                {
                    relation: "ଭ୍ରାତା",
                    name: "ଅମିତ ବେହେରା",
                    profession: "ସଫ୍ଟୱେର୍ ଇଞ୍ଜିନିୟର",
                    description: "ସାନ ଭାଇ, ଅବିବାହିତ, ଆଇଟି (IT) କ୍ଷେତ୍ରରେ କାର୍ଯ୍ୟ କରନ୍ତି |",
                },
            ],
        },
        educationWork: {
            title: "ଶିକ୍ଷା ଏବଂ କ୍ୟାରିଅର୍",
            educationTitle: "ଶିକ୍ଷା",
            workTitle: "ବର୍ତ୍ତମାନର ପଦବୀ",
            labels: {
                degree: "ଡିଗ୍ରୀ",
                institution: "ଶିକ୍ଷାନୁଷ୍ଠାନ",
                role: "ଭୂମିକା",
                company: "କମ୍ପାନୀ",
                location: "ସ୍ଥାନ",
                experience: "ଅଭିଜ୍ଞତା",
            },
            educationDetails: [
                {
                    degree: "ବ୍ୟାଚଲର ଅଫ୍ ଇଞ୍ଜିନିୟରିଂ (B.E)",
                    field: "କମ୍ପ୍ୟୁଟର ସାଇନ୍ସ",
                    institution: "ପ୍ରାଇମ ଇନଷ୍ଟିଚ୍ୟୁଟ୍ ଅଫ୍ ଇଞ୍ଜିନିୟରିଂ ଏଣ୍ଡ ଟେକ୍ନୋଲୋଜି",
                    duration: "୨୦୧୬ - ୨୦୨୦",
                },
            ],
            workDetails: {
                currentRole: "ସିନିୟର ସଫ୍ଟୱେର୍ ଡେଭଲପର୍ (Sr. Software Developer - Remote)",
                company: "କଣ୍ଟ୍ରାକ୍ଟର ପ୍ଲସ (Contractor Plus)",
                location: "ମୁମ୍ବାଇ, ମହାରାଷ୍ଟ୍ର",
                experience: "୫+ ବର୍ଷର ଆଇଟି ଅଭିଜ୍ଞତା",
                description: "ଭଲ ଅଭିବୃଦ୍ଧି ସମ୍ଭାବନା ସହିତ ସ୍ଥିର କ୍ୟାରିଅର୍ | ସନ୍ତୁଳିତ କାର୍ଯ୍ୟ-ଜୀବନ ପରିବେଶ |",
            },
        },
        address: {
            title: "ଠିକଣା ବିବରଣୀ",
            currentLabel: "ବର୍ତ୍ତମାନର ଠିକଣା",
            permanentLabel: "ସ୍ଥାୟୀ ବାସସ୍ଥାନ",
        },
        contact: {
            title: "ପରିବାର ସହିତ ଯୋଗାଯୋଗ",
            subtitle: "ଅଧିକ ସୂଚନା ପାଇଁ ଆମ ସହିତ ଯୋଗାଯୋଗ କରିବାକୁ ମୁକ୍ତ ମନେ କରନ୍ତୁ",
            whatsappButton: "ହ୍ୱାଟ୍ସଆପ୍ (WhatsApp) ରେ ଯୋଗାଯୋଗ କରନ୍ତୁ",
            whatsappMessage: "ଜୟ ଜଗନ୍ନାଥ | ମୁଁ ମୁକେଶଙ୍କ ବାୟୋଡାଟା ପ୍ରତି ଆଗ୍ରହୀ | ଆମେ ଅଧିକ ଆଲୋଚନା କରିପାରିବା କି?",
            callFamily: "ପରିବାରକୁ କଲ୍ କରନ୍ତୁ",
        },
        navigation: {
            personal: "ବ୍ୟକ୍ତିଗତ",
            about: "ମୋ ବିଷୟରେ",
            gallery: "ଫଟୋ ଗ୍ୟାଲେରୀ",
            family: "ପରିବାର",
            contact: "ଯୋଗାଯୋଗ",
        },
        seo: {
            title: "ମୁକେଶ ବେହେରା | ଅଫିସିଆଲ୍ ବାୟୋଡାଟା",
            description: "ମୁକେଶ ବେହେରାଙ୍କ ଅଫିସିଆଲ୍ ବାୟୋଡାଟା - ଓଡ଼ିଶାର ଜଣେ ସିନିୟର ସଫ୍ଟୱେର୍ ଡେଭଲପର୍ (Sr. Software Developer - Remote), ବର୍ତ୍ତମାନ ସୁରଟ, ଗୁଜୁରାଟରେ ଅବସ୍ଥାପିତ | ଏକ ପରିବାର ପ୍ରତି ସମର୍ପିତ ଜୀବନ ସାଥୀ ସନ୍ଧାନରେ |",
            keywords: "ମୁକେଶ ବେହେରା, ବାୟୋଡାଟା, ବିବାହ, ସଫ୍ଟୱେର୍ ଇଞ୍ଜିନିୟର, ଓଡ଼ିଶା, ସୁରଟ, ଗୁଜୁରାଟ",
        },
        pdf: {
            download: "ପିଡିଏଫ (PDF) ଡାଉନଲୋଡ୍ କରନ୍ତୁ",
            filename: "Mukesh_Behera_Biodata_Odia.pdf",
        },
        footer: {
            copyright: "© ୨୦୨୬ ମୁକେଶ ବେହେରା | ସର୍ବସତ୍ତ୍ୱ ସୁରକ୍ଷିତ |",
            madeWith: "ପରିବାର ପାଇଁ ❤️ ସହିତ ପ୍ରସ୍ତୁତ",
        }
    }
};
